import {connect} from "react-redux";
import React from "react";


import {Dispatch} from "redux";
import {RootReducerType} from "../../redux/redux-store";
import {
    followAC,
    OneUserType,
    setCurrentPageAC, setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC
} from "../../redux/users-reducer";

import axios from "axios";
import {Users} from "./Users";

type PropsType = {
    items: Array<OneUserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<OneUserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void

    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean

};

export class UsersApiComponent extends React.Component<PropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
                headers: {
                    'API-KEY': '13291219-4788-4555-a4f4-aaeffe0abc09'
                }
            })
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })

    }

    onChangedPage = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
            headers: {
                'API-KEY': '13291219-4788-4555-a4f4-aaeffe0abc09'
            }
        }).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items);
            // this.props.setTotalUsersCount(response.data.totalCount);
        })
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


        />


    }
}


type MapStateToPropsType = {
    items: Array<OneUserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean

};
const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        items: state.userPage.items,
        pageSize: state.userPage.pageSize,
        totalCount: state.userPage.totalCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching
    };
};

export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (items: Array<OneUserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
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
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setIsFetching: (isFetching: boolean) => {
            dispatch((setIsFetchingAC(isFetching)))
        }
    };
};

export const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersApiComponent);