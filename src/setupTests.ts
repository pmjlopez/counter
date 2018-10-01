import * as Enzyme from 'enzyme'
import {mockLocalStorage} from './mock/localStorage'
const EnzymeAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdapter() });

(global as any).localStorage = mockLocalStorage()