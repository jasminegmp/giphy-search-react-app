import React from 'react'
import GifList from './GifList'
import GifCard from './GifCard'
import './GifDetailsPage.css'

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
    //console.log(this.props.location.id)
    return (
    	<div className = "gif-detail">
	    	<div className = "gif-large">
		    	<img src = {this.props.location.id}/>
		    </div>
		    <div>
		    	<button className="ui button" onClick={this.goBack}>Go Back</button>
	    	</div>
    	</div>
    )
  } 
}

export default GifDetailsPage;