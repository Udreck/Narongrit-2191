var people = [
    { name: "John White", age: 30 },
    { name: "Marry Rose", age: 25 },
    { name: "Harry Wong", age: 35 }
];
function filterAdults(persons) {
    return persons.filter(function (person) { return person.age >= 30; });
}
var adults = filterAdults(people);
console.log(adults);
