"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const request = (0, supertest_1.default)(server_1.default);
dotenv_1.default.config();
const token = process.env.TOKEN;
describe("Test suite for the Users enpoint ", () => {
    const user = {
        lastName: "Madoh",
        firstName: "Francine",
        password: "franca123",
        username: "franca"
    };
    let auth_token, id = 1;
    it("Get the users api index routes", async () => {
        const res = await request.get("/api/users");
        expect(res.status).toBe(200);
    });
    it("Get the  create user api route", async () => {
        const res = await request.post("/api/users").send(user);
        // @ts-ignore
        const { data } = jsonwebtoken_1.default.verify(auth_token, token);
        id = data.id;
        expect(res.status).toBe(200);
    });
    it('should get the show user api route', async (done) => {
        const res = await request.get(`/users/${id}`).set('Auth', 'auth' + auth_token);
        //.set('Authorization', 'bearer ' + token);
        expect(res.status).toBe(200);
        done();
    });
    it('Sign users with provided credentials', async () => {
        const res = await request.get(`/users/${id}`).set('Auth', 'auth' + auth_token);
        //.set('Authorization', 'bearer ' + token);
        expect(res.status).toBe(200);
    });
});
// userRouter.get("/", token.verifyjwt, methods.index )
// userRouter.post("/", token.verifyjwt ,methods.create)
// userRouter.get("/signin", token.verifyjwt , methods.signin)
// userRouter.get("/:id", token.verifyjwt, methods.show)
