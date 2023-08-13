let calculator = {
};

function read(a, b) {

  this.a = a;
  this.b = b;

  return {
    a: this.a,
    b: this.b
  };
}


function sum() {
  return this.a + this.b;

};

function mul() {
  return this.a * this.b;
}

calculator.read = read;
calculator.sum = sum;
calculator.mul = mul;



// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
