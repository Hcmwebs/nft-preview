import React, { useState } from 'react';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardUnderline from './CardUnderline';

const Card = ({ equilibrium, ethereum, clock, avatar }) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<div
			className='card'
			onMouseEnter={() => setIsActive(true)}
			onMouseLeave={() => setIsActive(false)}>
			<CardHeader active={isActive} equilibrium={equilibrium} />
			<CardBody active={isActive} ethereum={ethereum} clock={clock} />
			<CardUnderline />
			<CardFooter active={isActive} avatar={avatar} />
		</div>
	);
};

export default Card;
