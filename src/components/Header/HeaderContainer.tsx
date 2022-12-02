import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";


import {RootReducerType} from "../../redux/redux-store";
import {AuthFromServerType, setUserData} from "../../redux/auth-reducer";


type PropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderAPIContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get<AuthFromServerType>(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {
                headers: {
                    'API-KEY': '46af285d-668e-408c-9ee4-63a1ab3ec8c7'
                },
                withCredentials: true
            })
            .then(response => {
                console.log(response)
                if (response.data.resultCode === 0) {
                    this.props.setUserData(response.data.data.id, response.data.data.email,
                        response.data.data.login)
                }
            })
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
    setUserData: (id: number, email: string, login: string) => void
}


const mapStateToProps = (state: RootReducerType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email
})
// let WithAUTHContainer = withRouter(HeaderAPIContainer)

export const HeaderContainer = connect<MapStateToPropsType, MapDispatchToPropsType, unknown, RootReducerType>(mapStateToProps, {setUserData})(HeaderAPIContainer);