import { Form, Input } from "antd";
import React, { FC } from "react";
import style from "./InputForm.module.scss"

type LayoutType = Parameters<typeof Form>[0]['layout']

interface IInputForm {
    label: string,
    name: string,
    formLayout?: LayoutType,

}

const InputForm: FC<IInputForm> = ({label, name}) => {
    return (
        <div className={style['main']}>
            <Form.Item
            label={`${label}:`}
            name={name}
            >
                <Input />
            </Form.Item>
        </div>
    )
}

export default InputForm;