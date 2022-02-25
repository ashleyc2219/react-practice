import logo from './logo.svg'
import './App.css'
import FormValid from './components/FormValid'
import FormInput from './components/FormInput'

import RefsFrom from './components/RefsFrom'
import IdForm from './components/IdForm'

function App() {
  return (
    <>
      <h3>Refs Form</h3>
      <RefsFrom />
      <RefsFrom />
      <h3>Id Form</h3>
      <IdForm />
      <IdForm />
    </>
  )
}

export default App
