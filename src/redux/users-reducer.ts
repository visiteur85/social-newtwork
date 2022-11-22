export type UsersPageType = {
    items: Array<OneUserType>
    totalCount: number
    pageSize: number
    currentPage: number

}

export type OneUserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: photosType
    status: string | null
    followed: boolean
}
export type photosType = {
    small: string | null
    large: string | null
};


let initialState: UsersPageType = {
    items: [],
    totalCount: 0,
    pageSize: 50,
    currentPage: 1

};

export const usersReducer = (state = initialState, action: UsersActionsType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW": {
            const newState = {
                ...state,
                items: state.items.map(m => m.id === action.userId ? {...m, followed: true} : m)
            };
            return newState
        }
        case "UNFOLLOW": {
            const newState = {
                ...state,
                items: state.items.map(m => m.id === action.userId ? {...m, followed: false} : m)
            };
            return newState
        }
        case "SET-Users": {
            return {...state, items: action.items}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.page}
        }
        case "SET-TOTAL-USERS": {
            return {...state, totalCount: action.totalCount}
        }
    }
    return state
}
export type UsersActionsType = FolllowType | UnFolllowType | SetUsersType | SetCurrentPageType | setTotalUsersCountType

export type FolllowType = ReturnType<typeof followAC>
export let followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId


    } as const
};

export type UnFolllowType = ReturnType<typeof unFollowAC>
export let unFollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId

    } as const
};

export type SetUsersType = ReturnType<typeof setUsersAC>
export let setUsersAC = (items: Array<OneUserType>) => {

    return {
        type: "SET-Users",
        items
    } as const
};

export type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
export let setCurrentPageAC = (page: number) => {

    return {
        type: "SET-CURRENT-PAGE",
        page
    } as const
};

export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>
export let setTotalUsersCountAC = (totalCount: number) => {

    return {
        type: "SET-TOTAL-USERS",
        totalCount
    } as const
};

