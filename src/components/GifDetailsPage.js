import React from 'react'
import GifList from './GifList'
import GifCard from './GifCard'
import './GifDetailsPage.css'
import ShareLink from 'react-twitter-share-link'

class GifDetailsPage extends React.Component {

	constructor(props){
		super(props);
		this.goBack = this.goBack.bind(this);
	}

	goBack(){
		this.props.history.goBack();
	}
  render() {
    //console.log("here", this.props.location, this.props)
    console.log(this.props.location.bitly_gif_url)
    return (
    	<div className = "gif-detail">
	    	<div className = "gif-large">
		    	<img src = {this.props.location.id}/>
			<ShareLink link={this.props.location.bitly_gif_url}>
				{link => (
				<a href={link} target='_blank'>Share this on Twitter</a>
				)}
			</ShareLink>
		    </div>
		    <div>
		    	<button className="ui button" onClick={this.goBack}>Go Back</button>
	    	</div>
    	</div>
    )
  } 
}

export default GifDetailsPage;