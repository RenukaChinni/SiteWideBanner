import React from 'react';
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { Banner } from '../src/components/Banner';
import { store, reducer } from '../src/store';

// Do not modify or delete these tests. These are required to pass to mark your submission.
describe('basic tests', () => {
  it('should expose reducer', () => {
    expect(reducer).toBeDefined();
  });

  it('should be able to render without properties being passed in', () => {
    const { container } = render(
      <Provider store={store}>
        <Banner />
      </Provider>
    );
    expect(container).toBeDefined();
  });
});
