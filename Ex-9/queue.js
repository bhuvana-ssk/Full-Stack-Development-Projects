var MyQueue = /** @class */ (function () {
    function MyQueue() {
        this.data = [];
    }
    MyQueue.prototype.enqueue = function (item) {
        this.data.push(item);
    };
    MyQueue.prototype.dequeue = function () {
        return this.data.shift();
    };
    MyQueue.prototype.isEmpty = function () {
        return this.data.length === 0;
    };
    MyQueue.prototype.size = function () {
        return this.data.length;
    };
    return MyQueue;
}());
var queue = new MyQueue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
queue.enqueue('D');
console.log(queue.data);
console.log("Initial Size: ", queue.size());
console.log("Dequeue: ", queue.dequeue());
console.log("After Dequeue: ", queue.size());
console.log(queue.data);
console.log("Dequeue: ", queue.dequeue());
console.log("Is Empty? : ", queue.isEmpty());
queue.enqueue('E');
console.log(queue.data);
