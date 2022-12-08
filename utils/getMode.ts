interface Mode {
    [key: number]: number;
}
export function getMode(arr: number[]): number {
    arr.sort((a, b) => a - b);
    const mode: Mode = {};
    let max = 0;
    let count = 0;

    arr.forEach((el, i) => {
        const item = arr[i];

        if (mode[item]) {
            mode[item]++;
        } else {
            mode[item] = 1;
        }

        if (count < mode[item]) {
            max = item;
            count = mode[item];
        }
    });

    return max;
}
