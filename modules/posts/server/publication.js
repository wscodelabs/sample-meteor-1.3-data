import {Meteor} from 'meteor/meteor'
import postDb from '../both/Db/postDB'
Meteor.publish('getPosts',()=>{
  console.log(postDb.find());
  return postDb.find();
});