import React, { useState } from 'react';

const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1 : 10,
        counter2: 20
    })

    const {counter1, counter2 } = counter;
    console.log( counter )

    const increment = () => {
        setCounter({
            ...counter,
            counter1: counter1 + 1,
        })
    }

    return (
        <div  className="section-primary">
            <h1>counter1: { counter1 }</h1>
            <h1>counter2: { counter2 }</h1>

            <button
                className = 'btn btn-primary'
                onClick = { increment }
            >
            +1 Solo primer contador
            </button>
            <hr/>
        </div>
    )
}

export default CounterApp
