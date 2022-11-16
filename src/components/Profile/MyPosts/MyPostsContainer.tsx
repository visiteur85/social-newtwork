


import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator, PostPropsType, updateNewPostAC} from "../../../redux/profile-reducer";
import {RootReducerType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    newPostText:string
    posts:PostPropsType[]
}

export type MapDispatchToPropsType = {
    updateNewPostText:(text:string)=>void
    addPost:()=>void
}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        newPostText:state.profilePage.newPostText,
        posts:state.profilePage.posts
    }
};

const mapDispatchToProps = (dispatch:Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (text:string)=>{
            dispatch(updateNewPostAC(text))
        },
        addPost:()=>{
            dispatch(addPostActionCreator())}
    }
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);