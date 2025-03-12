class MakeNode {
constructor(NowValue)
{
    this.nowValue = NowValue;
    this.prevValue = null;
    this.nextValue = null;
}
}

class Node {
    constructor() {
    this.head = null;
    this.sizeN = 0;
    }

    AddNode(value) {
        if (this.head == null)
            {
            this.head = new MakeNode(value);
            this.sizeN++;
            }
        else 
            {
            let current = this.head;
            while (current.nextValue != null)
                {
                    current = current.nextValue;
                }
            current.nextValue = new MakeNode(value);
            current.nextValue.prevValue = current;
            this.sizeN++;
            }
    }

    Remove(index)
    {
        if(this.sizeN == 0) throw Error("Список порожній...")
        let size = 0;
        let current = this.head;
        if(index == 0)
        {
            current = current.nextValue;
            if(current != null) current.prevValue = null;
            this.head = current;
            this.sizeN--;
            return;
        }
        while(size != index && current.nextValue != null) 
            {
                current = current.nextValue;
                size++;
            } 
        if(size == index){
            current.prevValue.nextValue = current.nextValue;
            if(current.nextValue != null) current.nextValue.prevValue = current.prevValue;
            this.sizeN--;
        }
        else throw Error("Індекс виходить за межі однозв'язного списку!");
    }

    get(index){
        let size = 0;
        let current = this.head;
        while(size != index && current != null)
        {
            current = current.nextValue;
            size++;
        }
        if(current == null) throw Error("Індекс виходить за межі однозв'язного списку!");
        return current.nowValue;
        }
    
    check(){
        if(this.sizeN > 0) 
        {
            console.log(`Список не є порожній, його розмір = ${this.sizeN}`);
            return true;
        }
        else 
        {
            console.log("Список порожній");
            return false;
        }
    }

    clear(){
        this.head = null;
        this.sizeN = 0;
    }

    MoveNodes(P0, K) {
        if(P0 < this.sizeN && P0 >= 0 && K > 0 && K < this.sizeN) {
        let current = this.head;
        let index = 0;
        while(index != P0) // зрівняла індекс з P
        {
            current = current.nextValue;
            index++;
        }
        let ourElement = current;
        let oldPrev = current.prevValue;
        let oldNext = current.nextValue;
        if(P0 + K < this.sizeN - 1) //перевірила чи K не більша за кількість елементів після P
        {
            while(index < P0 + K)  // Кюрентом дійшла до позиції K
            {
                current = current.nextValue;
                index++;                   
            }
            if(oldPrev != null) //перевірила чи у нас попередній не налл
            {
            let elemN = current.nextValue;
            current.nextValue.prevValue = ourElement;
            current.nextValue = ourElement;
            ourElement.prevValue = current;
            ourElement.nextValue = elemN;
            oldPrev.nextValue = oldNext;
            oldNext.prevValue = oldPrev;
            }
            else 
            {
                let elemN = current.nextValue;
                current.nextValue.prevValue = ourElement;
                current.nextValue = ourElement;
                ourElement.prevValue = current;
                ourElement.nextValue = elemN;
                oldNext.prevValue = null;
                this.head = oldNext;
            }  
        }
        else // випадок при K більша за кількість елементів після P
        {
                while(index < this.sizeN - 1)
                {
                    current = current.nextValue;
                    index++;
                }
                current.nextValue = ourElement;
                ourElement.prevValue = current;
                ourElement.nextValue = null;
                if(oldPrev == null){
                   oldNext.prevValue = null;
                   this.head = oldNext; 
                }
                else{
                oldPrev.nextValue = oldNext;
                oldNext.prevValue = oldPrev;
                }
        }
        let PF = this.get(0);
        let PL = this.get(this.sizeN-1);   
        console.log(`Елемент першого покажчика: ${PF}   \nЕлемент останнього покажчика: ${PL}`)
    } 
    else throw Error("Покажчик або K в некоректному виді!");
}

    ShowElements() 
    {
        for(let current = this.head; current!= null; current = current.nextValue)
        {
            console.log(current.nowValue);
        }
        if(this.head == null) console.log("Список порожній...")
    }
}

function Main() {
    node = new Node();
    node.AddNode(0);
    node.AddNode(1);
    node.AddNode(2);
    node.AddNode(3);
    node.AddNode(4);
    node.AddNode(5);
    node.AddNode(6);
    node.AddNode(7);
    node.AddNode(8);
    node.AddNode(9);

    node.Remove(1);
    let value = node.get(5);
    console.log(`Елемент під даним індексом: ${value}`);
    node.check();
    node.MoveNodes(3,6);
    node.ShowElements();
    }
    Main();
