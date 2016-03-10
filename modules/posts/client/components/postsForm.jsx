import React from 'react'
import {Meteor} from 'meteor/meteor'

class PostForm extends React.Component{
  constructor(props){
    super(props)
  }

  handelSubmit(evt){
    evt.preventDefault();
    let posts={
      title:evt.target.postTitle.value,
      post:evt.target.postData.value
    };
    console.log(posts);
    Meteor.call('insertPost',posts,(err,res)=>{

    });

  }

  render(){
    return (
      <div>
        <h2 className="text-center">Insert Post</h2>
        <form onSubmit={this.handelSubmit}>
          <div className="form-group">
            <input className="form-control" placeholder="Title" id="postTitle"/>
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="text" id="postData"/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success">Insert post</button>
          </div>
        </form>
      </div>

    )

  }


}

export default PostForm;