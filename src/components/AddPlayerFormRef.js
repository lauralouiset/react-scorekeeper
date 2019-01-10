import React, { Component } from 'react';

class AddPlayerForm extends Component {

 playerInput = React.createRef();

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addPlayer(this.playerInput.current.value);
		e.currentTarget.reset();
	}

	render() {
		return (
			<form action="" onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="Enter player's name"
					ref={this.playerInput}
				/>
				<input
					type="submit"
					value="Add Player"
				/>
			</form>
		)
	}

}

export default AddPlayerForm;