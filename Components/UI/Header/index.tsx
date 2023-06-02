import React, { FC } from 'react';
import style from './Header.module.scss';

interface IHeader {
    color?: any
}

const Header: FC<IHeader> = () => {

    return (
        <div className={style['main']}>
            <div className={style['mainBody']}>
                Arkaiden RPG Manager
            </div>
        </div>
    )
}

export default Header;