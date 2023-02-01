"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryStore = void 0;
//@ts-ignore
const database_1 = __importDefault(require("../database"));
class categoryStore {
    //create 
    async create(data) {
        const { category } = data;
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql_command = "INSERT INTO categories(category) VALUES($1);";
            const result = await conn.query(sql_command, [category]);
            const data = result.rows[0];
            return data;
        }
        catch (err) {
            throw new Error(`Failed to insert new category. ${err}`);
        }
    }
    //index
    async index() {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql_command = "SELECT * FROM categories; ";
            const result = await conn.query(sql_command);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Failed to load product categories. ${err}`);
        }
    }
}
exports.categoryStore = categoryStore;
