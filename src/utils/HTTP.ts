import axios from 'axios';

export function get(url: string) {
    return new Promise((resolve, reject) => {
        axios.get(url).then((response) => {
            if (response.data.status === 'valid') {
                return resolve(response.data);
            }
            reject(response)
        },
            () => alert('Request Rejected'));
    });
}

export function post(url: string) {
    return new Promise((resolve, reject) => {
        axios.post(url).then((response) => {
            if (response.data.status === 'success') {
                return resolve(response.data);
            }
            reject(response)
        },
            () => alert('Rejected'))
    })
}