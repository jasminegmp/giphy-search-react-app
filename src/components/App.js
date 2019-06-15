import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'
import GifList from './GifList'
import DropDown from './DropDown'

class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			gifs: [],
			limit: 5
		};
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		this.limitSubmit = this.limitSubmit.bind(this);
	}

	async onSearchSubmit(term){

		console.log("onSearchSubmit:", this.state.limit);
		const link = `https://api.giphy.com/v1/gifs/search?q=${term}&limit=${this.state.limit}&api_key=${process.env.REACT_APP_GIPHY_KEY}`;
		const response = await axios.get(link);
		this.setState({gifs: response.data.data});
	}

	limitSubmit(limit){
		this.setState({limit: limit});
		console.log("LIMIT:", this.state.limit);
	}

	render(){
		return (
			<div className="ui container" style ={{marginTop: '20px'}}>
				<DropDown onClicking = {this.limitSubmit}/>
				<SearchBar onSubmitting = {this.onSearchSubmit}/>
				<GifList gifs = {this.state.gifs}/>
			</div>
		);
	}

}

export default App;

