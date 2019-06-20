import React from 'react'
import GifList from './GifList'
import GifCard from './GifCard'

class GifDetailsPage extends React.Component {

	constructor(props){
		super(props);
		this.goBack = this.goBack.bind(this);
	}

	goBack(){
		this.props.history.goBack();
	}
  render() {
    console.log("here", this.props.location, this.props)
    console.log(this.props.location.id)
    return (
    	<div>
	    	<h1>Users</h1>
	    	<img src = {this.props.location.id}/>
	    	<button onClick={this.goBack}>Go Back</button>
    	</div>
    )
  }
}

export default GifDetailsPage;