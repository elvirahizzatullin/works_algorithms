//Напишіть алгоритм, який перевіряє, чи є дане число замінною сумою двох простих чисел (гіпотеза Гольдбаха)
class ourCheck {
Check(number) {
if(number %2 == 0 && number > 2) {
console.log("Дане число є замінною сумою двох простих чисел");
return true;
}
else {
console.log("Дане число НЕ є замінною сумою двох простих чисел");
return false;
}
}
} 

class findSimple {
    constructor(){
    this.OurCheck = new ourCheck; 
    } 

    findSimpleNum(number){
    let primeNums = new Array();
    let ifIsPrime = true;
    if(this.OurCheck.Check(number))
    { 
    for(let i = 2; i < number; i++)
    {
        for(let b = 2; b <= Math.sqrt(i); b++) 
            {
            if(i%b == 0 && i != b) {
                ifIsPrime = false;
                break;
                }
            else ifIsPrime  = true;
            }
        if(ifIsPrime) primeNums.push(i);
    }

    for(let i = 0; i < primeNums.length; i++)
    {
        for(let b = 0; b < primeNums.length; b++)
            {
                if(primeNums[i]+primeNums[b] == number)
                {
                    console.log(primeNums[i] + ' ' + primeNums[b])
                    break;
                }
            }       
    }
    } 
}      
}

function main() {
let FindSimple = new findSimple;
FindSimple.findSimpleNum(15);
}
main();