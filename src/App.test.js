import React from 'react';
import { MemoryRouter, Route  } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { mount} from './enzymeSetUp';
import { storeFactory } from './testHelpers';
import LandingPage from './Pages/LandingPage'
import MainPage from './Pages/MainPage'
import NotFoundPage from './Pages/NotFoundPage'

describe('<App /> renders right component at corresponding route', () => {
    const store = storeFactory({})

    test('it renders <LandingPage /> at path "/" and does not render <NotFound />', () => {
        const wrapper = mount(<Provider store = { store }>
            <MemoryRouter initialEntries = {['/']}>
                <App />
            </MemoryRouter>
          </Provider>)
        expect(wrapper.find(LandingPage)).toHaveLength(1);
        expect(wrapper.find(NotFoundPage)).toHaveLength(0);
        wrapper.unmount();
    })
    test('it renders <MainPage /> at path "/app" and does not render <NotFound />', () => {
        const wrapper = mount(<Provider store = { store }>
            <MemoryRouter initialEntries = {['/app']}>
                <App />
            </MemoryRouter>
          </Provider>)
        expect(wrapper.find(MainPage)).toHaveLength(1);
        expect(wrapper.find(NotFoundPage)).toHaveLength(0);
        wrapper.unmount();
    })
    test('it renders <NotFoundPage /> at an unknown path and does not render other components', () => {
       const wrapper = mount(<Provider store = { store }>
            <MemoryRouter initialEntries = {['/someRandomPath']}>
                <App />
            </MemoryRouter>
          </Provider>)
        expect(wrapper.find(NotFoundPage)).toHaveLength(1);
        expect(wrapper.find(LandingPage)).toHaveLength(0);
        expect(wrapper.find(MainPage)).toHaveLength(0);
        wrapper.unmount();
    })
})

test('A click event on button in Notfound page redirects to Landing page', () => {
    const store = storeFactory({});
    let compHistory;
    let compLocation;
  const wrapper =  mount(<Provider store = { store }>
        <MemoryRouter initialEntries = {['/someRandomPath']}>
            <App />
            <Route path = "*" render = { ({ history, location }) => {
                compHistory = history;
                compLocation = location;
                return null;
            } } />
        </MemoryRouter>
      </Provider>)
    const btn = wrapper.find('button.home-button').first();
    btn.simulate('click');
    expect(compLocation.pathname).toBe('/');
    wrapper.unmount();
})
