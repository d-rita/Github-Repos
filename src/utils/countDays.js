export function countDays(d) {
    let start = new Date(d);
    let today = new Date();

    let count = 0;

    while(start < today){
    count++;
    start.setDate(start.getDate() + 1)
    }

    return count;
}
