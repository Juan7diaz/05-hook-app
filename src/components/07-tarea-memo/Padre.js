import { useState, useCallback } from 'react';
import { Hijo } from './Hijo'

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

	const incrementar = useCallback((num) => {
		setValor( valor => valor  + num )
	}, [setValor]);

    return (
        <div className='section-secondary'>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            {
                numeros.map( n => (
                    <Hijo
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
