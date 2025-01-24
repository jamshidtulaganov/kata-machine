export default function two_crystal_balls(breaks: boolean[]): number {
    const jump_amount = Math.floor(Math.sqrt(breaks.length));
    let jump = jump_amount;

    while (!breaks[jump] && jump <= breaks.length) {
        jump += jump_amount;
    }

    let first_step = 0;
    jump -= jump_amount;

    while (first_step <= jump_amount && jump < breaks.length) {
        if (breaks[jump]) {
            return jump;
        }

        first_step++;
        jump++
    }

    return -1;
}


const arr = new Array(100).fill(false)