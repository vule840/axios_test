import React, { Component } from 'react';
import axios from 'axios';


class ChuckNQuote extends Component {
	state = {
		posts: []
	}
	componentDidMount(){
		axios.get(`https://logobox.agency/wp-json/wp/v2/posts?_embed`)
			.then(res => {
				console.log(res.data)
				this.setState({posts: res.data})
			})
	}
  render() {
    return ( 
    	<div className="container">
	    	<div className="row">
	    	
	    			

			  </div>
		 </div>
	    		
      
    );
  }
}


export default ChuckNQuote;