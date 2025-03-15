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
    else return false;
}

delete()    
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
get() {
    if (this.ifEmpty() == false)
        return this.#students[0];
}

}


function main() {
let queue = new Queue();
queue.add(new NewArray("Smith", 23));
queue.add(new NewArray("Johnson",4));
queue.add(new NewArray("Williams",50));
queue.add(new NewArray("Brown",100));
queue.add(new NewArray("Taylor",98));
queue.add(new NewArray("Anderson",3));
queue.add(new NewArray("Thomas",28));
queue.add(new NewArray("White",69));
queue.add(new NewArray("Harris",34));
queue.add(new NewArray("Martin",83));
queue.add(new NewArray("Walker",12));


queue.showElements();
}
main();