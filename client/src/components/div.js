import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
// import AnyComponent from './components/filename.jsx'

export default class Div extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {

  	}
  }


componentDidMount() {
//   axios.get('/userinfo').then((data) => {
//     console.log(data);
//   })
}

  render () {
  	return (<div>Hello World</div>)
  }
}

