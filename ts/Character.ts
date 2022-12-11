export default class Character {
  constructor(
    protected _name: string,
    protected _health: number,
    protected _attack: number
  ) {}

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  showAtributtes(): void {
    console.log("Name: ", this._name);
    console.log("Health: ", this._health.toFixed(1));
    console.log("_attack: ", this._attack.toFixed(1));
  }

  trainAttack(): void {
    this._attack += this.randomize(7);
    this._health -= this.randomize(6);
    if (this._attack > 100) this._attack = 100;
    this.isAlive();
    this.showAtributtes();
  }

  trainHealth(): void {
    this._health += this.randomize(3);
    this._attack -= this.randomize(3 / 2);
    if (this._health > 100) this._health = 100;
  }

  isAlive(): void {
    if (this._health < 0) {
      this._health = 0;
      console.log("Your health dropped to 0. You died.");
    }
  }

  private randomize(factor: number): number {
    return Math.random() * factor;
  }
}

class Warrior extends Character {
  protected _strength: number;
  protected _shield: number;

  constructor(
    _name: string,
    _health: number,
    _attack: number,
    _strength: number,
    _shield: number
  ) {
    super(_name, _health, _attack);

    this._strength = _strength;
    this._shield = _shield;
  }
}

class Templar extends Warrior {
  private _divineDamage: number;
  private _faith: number;

  constructor(
    _name: string,
    _health: number,
    _attack: number,
    _strength: number,
    _shield: number,
    _divineDamage: number,
    _faith: number
  ) {
    super(_name, _health, _attack, _strength, _shield);

    this._divineDamage = _divineDamage;
    this._faith = _faith;
  }
}

class Priest extends Character {
  private _faith: number;
  private _illuminity: number;

  constructor(
    _name: string,
    _health: number,
    _attack: number,
    _faith: number,
    _illuminity: number
  ) {
    super(_name, _health, _attack);
    this._faith = _faith;
    this._illuminity = _illuminity;
  }
}

const priest = new Priest("Papa Fco II", 1000, 20, 777, 1500);

const guievolved = new Templar("Guilherme", 2000, 500, 100, 1000, 100, 777);

console.log(guievolved, priest);
