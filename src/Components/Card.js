import React from 'react';
import equilibrium from '../images/image-equilibrium.jpg';
import ethereum from '../images/icon-ethereum.svg';
import clock from '../images/icon-clock.svg';
import avatar from '../images/image-avatar.png';

const Card = () => {
	return (
		<div className='card'>
			<section className='card-header'>
				<div className='imgContainer'>
					<img src={equilibrium} alt='Equilibrium' className='img' />
				</div>
			</section>
			<section className='card-body'>
				<h1>Equilibrium #3429</h1>
				<p>Our Equilibrium collection promotes balance and calm.</p>
				<div className='preview'>
					<button className='btn btn-currency' type='button'>
						<img src={ethereum} alt='ethereum icon' />
						0.041 ETH
					</button>
					<button className='btn btn-timer' type='button'>
						<img src={clock} alt='clock icon' />3 days left
					</button>
				</div>
			</section>
			<div className='card-underline'></div>
			<section className='card-footer'>
				<img src={avatar} alt='avatar' className='img' />
				<p>Creation of Jules Wyvern</p>
			</section>
		</div>
	);
};

export default Card;
