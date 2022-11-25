export type ProfilePageType = {
    posts: Array<PostPropsType>
    newPostText: string
    profile: ProfileFromServerType | null
};
export type ProfileFromServerType = {
    aboutMe:string
    contacts: ContactsForProfileType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId:number
    photos: PhotosForProfileType

};
export type ContactsForProfileType = {
    facebook:string
    website:	null | string
    vk: string
    twitter:string
    instagram: string
    youtube:	null | string
    github:	string
    mainLink:	null | string
};
export type PhotosForProfileType = {
    small: string
    large:string
}
export type PostPropsType = {
    id: number
    message: string
    likesCount: number
};

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 0},
        {id: 2, message: "it's my first post", likesCount: 23},
        {id: 3, message: "I m ok", likesCount: 14},
        {id: 4, message: "Great", likesCount: 43},
    ],
    newPostText: "",
    profile: null
}

export const profileReducer = (state = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostPropsType = {id: 5, message: state.newPostText, likesCount: 15};
            let newState = {...state};
            newState.posts = [...state.posts];
            newState.posts.push(newPost);
            newState.newPostText = "";
            return newState

        }
        case "UPDATE-NEW-POST": {
            let newState = {...state};
            newState.newPostText = action.newText;
            return newState
        }
        case "Set_USER_PROFILE": {
            let newState = {...state, profile: action.profile}
            return newState
        }
        default:
            return state
    }
}

export type AddPostActionType = {
    type: "ADD-POST"
};

export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST"
    newText: string

};
export type ProfileActionsType = AddPostActionType | UpdateNewPostTextActionType | SetUserProfileType

export const addPost = (): AddPostActionType => {
    return {
        type: "ADD-POST"
    } as const
};

export let updateNewPostText = (text: string): UpdateNewPostTextActionType => {
    return {
        type: "UPDATE-NEW-POST",
        newText: text
    } as const
};

export type SetUserProfileType = {
    type: "Set_USER_PROFILE"
    profile: any

};
export let setUserProfile = (profile:any):SetUserProfileType => {
    return {type:"Set_USER_PROFILE",
        profile

    }
}

