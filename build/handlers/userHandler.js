"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userHandler = void 0;
const user_1 = require("../models/user");
const authmiddleware_1 = require("../middlewares/authmiddleware");
const user = new user_1.userStore();
class userHandler {
    async index(req, res) {
        const alluser = await user.index();
        return res.json(alluser);
    }
    async create(req, res) {
        const data = req.body;
        const newuser = await user.create(data);
        res.status(201);
        res.json(newuser);
        //res.json(userauthToken(newuser))
    }
    async show(req, res) {
        const id = parseInt(req.params.id);
        const oneuser = await user.show(id);
        res.json(oneuser);
    }
    async signin(req, res) {
        const data = {
            username: req.body.username,
            password: req.body.password,
        };
        if (!data.username || !data.password) {
            res.status(400);
            res.send('Missing auth params');
            return false;
        }
        const auth_param = await user.signin(data.username, data.password);
        if (!auth_param) {
            return res.status(401).send(`Wrong credentials for user ${data.username}.`);
        }
        console.log('auth succed !');
        res.json((0, authmiddleware_1.userauthToken)(data.username));
    }
    async update(req, res) {
        const id = parseInt(req.body.user);
        const username = req.body.username;
        const updateuser = await user.update(username, id);
        res.status(200);
        res.json(updateuser);
    }
}
exports.userHandler = userHandler;
