import React, { FC } from 'react';
import Header from '../UI/Header';
import style from './RegularPage.module.scss';


interface IRegularPage {
    children?: any
}

const RegularPage: FC<IRegularPage> = ({ children }) => {

    return (
        <div>
            <Header />
            <div className={style['mainBody']}>
                {children}
            </div>
            <div>footer</div>
        </div>
    )


}

export default RegularPage;