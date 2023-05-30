import { useRouter } from 'next/router';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getByIdClassStart } from '../../src/store/Class/GetById/reducer';
import { RootState } from '../../src/store';
import { Card } from 'antd';
import CardAtt from '../../src/components/sheet/CardAtt';


export const ClassPage: FC = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const { classes } = useSelector((state: RootState) => {
        return {
            classes: state.classes.getById.data
        }
    })
    
    useEffect(() => {
        const id = router.query.id;
        console.log(id)

        if (id) {
            dispatch(getByIdClassStart(id))
        }
    }, [router])

    return (
        <div style={{
            width: '100%',
            textAlign: 'center'
        }}>
            <div>
                <h1>{classes.name}</h1>
                <h3>{classes.description}</h3>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                margin: 10
            }}>
                    <CardAtt title='Strength' att={classes.baseStr} />
                    <CardAtt title='Resistance' att={classes.baseRes} />
                    <CardAtt title='Agility' att={classes.baseAgi} />
                    <CardAtt title='Inteligence' att={classes.baseInt} />
                    <CardAtt title='Knowledge' att={classes.baseKnw} />
                    <CardAtt title='Confidence' att={classes.baseCon} />
            </div>

            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                margin: 10
            }}>
                    <CardAtt title='Health' att={classes.baseHealth} />
                    <CardAtt title='Guard' att={classes.baseGuard} />
                    <CardAtt title='Low Guard' att={classes.baseLowGuard} />
                    <CardAtt title='Death Turns' att={classes.baseDeathTurns} />
            </div>
            </div>
        </div>
    )
}


export default ClassPage
