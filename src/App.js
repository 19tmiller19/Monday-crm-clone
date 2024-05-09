
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TicketPage from './Pages/TicketPage'
import Dashboard from './Pages/Dashboard'
import Nav from './Components/Nav'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/ticket' element={<TicketPage/>}/>
            <Route path='/ticket/:id' element={<TicketPage editMode={true}/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App