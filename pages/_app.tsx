import React, { Component } from "react";
import './index.scss'
import Providers from "../src/store/provider";
import RegularPage from "../src/components/pageTemplate";

export const App = ({ Component, pageProps }) => {
    return (
        <Providers>
            <RegularPage>
                <Component {...pageProps} />
            </RegularPage>
        </Providers>
    )
}

export default App