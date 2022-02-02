import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

const FormWithCustomHook = () => {

    const [ values, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = values

    useEffect(() => {
        console.log("Email cambió")
    }, [ email ])

    const handleSubmit = ( e ) =>{
        e.preventDefault();
        (!email || !name || !password)
        ? console.error("Falta un dato en el campo")
        : console.log( values )
    }

    return (
        <form onSubmit={ handleSubmit }  className="section-secondary">
            <h1>FormWithCustomHook</h1>

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

            <div className="form-group">
                <input
                    type ='password'
                    name = 'password'
                    className = "form-control"
                    placeholder = '******'
                    style={{marginTop: '10px'}}
                    value = { password }
                    onChange = { handleInputChange }
                />
            </div>

            <button
                className='btn btn-primary'
                style={{marginTop: '10px'}}
                type='submit'
            >
                Enviar
            </button>

            <hr/>
        </form>
    )
}

export default FormWithCustomHook
