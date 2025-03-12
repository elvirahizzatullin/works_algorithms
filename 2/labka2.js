


class NodeElements {
constructor (nowValue){
    this.nowValue = nowValue;
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
this.head = new NodeElements(value);
}
else 
{
    let current = this.head;
    while (current.nextValue != null)
    {
        current = current.nextValue;
    }
    current.nextValue = new NodeElements(value);
}
this.sizeN++;
}

RemoveBigger4() { // видаляє перший елемент більше 4
let current = this.head;
if(this.head.nowValue > 4) 
    {
        this.head = this.head.nextValue;
        this.sizeN--;
        return;
    }

while(current.nextValue.nowValue <= 4)
{
    current = current.nextValue;
    if(current.nextValue == null) return;
}
current.nextValue = current.nextValue.nextValue;
this.sizeN--;
}

Remove(index)
{
    let size = 0;
    let current = this.head;
    let prevCurr = current;
    if(index == 0)
    {
        current = current.nextValue;
        this.head = current;
        this.sizeN--;
        return;
    }
    while(size != index && current.nextValue != null) 
        {
            prevCurr = current;
            current = current.nextValue;
            size++;
        } 
    if(size == index){
        prevCurr.nextValue = current.nextValue;
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

console.log(`Елемент під індексом ${index} = ${current.nowValue}`)
}

Add_10() { // додає 10 перед кожним числом 15
let current = this.head;  
let firstNode = new NodeElements(10);
if(this.head.nowValue == 15) {
firstNode.nextValue = this.head;
this.head = firstNode;
this.sizeN++;
}
while(current != null)
{
    if(current.nextValue != null && current.nextValue.nowValue == 15) 
    {
        let newNode = new NodeElements(10);
        newNode.nextValue = current.nextValue;
        current.nextValue = newNode;
        current = newNode.nextValue;
        this.sizeN++;
    }
    else current = current.nextValue;
}
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

ShowElements() {
for(let current = this.head; current!= null; current = current.nextValue)
{
    console.log(current.nowValue);
}
if(this.head == null) console.log("Список порожній...")
}
}

function Main() {
node = new Node();
node.AddNode(2);
node.AddNode(5);
node.AddNode(3);
node.AddNode(15);
node.AddNode(7);
node.AddNode(6);

node.RemoveBigger4();
node.Remove(0);
node.get(3);
node.Add_10();
node.check();
node.ShowElements();
}
Main();
