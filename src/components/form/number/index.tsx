import { Form, InputNumber } from "antd";
import React, { FC } from "react";
import style from "./InputNumberForm.module.scss";

type LayoutType = Parameters<typeof Form>[0]['layout']

interface IInputNumberForm {
    label: string,
    name: string,
    defaultValue?: number,
    min?: number,
    max?: number
    formLayout?: LayoutType,
}

const InputNumberForm: FC<IInputNumberForm> = ({label, name, defaultValue, min, max}) => {
    return (
        <div className={style['main']}>
            <Form.Item
            label={`${label}:`}
            name={name}
            >
                <InputNumber defaultValue={defaultValue} min={min} max={max}/>
            </Form.Item>
        </div>
    )
}

export default InputNumberForm;