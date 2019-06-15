import React from 'react';

class DropDown extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			numItems: 5
		}
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(e){
		console.log("dropdown, numitems", e.target.value);
		e.preventDefault();
		this.setState({numItems: e.target.value});
		this.props.onClicking(this.state.numItems);
	}

	render(){
		return(
			<div className = "ui segment">
				<select name="items" multiple="" 
					className="ui fluid dropdown" 
					onChange = {this.onFormSubmit}
					value = {this.state.numItems}>
					<option value="5">5</option>
					<option value="10">10</option>
					<option value="20">20</option>
					<option value="30">30</option>
					<option value="50">50</option>
					<option value="100">100</option>
					
				</select>
			</div>
		)
	}
}

export default DropDown;


