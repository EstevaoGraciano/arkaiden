import { Card, Form, Input } from "antd";
import React, { FC } from "react";
import InputForm from "../input";

type LayoutType = Parameters<typeof Form>[0]['layout']

interface ICardAttForm {
    label: string,
    name: string,
    formLayout?: LayoutType,

}

const CardAttForm: FC<ICardAttForm> = ({label, name}) => {
    return (
        <div>
                <Card
                style={{ width: 'fit-content'}}
                headStyle={{
                    backgroundColor: 'black',
                    width: 150,
                    minHeight: 0,
                    fontSize: 14,
                    color: 'white'
                }}

                bodyStyle={{
                    fontSize: 30,
                    width: 'fit-content',
                    marginInline: 'auto',
                    textAlign: 'center',
                    padding: 0,
                }}
                title={label}>
                    <InputForm label="" name={name} customWidth={50}/>
                </Card>
        </div>
    )
}

export default CardAttForm;