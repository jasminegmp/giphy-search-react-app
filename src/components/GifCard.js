import React from 'react';

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
	}


	render() {

		const {url} = this.props.gif;
		return(
			<div style = {{gridRowEnd: `span ${this.state.spans}`}}>
				<a href={`/gif/${this.props.gif.id}`}>
					<img ref = {this.gifRef} src = {this.props.gif.images.fixed_width_small.url}/>
				</a>
			</div>
		)
	}
}

export default GifCard;