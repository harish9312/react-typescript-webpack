import { put } from '../utils/HTTP';

export function updatePassword({ oldPassword, newPassword }) {
    return put('', { oldPassword, newPassword }).then((response) => {
        return response;
    },
        () => {
            return false;
        });
}
