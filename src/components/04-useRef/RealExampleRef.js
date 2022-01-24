import { useState } from 'react'
import MultipleCustomHook from '../03-example/MultipleCustomHook'


const RealExampleRef = () => {
    
    const [show, setShow] = useState(false)

    const handleClick = () =>{
        setShow(!show)
    }
    
    return (
        <div className="section-primary">
            <h1> Real Example Ref </h1>
            {show &&  <MultipleCustomHook /> }
            <hr/>
            <button 
                className='btn btn-primary mt-3'
                onClick={ handleClick }
            >
                Mostrar/Ocultar
            </button>

        </div>
    )
}

export default RealExampleRef
