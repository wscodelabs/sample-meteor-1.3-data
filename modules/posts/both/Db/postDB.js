import {Meteor} from 'meteor/meteor'
let postDb=new Mongo.Collection('posts');

Meteor.methods({
  insertPost:function(post){
    return postDb.insert(post);
  }
});

export default postDb;