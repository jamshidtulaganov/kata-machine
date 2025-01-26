type QNode<T> = {
    value: T,
    next?: QNode<T>
}
export default class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private teal?: QNode<T>
    

    constructor() {
        this.head = this.teal = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as QNode<T>;

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

        // decrease len
        this.length--;

        if (this.length === 0) {
            this.head = undefined;
            this.teal = undefined;
        }

        return value;
    }
    peek(): T | undefined {
        return this.head?.value
    }
}