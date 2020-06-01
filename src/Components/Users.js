import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Entry from './Entry';

function User(props){
    return(
        <div>
            <h3>Users List</h3>
            {
                props.users.map((user, index) => <Entry key = {index} entry = {user} /> )
            }
        </div>
    )
}
User.propTypes = {
    users : PropTypes.array
}



const mapStateToProps = state => ({
    users : state.users,
})

export default connect(mapStateToProps)(User);