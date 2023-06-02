import { Form, Input } from "antd";
import React, { FC } from "react";
import style from "./InputForm.module.scss"

type LayoutType = Parameters<typeof Form>[0]['layout']

interface IInputForm {
    label: string,
    name: string,
    customWidth?: number,
    formLayout?: LayoutType,

}

const DEFAULT_WIDTH = 400;

const InputForm: FC<IInputForm> = ({label, name, customWidth}) => {
    return (
        <div
        style={{ width: customWidth || DEFAULT_WIDTH}}
        >
            <Form.Item
            label={label != '' ? `${label}:` : ''}
            name={name}
            >
                <Input />
            </Form.Item>
        </div>
    )
}

export default InputForm;