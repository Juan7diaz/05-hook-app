import { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';

const CallBackHook = () => {

    const [counter, setCounter] = useState( 10 );

    //const increment = () => {
    //    setCounter( counter + 1 )
    //  }

    const increment = useCallback( (arg)=>{
        setCounter( counter => counter  + arg )
    }, [ setCounter ])

  return (
    <div className="section-primary">
        <h1>UseCallBack Hook </h1>
        <h3>Counter: { counter }</h3>
        <ShowIncrement increment={ increment }/>
    </div>
);
};

export default CallBackHook;
