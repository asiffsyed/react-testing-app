import React from 'react';
import { Alert } from 'react-bootstrap';

function NotFoundPage(props){
    return(
        <div style = {{ width: '75%', margin : '4rem auto'}}>
            <Alert variant="danger">
                <Alert.Heading>Ah..! Page Not Found</Alert.Heading>
                <p>
                  Error: 404
                  The page you are looking for is not found.
                </p>
                <button className = 'btn btn-info home-button' onClick = { () => props.history.push('/')  }>Navigate to Home</button>
            </Alert>
        </div>
    )
}

export default NotFoundPage;