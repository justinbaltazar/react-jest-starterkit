import React from 'react';
import { mount, configure } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/components/App';

configure({ adapter: new Adapter() });

const storeState = {};
const mockStore = configureStore();
const store = mockStore(storeState);
store.dispatch = jest.fn();

describe('App', () => {
  const appComponent = (props = {}) => (
    mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App {...props} />
        </MemoryRouter>
      </Provider>,
    )
  );

  it('should render properly', () => {
    expect(appComponent().exists()).toBe(true);
  });

  it('should render the route properly', () => {
    const app = appComponent();
    console.log(app.html());
    expect(app.find('About').exists()).toBe(false);
    expect(app.find('Welcome').exists()).toBe(true);
  });
});
