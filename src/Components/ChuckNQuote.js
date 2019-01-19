import React, { Component } from 'react';
import axios from 'axios';


class ChuckNQuote extends Component {
	state = {
		posts: []
	}
	componentDidMount(){
		axios.get(`https://api.chucknorris.io/jokes/random`)
			.then(res => {
				console.log(res.data)
				this.setState({chuck: res.data})
				console.log(this.state.chuck.value)
			})

	}
  render() {
    return ( 
    	<div className="container">
	    	<div className="row">
	    		<div className="display-4">

	    			{this.state.value}

	    			
	    		</div>
	    			

			  </div>
		 </div>
	    		
      
    );
  }
}


export default ChuckNQuote;