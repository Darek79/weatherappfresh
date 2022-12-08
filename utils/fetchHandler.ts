export function fetchHandler(url: string) {
    return fetch(url).then(res => res.json());
}
