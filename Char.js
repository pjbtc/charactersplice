import React from 'react';

const Char =(props)=>{

	const charstyle={
		display: 'inline-block',
		padding: '16px',
		margin:'16px',
		border: '1px solid black',
		textAlign: 'center'
	};


	
	return(
		<div style={charstyle} onClick={props.clicked}>
		{props.character}

		</div>
		)
}

export default Char; 