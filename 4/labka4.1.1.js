class calculateController {
    constructor(x,a,b)
    {
        this.x = x;
        this.a = a;
        this.b = b;
        this.result;
    }

calculate() { 
if(this.x < 4)
{
this.result = Math.cos(this.x)
}

if(this.x == 4)
{
this.result = Math.pow(this.x, 3) - (this.b * this.x) + 1; 
}

if(this.x > 4 && this.x < 7)
{   
if(this.a * this.x < 0)  throw Error("Помилка: підкореневий вираз від’ємний");
this.result = Math.sqrt(this.a * this.x);
}
if(this.x >= 7) throw Error("Помилка: функція на заданому проміжку не визначена") 
}

showResult() {
console.log(this.result);
}
}

function main() {
let calc = new calculateController(2,6,3);
calc.calculate();
calc.showResult();
}

main();
