import {authApi} from "../API/api";
import {Dispatch} from "redux";


export type AuthFromServerType = {
    data: dataAuthType
    resultCode: number
    messages: string[]

};
export type dataAuthType = {
    id: number
    email: string
    login: string

}
export type AuthInitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isFetching: boolean
    isAuth: boolean
}


let initialState: AuthInitialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false

}


export const authReducer = (state = initialState, action: setUserDataType) => {
    switch (action.type) {

        case "SET-USER-DATE": {

            let newState = {
                ...state, ...action.data, isAuth: true
            }
            return newState
        }

        default:
            return state
    }
};


export type setUserDataType = ReturnType<typeof setUserData>
export const setUserData = (id: number, email: string, login: string) => {
    return {

        type: "SET-USER-DATE",
        data: {id, email, login}
    } as const
};


export const getMeThunkCreator = () => {
    return async (dispatch: Dispatch<any>) => {
        let res = await authApi.me()
        if (res.data.resultCode === 0) {
            dispatch(setUserData(res.data.data.id, res.data.data.email,
                res.data.data.login))
        }

    }
};