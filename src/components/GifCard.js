import React from 'react';

class GifCard extends React.Component{

	constructor(props){
		super(props);
		this.gifRef = React.createRef();
		this.state = {spans: 0}
		this.setSpans = this.setSpans.bind(this);
	}

	componentDidMount(){ // step 1
		this.gifRef.current.addEventListener('load', this.setSpans);

	}

	setSpans() {
		const height = this.gifRef.current.clientHeight; // step 2
		console.log(height);
		const spans = Math.ceil(height / 10); // 	10 from grid-auto-rows
		this.setState({spans});
	}

	render() {

		const {url} = this.props.gif;
		console.log(url)
		return(
			<div style = {{gridRowEnd: `span ${this.state.spans}`}}>
				<img ref = {this.gifRef} src = {this.props.gif.images.fixed_width_small.url}/>
			</div>
		)
	}
}

export default GifCard;