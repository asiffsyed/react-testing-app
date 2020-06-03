import React from 'react';
import { connect, } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingSpinner from '../Components/Spinner'
import LoadedData from '../Components/LoadedData';
import ErrorAlert from '../Components/ErrorAlert';
import { getCommentAction, getUserAction, getPostAction, } from '../redux/actions'

export function UnConnectedMainPage(props) {

 return (
    <div className="App">
      <h5 data-test = "welcome-message">Hello { props.name.fName + ' ' + props.name.lName }, Click on a button to  load the data </h5>
      <div>
        <button data-test = "get-user-button" onClick = {props.getUser} className = "btn btn-primary">Get a User</button>
        <button data-test = "get-post-button" onClick = {props.getPost} className = "btn btn-success">Get a Post</button>
        <button data-test = "get-comment-button" onClick = {props.getComment} className = "btn btn-warning">Get a Comment</button>
      </div>
      {/* Renders the error message only if the error occurs */}
      {props.error ? <ErrorAlert /> : null}
      {/* Loads spinner if the api request is in progress otherwise loads the component */}
      { props.loading ? <LoadingSpinner /> : <LoadedData />}
    </div>
  );
}

const mapStateToProps = state => ({
  error : state.error,
  loading: state.loading,
  name : state.name
})
export const mapDispatchToProps = dispatch => ({
  getPost : () => dispatch(getPostAction()),
  getUser : () => dispatch(getUserAction()),
  getComment : () => dispatch(getCommentAction()),
})


// UnConnectedMainPage.propTypes = {
//   error : PropTypes.bool.isRequired,
//   name : PropTypes.shape({
//     fName : PropTypes.string,
//     lName : PropTypes.string,
//   }).isRequired,
//   loading : PropTypes.bool.isRequired,
//   getPost : PropTypes.func.isRequired,
//   getUser : PropTypes.func.isRequired,
//   getComment : PropTypes.func.isRequired,
// }
export default connect(mapStateToProps, mapDispatchToProps)(UnConnectedMainPage);
