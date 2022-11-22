import {connect} from "react-redux";
import React from "react";


import {Dispatch} from "redux";
import {RootReducerType} from "../../redux/redux-store";
import {
    followAC,
    OneUserType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC
} from "../../redux/users-reducer";
import {Users} from "./Users";

type MapStateToPropsType = {
    items: Array<OneUserType>
    pageSize:number
    totalCount:number
    currentPage:number

};
const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        items: state.userPage.items,
        pageSize: state.userPage.pageSize,
        totalCount:state.userPage.totalCount,
        currentPage:state.userPage.currentPage
    };
};

export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (items: Array<OneUserType>) => void
    setCurrentPage:(page:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
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
        },
        setCurrentPage: (page:number)=> {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount:(totalCount:number)=> {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    };
};

export const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);