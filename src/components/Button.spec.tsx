import {shallow} from 'enzyme'
import * as React from 'react'
import {Button} from './Button'

describe('Button', () => {
    it('should render properly', () => {
        const button = shallow(<Button text={`test`}/>)
        expect(button).toMatchSnapshot()
    })
    it( 'should call the onClick property when clicked', () => {
        const onClick = jest.fn()
        const button = shallow(<Button text={'test'} onClick={onClick}/>)
        expect(onClick).not.toBeCalled()
        button.simulate('click')
        expect(onClick).toBeCalled()
    })
})