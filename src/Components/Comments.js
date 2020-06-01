import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Entry from './Entry';

export function Comments(props){
    return(
        <div data-test = "comments-component">
            <h3 data-test = "comments-heading">Comments List</h3>
            {
                props.comments.map((comment, index) => <Entry key = { index } entry = {comment} /> )
            }
        </div>
    )
}

Comments.propTypes = {
    comments : PropTypes.array
}



const mapStateToProps = state => ({
    comments : state.comments,
})

export default connect(mapStateToProps)(Comments);