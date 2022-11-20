import {connect} from "react-redux";
import React from "react";


import {Dispatch} from "redux";
import {RootReducerType} from "../../redux/redux-store";
import {followAC, OneUserType, setUsersAC, unFollowAC} from "../../redux/users-reducer";
import {Users} from "./Users";

type MapStateToPropsType = {
    items: Array<OneUserType>;
};
const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        items: state.userPage.items
    };
};

export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (items: Array<OneUserType>) => void
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users: Array<OneUserType>) => {
            dispatch(setUsersAC(users))
        }
    };
};

export const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);