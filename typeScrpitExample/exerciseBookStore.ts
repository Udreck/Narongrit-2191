interface Book{
    title:string;
    genre:'fiction'|'non-fiction'|'educational';
    price:number;
}
const books : Book[] = [
    {title:"The Great Gatsby",genre:"fiction",price:320},
    {title:"War and Peace",genre:"fiction",price:250},
    {title:"Economic 101",genre:"educational",price:480},
    {title:"In Cold Blood",genre:"non-fiction",price:300},
    {title:"The Cather in the Rye",genre:"fiction",price:400}
];
function filterBookByPrice(Books:Book[],minprice:number):Book[]{
    return Books.filter(book=>book.price>minprice&&book.genre=="fiction");
}
function discountBook(Books:Book[]):Book[]{
    return Books.map(book=>({...book,price:book.price*0.9}));
}
let filterBook = filterBookByPrice(books,300);
let discountBooks = discountBook(filterBook);
//console.log(filterBook);
console.log(discountBooks);