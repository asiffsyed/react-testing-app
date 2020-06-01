import React from 'react';
import { Spinner } from 'react-bootstrap';

function LoadingSpinner(){
    return(
            <div data-test = 'spinner-component'>
                <h5 data-test = "spinner-heading" style = {{marginTop : "3rem", marginBottom: "2rem", fontStyle : "bold"}}>
                    Please wait, your request is being processed.
                </h5>
                <Spinner data-test = "spinner" animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
    )
}

export default LoadingSpinner;
