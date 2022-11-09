import React from 'react';

import './index.css';

import {RootStateType, store,} from "./redux/state";

import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container as HTMLElement);

export const renderTree = (state: RootStateType) => {
    // createRoot(container!) if you use TypeScript

    root.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>
        ,
    );
}
renderTree(store.getState())
store.subscribe(renderTree)