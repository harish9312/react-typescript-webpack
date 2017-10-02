import axios from 'axios';


export async function get(url: string) {
    return new Promise((resolve, reject) => {
         axios.get(url).then((response) => {
            resolve(response);
        },
            () => alert('Rejected'));
    });
}


// export async function get(url: string): Promise<{}> {
//     const response = await axios.get(url).then(resp => {
//         return response;
//     },
//         () => console.log('rejected'))
// }

export function post(url: string) {
    return new Promise((resolve, reject) => {
        axios.post(url).then((response) => {
            if (response.data.status === 'success') {
                return resolve(response.data);
            }
            reject(response);
        },
            () => alert('Rejected'));
    });
}

export function post1(url: string, data) {
    const response = axios.post(url, data);

}
