import React from 'react'
import { Alert } from 'react-bootstrap';

function ErrorAlert(){
    return(
        <Alert data-test = "error-alert-component" variant='danger' style = {{margin : '2rem auto', width: '33%'}}>
            Something went wrong, please try again later.
        </Alert>
    )
}

export default ErrorAlert;
