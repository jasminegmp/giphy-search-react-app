import React from 'react';

class DropDown extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			numItems: 10
		}
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(e){
		e.preventDefault();
		this.props.onClicking(this.state.numItems);
	}

	render(){
		return(
			<div className = "ui segment">
				<form onSubmit = {this.onFormSubmit}>
					<div className ="ui fluid icon input">
						<input 
							type="text" 
							placeholder="Num of Items.=" 
							onChange = {(e) => this.setState({numItems: e.target.value})}
							value = {this.state.numItems}
							/>
					</div>
				</form>
			</div>
		)
	}
}

export default DropDown;