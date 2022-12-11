class Person {
  constructor(
    private name: string,
    private age: number,
    private address: { street: string; number: number; reference?: string }
  ) {}

  introduceItself(): void {
    console.log(`Hi i'm ${this.name}`)
  }

  
}


const jackson = new Person("Jackson", 19, {
  street: "Wall Street",
  number: 69,
  reference: " post Wendy's ",
});

console.log(jackson.introduceItself());

// const userLogin = (x, y, z) => {
//   return x + y + z
// }

// console.log(userLogin(1,2,3))