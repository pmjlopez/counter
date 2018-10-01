import * as React from 'react'
import {Consumer} from '../App';
import {Button} from './Button'
import {Counter} from './Counter'

interface IProps {
    add: (event: React.SyntheticEvent<any>) => void,
    subtract: (event: React.SyntheticEvent<any>) => void,
    count: number
}

export const Display: React.SFC<IProps> = (props) => <React.Fragment>
    <Consumer>
        {({theme}) => <React.Fragment>
            <Button text={`-`} onClick={props.subtract}/>
            <Counter count={props.count}/>
            <span>{theme}</span>
            <Button text={`+`} onClick={props.add}/>
        </React.Fragment>
        }
    </Consumer>
</React.Fragment>