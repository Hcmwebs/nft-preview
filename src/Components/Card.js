import React, { useState } from 'react';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';

const Card = ({ equilibrium, ethereum, clock, avatar }) => {
	const [active, setActive] = useState(false);
	return (
		<div
			className='card'
			onMouseEnter={() => setActive(true)}
			onMouseLeave={() => setActive(false)}>
			<CardHeader active={active} equilibrium={equilibrium} />
			<section className='card-body'>
				<h1 className={active ? 'active ' : ''}>Equilibrium #3429</h1>
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
			<CardFooter avatar={avatar} />
		</div>
	);
};

export default Card;
