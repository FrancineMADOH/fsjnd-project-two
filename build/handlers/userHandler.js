"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userHandler = void 0;
const user_1 = require("../models/user");
const authmiddleware_1 = require("../middlewares/authmiddleware");
const user = new user_1.userStore();
class userHandler {
    async index(req, res) {
        try {
            const alluser = await user.index();
            return res.json(alluser);
        }
        catch (err) {
            console.log(err);
        }
    }
    async create(req, res) {
        try {
            const data = req.body;
            const newuser = await user.create(data);
            res.status(201);
            res.json(newuser);
        }
        catch (err) {
            console.log(err);
        }
    }
    async show(req, res) {
        try {
            const id = parseInt(req.params.id);
            const oneuser = await user.show(id);
            res.json(oneuser);
        }
        catch (err) {
            console.log(err);
        }
    }
    async signin(req, res) {
        try {
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
        catch (err) {
            console.log(err);
        }
    }
    async update(req, res) {
        try {
            const id = parseInt(req.body.user);
            const username = req.body.username;
            const updateuser = await user.update(username, id);
            res.status(200);
            res.json(updateuser);
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.userHandler = userHandler;
