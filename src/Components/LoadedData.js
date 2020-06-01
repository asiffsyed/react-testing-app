import React from 'react';
import Post from './Posts'
import User from './Users'
import Comment from './Comments'


function LoadedData(){
    return(
        <div data-test = "loaded-data-component" className="container card" >
            <div className="row">
                <div className="col-sm">
                    <User />
                </div>
                <div className="col-sm">
                    <Post />
                </div>
                <div className="col-sm">
                    <Comment />
                </div>
            </div>
        </div>
    )
}

export default LoadedData;
