"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.userauthToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const TOKEN = process.env.TOKEN;
const userauthToken = (user) => {
    return jsonwebtoken_1.default.sign({ user }, TOKEN);
};
exports.userauthToken = userauthToken;
class verifyToken {
    verifyjwt(req, res, next) {
        if (!req.headers.authorization) {
            res.status(401).json({ error: 'Acces denied' });
            return false;
        }
        try {
            const authToken = req.headers.authorization.split(' ')[1];
            console.log(authToken);
            jsonwebtoken_1.default.verify(authToken, TOKEN);
            next();
        }
        catch (err) {
            res.status(401).json('Acces denied');
            return err;
        }
    }
}
exports.verifyToken = verifyToken;
// if (!req.headers.authorization) {
//     res.status(401).json({ error: 'Acces denied' });
//     return false;
//   }
// try{
//         
