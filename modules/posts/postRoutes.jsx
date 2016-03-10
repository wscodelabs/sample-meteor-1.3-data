import React from 'react'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {mount} from 'react-mounter'
import  PostWrapper from './client/components/postWrapper.jsx'

FlowRouter.route('/',{
  name:'posts',
  action(){
    mount(Layout,{content:()=> <PostWrapper />})
  }
});
