interface Person{
    name:string;
    age:number;
}
const people: Person[]=[
    {name:"John White",age : 30},
    {name:"Marry Rose",age : 25},
    {name:"Harry Wong",age : 35}
]
function filterAdults(persons:Person[]):Person[]{
    return persons.filter(person=>person.age>=30);
}
const adults = filterAdults(people);
console.log(adults);