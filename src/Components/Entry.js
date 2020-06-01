import React from 'react';
import PropTypes from 'prop-types';

function Entry({ entry }){
    return (
        <div data-test = "component-entry" className="card">
            <div className="card-body">
                { entry }
            </div>
        </div>
    )
}

Entry.propTypes = {
    entry : PropTypes.string.isRequired
}

export default Entry;