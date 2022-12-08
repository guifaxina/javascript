class Person {
  constructor(name, age, gender) {
    this.name = name 
    this.age = age 
    this.gender = gender
  }
  greetings() {
    console.log(`Hello i'm ${this.name}`);
  }
}

const jhon = new Person("Jhon", 19, "Doe");
console.log(jhon);

const pedro = {
  name: "Pedro",
  __proto__: jhon,
};
console.log(pedro)

const samara = new Person('Samara', 19, 'Mulher')

console.log(pedro.greetings());
// console.log(__dirname.includes("home")); 