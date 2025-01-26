type QNode<T> = {
    value: T,
    next?: QNode<T>
} 

export default class Queue<T> {

    public length: number = 0;
    private head: QNode<T> | undefined = undefined;
    private teal: QNode<T> | undefined = undefined;


    enqueue(item: T):void {
        const node = { value: item } as QNode<T>

        if (!this.teal) { 
            this.teal = node;
            this.head = this.teal;
        } else {
            this.teal.next = node;
            this.teal = node;
        }

        this.length++;
    }

    deque(): T | undefined {
        if (!this.head) return undefined;

        const value = this.head.value;
        this.head = this.head.next;

        // if queue is one
        if (!this.head) {
            this.head = this.teal = undefined;
        }

        // decrease queue length
        this.length--;

        return value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}