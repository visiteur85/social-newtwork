export type UsersPageType = {
    items: Array<OneUserType>
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching:boolean
    followingInProgress:number[]

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
    currentPage: 1,
    isFetching:true,
    followingInProgress:[]

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
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE_IS_FOLLOWING_PROGRESS": {
            let newState = {...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]:
                    state.followingInProgress.filter(id=>id!=action.userId)

            };
            return newState
        }
    }
    return state
}
export type UsersActionsType = FolllowType | UnFolllowType | SetUsersType
    | SetCurrentPageType | setTotalUsersCountType | setIsFetchingType | toggleFollowingProgressType

export type FolllowType = ReturnType<typeof follow>
export let follow = (userId: number) => {
    return {
        type: "FOLLOW",
        userId


    } as const
};

export type UnFolllowType = ReturnType<typeof unFollow>
export let unFollow = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId

    } as const
};

export type SetUsersType = ReturnType<typeof setUsers>
export let setUsers = (items: Array<OneUserType>) => {

    return {
        type: "SET-Users",
        items
    } as const
};

export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export let setCurrentPage = (page: number) => {

    return {
        type: "SET-CURRENT-PAGE",
        page
    } as const
};

export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export let setTotalUsersCount = (totalCount: number) => {

    return {
        type: "SET-TOTAL-USERS",
        totalCount
    } as const
};

export type setIsFetchingType = ReturnType<typeof setIsFetching>
export let setIsFetching = (isFetching: boolean) => {

    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching
    } as const
};
export type toggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>
export let toggleFollowingProgress = (isFetching: boolean, userId:number) => {
    return {
        type: "TOGGLE_IS_FOLLOWING_PROGRESS",
        isFetching,
        userId

    } as const
};

