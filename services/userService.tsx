import { login } from '../actions/loginActions';
import { UserModel } from '../model/UserModel';
import { get, post } from '../utils/HTTP';
import { getUserInfo, saveUserInfo } from './loginService';

export async function getUser(userID: string) {
    let { data: { userInfo } } = await get(`/user/${userID}`);
    const { firstName, userId } = userInfo;
    const checkLocalStorage = getUserInfo();
    login(userInfo);
    if (!checkLocalStorage) {
        saveUserInfo(userInfo.firstName, userID);
    }
    return new UserModel(userInfo).$save();
}

export async function addUser(url, data) {
    const response = await post(url, data);
    return response;
}

export async function getProjects() {
    let { data: { projectName } } = await get('/allProjects');
    return projectName;
}