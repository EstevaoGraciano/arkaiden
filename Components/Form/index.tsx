import { Form, FormInstance } from "antd";
import React, { FC, useEffect } from "react";

type LayoutType = Parameters<typeof Form>[0]['layout']
export interface IForm {
    onFinish: (values : any) => void,
    onFail?: (error: any) => void,
    resetInitial?: boolean,
    initialValues?: any,
    children?: React.ReactNode,
    disabled?: boolean,
    formReference?: FormInstance<any>,
    layoutType?: LayoutType,
    maxwidth?: number

}

const FormComponent: FC<IForm> = ({children, initialValues, disabled, formReference, resetInitial, layoutType, maxwidth, onFinish, onFail}) => {

    const DEFAULT_WIDTH = 600;

    useEffect(() => {
        if (resetInitial) {
            formReference.resetFields()
        }
    }, [resetInitial, initialValues])

    return (
        <Form
            name="basic"

            style={
                {
                    maxWidth: maxwidth | DEFAULT_WIDTH
                }
            }

            form={formReference}
            layout={layoutType || 'vertical'}
            initialValues={...initialValues}
            preserve={true}
            onFinish={onFinish}
            onFinishFailed={onFail}
            autoComplete="off"
            disabled={disabled}
        >
            {children}
        </Form>
    )
}

export default FormComponent;