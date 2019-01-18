import React, { Component } from 'react';
import axios from 'axios';


class Person extends Component {
	state = {
		persons: []
	}
	componentDidMount(){
		axios.get(`https://jsonplaceholder.typicode.com/users`)
			.then(res => {
				console.log(res.data)
				this.setState({persons: res.data})
			})
	}
  render() {
    return (
    	<div>
    		<ul>
	      		<p>{this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}</p>

		      </ul>
		       
		       <ul>
		      	<p>{this.state.persons.map(person => <li key={person.id}>{person.email}</li>)}</p>
		      	
		      </ul>


    	</div>
      
    );
  }
}

export default Person;