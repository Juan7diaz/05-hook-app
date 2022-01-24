import { useRef } from 'react'
import { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

    const [state, setstate] = useState({
        data: null,
        loading: true,
        error: null
    })

    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false //para saber cuando se desmonta el componente y no haga el llamado fetch
        }
    }, [])


    useEffect(() => {
        
        setstate({ data: null, loading: true, error: null })

        fetch( url )
            .then( resp => resp.json())
            .then( data => {
                if( isMounted.current ){
                    setstate({
                        data: data,
                        loading: false,
                        error: null
                    })
                }else{
                    console.log("No se llamo")
                }
            })

    },[url])

    return state
}