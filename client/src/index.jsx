import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Dashboard from './components/Dashboard.js';

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {

  	}
  }

componentDidMount() {
  axios.get('/userinfo').then((data) => {
    console.log(data);
  })
}

  render () {
  	return (
    <div>
      <Dashboard/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));