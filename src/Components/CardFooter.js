import React from 'react';

const CardFooter = ({ active, avatar }) => {
	return (
		<section className='card-footer'>
			<img src={avatar} alt='avatar' className='img' />
			<h2>
				Creation of <b className={active ? 'active ' : ''}>Jules Wyvern</b>
			</h2>
		</section>
	);
};

export default CardFooter;
