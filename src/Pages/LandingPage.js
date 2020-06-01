import React from 'react';
import Form from '@rjsf/core';
import { connect } from 'react-redux';
import { nameAction } from '../redux/actions';

export function UnConnectedLandingPage(props){
    const [ formData, setFormData ] = React.useState(null);

    const schema = {
        type : 'object',
        title : 'Enter your name',
        properties : {
            fName : {
                title : 'First Name',
                type : 'string'
            },
            lName : {
                title : 'Last Name',
                type : 'string'
            }
        },
        required : ['fName', 'lName']
    }
    const handleSubmit = () => {
        //Calls the action creator to handle name
        props.userNameAction(formData);
        //deletes the values in the input fields
        setFormData({fName : '', lName : ''})
        //redirects to main page
        props.history.push('/app');
    }
    return(
        <div style = {{ margin : 'auto', width : '20%'}}>
            <Form
                schema = {schema}
                idPrefix = {"login-form"}
                formData = { formData }
                onChange = { event => setFormData(event.formData) }
                onSubmit = { handleSubmit }
            />
        </div>
    )
}



const mapDispatchToProps = dispatch => ({
    userNameAction : payload => dispatch(nameAction(payload))
})

export default connect(null, mapDispatchToProps)(UnConnectedLandingPage);