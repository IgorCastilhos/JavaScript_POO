const Address = require("./Address");
const Person = require("./Person");

const addr = new Address(
  "Pereira da Cunha",
  123,
  "Bairro Tal",
  "Porto Alegre",
  "RS"
);

const john = new Person("John Doe", addr);

console.log(john);
console.log(john.address.fullAddress());
