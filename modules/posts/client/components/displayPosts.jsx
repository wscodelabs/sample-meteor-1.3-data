import  React from 'react'

class  DisplayPost extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let postsData=this.props.posts.map((postData)=>{
      return <div className="col col-md-3 well" key={postData._id}>
        <h4>{postData.title}</h4>
        <h5>{postData.post}</h5>
      </div>
    });

      return <ul>
        {postsData}
      </ul>
  }

}

export  default DisplayPost;