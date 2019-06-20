import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

class GifCard extends React.Component{

	constructor(props){
		super(props);
		this.gifRef = React.createRef();
		this.state = {spans: 0, gifId: null}
		this.setSpans = this.setSpans.bind(this);
	}

	componentDidMount(){ // step 1
		this.gifRef.current.addEventListener('load', this.setSpans);

	}



	setSpans() {
		const height = this.gifRef.current.clientHeight; // step 2
		const spans = Math.ceil(height / 10); // 	10 from grid-auto-rows
		this.setState({spans});
		this.setState({gifId: this.gifRef.current.id});
		console.log(this.gifRef.current);
	}


	render() {

		const {url} = this.props.gif;
		return(
			<div style = {{gridRowEnd: `span ${this.state.spans}`}}>
				<Link to ={{pathname: `${this.props.gif.id}`, id: this.props.gif.images.fixed_width_small.url, bitly_gif_url: this.props.gif.bitly_gif_url}}>
					<img ref = {this.gifRef} src = {this.props.gif.images.fixed_width_small.url}/>
				</Link>
			</div>
		)
	}
}

export default GifCard;