import { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'


//use memo hace que memorice el ultimo resultado y solo se ejecute
//de nuevo la funcion cuando el counter cambie
//es decir, presionar el boton show/hiden no volvera a llamar a la funcion procesoPesado()
// y solo se llamara cuando se presiones el boton de incrementar en 1 

const MemoHook = () => {

  const { counter, increment } = useCounter( 50 )
	const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);

  return (
    <div className="section-secondary">
      <h1>UseMemo Hook</h1>
      <h3>Counter {counter}</h3>

        <p>{  memoProcesoPesado }</p>

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

export default MemoHook 
