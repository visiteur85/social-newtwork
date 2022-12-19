import {RootReducerType} from "../../redux/redux-store";

import {Profile} from "./Profile";
import React from "react";
import {
    getProfileThunkCreator,
    getUserStatusThunkCreator,
    ProfileFromServerType,
    updateStatusThunkCreator
} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
    //разобраться строка или число
    userId: any
}
type CommonPropsType = RouteComponentProps<PathParamsType> & PropsType
type PropsType = {

    profile: ProfileFromServerType | null
    getProfileThunkCreator: (userId: number) => void
    isAuth: boolean
    getUserStatusThunkCreator:(userId: number) => void
    status:string
    updateStatusThunkCreator:(status:string) => void
};

export class ProfileAPIContainer extends React.Component<CommonPropsType> {
    componentDidMount() {


        let userId = this.props.match.params.userId;
        console.log(userId)
        if (!userId) {
            userId = 2
        }
        this.props.getProfileThunkCreator(userId);
        this.props.getUserStatusThunkCreator(userId)
    }

    render() {


        return (
            <Profile profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatusThunkCreator}/>
        );
    }
}

//эту переменную нужно будет вставить в самый конец вместо ProfileAPIContainer
// let AuthRedirectComponent:any = WithAuthRedirect(ProfileAPIContainer);
type MapStateToPropsType = {
    profile: ProfileFromServerType | null
    status:string


};

let mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status:state.profilePage.status

    }
}

export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileThunkCreator ,updateStatusThunkCreator, getUserStatusThunkCreator}),
    withRouter,)
(ProfileAPIContainer)