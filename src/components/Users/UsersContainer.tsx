import { connect } from "react-redux";
import React  from "react";
import { Users } from "./Users";


import { Dispatch } from "redux";
import {RootReducerType} from "../../redux/redux-store";
import {followAC, OneUserType, setUsersAC, unFollowAC} from "../../redux/users-reducer";

type MapStateToPropsType = {
    users: Array<OneUserType>;
};
const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        users: state.userPage.users,
    };
};

export type MapDispatchToPropsType = {
    follow:(userId: number)=>void
    unFollow:(userId: number)=>void
    setUsers: (users: Array<OneUserType>)=>void
};
const mapDispatchToProps = (dispatch:Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users: Array<OneUserType>)=> {
            dispatch(setUsersAC(users))
        }
    };
};

export const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);