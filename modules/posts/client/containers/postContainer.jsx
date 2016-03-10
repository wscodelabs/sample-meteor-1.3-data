import {composeWithTracker} from 'react-komposer'
import DisplayPost from '../components/displayPosts.jsx'
import {Meteor} from 'meteor/meteor'
import PostDb from '../../both/Db/postDB'

let composePosts=(props,onData)=>{
  let handel=Meteor.subscribe('getPosts');

  if(handel.ready()){
    var postData=PostDb.find().fetch();
    console.log(postData);
    onData(null,{posts:postData});

  }


};

export  default composeWithTracker(composePosts)(DisplayPost);