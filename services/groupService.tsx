import { post } from '../utils/HTTP';
export async function addGroup(url, data) {
    const response = await post(url, data);
    return response;
}
