import React from 'react';

const CardHeader = ({ active, equilibrium }) => {
	return (
		<section className='card-header'>
			<div className={active ? 'imgContainer active' : 'imgContainer'}>
				<img src={equilibrium} alt='Equilibrium' className='img' />
			</div>
		</section>
	);
};

export default CardHeader;
