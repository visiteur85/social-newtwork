import {
    DialogPageType,
    dialogsReducer,
    sendMessageBodyActionType,
    updateNewMessageBodyActionType
} from "./dialog-reducer";
import {
    AddPostActionType,
    PostPropsType,
    ProfilePageType,
    profileReducer,
    UpdateNewPostTextActionType
} from "./profile-reducer";




export type SidebarType = {};

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType

}


//типы наших AC
export type ActionsType = AddPostActionType | UpdateNewPostTextActionType |
    updateNewMessageBodyActionType | sendMessageBodyActionType;

export type StoreType = {
    _state: RootStateType
    _onChange: (state: RootStateType) => void
    subscribe: (callback: (_state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void


}


export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you", likesCount: 0},
                {id: 2, message: "it's my first post", likesCount: 23},
                {id: 3, message: "I m ok", likesCount: 14},
                {id: 4, message: "Great", likesCount: 43},
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Pavel"},
                {id: 2, name: "Dima"},
                {id: 3, name: "Andrew"},
                {id: 4, name: "Olia"},
                {id: 5, name: "Sasha"}
            ],
            messages: [
                {id: 1, message: "HI"},
                {id: 2, message: "How are you"},
                {id: 3, message: "Peace"},
                {id: 3, message: "Peace"},
                {id: 3, message: "Peace"},
            ],
            newMessageBody: ''

        },
        sidebar: {},
    },

    getState() {
        return this._state
    },
    _onChange(state: RootStateType) {
        console.log("asdf")
    },
    subscribe(callback) {
        this._onChange = callback
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._onChange(this._state)

    },
}
