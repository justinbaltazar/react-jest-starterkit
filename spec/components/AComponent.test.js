import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AComponent from 'components/AComponent';

configure({ adapter: new Adapter() });

describe('AComponent', () => {
  const appComponent = (props = {}) => (
    mount(
      <AComponent {...props} />,
    )
  );

  it('should render properly', () => {
    expect(appComponent().exists()).toBe(true);
  });
});
