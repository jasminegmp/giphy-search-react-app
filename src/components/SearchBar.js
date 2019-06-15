import React from 'react';

class SearchBar extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			searchTerm: ''
		}
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(e){
		e.preventDefault();
		this.props.onSubmitting(this.state.searchTerm);
	}

	render(){
		return(
			<div className = "ui segment">
				<form onSubmit = {this.onFormSubmit}>
					<div className ="ui fluid icon input">
						<input 
							type="text" 
							placeholder="Search GIPHY..." 
							onChange = {(e) => this.setState({searchTerm: e.target.value})}
							value = {this.state.searchTerm}

							/>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar;