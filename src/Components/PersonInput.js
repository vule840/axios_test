import React, { Component } from 'react';
import axios from 'axios';


class PersonInput extends Component {
	state = {
		name: '',
		number: ''
	}
	handleChange = event => {
		this.setState({name: event.target.value})
		//console.log(name)
	}
	handleChangeNumber = event => {
		this.setState({name: event.target.value})
		//console.log(name)
	}

	handleSubmit = event => {
		event.preventDefault()
		

		const user = {
			name: this.state.name
		}
		console.log(user.name)
	}

  render() {
    return (
    	<div>
    		<ul>
    			<form onSubmit={this.handleSubmit}>
    				<label >
    					Peson Name:
    					<input onSubmit={this.handleChange} type="text"/>
    				</label>
    				<label >
    					Peson Number:
    					<input onSubmit={this.handleChangeNumber} type="text"/>
    				</label>
    				<button type="submit">Add</button>

    			</form>
    			
	      		{/*<p>{this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}</p>*/}

		      </ul>
		       
		      


    	</div>
      
    );
  }
}

export default PersonInput;