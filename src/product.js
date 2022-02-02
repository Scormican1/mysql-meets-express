// mysql12 is a wrapper for the mysql12

const mysql = require("mysql2");

// connect to the data base

const connection = mysql.createConnection({
  host: "34.67.146.233",
  user: "root",
  password: "BuildingSoFlo",
  database: "Commerce",
});

// const query ='SELECT * FROM Products';

// create a query control c to close connection

// connection.query(query, (err, results, fields) => {
// // check to seeif there is an error
//     if(err){
//         console.log(err)
//     }
//     console.log(results)

// });
//now lets call the function
// i want to execute promise then query
// comes back as array bc i am asking through [err,results,fields] built into a []
const getAllProducts = async () => {
    const query = `SELECT * From Products`;
    const[results, fields] = await connection.promise().query(query)


   
//return the results and console log it
console.log(results);

return results;
}
//call the method to see what happens
// getAllProducts()


const creatProducts = async (product) =>{

const insetQuery =`INSERT INTO Products (Description, SKU, UserID)
VALUES ('${product.description}', '${product.sku}',${product.userId})` 

const [results, fields] = await connection.promise().query(insetQuery)

console.log(results)

return results

}
creatProducts({
description: 'Sara new Product',
sku:'Sara1234',
userId: 1
});



//end the connection or control C
connection.end();

