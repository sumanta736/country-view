import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import Table from '../../Table/Table';

describe('test Table component', () => {
  const mockData = [
    {
      name: 'Afghanistan',
      capital: 'Kabul',
      region: 'Asia',
      population: 27657145,
      currencies: [{ name: 'Afghan afghani' }]
    },
    {
      name: 'Bolivia',
      capital: 'Sucre',
      region: 'Americas',
      population: 10985059,
      currencies: [{ name: 'Bolivian boliviano' }]
    }
  ];
  afterEach(cleanup);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('mockdata in table', () => {
    const { getByText } = render(<Table response={mockData} />);
    expect(getByText('Capital')).toBeTruthy();
  });
});
