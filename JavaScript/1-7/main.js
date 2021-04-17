//Humanクラスを作成
class Taiyaki {
  constructor(taste) {
    this.taste = taste;
  }
  eat() {
    console.log(`中身は${this.taste}です`);
  }
}

let anko = new Taiyaki("あんこ");
let cream = new Taiyaki("クリーム");
let cheese = new Taiyaki("チース");

anko.eat();
cream.eat();
cheese.eat();