import React from 'react';

const CardFooter = ({avatar}) => {
	return (
		<section className='card-footer'>
			<img src={avatar} alt='avatar' className='img' />
			<p>Creation of Jules Wyvern</p>
		</section>
	);
};

export default CardFooter;
