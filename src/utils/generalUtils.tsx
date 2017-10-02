export function isEmpty(obj: Object) {
    return !obj || Object.keys(obj).length === 0;
}

export function keys(obj: Object, cb: Function) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cb(obj);
        }
    }
}

export function contains<T>(array: string[], item: string) {
    return array.indexOf(item);
}

