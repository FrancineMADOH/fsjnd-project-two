"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userStore = void 0;
//@ts-ignore
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { BCRYPT_PASSWORD, SALT_ROUND, } = process.env;
class userStore {
    //index
    async index() {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql_command = "SELECT * FROM users;";
            const result = await conn.query(sql_command);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Failed to load users. ${err}`);
        }
    }
    //show
    async show(id) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql_command = "SELECT * FROM users WHERE id=($1);";
            //@ts-ignore
            const result = await conn.query(sql_command, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Failed to fetch user with id ${id}. ${err}`);
        }
    }
    // //create
    async create(data) {
        const { firstname, lastname, password, username } = data;
        try {
            const hashed_pw = bcrypt_1.default.hashSync(password + BCRYPT_PASSWORD, parseInt(SALT_ROUND));
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql_command = "INSERT INTO users(firstName,lastName,password,username) VALUES($1,$2,$3,$4) RETURNING *;";
            //@ts-ignore
            const result = await conn.query(sql_command, [firstname, lastname, hashed_pw, username]);
            // const data = result.rows
            conn.release();
            const data = result.rows[0];
            return data;
        }
        catch (err) {
            throw new Error(`Failed to insert new users. ${err}`);
        }
    }
    async signin(username, password) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql_command = " SELECT * FROM users WHERE username = ($1)";
            const result = await conn.query(sql_command, [username]);
            if (result.rows.length) {
                const user = result.rows[0];
                if (bcrypt_1.default.compareSync(password + BCRYPT_PASSWORD, user.password)) {
                    return user;
                }
            }
            conn.release();
            return null;
        }
        catch (err) {
            throw new Error(`Failed to signin ${err}`);
        }
    }
    async update(username, id) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql_command = "UPDATE users SET username=($1)  WHERE id = ($2) RETURNING username;";
            //@ts-ignore
            const result = await conn.query(sql_command, [username, id]);
            const data = result.rows[0];
            conn.release();
            return data;
        }
        catch (err) {
            throw new Error(`Failed to update user with id ${id}. ${err}`);
        }
    }
}
exports.userStore = userStore;
