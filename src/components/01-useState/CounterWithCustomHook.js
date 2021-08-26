import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

const CounterWithCustomHook = () => {

    const style = {
        margin: "0 0.5cm 0 0cm"
    }

    const { counter, increment, decrement, reset } = useCounter( 100 )

    return (
        <div className="section-secondary" >
            <h1>Counter with Hook: { counter }</h1>
            <button onClick={ () => increment(1) } className='btn btn-primary' style={ style }>+1</button>
            <button onClick={ reset } className='btn btn-secondary' style={ style } >reset</button>
            <button onClick={ () => decrement(2) } className='btn btn-primary' style={ style } >-2</button>
            <hr />

        </div >
    )
}

export default CounterWithCustomHook
