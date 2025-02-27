class NewArray {
    constructor(surnameStudent, averageMark)
    {
this.surnameStudent = surnameStudent;
this.averageMark = averageMark;
    }
}

class Queue {
#students;
constructor() 
{
this.#students = []; 
}

add(NewArray) 
{
this.#students.push(NewArray);
}

ifEmpty() {
    if(this.#students.length === 0)
    {
        console.log("Черга порожня!!!")
        return true;
    }
    else {
        return false;
    }
}

delate()    
{
    if(this.ifEmpty() == false)
        {
            this.#students.shift();
        }

}


showElements()
{
if(this.ifEmpty() == false){
for (let i = 0; i < this.#students.length; i++) {
console.log( `name: ${this.#students[i].surnameStudent}, mark: ${this.#students[i].averageMark}`);
}
}
}

clear()
{
    if(this.ifEmpty() == false){
    let ourLength = this.#students.length;
    for (let i = 0; i < ourLength; i++) {
        this.#students.shift();
    }
    }
}
}

function main() {
let queue = new Queue();
queue.add(new NewArray("Smit", 23));
queue.add(new NewArray("Shtrimplha",4));
queue.add(new NewArray("Bublik",50));
queue.add(new NewArray("Huselnytsa",100));
queue.add(new NewArray("Hizzatullin",100));
queue.add(new NewArray("Jonhson",3));
queue.add(new NewArray("German",28));
queue.add(new NewArray("Romanovich",69));
queue.add(new NewArray("Zyb",34));
queue.add(new NewArray("Zib",83));
queue.add(new NewArray("Zab",12));

queue.showElements();

}
main();