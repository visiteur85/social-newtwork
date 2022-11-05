export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}


export type DialogPropsType = {
    id: number
    name: string

};


export type MessagePropsType = {
    id: number
    message: string

};

export type ProfilePageType = {
    posts: Array<PostPropsType>
};
export type DialogPageType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
}

export type SidebarType = {};

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType

}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you", likesCount: 0},
            {id: 2, message: "it's my first post", likesCount: 23},
            {id: 2, message: "I m ok", likesCount: 14},
            {id: 2, message: "Great", likesCount: 43}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Pavel"},
            {id: 2, name: "Dima"},
            {id: 3, name: "Andrew"},
            {id: 4, name: "Olia"},
            {id: 5, name: "Sasha"}
        ]
        ,
        messages: [
            {id: 1, message: "HI"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Peace"}
        ]
    },
    sidebar: {}

}