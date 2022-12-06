import {applyMiddleware, combineReducers, createStore} from "redux";
import {sidebarReducer} from "./sidebar-reducer";
import {authReducer} from "./auth-reducer";
import {dialogsReducer} from "./dialog-reducer";
import {usersReducer} from "./users-reducer";
import {profileReducer} from "./profile-reducer";
import thunkMiddleware from "redux-thunk"


export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBarPage: sidebarReducer,
    userPage: usersReducer,
    auth: authReducer

})
export type RootReducerType = ReturnType<typeof rootReducer>
export type StoreType = typeof store
export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))