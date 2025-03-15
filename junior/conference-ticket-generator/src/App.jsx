import logoFull from '/images/logo-full.svg'
import { Routes, Route } from 'react-router-dom'
import Background from './components/Background'
import Form from './components/Form'
import Ticket from './components/Ticket'

const App = () => {
  return (
    <>
      <Background />

      <img className='m-auto p-6' src={logoFull} alt='Logo Page' />
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/ticket' element={<Ticket />} />
      </Routes>
    </>
  )
}

export default App
