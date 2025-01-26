type SNode<T> = {
    value: T,
    next?: SNode<T> | undefined,
    prev?: SNode<T> | undefined
}
export default class Stack<T> {
    public length: number = 0;
    private head: SNode<T> | undefined = undefined;
    private teal: SNode<T> | undefined = undefined;

    push(item: T): void {
        const node = { value: item } as SNode<T>
        if (!this.teal) {
            this.head = this.teal = node;
        } else { 
            const current_teal = this.teal;
            this.teal.next = node;
            this.teal = node;
            this.teal.prev = current_teal;
        }

        this.length++
    }

    pop(): T | undefined {
        if (!this.head) return undefined;

        const value = this.teal?.value;
        this.teal = this.teal?.prev;

        if (!this.teal) {
            this.head = this.teal = undefined;
        }

        this.length--

        return value
    }

    peek(): T | undefined {
        return this.teal?.value;
    }
}