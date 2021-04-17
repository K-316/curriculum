// 問1

let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
for (let i = 0; i < 7; i++) {
  if (numbers[i] % 2 === 0) {
      console.log(numbers[i] + 'は偶数です');
  }
}

// 問2
class  Car {
  constructor(gass,num){
    this.gass = gass;
    this.num = num;
  }
  getNumGas(){
    console.log(`ガソリンは${this.gass}です。ナンバーは${this.num}です`);
  }
}

let toyota = new Car(20.5, 1234);
toyota.getNumGas();
