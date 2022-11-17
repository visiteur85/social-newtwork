import React from 'react';

import './index.css';

import {store} from "./redux/redux-store";

import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container as HTMLElement);


// createRoot(container!) if you use TypeScript

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
    ,
);
