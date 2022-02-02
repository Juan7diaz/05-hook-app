import { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import Small from './Small'

const Memorize = () => {

  const { counter, increment } = useCounter( 10 )
	const [show, setShow] = useState(true);

  return (
    <div className="section-primary">
      <h1>Hook Memorize</h1>
      <h1>Counter <Small value={counter}/></h1>

      <button
        className="btn btn-primary"
        onClick={ () => increment(1) }
      >
        +1
      </button>
			<button
				className="btn btn-outline-primary m-3"
				onClick={ () => {
					setShow(!show )
				}}
			>
				show/hide {JSON.stringify(show)}
			</button>
    </div>
  )
}

export default Memorize
