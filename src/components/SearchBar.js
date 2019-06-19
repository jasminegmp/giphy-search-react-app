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
			<div>
				<form onSubmit = {this.onFormSubmit}>
					<div className ="ui fluid icon input">
						<input 
							type="text" 
							placeholder="Search GIPHY..." 
							onChange = {(e) => this.setState({searchTerm: e.target.value})}
							value = {this.state.searchTerm}

							/>
							<i className ="inverted circular search link icon" onClick = {this.onFormSubmit}></i>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar;