class calculateController {
    constructor(x,a,b)
    {
        this.x = x;
        this.a = a;
        this.b = b;
        this.result;
    }

    calculate() { 
    let err = 0;
        if(this.x < 7)
        {
            if(this.x < 4)
            {
                this.result = Math.cos(this.x)
            }
            else if(this.x == 4)
            {
                this.result = Math.pow(this.x, 3) - (this.b * this.x) + 1; 
            }
            else if(this.x > 4 && this.x < 7)
            {   
                if(this.a * this.x < 0) err = 1;
                else this.result = Math.sqrt(this.a * this.x); 
            }
        }
        else err = 2
    
        switch(err) {
            case 1:
                console.log("Помилка: підкореневий вираз від’ємний")
                break;
            case 2:
                console.log("Помилка: функція на заданому проміжку не визначена")
                break;
            default:
                console.log("Все добре")
                break;
          }
        }
        
        showResult() {
        console.log(this.result);
        }
        }
        
        function main() {
        let calc = new calculateController(5,5,3);
        calc.calculate();
        calc.showResult();
        }
        
        main();
        