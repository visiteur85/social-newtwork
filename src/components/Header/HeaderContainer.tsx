import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";


import {RootReducerType} from "../../redux/redux-store";
import {getMeThunkCreator} from "../../redux/auth-reducer";


type PropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderAPIContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getMeThunkCreator()
    }

    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
                       email={this.props.email}
        />
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
    email: string | null
};
type MapDispatchToPropsType = {
    getMeThunkCreator: () => void
}


const mapStateToProps = (state: RootReducerType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email
})


export const HeaderContainer = connect<MapStateToPropsType, MapDispatchToPropsType, unknown, RootReducerType>(mapStateToProps, {getMeThunkCreator})(HeaderAPIContainer);