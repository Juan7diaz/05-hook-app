import HookApp from './components/00-HelloWord/HookApp'
import CounterApp from './components/01-useState/CounterApp'
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook'
import SimpleForm from './components/02-useEffect/SimpleForm'
import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook'
import MultipleCustomHook from './components/03-example/MultipleCustomHook'
import FocusScreen from './components/04-useRef/FocusScreen'
import RealExampleRef from './components/04-useRef/RealExampleRef'
import Laylout from './components/05-useLayoutEffect/Layout'
import Memorize from './components/06-memo/Memorize'
import MemoHook from './components/06-memo/MemoHook'
import CallbackHook from './components/06-memo/CallbackHook'

import './style/style.css'
import { Padre } from './components/07-tarea-memo/Padre'

const App = () => {
    return (
        <div>
            <HookApp />
            <CounterApp />
            <CounterWithCustomHook />
            <SimpleForm />
            <FormWithCustomHook />
            <MultipleCustomHook />
            <FocusScreen />
            <RealExampleRef />
            <Laylout />
            <Memorize />
            <MemoHook />
            <CallbackHook />
            <Padre />
        </div>
    )
}
export default App;