import './App.css'
import { Login } from './components/Login'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { Inicio } from './components/Inicio'
import { Navigation } from './components/Navigation'
function App () {
  return (
    <div className='App'>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dasboard' element={<Dashboard/>} />
      </Routes>
    </div>
  )
}

export default App
