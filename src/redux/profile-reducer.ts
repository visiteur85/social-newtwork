
export type ProfilePageType = {
    posts: Array<PostPropsType>
    newPostText: string
};
export type PostPropsType = {
    id: number
    message: string
    likesCount: number
};

let initialState:  ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 0},
        {id: 2, message: "it's my first post", likesCount: 23},
        {id: 3, message: "I m ok", likesCount: 14},
        {id: 4, message: "Great", likesCount: 43},
    ],
    newPostText: ""
}

export const profileReducer = (state = initialState, action:ProfileActionsType )=> {
    switch(action.type){
        case "ADD-POST": {
            let newPost: PostPropsType = {id: 5, message: state.newPostText, likesCount: 15};

            state.posts.push(newPost);
            state.newPostText = "";
            return state
        }
        case "UPDATE-NEW-POST": {
            state.newPostText = action.newText;}
            return state

    }
    return state
}

export type AddPostActionType = {
    type: "ADD-POST"
};

export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST"
    newText: string

};
export type ProfileActionsType = AddPostActionType | UpdateNewPostTextActionType

export const addPostActionCreator = ():AddPostActionType=> {
    return {
        type: "ADD-POST"
    }as const
};

export let updateNewPostAC = (text:string):UpdateNewPostTextActionType => {
    return {
        type: "UPDATE-NEW-POST",
        newText:text
    }as const
};


