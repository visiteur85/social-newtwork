import {connect} from "react-redux";
import React from "react";

import {RootReducerType} from "../../redux/redux-store";
import {
    follow,
    followThunkCreator,
    getUsersThunkCreator,
    OneUserType,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    unFollow,
    unFollowThunkCreator,
} from "../../redux/users-reducer";


import {Users} from "./Users";


type PropsType = {
    items: Array<OneUserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<OneUserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void

    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]

};

export class UsersApiComponent extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)

    }


    onChangedPage = (page: number) => {
        this.props.getUsersThunkCreator(page, this.props.pageSize)
    }

    render() {
        return <Users
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onChangedPage={this.onChangedPage}
            items={this.props.items}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            isFetching={this.props.isFetching}
            setIsFetching={this.props.setIsFetching}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}
            followThunkCreator={this.props.followThunkCreator}
            unFollowThunkCreator={this.props.unFollowThunkCreator}


        />


    }
}


type MapStateToPropsType = {
    items: Array<OneUserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]

};
const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        items: state.userPage.items,
        pageSize: state.userPage.pageSize,
        totalCount: state.userPage.totalCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress
    };
};


export const UsersContainer = connect(
    mapStateToProps,
    {
        follow, unFollow, setUsers,
        setCurrentPage, setTotalUsersCount, setIsFetching,
        toggleFollowingProgress, getUsersThunkCreator, followThunkCreator,
        unFollowThunkCreator
    }
)(UsersApiComponent);