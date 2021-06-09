class Queue
{
  constructor()
  {
    this.items=[];
  }
  enqueue(x)
  {
    this.items.push(x);
  }
  dequeue()
  {
    if(this.isEmpty())
      return "underflow";
    return this.items.shift();
  }
  printQueue()
  {
    var str= "";
    for(var i=0;i<this.items.length;i++)
      str +=this.items[i]+" ";
    return str;
  }
  isEmpty()
  {
    return this.items.length==0;
  }

}
var queue = new Queue();

console.log(queue.dequeue());

console.log(queue.isEmpty());
  
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

console.log(queue.printQueue());
  
console.log(queue.dequeue());

console.log(queue.printQueue());

queue.enqueue(7);

console.log(queue.printQueue());

console.log(queue.dequeue());

console.log(queue.printQueue());
