export type UsersPageType = {
    items: Array<OneUserType>
}

export type OneUserType = {
    name: string
    id: number
    uniqueUrlName:string | null
    photos: photosType
    status: string | null
    followed: boolean
}
export type photosType = {
    small: string | null
    large: string | null
};



let initialState: UsersPageType = {
    items: [

    ]

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
            return {...state, items: [...state.items, ...action.items]}
        }
    }
    return state
}
export type UsersActionsType = FolllowType | UnFolllowType | SetUsersType

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

