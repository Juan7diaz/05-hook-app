import React from 'react'
import { useState, useEffect } from 'react'

const Mesagge = ({ persona }) => {

    const [coords, setCoords] = useState({
        x:0,
        y:0
    })

    useEffect(() => {

        const mouseMove = (e) =>{
            setCoords({
                x:e.x,
                y:e.y,
            })
        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <div>
            <h4>
                Eres Genial {persona}!
                las coordenadas son X:{ coords.x } Y:{ coords.y }
            </h4>
        </div>
    )
}

export default Mesagge
