import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../src/store";
import { IPlayer, createPlayerStart } from "../../../src/store/Player/Create/reducer";
import FormComponent from "../../../src/components/form";
import InputForm from "../../../src/components/form/input";
import { Button } from "antd";
import style from './CreatePlayer.module.scss'

const CreatePlayer = () => {
    const dispatch = useDispatch();

    const { player } = useSelector((state: RootState) => {
        return {
            player: state.player.data
        }
    })

    const handleSubmit = (values: IPlayer) => {
        const form: IPlayer = {
            name: values.name,
            description: values.description

        }
        dispatch(createPlayerStart(form))
    }

    return (
        <div className={style['main']}>
            <FormComponent
                maxwidth={2000}
                onFinish={(values) => {handleSubmit(values)}}
            >
                <InputForm label={'Nome'} name={'name'} />
                <InputForm label={'Descrição'} name={'description'} />
                <Button htmlType='submit'>Enviar</Button>

            </FormComponent>

            <div>{player.name}</div>
            <div>{player.description}</div>
            <div>{player.id}</div>
        </div>
    )
}

export default CreatePlayer;