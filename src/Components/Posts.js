import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Entry from './Entry';


function Post(props){
    return(
        <div data-test = "posts-component">
            <h3 data-test = "posts-heading">Posts List</h3>
            {
                props.posts.map((post, index )=> <Entry key = {index} entry = {post} /> )
            }
        </div>
    )
}

Post.propTypes = {
    posts : PropTypes.array
}

const mapStateToProps = state => ({
    posts : state.posts,
})

export default connect(mapStateToProps)(Post);