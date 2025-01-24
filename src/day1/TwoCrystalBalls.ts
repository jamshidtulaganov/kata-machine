export default function two_crystal_balls(breaks: boolean[]): number {
    const jump_amount = Math.floor(Math.sqrt(breaks.length));
    let index = jump_amount;

    for (; index < breaks.length; index += jump_amount) {
        if (breaks[index]) break;
    }

    index -= jump_amount;

    for (let j = 0; j < jump_amount && index < breaks.length; ++index, ++j) {
        if (breaks[index]) return index;
    }

    return -1;
}