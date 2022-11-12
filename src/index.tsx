import React from 'react';

import './index.css';

import {RootReducerType,store,} from "./redux/redux-store";

import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container as HTMLElement);

export const renderTree = (state: RootReducerType) => {
    // createRoot(container!) if you use TypeScript

    root.render(
        <BrowserRouter>
            <App store={state}
                 dispatch={store.dispatch.bind(store)}

            />
        </BrowserRouter>
        ,
    );
}
renderTree(store.getState())
store.subscribe(()=>{
    let state = store.getState
    renderTree(state())
})