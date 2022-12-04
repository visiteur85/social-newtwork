import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '46af285d-668e-408c-9ee4-63a1ab3ec8c7'
    },
    baseURL: "https://social-network.samuraijs.com/api/"

});

export const userApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`1.0/users?page=${currentPage}&count=${pageSize}`,
        )
            .then(res => res.data)
    },
}