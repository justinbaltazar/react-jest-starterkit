import React from 'react';
import { mount, configure } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import AppRouter from 'routers/AppRouter';

configure({ adapter: new Adapter() });

const storeState = {};
const mockStore = configureStore();
const store = mockStore(storeState);
store.dispatch = jest.fn();

describe('AppRouter', () => {
  const appComponent = (props = {}, initialEntries = ['/']) => (
    mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          <AppRouter {...props} />
        </MemoryRouter>
      </Provider>,
    )
  );

  it('should render properly', () => {
    expect(appComponent().exists()).toBe(true);
  });

  it('should render a route properly', () => {
    const app = appComponent();
    expect(app.find('About').exists()).toBe(false);
    expect(app.find('Welcome').exists()).toBe(true);
  });

  it('should render the error properly', () => {
    const app = appComponent({}, ['/non_existent_route']);
    expect(app.find('Error404').exists()).toBe(true);
    expect(app.find('About').exists()).toBe(false);
    expect(app.find('Welcome').exists()).toBe(false);
  });
});
