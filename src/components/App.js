import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'
import GifList from './GifList'

class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			gifs: []
		};
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
	}

	async onSearchSubmit(term){
		console.log(process.env.GIPHY_KEY);
		const response = await axios
		.get(`https://api.giphy.com/v1/gifs/search?q=${term}&limit=10&api_key=${process.env.REACT_APP_GIPHY_KEY}`);
		this.setState({gifs: response.data.data});
	}

	render(){
		return (
			<div className="ui container" style ={{marginTop: '20px'}}>
				<SearchBar onSubmitting = {this.onSearchSubmit}/>
				<GifList gifs = {this.state.gifs}/>
			</div>
		);
	}

}

export default App;
