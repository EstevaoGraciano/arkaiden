import React, { useEffect } from 'react';
import style from './MainPage.module.scss'

const Home = () => {
    return (
        <div className={style['main']}>
            <div className={style['body']}>
                <h1>Arkaiden RPG Manager</h1>
            </div>
        </div>
    )
}

export default Home;