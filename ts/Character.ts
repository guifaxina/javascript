
export default class Character {
  constructor(
    private name: string,
    private health: number,
    private attack: number
  ) {}
 
  showAtributtes(): void {
    console.log("Name: ", this.name)
    console.log("Health: ", this.health.toFixed(1))
    console.log("Attack: ", this.attack.toFixed(1))
  }

  trainAttack(): void {
    this.attack += Math.random() * 7
    this.health -= Math.random() * 6
    if (this.attack > 100) this.attack = 100;
    this.isAlive();
    this.showAtributtes();
  }

  trainHealth(): void {
    this.health += Math.random() * 3
    this.attack -= Math.random() * (3/2)
    if (this.health > 100) this.health = 100;
  }

  isAlive(): void {
    if (this.health < 0) {
      this.health = 0;
      console.log('Your health dropped to 0. You died.');
    }
  }
}
