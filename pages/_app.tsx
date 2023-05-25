import React, { Component } from "react";
import './index.scss'
import Providers from "../src/store/provider";

export const App = ({ Component, pageProps }) => {
    return (
        <Providers>
                <Component {...pageProps} />
        </Providers>
    )
}

export default App