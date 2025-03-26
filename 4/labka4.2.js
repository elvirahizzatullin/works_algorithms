class calculateController{
    constructor(m)
    {
     this.m = m;   
    }

    calculate() {
    let n;
    let result;
    if(this.m >= 1 && typeof this.m == 'number' && Number.isInteger(this.m))
    {
        for(n = 1; n <= this.m; n++)
        {
            result = (Math.log(n + 1)) / (5 * Math.pow(n,2) + 3);
            console.log(result);
        }   
    }
    else throw Error("Неправильне значення m");
    }
}

function main() {
    let calc = new calculateController(5);
    calc.calculate();
}
main();