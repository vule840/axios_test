import React, { Component } from 'react';
import axios from 'axios';


//https://api.chucknorris.io/
class ChuckNQuote extends Component {
	state = {
		chuck: []
	}
	componentDidMount(){
		axios.get(`https://api.chucknorris.io/jokes/random`)
			.then(res => {
				//console.log(res.data)
				this.setState({chuck: res.data})
				//console.log(this.state.chuck.value)
			})

	}
  render() {
  	
    return ( 
    	<div className="container">
	    	<div className="row ">

	    		<div className="display-6 mx-auto">
	    				<a href={this.state.chuck.url}><img src={this.state.chuck.icon_url} alt=""/></a>
	    			</div>

	    		<div className="display-4 py-5">

	    			{this.state.chuck.value}

	    			
	    		</div>
	    			

			  </div>
		 </div>
	    		
      
    );
  }
}


export default ChuckNQuote;