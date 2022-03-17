import React from 'react';

const CardFooter = ({ active, avatar }) => {
	return (
		<section className='card-footer'>
			<img src={avatar} alt='avatar' className='img' />
			<h4>
				Creation of <b className={active ? 'active ' : ''}>Jules Wyvern</b>
			</h4>
		</section>
	);
};

export default CardFooter;
