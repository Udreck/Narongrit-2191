enum ProductStatus{
    Available = "Available",
    OutOfStock = "Out Of Stock",
    Discontinued = "Discontinued"
}
let products:any[]=[
    {name:"Laptop", status: ProductStatus.Available, price: 1200},
    {name:"Smartphone", status: ProductStatus.OutOfStock, price: 700},
    {name:"Tablet", status: ProductStatus.Discontinued, price: 300}
]
function displayProductDetail(products: any[]) {
    products.forEach((product) =>{
        console.log(`Product:${product.name}, status: ${product.status}, Price: ${product.price}`)
    });
  }
  displayProductDetail(products);