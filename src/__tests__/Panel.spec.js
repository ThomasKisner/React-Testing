import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from '../components/Panel/Panel';

Enzyme.configure({ adapter: new Adapter() });

describe('<Panel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Panel />, div);
  });

  it('Should add named value to state on click', ()=> {
    const wrapper = shallow(<Panel/>);
    const instance= wrapper.instance();
  
    const button = wrapper.find('button.AC');
  
    button.simulate('click');
    expected(instance.state.total).toBe(0); 
  
  });
})