"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productStore = void 0;
//@ts-ignore
const database_1 = __importDefault(require("../database"));
class productStore {
    //index
    async index() {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql_command = "SELECT * FROM products; ";
            const result = await conn.query(sql_command);
            conn.release();
            const data = result.rows;
            return data;
        }
        catch (err) {
            throw new Error(`cannot get ${err}`);
        }
    }
    //create
    async create(data) {
        const { productname, price, category } = data;
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql_command = "INSERT INTO products(productName,price,category) VALUES($1,$2,$3) RETURNING *;";
            const result = await conn.query(sql_command, [productname, price, category]);
            const data = result.rows[0];
            conn.release();
            return data;
        }
        catch (err) {
            throw new Error(`Failed to create product: ${err}`);
        }
    }
    //products by category
    async category(name) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql_command = "SELECT * FROM products WHERE category = ($1)";
            const result = await conn.query(sql_command, [name]);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`No product with category named ${name}: ${err}`);
        }
    }
    //show
    async show(id) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql_command = "SELECT * FROM products WHERE id=($1)";
            const result = await conn.query(sql_command, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Cannot get product with id ${id} ${err}`);
        }
    }
    //delete
    async delete(id) {
        try {
            //@ts-ignore
            const conn = await database_1.default.connect();
            const sql_command = 'DELETE FROM products WHERE id =($1) RETURNING id;';
            const result = await conn.query(sql_command, [id]);
            const delproduct = result.rows[0];
            conn.release();
            return delproduct;
        }
        catch (err) {
            throw new Error(`Failed to delete product. ${err}`);
        }
    }
}
exports.productStore = productStore;
