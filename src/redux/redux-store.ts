import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";


export let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBarPage:sidebarReducer

})
export type RootReducerType = ReturnType<typeof rootReducer>
export type StoreType = typeof store
export let store  = createStore(rootReducer)