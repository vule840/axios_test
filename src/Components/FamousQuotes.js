import React, { Component } from 'react';
import axios from 'axios';


//https://api.chucknorris.io/
class FamousQuotes extends Component {
	state = {
		famousquotes: []
	}
	componentDidMount(){
		axios.get(`http://quotes.rest/qod.json?category=inspire`)
			.then(res => {
				//console.log(res.data)
				this.setState({famousquotes: res.data.contents.quotes})
				console.log(this.state.famousquotes)
			})

	}
  render() {

  		 let content;
 
    	    if (this.state.loading) {
		      content = <div>Loading...</div>;
		    } else { 
		     
		        return (
		             	<div className="container">
					    	<div className="row ">
						    		{this.state.famousquotes.map( quote => 
						    			<div className="col">
						    				<div class="card bg-dark text-dark">
											 <img class="card-img" src={quote.background} alt="Card image" />
											  <div class="card-img-overlay d-flex align-items-center">
											  	<blockquote class="blockquote display-1">
											  		 <h5 class="card-title">{quote.title}</h5>
													  <p class="mb-0">{quote.quote}</p>
													  <footer class="blockquote-footer">{quote.author}</footer>
													</blockquote>

											   
																	    
											  </div>
											</div>	
						    			</div>
						    		

						    			
									)}		
						    			
					    			

							  </div>
						 </div>
		        );
		      
		    }
	
      
    
  }
}


export default FamousQuotes;