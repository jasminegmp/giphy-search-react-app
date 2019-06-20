import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'
import GifList from './GifList'
import GifDetailsPage from './GifDetailsPage'
import DropDown from './DropDown'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			gifs: [],
			limit: 5,
			clickedID: null
		};
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		this.limitSubmit = this.limitSubmit.bind(this);
	}

	async onSearchSubmit(term){
		console.log(this.state.gifs);
		const link = `https://api.giphy.com/v1/gifs/search?q=${term}&limit=${this.state.limit}&api_key=${process.env.REACT_APP_GIPHY_KEY}`;
		const response = await axios.get(link);
		this.setState({gifs: response.data.data});
	}

	limitSubmit(limit){
		this.setState({limit: limit}, function () {
             console.log("LIMIT:",this.state.limit);
        });
	}

	render(){
		return (
			<Router>
				<div className="ui container" style ={{marginTop: '20px'}}>
					<div className = "ui segment">
						<DropDown onClicking = {this.limitSubmit}/>
						<SearchBar onSubmitting = {this.onSearchSubmit}/>
					</div>
					<Switch>
					<Route exact path='/' render={(props) => (<GifList gifs={this.state.gifs} {...props} />)} />

					<Route path="/gif/:id" render={(props) => (<GifDetailsPage gifs={this.state.gifs} {...props} />)} />
					</Switch>
				</div>
			</Router>
		);
	}

}

export default App;

