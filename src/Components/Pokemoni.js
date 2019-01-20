import React, { Component } from 'react';
import axios from 'axios';


//https://pokeapi.co/docs/v2.html
class Pokemoni extends Component {
	state = {
		pokemons: []
	}
	componentDidMount(){
		axios.get(`https://pokeapi.co/api/v2/pokemon`)
			.then(res => {
				console.log(res.data)
				this.setState({pokemons: res.data.results})
				console.log(this.state.pokemons.results)
			})

	}
  render() {

  	
    return ( 
    	<div className="container">
	    	<div className="row ">
	    		{this.state.pokemons.map( pokemon => 
			    	<div className="col-3">
			    		{pokemon.name}
			    	</div>    				

	    		)}
					
		    	

			  </div>
		 </div>
	    		
      
    );
  }
}


export default Pokemoni;