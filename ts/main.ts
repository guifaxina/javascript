import Character from "./Character";
import prompt from "prompt-sync";

let keyTyped = prompt();
let option = 0;

let person = new Character("Guilherme", 100, 10);

while (option != 4) {
  console.log(`+====== Character ${person.name}======+`);
  console.log("|1. Train attack        |");
  console.log("|2. Train health        |");
  console.log("|3. Show atributtes     |");
  console.log("|4. Exit                |");
  console.log("+=======================+");

  option = +keyTyped("Press a button: ");

  switch (option) {
    case 1:
      person.trainAttack();
      break;
    case 2:
      person.trainHealth();
      break;
    case 3:
      person.showAtributtes();
    default:
      break;
  }
}
