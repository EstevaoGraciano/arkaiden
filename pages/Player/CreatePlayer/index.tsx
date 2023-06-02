import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../src/store";
import { IPlayer, createPlayerStart } from "../../../src/store/Player/Create/reducer";
import FormComponent from "../../../src/components/form";
import InputForm from "../../../src/components/form/input";
import { Button, Card, Form } from "antd";
import style from './CreatePlayer.module.scss'
import { IDescendency, createDescendencyStart } from '../../../src/store/Descendency/Create/reducer';
import { getAllDescendencyStart } from '../../../src/store/Descendency/GetAll/reducer';
import { getByIdDescendencyStart } from '../../../src/store/Descendency/GetById/reducer';
import { useForm } from 'antd/es/form/Form';
import InputNumberForm from '../../../src/components/form/number';
import { IClass, createClassStart } from '../../../src/store/Class/Create/reducer';
import { getByIdClassStart } from '../../../src/store/Class/GetById/reducer';
import { getAllClassStart } from '../../../src/store/Class/GetAll/reducer';
import SelectForm, { ISelectOption } from '../../../src/components/form/select';
import { GetDescendencyTraitList } from '../../../src/enums/descendencyTraits';
import CardAttForm from '../../../src/components/form/cardAtt';
import CharacterPage from '../../character/[id]';

const CreatePlayerPage = () => {
    const dispatch = useDispatch();

    const { player, descendency, descendencyList, classList } = useSelector((state: RootState) => {
        return {
            player: state.player.data,
            descendency: state.descendency.create,
            descendencyList: state.descendency.getAll.data,
            classList: state.classes.getAll.data
        }
    })

    const [form] = Form.useForm();

    useEffect(() => {
        dispatch(getAllDescendencyStart());
        dispatch(getAllClassStart())
    }, [])

    const classOptions = useMemo(() => {
        var classes = [...classList];
        var classOpts = classes.map((x): ISelectOption => ({
            label: x.name,
            value: x.id
        }))
        return classOpts
    }, [classList])

    const descendencyOptions = useMemo(() => {
        var descendencies = [...descendencyList];
        var descendencyOpts = descendencies.map((x): ISelectOption => ({
            label: x.name,
            value: x.id
        }));
        return descendencyOpts;
    }, [descendencyList])

    const handleClassDefaults = useCallback((selectedClass: IClass) => {
        form.setFieldValue('baseStr', selectedClass.baseStr);
        form.setFieldValue('baseAgi', selectedClass.baseAgi);
        form.setFieldValue('baseRes', selectedClass.baseRes);
        form.setFieldValue('baseInt', selectedClass.baseInt);
        form.setFieldValue('baseKnw', selectedClass.baseKnw);
        form.setFieldValue('baseCon', selectedClass.baseCon);
        form.setFieldValue('baseHealth', selectedClass.baseHealth);
        form.setFieldValue('baseGuard', selectedClass.baseGuard);
        form.setFieldValue('baseLowGuard', selectedClass.baseLowGuard);
        form.setFieldValue('baseDeathTurns', selectedClass.baseDeathTurns);
    }, [form])
    
    const handleSubmitPlayer = (values: IPlayer) => {
        const form: IPlayer = {
            name: values.name,
            description: values.description

        }
        dispatch(createPlayerStart(form))
    }

    const handleSubmitDescendencia = (values: IDescendency) => {
        const form: IDescendency = {
            id: values.id || 0,
            name: values.name,
            description: values.description

        }
        dispatch(createDescendencyStart(form))
    }

    const handleSubmitClasse = (values: IClass) => {
        const form: IClass = {
            id: values.id || 0,
            name: values.name,
            description: values.description,
            baseAgi: values.baseAgi,
            baseCon: values.baseCon,
            baseDeathTurns: values.baseDeathTurns,
            baseGuard: values.baseGuard,
            baseHealth: values.baseHealth,
            baseInt: values.baseInt,
            baseKnw: values.baseKnw,
            baseLowGuard: values.baseLowGuard,
            baseRes: values.baseRes,
            baseStr: values.baseStr,
        };
        dispatch(createClassStart(form));
    }

    return (
        <div className={style['main']}>
            <div>Criar Personagem</div>
            <FormComponent
                maxwidth={2000}
                formReference={form}
                onFinish={(values) => {handleSubmitClasse(values)}}
            >
                <SelectForm label={'Class'} name={'class'} options={classOptions}
                    onChange={(value: ISelectOption) => {
                        var selectedClass = classList.find((x) => x.id === value.value)
                        handleClassDefaults(selectedClass)
                    }}
                />
                <SelectForm label={'Descendency'} name={'descendency'} options={descendencyOptions}/>
                <SelectForm label={'Descendency Trait'} name={'descendencyTrait'} options={GetDescendencyTraitList()}/>
                <InputForm label={'Name'} name={'name'} />
                <InputForm label={'Last Name'} name={'lastName'} />

                <div style={{ display: 'flex' }}>
                    <CardAttForm label={'Strength'} name={'baseStr'} />
                    <CardAttForm label={'Resistance'} name={'baseRes'} />
                    <CardAttForm label={'Inteligence'} name={'baseInt'} />
                    <CardAttForm label={'Agility'} name={'baseAgi'} />
                    <CardAttForm label={'Knowledge'} name={'baseKnw'} />
                    <CardAttForm label={'Confidence'} name={'baseCon'} />
                </div>
                <div style={{ display: 'flex' }}>
                    <CardAttForm label={'Health'} name={'baseHealth'} />
                    <CardAttForm label={'Guard'} name={'baseGuard'} />
                    <CardAttForm label={'Low Guard'} name={'baseLowGuard'} />
                    <CardAttForm label={'Death Turns'} name={'baseDeathTurns'} />
                </div>

                <Button htmlType='submit'>Enviar</Button>

            </FormComponent>



            <CharacterPage character={
                {
                    name: 'PRINGLES',
                    lastName: 'the Guy',
                    descendency: descendencyList[0],
                    class: classList[0]
                
                }
            }/>
            {/* <FormComponent
                maxwidth={2000}
                onFinish={(values) => {handleSubmitPlayer(values)}}
            >
                <InputForm label={'Nome'} name={'name'} />
                <InputForm label={'Descrição'} name={'description'} />
                <Button htmlType='submit'>Enviar</Button>

            </FormComponent> */}

            {/* <div>Criar Classe</div>
            <FormComponent
                maxwidth={2000}
                formReference={form}
                onFinish={(values) => {handleSubmitDescendencia(values)}}
            >
                <InputNumberForm label={'NUMERO'} name={'number'} />
                <InputForm label={'Id'} name={'id'} />
                <InputForm label={'Nome'} name={'name'} />
                <InputForm label={'Descrição'} name={'description'} />
                <Button htmlType='submit'>Enviar</Button>
                <Button onClick={() => dispatch(getByIdDescendencyStart(+form.getFieldValue('id')))}>Get By Id</Button>

            </FormComponent> */}

            {/* <div>Criar Classe</div>
            <FormComponent
                maxwidth={2000}
                formReference={form}
                onFinish={(values) => {handleSubmitClasse(values)}}
            >
                <InputForm label={'Id'} name={'id'} />
                <InputForm label={'Nome'} name={'name'} />
                <InputForm label={'Descrição'} name={'description'} />
                <InputNumberForm label={'Strength'} name={'baseStr'} />
                <InputNumberForm label={'Resistance'} name={'baseRes'} />
                <InputNumberForm label={'Inteligence'} name={'baseInt'} />
                <InputNumberForm label={'Agility'} name={'baseAgi'} />
                <InputNumberForm label={'Knowledge'} name={'baseKnw'} />
                <InputNumberForm label={'Confidence'} name={'baseCon'} />
                <InputNumberForm label={'Health'} name={'baseHealth'} />
                <InputNumberForm label={'Guard'} name={'baseGuard'} />
                <InputNumberForm label={'Low Guard'} name={'baseLowGuard'} />
                <InputNumberForm label={'Death Turns'} name={'baseDeathTurns'} />
                <Button htmlType='submit'>Enviar</Button>
                <Button onClick={() => dispatch(getByIdClassStart(+form.getFieldValue('id')))}>Get By Id</Button>

            </FormComponent> */}




            {/* <div style={{
                        display: 'flex',
                        marginTop: 20
                    }}>
            {descendencyList.map((x) => {
                return (
                    <Card hoverable title={x.name}>
                        <p>{x.description}</p>
                    </Card>
                )
            })}
            </div> */}
        </div>
    )
}

export default CreatePlayerPage;