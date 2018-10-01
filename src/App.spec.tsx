import {shallow} from 'enzyme'
import * as React from 'react'
import App from './App'

describe('App', () => {
    beforeEach(() => localStorage.clear())
    it('should render properly', () => {
        const app = shallow(<App />)
        expect(app).toMatchSnapshot()
    })
    describe('add()', () => {
        it('should add 1 to the state count', () => {
            const app = shallow(<App />)
            expect(app.state('count')).toBe(0)
            const instance = app.instance() as App
            instance.add()
            expect(app.state('count')).toBe(1)
        })
    })
    describe('subtract()', () => {
        it('should subtract 1 to the state count', () => {
            const app = shallow(<App />)
            expect(app.state('count')).toBe(0)
            const instance = app.instance() as App
            instance.subtract()
            expect(app.state('count')).toBe(-1)
        })
    })
})