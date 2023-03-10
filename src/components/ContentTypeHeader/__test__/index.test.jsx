import React from 'react';
import ContentTypeHeader from '..';
import { render } from '@testing-library/react';

describe('Content Type Header', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<ContentTypeHeader />);
    expect(asFragment()).toMatchSnapshot();
  });
});