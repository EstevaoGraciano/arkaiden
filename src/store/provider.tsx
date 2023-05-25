'use-client';

import {Provider} from 'react-redux'
import { store } from '.';
import React from 'react'

const Providers = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Providers;