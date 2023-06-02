import { Form, Select } from "antd";
import React, { FC } from "react";
import style from './SelectForm.module.scss'

type LayoutType = Parameters<typeof Form>[0]['layout']

export interface ISelectOption {
    label: string;
    value: number | string;
    disabled?: boolean
}
interface ISelectForm {
    label: string,
    name: string,
    options: ISelectOption[],
    onChange?: (option: ISelectOption | ISelectOption[]) => void,
    defaultValue?: number,
    customWidth?: number,
    formLayout?: LayoutType,
}

const DEFAULT_WIDTH = 400

const SelectForm: FC<ISelectForm> = ({label, name, defaultValue, options, customWidth, onChange}) => {
    const handleOnChange = (option: ISelectOption | ISelectOption[]) => {
        onChange && onChange(option)
    }

    return (
        <div className={style['main']}>
            <Form.Item
            label={`${label}:`}
            name={name}
            >
                <Select 
                defaultValue={defaultValue}
                options={options}
                style={{
                    width: customWidth || DEFAULT_WIDTH,
                }}
                onChange={(value, option) => {handleOnChange(option)}}
                />
            </Form.Item>
        </div>
    )
}

export default SelectForm;