"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderStore = void 0;
//@ts-ignore
const database_1 = __importDefault(require("../database"));
class orderStore {
    //current order by user
    async show(user) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql_command = "SELECT * FROM users INNER JOIN orders ON users.id = orders.userID WHERE users.id = ($1)";
            //@ts-ignore
            const result = await conn.query(sql_command, [user]);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Failed to fetch order for user ${user}. ${err}`);
        }
    }
    //completed orders by customer 
    async completed(user, status) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql_command = "SELECT * FROM orders INNER JOIN users ON users.id = orders.userID WHERE users.id = ($1) AND orders.status = ($2) ";
            //@ts-ignore
            const result = await conn.query(sql_command, [user, status]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Failed to fetch orders with status ${status}. ${err}`);
        }
    }
    //create orders
    async create(data) {
        const { quantity, userID, status } = data;
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql_command = "INSERT INTO orders VALUES($1,$2,$3)";
            const result = await conn.query(sql_command, [quantity, userID, status]);
            const data = result.rows[0];
            return data;
        }
        catch (err) {
            throw new Error(`Failed to create new user. ${err}`);
        }
    }
    //updates
    async update(user, quantity) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql_command = " UPDATE orders SET quantity=($1) WHERE userID=($2) ";
            const result = await conn.query(sql_command, [quantity, user]);
            const data = result.rows[0];
            return data;
        }
        catch (err) {
            throw new Error(`Failed update orders. ${err}`);
        }
    }
}
exports.orderStore = orderStore;
