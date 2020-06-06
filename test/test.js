import React from 'react';


import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import * as TestUtils from 'react-dom/test-utils.js';
const Tokenizer = require('../src/Tokenizer/Tokenizer.jsx').default;


Enzyme.configure({ adapter: new Adapter() })


var wrapper;
var btn;  
var input;
var data;
 
var onChange = obj =>{ 	wrapper.setProps(obj);	}
		
var value = v => {
	return { currentTarget: {value: v} }
}
  
beforeEach(() => {
	wrapper = (shallow(<Tokenizer name="tokens" tokens={ [] } setState={ onChange  }  />));
	btn = wrapper.find('button');  
	input = wrapper.find('input');
	data = ['animal', 'dog', 'shaggy', 'wag']
});  
 

describe('Tokenizer', () => {
	
    test('create', () => {

		data.forEach( (val, i) =>{
			input.simulate('change', value(val) ) 
			btn.simulate('mousedown');
		})

	    expect(wrapper.find('.token').length).toBe(4);
			
		wrapper.find('.token span').forEach( (v,i) => {	
			expect(v.text()).toBe(data[i]);
		})
    });
   
   
    test('delete', () => {
	
		data.forEach( (val, i) =>{
			input.simulate('change', value(val) ) 
			btn.simulate('mousedown');
		})
	
		wrapper.find('.close-btn').at(2).simulate('click');	
		expect(wrapper.find('.token').length ).toBe(3);			
		expect(wrapper.find('.token span').at(0).text() ).toBe('animal');
		expect(wrapper.find('.token span').at(1).text()).toBe('dog');
		expect(wrapper.find('.token span').at(2).text()).toBe('wag');
			
		wrapper.find('.close-btn').at(0).simulate('click');	
		expect(wrapper.find('.token').length ).toBe(2);			
		expect(wrapper.find('.token span').at(0).text()).toBe('dog');
		expect(wrapper.find('.token span').at(1).text()).toBe('wag');
		
    });
   
   
    
    test('duplicate', () => {
		input.simulate('change', value("animal") ) 
		btn.simulate('mousedown');

		input.simulate('change', value("animal") ) 
		btn.simulate('mousedown');

		input.simulate('change', value("dog") ) 
		btn.simulate('mousedown');

		expect(wrapper.find('.token').length ).toBe(2);			
		expect(wrapper.find('.token span').at(0).text()).toBe('animal');
		expect(wrapper.find('.token span').at(1).text()).toBe('dog');
    });
 

    test('duplicate_error', () => {

		input.simulate('change', value('aaa') ) 
		btn.simulate('mousedown');
		expect(wrapper.state().className).toBe('');
		
		
		input.simulate('change', value('bbb') ) 
		btn.simulate('mousedown');
		expect(wrapper.state().className).toBe('');


		input.simulate('change', value('aaa') ) 
		btn.simulate('mousedown');
		expect(wrapper.state().className).toBe('invalid');

		input.simulate('change', value('ccc') ) 
		btn.simulate('mousedown');
		expect(wrapper.state().className).toBe('');
    });  
});




