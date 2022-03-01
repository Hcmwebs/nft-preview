import React from 'react';

const CardFooter = ({ active, avatar }) => {
	return (
		<section className='card-footer'>
			<img src={avatar} alt='avatar' className='img' />
			<p>
				Creation of <b className={active ? 'active ' : ''}>Jules Wyvern</b>
			</p>
		</section>
	);
};

export default CardFooter;
