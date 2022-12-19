import axios from "axios";
import {AuthFromServerType} from "../redux/auth-reducer";

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
    follow(userId: number) {

        return instance.post(`1.0/follow/${userId}`)
    },
    unFollow(userId: number) {

        return instance.delete(`1.0/follow/${userId}`)
    },
    getProfile(userId:number) {
        // return instance.get(`1.0/profile/${userId}`
        //
        // )
        return profileApi.getProfile(userId)
    },
}

export const profileApi = {
    getProfile(userId:number) {
        return instance.get(`1.0/profile/${userId}`
        )
    },
    getStatus(userId:number)  {
        return instance.get(`1.0/profile/status/${userId}`)
    },
    updateStatus(status:string)  {
        return instance.put(`1.0/profile/${status}`, {status:status})
    }

};

export const authApi = {
    me() {
        return instance.get<AuthFromServerType>(`1.0/auth/me`,
            {
                headers: {
                    'API-KEY': '46af285d-668e-408c-9ee4-63a1ab3ec8c7'
                },
                withCredentials: true
            })

    },



}