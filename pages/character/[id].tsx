import React, { FC } from 'react';
import { IDescendency } from '../../src/store/Descendency/Create/reducer';
import { DescendencyTrait } from '../../src/enums/descendencyTraits';
import { IClass } from '../../src/store/Class/Create/reducer';
import CardAtt from '../../src/components/sheet/CardAtt';

interface ICharacter {
    id?: number;
    name: string;
    lastName?: string;
    descendency?: IDescendency;
    symbol?: boolean;
    symbolLocation?: string;
    class?: IClass;
    descendencyTrait?: DescendencyTrait;
}

interface ICharacterPage {
    character: ICharacter
}

const CharacterPage: FC<ICharacterPage> = ({ character }) => {

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{ `${character.name} ${character.lastName}` }</h1>
            <h3>{character.descendency?.name}</h3>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                marginInline: 'auto'
            }}>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around',
                    margin: 10
                }}>
                        <CardAtt title='Strength' att={character.class?.baseStr} />
                        <CardAtt title='Resistance' att={character.class?.baseRes} />
                        <CardAtt title='Agility' att={character.class?.baseAgi} />
                        <CardAtt title='Inteligence' att={character.class?.baseInt} />
                        <CardAtt title='Knowledge' att={character.class?.baseKnw} />
                        <CardAtt title='Confidence' att={character.class?.baseCon} />
                </div>

                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-around',
                    margin: 10
                }}>
                        <CardAtt title='Health' att={character.class?.baseHealth} />
                        <CardAtt title='Guard' att={character.class?.baseGuard} />
                        <CardAtt title='Low Guard' att={character.class?.baseLowGuard} />
                        <CardAtt title='Death Turns' att={character.class?.baseDeathTurns} />
                </div>
            </div>
        </div>
    )
}

export default CharacterPage;