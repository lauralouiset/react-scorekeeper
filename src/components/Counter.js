import React, {PureComponent} from 'react';


class Counter extends PureComponent {

	index = this.props.index;

		render(){
			return (
					<div className="counter">
						<button className="counter-action decrement" onClick={ () => {this.props.changeScore(this.index, -1)}}> - </button>
						<span className="counter-score">{ this.props.score }</span>
					<button className="counter-action increment" onClick={ () => { this.props.changeScore(this.index, 1)} }> + </button>
					</div>
			);
		}
	}

export default Counter;