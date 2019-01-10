import React from 'react';
import PropTypes from "prop-types";

import Stats from './Stats'
import Stopwatch from './Stopwatch'

const Header = ({players, title}) => {
	return (
		<header>
		<Stats players={players}/>
			<h1>{title}</h1>
			<Stopwatch />
		</header>
	);
}

Header.PropTypes = {
	title: PropTypes.string,
	players: PropTypes.arrayOf(PropTypes.object)
}

export default Header;