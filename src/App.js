import React from 'react';
import Attributions from './Components/Attributions';
import Card from './Components/Card';
import equilibrium from './images/image-equilibrium.jpg';
import ethereum from './images/icon-ethereum.svg';
import clock from './images/icon-clock.svg';
import avatar from './images/image-avatar.png';

const App = () => {
	return (
		<main className='container'>
			<Card
				equilibrium={equilibrium}
				ethereum={ethereum}
				clock={clock}
				avatar={avatar}
			/>
			<Attributions />
		</main>
	);
};

export default App;
