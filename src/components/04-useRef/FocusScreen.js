import { useRef } from "react"

const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = () =>{
        inputRef.current.focus()
    }

    return (
        <div className="section-secondary">
            <h1>Focus Screen</h1>
            <input 
                className="form-control"
                placeholder="Escribe algo"
                ref={ inputRef }
            />
            <button 
                className="btn btn-primary mt-3"
                onClick={ handleClick }
            >
                Hacer Focus
            </button>
            <hr/>
        </div>
    )
}

export default FocusScreen
