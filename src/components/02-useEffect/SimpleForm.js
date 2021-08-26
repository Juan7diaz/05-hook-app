import React, { useEffect, useState } from 'react'
import Mesagge from './Mesagge';

import './effects.css'

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState;

    useEffect(() => {
        //console.log("Solo cuando 1 vez en cuando ingresa a la pagina");
    }, [] )

    useEffect(() => {
        //console.log("El formState Cambió");
    }, [ formState ] )

    useEffect(() => {
        //console.log("El Email Cambió");
    }, [ email ] )


    const handleInputChange = ( e ) =>{
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div  className="section-primary">
            <h1>SimpleForm with useEffect</h1> 

            <div className="form-group">
                <input 
                    type ='text'
                    name = 'name'
                    className = "form-control"
                    placeholder = 'ingresa tu nombre'
                    autoComplete = 'off'
                    value = { name }
                    onChange = { handleInputChange }
                />
            </div>

            <div className="form-group">
                <input 
                    type ='text'
                    name = 'email'
                    className = "form-control"
                    placeholder = 'email.@gmail.com'
                    style={{marginTop: '10px'}}
                    autoComplete = 'off'
                    value = { email }
                    onChange = { handleInputChange }
                />
            </div>

            { name.length>0 && <Mesagge persona={ name } />}

            <hr/>
        </div>
    )
}

export default SimpleForm
