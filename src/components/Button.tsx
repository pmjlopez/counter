import * as React from 'react'

interface IProps {
    text: string
    onClick?: (event: React.SyntheticEvent<any>) => void
}

export const Button: React.SFC<IProps> = (props) => <button onClick={props.onClick}>{props.text}</button>