import { User } from "../../models/user";
import { Product } from "../../models/product";
import { Order } from "../../models/order";
import { Category } from "../../models/category";
import { userauthToken, verifyToken } from "../../middlewares/authmiddleware";
import _ from 'lodash';


//Sample user data
export const users: User[] = [
    {
        
        firstname: "Francine",
        lastname: "Madoh",
        password: "franca123",
        username: "franca"
    },

    {
        firstname: "Francine",
        lastname: "Ludovic",
        password: "Ludovic",
        username: "franca"
    }

];

//add index to data
export const  indexedUsers =  users.map((user,i) =>{
    return {
        id: i + 1,
        ..._.pick(user, ['lastname', 'firstname','username'])
    }
});


//Sample product data
export const products: Product[] = [
    {
        id:1,
        productname: "Madar",
        price: 50,
        category: 1
    },

    {
        id:2,
        productname: "Neima",
        price: 100,
        category: 2,
    },

];
export const indexedProducts = products.map((product,index)=>{
    product.id = index + 1;
    return product;
});



export const catProducts = products.filter((product,i)=>{
    return product.category = 1
})

//Sample order data
export const orders: Order[] = [
    {
        id:1,
        productID: 1,
        quantity: 2,
        userID: 1,
        status: 1
    },

    {
        id:1,
        productID: 2,
        quantity: 2,
        userID: 1,
        status: 1
    },

];

export const indexedOrders = orders.map((order,i)=>{
    order.id = i+1;
    return order;
});

export const completedOrders =  orders.filter((order,i)=>{
    order.status == 1
    return order;
})

//sample category data
export const categories: Category[] = [
    {
        id:1,
        category:'food'
    },
    {
        id:2,
        category:'lessive'
    }
];

export const indexedCategories = categories.map((cat,index)=>{
    cat.id = index + 1;
    return cat;

});

//create a test token to test authentication

export const  testToken =  userauthToken({
        
    firstname: "Francine",
    lastname: "Madoh",
    password: "franca123",
    username: "franca"
});




