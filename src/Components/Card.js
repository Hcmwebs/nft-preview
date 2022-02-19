import React from 'react';
import equilibrium from '../images/image-equilibrium.jpg';

const Card = () => {
	return (
		<div className='card'>
			<section className='card-header'>
				<img src={equilibrium} alt='Equilibrium' className='img' />
			</section>
			<section className='card-header'>
				<p></p>
			</section>
		</div>
	);
};

export default Card;
