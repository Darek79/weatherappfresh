export function getMinMaxTemperature(arr: number[]): [number, number] {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    // const maxIndex = arr.indexOf(max);
    // const minIndex = arr.indexOf(min);
    return [max, min];
}
