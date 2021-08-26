import React     from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

import '../02-useEffect/effects.css'

const MultipleCustomHook = () => {

    const { counter, increment, reset } = useCounter( 1 )

    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` )
    
    const { author, quote } = (!loading && data.length>0) && data[0]
    
    //31 es el id critico
    if( counter === 31 ){
        reset();
    }

    return (
        <div className="section-primary">
            <h1>BreakingBad Custom Hook</h1>
            
            {
                loading 
                ?
                (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                :
                (
                    <blockquote className="blockquote text-center">
                        <p className="mb-7">{ quote }</p>
                        <footer className="blockquote-footer">{ author }</footer>
                    </blockquote>
                )

            }

            <button className="btn btn-primary" 
                onClick={ () => increment(1) }
            >
                Next Quote
            </button>

            <hr/>
        </div>
    )
}

export default MultipleCustomHook
