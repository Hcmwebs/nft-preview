import React, { useState } from 'react';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardUnderline from './CardUnderline';

const Card = ({ equilibrium, ethereum, clock, avatar }) => {
	const [active, setActive] = useState(false);
	return (
		<div
			className='card'
			onMouseEnter={() => setActive(true)}
			onMouseLeave={() => setActive(false)}>
			<CardHeader active={active} equilibrium={equilibrium} />
			<CardBody active={active} ethereum={ethereum} clock={clock} />
			<CardUnderline />
			<CardFooter avatar={avatar} />
		</div>
	);
};

export default Card;
