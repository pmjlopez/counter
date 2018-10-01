import {shallow} from 'enzyme'
import * as React from 'react'
import {Counter} from './Counter'

describe('Counter', () => {
    it('should render properly', () => {
        const counter = shallow(<Counter count={0}/>)
        expect(counter).toMatchSnapshot()
    })
})