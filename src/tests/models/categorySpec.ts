import { categoryStore, Category } from "../../models/category";
import { categories, indexedCategories } from "./testsData";
//@ts-ignore
import client from "../../database";

const store = new categoryStore()

describe("Category store method class", () => {

  it("index method should be defined", () => {
    expect(store.index).toBeDefined();
  });

  it("Create method should be define", () => {
    expect(store.create).toBeDefined();
  });

});

describe('Category model method test suite',  () => {

  beforeAll(async () => {
    //@ts-ignore
    const conn = await client.connect();
    const sql_command = 'INSERT INTO categories(category) VALUES($1);';
    console.log(categories)

    for (const cat of categories) {
      await conn.query(sql_command, [cat.category]);

    }
    conn.release();
  });


  it('Index method return a list of category', async () => {
    const result = await store.index();
    console.log(result)
    expect(result).toEqual(indexedCategories)
  });

  
  it('Create method should add a new category to the db', async () => {
    const result = await store.create({
      //id: 3,
      category: 'Vaiselle'
    });
    console.log(result)

    expect(result).toEqual({
      id: 3,
      category: 'Vaiselle'

    })
  });
  
  afterAll(async () => {
    //@ts-ignore
    const conn = await client.connect();
    await conn.query('DROP TABLE categories;');
    await conn.query('CREATE TABLE categories(id SERIAL PRIMARY KEY,category VARCHAR(100));');
    conn.release();
  });

});







