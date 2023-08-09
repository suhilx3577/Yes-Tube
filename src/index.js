import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./App";
import { Provider } from "react-redux";
import store from "./utils/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>

        <RouterProvider router={appRouter}>
            <App/>
        </RouterProvider>

    </Provider>
 )