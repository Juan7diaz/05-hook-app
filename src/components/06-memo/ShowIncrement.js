import { memo } from 'react'

const ShowIncrement = memo(({ increment }) => {

	console.log('me volvi a mostrar (button )')

  return (
    <button
			className="btn btn-primary"
			onClick={() => increment( 5 ) }
		>
			incrementar
  	</button>
	)
});

export default ShowIncrement;
