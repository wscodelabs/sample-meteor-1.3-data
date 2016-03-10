import React from 'react'
import PostForm from './postsForm.jsx'
import PostContainer from '../containers/postContainer.jsx'

class PostWrapper extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
   return  <div className="row">
      <div className="col col-md-4">
        <div className="well well-lg">
          <PostForm />
        </div>
      </div>
     <div className="col-md-8">
       <PostContainer test="test"  />
     </div>
    </div>

  }

}

export default PostWrapper;
