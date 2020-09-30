import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Countries from '../../Countries/Countries';

describe('test for Country dropdown', () => {
  const arr = [
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
  const mockData = {
    countryList: arr,
    countryChange: jest.fn()
  };
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Countries />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('country select', () => {
    const { getByText } = render(
      <Countries countryChange={mockData.countryChange} countries={mockData.countryList} />
    );
    expect(getByText('Choose Country:')).toBeTruthy();
  });
});
