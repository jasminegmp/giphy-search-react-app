import React from 'react';

class GifCard extends React.Component{

	render() {

		const {url} = this.props.gif;
		console.log(url)
		return(
			<div>
				<img src = {this.props.gif.images.fixed_width_small.url}/>
			</div>
		)
	}
}

export default GifCard;