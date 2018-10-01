import * as React from 'react'

interface IProps {
    count: number
}

export const Counter: React.SFC<IProps> = (props) => <strong> {props.count} </strong>