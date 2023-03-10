import { userStore , User} from "../../models/user";
//@ts-ignore
import client from '../../database';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { users, indexedUsers } from "./testsData";
import _ from 'lodash';

dotenv.config();
const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;

const store = new userStore()

describe("User store model class", ()=>{

    it("Should have a create method", ()=>{
        expect(store.create).toBeDefined();
    })

    it("Should have an index method", ()=>{
        expect(store.index).toBeDefined();
    })
    it("Should have a show method", ()=>{
        expect(store.show).toBeDefined();
    })
    it("Should have a update method", ()=>{
        expect(store.update).toBeDefined();
    })
    it("Should have a signin method", ()=>{
        expect(store.signin).toBeDefined();
    });
    it("Should have a update method", ()=>{
      expect(store.update).toBeDefined();
  });
});

describe('User model method test suite', () => {
    
    it('index should return a list of all users', async () => {
      const result = await store.index();
      const partialDataResult = result.map((user) => {
        return _.pick(user, ['id', 'firstname', 'lastname','username']);
      });
      const getPartialuserPassword = result.every((user: User, index: number) => {
        return bcrypt.compareSync(users[index].password + BCRYPT_PASSWORD, user.password);
      });
  
      expect(partialDataResult).toEqual(indexedUsers);
      expect(getPartialuserPassword).toBe(true);
    });

    
    it('Create method should add a user to the database', async()=>{
      const result = await store.create({
        firstname: "Sophia",
        lastname: "Kendrick",
        username: "Sophia",
        password:"password123"
      });
      const resultUsers =_.pick(result,['id','firstname','lastname','username'])
      const matchingPw = bcrypt.compareSync('password123' + BCRYPT_PASSWORD, result.password);
      expect(matchingPw).toBe(true)
      expect(resultUsers).toEqual({
        id:3,
        firstname: "Sophia",
        lastname: "Kendrick",
        username: "Sophia",
      });
    });


    it('Get the user with the specified id', async()=>{
      const result = await store.show(1);
      //get the users without their password
      const resultUsers =  _.pick(result, ['id', 'firstname', 'lastname','username']);
      //compare the password with the store in db after hashing
      const matchingPw = bcrypt.compareSync('franca123' + BCRYPT_PASSWORD, result.password)
      expect(matchingPw).toBe(true)
      expect(resultUsers).toEqual({
        id:1,
        firstname: "Francine",
        lastname: "Madoh",
        username: "franca"
      });
    });

    it('Signin should return no user when provide the wrong username/password', async()=>{
      const result = await store.signin('franca','franca1234')

      expect(result).toEqual(null)
    });

    it('Signin should return a user when provide the right username/password', async()=>{
      const result = await store.signin('franca','franca123')
      const userResult = _.pick(result, ['id','firstname','lastname','username'])

      expect(userResult).toEqual(indexedUsers[0])
    });

    it('Update method should provide new values to the modified field', async()=>{
      const result = await store.update('LudoAban',2)    
      expect(result.username).toEqual('LudoAban')
    });
  
    afterAll(async () => {
      //@ts-ignore
      const connection = await client.connect();
      await connection.query('DELETE FROM users;');
      await connection.query('ALTER SEQUENCE users_id_seq RESTART WITH 1;');
      connection.release();
    });
  });