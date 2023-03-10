import React from 'react';
import Login from '..';
import { render } from '@testing-library/react';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
}));

describe('Login Page', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Login />);
    expect(asFragment()).toMatchSnapshot();
  });
});
