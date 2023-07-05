interface Queue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    isEmpty(): boolean;
    size(): number;
}
class MyQueue<T> implements Queue<T> {
    public data: T[] = [];
    enqueue(item: T): void {
      this.data.push(item);
    }
    
    dequeue(): T | undefined {
      return this.data.shift();
    }
  
    isEmpty(): boolean {
      return this.data.length === 0;
    }
    size(): number {
      return this.data.length;
    }
}  

const queue = new MyQueue<string>();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
queue.enqueue('D');
console.log(queue.data);
console.log("Initial Size: ",queue.size());
console.log("Dequeue: ",queue.dequeue()); 
console.log("After Dequeue: ",queue.size()); 
console.log(queue.data);
console.log("Dequeue: ",queue.dequeue()); 
console.log("Is Empty? : ",queue.isEmpty());
queue.enqueue('E');
console.log(queue.data);