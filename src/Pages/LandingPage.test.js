import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import { shallow, render, mount } from '../enzymeSetUp';
import LandingPage, { UnConnectedLandingPage } from './LandingPage';
import { storeFactory } from '../testHelpers';
import App from '../App';

describe('<LandingPage /> renders all the elements', () => {
    const wrapper = render(<UnConnectedLandingPage />)
    test('It renders form title', () => {
        const formTitle = wrapper.find('#login-form__title');
        expect(formTitle).toHaveLength(1);
    })

    test('It renders an input element for the  first name', () => {
        const fNameInput = wrapper.find('#login-form_fName');
        expect(fNameInput).toHaveLength(1);
    })

    test('It renders an input element for the last name', () => {
        const lNameInput = wrapper.find('#login-form_fName');
        expect(lNameInput).toHaveLength(1);
    })

    test('It renders a submit button', () => {
        const submitBtn = wrapper.find('[type="submit"]');
        expect(submitBtn).toHaveLength(1);
    })
})

describe('The input fields have value from the state', () => {
    const formData = {
        fName: 'Hello',
        lName : 'World'
    }
    const useStateMock = jest.fn(() => [ formData, () => {}]);
    React.useState = useStateMock;
    const wrapper = render(<UnConnectedLandingPage />);
    test('The First Name input element gets value from the state', () => {
        const fNameInput = wrapper.find('#login-form_fName');
        expect(fNameInput.val()).toBe(formData.fName);
    })
    test('The Last Name input element gets value from the state', () => {
        const lNameInput = wrapper.find('#login-form_lName');
        expect(lNameInput.val()).toBe(formData.lName);
    })
    afterAll(() => {
        useStateMock.mockClear();
    })
})

describe('onChange event on input fields changes the state accordingly', () => {
    const formDataMock = jest.fn();
    const useStateMock = jest.fn(() => [{}, formDataMock]);
    React.useState = useStateMock;
    const wrapper = mount(<UnConnectedLandingPage />);
    test('OnChange action on first name input changes the value in the state', () => {
        const fNameInput = wrapper.find('input#login-form_fName').first();
        fNameInput.simulate('change', { target : { value : 'Asif'} });
        expect(formDataMock).toHaveBeenCalledWith({fName : 'Asif'});
    })

    test('OnChange action on first name input changes the value in the state', () => {
        const lNameInput = wrapper.find('input#login-form_lName').first();
        lNameInput.simulate('change', { target : { value : 'Syed' }});
        expect(formDataMock).toHaveBeenCalledWith({fName: 'Asif', lName : 'Syed'});
    })

    afterEach(() => {
        formDataMock.mockClear();
        useStateMock.mockClear();
    })
    afterAll(() => {
        wrapper.unmount();
    })
})

describe('The <LandingPage /> receives the userNameAction action creator as a prop', () => {
    const store = storeFactory({});
    test('The <LandingPage /> receives the userNameAction action creator as a prop', () => {
        const wrapper = shallow(<LandingPage store = { store } />);
        expect(wrapper.props().userNameAction).toBeInstanceOf(Function);
    })
})


test('On submit triggers the userNameAction with formData as payload', () => {
    const userNameActionMock = jest.fn();
    const pushMock = jest.fn();
    const history = {
        push : pushMock
    }
    const wrapper = mount(<UnConnectedLandingPage history = { history } userNameAction = { userNameActionMock } />);
        //Finding the form
        const form = wrapper.find('form.rjsf').first();
        //Finding the First name input element
        const fNameInput = wrapper.find('input#login-form_fName').first();
        //Passing a value to the input element
        fNameInput.simulate('change', { target : { value : 'Asif' }})
        //Finding the last name input element
        const lNameInput = wrapper.find('input#login-form_lName').first();
        //Passing a value to the input element
        lNameInput.simulate('change', { target : { value : 'Syed' }})
        //Submitting the form
        form.simulate('submit');
        expect(userNameActionMock.mock.calls.length).toBe(1);
})


test('A submit event on form in Landing page redirects to main page', () => {
    const store = storeFactory({});
    let his;
    let loc;
  const wrapper =  mount(<Provider store = { store }>
        <MemoryRouter initialEntries = {['/']}>
            <App />
            <Route path = "*" render = { ({ history, location }) => {
                his = history;
                loc = location;
                return null;
            } } />
        </MemoryRouter>
      </Provider>)
    //Finding the form
    const form = wrapper.find('form.rjsf').first();
    //Finding the First name input element
    const fNameInput = wrapper.find('input#login-form_fName').first();
    //Passing a value to the input element
    fNameInput.simulate('change', { target : { value : 'Asif' }})
    //Finding the last name input element
    const lNameInput = wrapper.find('input#login-form_lName').first();
    //Passing a value to the input element
    lNameInput.simulate('change', { target : { value : 'Syed' }})
    //Submitting the form
    form.simulate('submit');
    expect(loc.pathname).toBe('/app');
    wrapper.unmount();
})