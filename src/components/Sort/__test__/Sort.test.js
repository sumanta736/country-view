import React from 'react';
import ReactDOM from 'react-dom';
import Sort from '../../Sort/Sort';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Sort />, div);
    ReactDOM.unmountComponentAtNode(div);
  });