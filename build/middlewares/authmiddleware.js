"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.verifyToken = exports.userauthToken = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1["default"].config();
var TOKEN = process.env.TOKEN;
var userauthToken = function (user) {
    return jsonwebtoken_1["default"].sign({ user: user }, TOKEN);
};
exports.userauthToken = userauthToken;
var verifyToken = /** @class */ (function () {
    function verifyToken() {
    }
    verifyToken.prototype.verifyjwt = function (req, res, next) {
        if (!req.headers.authorization) {
            res.status(401).json({ error: 'Acces denied' });
            return false;
        }
        try {
            var authToken = req.headers.authorization.split(' ')[1];
            console.log(authToken);
            jsonwebtoken_1["default"].verify(authToken, TOKEN);
            next();
        }
        catch (err) {
            res.status(401).json('Acces denied');
            return err;
        }
    };
    return verifyToken;
}());
exports.verifyToken = verifyToken;
// if (!req.headers.authorization) {
//     res.status(401).json({ error: 'Acces denied' });
//     return false;
//   }
// try{
//         
