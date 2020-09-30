import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Filter from '../../Filter/Filter';

describe('test Filter component', () => {
  const mockData = {
    type: 'text',
    value: 'nor',
    onChange: jest.fn(),
    placeholder: 'Type here',
    filterSubmit: jest.fn(),
    filterBtnText: 'Filter data'
  };
  afterEach(cleanup);
  it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Filter />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('submit filter with mockData', () => {
    const { getByText } = render(
      <Filter
        type={mockData.type}
        value={mockData.value}
        onChange={mockData.onChange}
        placeholder={mockData.placeholder}
        filterSubmit={mockData.filterSubmit}
        filterBtnText={mockData.filterBtnText}
      />
    );

    fireEvent.click(getByText(/Filter data/i));

    expect(mockData.filterSubmit).toBeCalled();
  });
});
