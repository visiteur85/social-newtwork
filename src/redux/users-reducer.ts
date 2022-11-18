type locationType = {
    city: string
    country: string
}

export type OneUserType = {
    id: number
    photoURl:string
    followed: boolean
    fullName: string
    status: string
    location: locationType
}
export type UsersType = {
    users: OneUserType[]
}


let initialState: UsersType = {
    users: [
        // {
        //     id: 1,
        //     followed: true,
        //     fullName: 'Pavel',
        //     status: 'I am a boss',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     followed: false,
        //     fullName: 'Sasha',
        //     status: 'I am a boss too',
        //     location: {city: 'Brest', country: 'Belarus'}
        // },
        // {
        //     id: 3,
        //     followed: true,
        //     fullName: 'Andrew',
        //     status: 'I am a boss too too)',
        //     location: {city: 'Grodno', country: 'Belarus'}
        // },
    ]

};

export const usersReducer = (state = initialState, action: UsersActionsType) => {
    switch (action.type) {
        case "FOLLOW": {
            const newState = {
                ...state,
                users: state.users.map(m => m.id === action.userId ? {...m, followed: true} : m)
            };
            return newState
        }
        case "UNFOLLOW": {
            const newState = {
                ...state,
                users: state.users.map(m => m.id === action.userId ? {...m, followed: false} : m)
            };
            return newState
        }
        case "SET-Users": {
            return {...state, users: [...state.users, ...action.users]}
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
export let setUsersAC = (users: OneUserType[]) => {
    return {
        type: "SET-Users",
        users


    } as const
};

