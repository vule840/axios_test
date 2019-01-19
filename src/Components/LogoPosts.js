import React, { Component } from 'react';
import axios from 'axios';


class LogoPosts extends Component {
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
	    		{this.state.posts.map( post => 

	    			<div className="col-md-3">
	    				<img className="img-fluid" src={post._embedded['wp:featuredmedia']['0'].source_url} alt=""/>
	    				<a href={post.link}><h5 className="p-3">{post.title.rendered}</h5></a>	
		    			<p className="p-1">{post.excerpt.rendered}</p> 
		    			
		    			
		    		</div>

	    			)}
	    		
	    			

			  </div>
		 </div>
	    		
      
    );
  }
}


export default LogoPosts;