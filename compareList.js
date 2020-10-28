//***** CREATE LINKED LIST */

class Node {
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.tail =null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(this.head===null){
            this.head = newNode;
            this.tail =this.head;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
}

let list1 = new LinkedList();

list1.push(1);
list1.push(2);
list1.push(3);
let list2 = new LinkedList();

list2.push(1);
list2.push(2);
list2.push(3);

console.log(list1list2);
//console.log(list2);

function compareLL(list1,list2){
    
}



