import { useRef, useState } from 'react'
import { useLayoutEffect } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

import './layout.css'


const Laylout = () => {

    const [boxSize, setBoxsize] = useState({})
    const { counter, increment, reset } = useCounter( 1 )
    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` )
    const { quote } = (!loading && data.length>0) && data[0]
    //31 es el id critico
    if( counter === 31 ){
        reset();
    }

    const pTag = useRef()

    useLayoutEffect(() => {
        setBoxsize(pTag.current.getBoundingClientRect())
    }, [quote])


    return (
        <div className="section-secondary">
            <h1>LayloutEffect</h1>
            
            <blockquote className="blockquote text-center">
                <p className="mb-7" ref={ pTag }>{ quote }</p>
            </blockquote>

             <pre>
                {JSON.stringify(boxSize, null, 3)}     
            </pre>   

            <button className="btn btn-primary" 
                onClick={ () => increment(1) }
            >
                Next Quote
            </button>

            <hr/>
        </div>
    )
}

export default Laylout
