type Product = {
    name : string;
    price : number;
    category : string;
}
let product : Product[] = [
    {name : 'Laptop',price:50000,category:'Electronic'},
    {name : 'Shirt',price:1200,category:'Apparel'},
    {name : 'Coffee Maker',price:2500,category:'Appliances'}
];
function filterProductByPrice(products:Product[],minprice:number):Product[]{
    return products.filter(product=>product.price>minprice);
}
function discountProduct(products:Product[]):Product[]{
    return products.map(product=>({...product,price:product.price*0.9}));
}
let filterProduct = filterProductByPrice(product,2000);
let discountProducts = discountProduct(filterProduct);
//console.log(filterProduct);
console.log(discountProducts);