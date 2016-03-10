import React, {PropTypes} from 'react';

class Home extends React.Component{
  constructor(props){
    console.log(props);
    super(props);
    this.state={clicks:0}
  }

  increaseClick(){
    console.log(this);
      let clicks=this.state.clicks+1
      this.setState({clicks});
  }

  componentWillMount(){
    console.log(this);
  }

  render(){
    return (
      <div>
        <h3>Welcome to Meteor 1.3 with React {this.props.content}</h3>
        <span>You Have Clicked {this.state.clicks} times</span>
        <button  onClick={this.increaseClick.bind(this)}>Click Me !</button>
      </div>
    )
  }
}

export default Home;