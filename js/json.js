 // JSON - JavaScript Object Natotion 
 const user = {
    id:1,
    name: "towfique",
    job: "actor"
 }
 const stringified = JSON.stringify(user)
//  console.log(user);
//  console.log(stringified);
const shop = {
    owner: "ali hasan",
    address: {
        street: "kochukhet voot er goli",
        city: "ranbir",
        country: "BD"
    },
    products: ["laptop","mic","monitor","keyboard"],
    revenue: 45000,
    isOpen: true
 }

 console.log(shop);
 
 const shopJson = JSON.stringify(shop);
 const shopObj = JSON.parse(shopJson)
 console.log(shopJson);

 console.log(shopObj);
 

 
 
 
 