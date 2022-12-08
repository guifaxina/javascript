let animal = {
  eats: true,
  name: 'animal',
  greetings() {
    console.log("Hello", this.name)
  }
};

let rabbit = {
  name: 'rabbit',
  jumps: true
}

rabbit.__proto__ = animal; 

console.log(rabbit.greetings())