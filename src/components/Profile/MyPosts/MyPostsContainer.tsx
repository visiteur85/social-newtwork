import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {
    addPost,

    PostPropsType,

    updateNewPostText
} from "../../../redux/profile-reducer";
import {RootReducerType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    newPostText: string
    posts: PostPropsType[]
}

export type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
};


export const MyPostsContainer = connect(mapStateToProps, {updateNewPostText, addPost})(MyPosts);