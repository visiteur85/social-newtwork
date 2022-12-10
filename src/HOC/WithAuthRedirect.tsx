import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";

import {connect} from "react-redux";
import {RootReducerType} from "../redux/redux-store";

export type  mapStateToPropsRedirectType = {
    isAuth: boolean
}

let mapStateToPropsRedirect = (state: RootReducerType): mapStateToPropsRedirectType => ({

    isAuth: state.auth.isAuth
});


export function WithAuthRedirect  (Component: any)  {
    function RedirectComponent(props: mapStateToPropsRedirectType) {

        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={"/login"}/>
        return <Component {...restProps}/>
    }


    let  ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect) (RedirectComponent)
    return ConnectedAuthRedirectComponent
}