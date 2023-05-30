import { Card } from 'antd';
import React, { FC } from 'react';
import style from './CardAtt.module.scss';

interface ICardAtt {
    title: string;
    att: number | string;
}

export const CardAtt: FC<ICardAtt> = ({ title, att}) => {

    return (
        <Card
        headStyle={{
            backgroundColor: 'black',
            width: 150,
            minHeight: 0,
            fontSize: 14,
            color: 'white'
        }}

        bodyStyle={{
            fontSize: 30,
            textAlign: 'center',
            padding: 0,
        }}
        title={title}>
            <p style={{
                margin: 0
            }}>{att}</p>
        </Card>
    )
}

export default CardAtt