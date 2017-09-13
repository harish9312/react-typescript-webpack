import { LOCAL_STORAGE_KEY } from '../constants/general';
import { post } from '../utils/HTTP';
import { getUser } from './userService';

export interface IUserInfo {
    firstName: string;
    userId: number;
}

export async function loginDataFetch(userID: string, password: string) {
    try {
        const response = await post('login', { userID, password });
        return response;
    } catch (error) {
        return false;
    }
}

export function saveUserInfo(firstName: string, userId: string) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ firstName, userId }));
}

export function removeUserInfo() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
}

export function getUserInfo() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
}
