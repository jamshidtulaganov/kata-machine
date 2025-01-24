export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let height = haystack.length;

    while (low < height) {
        let middle = Math.floor((low + height) / 2);
        const value = haystack[middle];

        if (value === needle) {
            return true
        }
        else if (value > needle) {
            height = middle - 1;
        }
        else {
            low = middle + 1;
        }
    }

    return false;
}