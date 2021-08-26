import React from 'react'
import HookApp from './HookApp'
import CounterApp from './components/01-useState/CounterApp'
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook'
import SimpleForm from './components/02-useEffect/SimpleForm'
import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook'
import MultipleCustomHook from './components/03-example/MultipleCustomHook'

import './style/style.css'

const App = () => {
    return (
        <div>
            <HookApp />
            <CounterApp />
            <CounterWithCustomHook />
            <SimpleForm />
            <FormWithCustomHook />
            <MultipleCustomHook />
        </div>
    )
}
export default App;