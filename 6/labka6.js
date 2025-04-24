//Зворотній	1. Обчислити середнє арифметичне елементів дерева
//2.Вивести на екран ті листи дерева, які мають парні значення

class makeTree {
constructor(value) 
{
this.nowValue = value;
this.left = null;
this.right = null;
}
}
class tree {
    constructor()
    {
        this.head = null;
        this.sum = 0;
        this.count = 0;
    }

    add(value)
    {
        if(this.head == null)
        {
            this.head = new makeTree(value); 
            this.count++;
            return;   
        }
        let current = this.head;
        while(current != null)
        {
            if(current.nowValue > value )
            {
                if(current.left != null) current = current.left;
                else if(current.left == null)
                {
                    current.left = new makeTree(value);
                    this.count++;
                    return;
                }
            }
            else if(current.nowValue < value)
            {
                if(current.right != null) current = current.right;
                else if(current.right == null)
                {
                    current.right = new makeTree(value);
                    this.count++;
                    return;
                }
            }
            else if(current.nowValue == value) return;
        }
    }

    show(node){
        console.log(node.nowValue);
        if(node.left){this.show(node.left);}
        if(node.right){this.show(node.right);}
    }

    calculate(node){
        if(node.left){this.calculate(node.left);}
        if(node.right){this.calculate(node.right);}
        this.sum += node.nowValue;
    }

    even(node){
        if(node.left){this.even(node.left);}
        if(node.right){this.even(node.right);}
        if(node.right == null && node.left == null && node.nowValue %2 == 0) {
            console.log(node.nowValue)
        } 
    }

    showValue(node, value)
    {
        if(node.nowValue == value){console.log(`Шуканий елемент: ${node.nowValue}`); return;}
        if(node.nowValue > value && node.left){this.showValue(node.left, value);}
        if(node.nowValue < value && node.right){this.showValue(node.right, value);} 
    }

    returnCalc(){
        console.log(`Середнє арифметичне: ${this.sum/this.count}`);
        this.sum = 0;
    }
}
function main(){
    let Tree = new tree();
    Tree.add(5);
    Tree.add(2);
    Tree.add(6);
    Tree.add(1);
    Tree.add(8);
    Tree.add(3);
    Tree.show(Tree.head);
    console.log("Парні листя: ");
    Tree.even(Tree.head)
    Tree.calculate(Tree.head);
    Tree.showValue(Tree.head, 6);
    Tree.returnCalc();

}
main();