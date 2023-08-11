import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import NavBar from '../Components/NavBar.jsx'
import ShowsList from '../Components/ShowsRelevant/ShowsList.jsx'
import './App.css'

function App() {
  // console.log(import.meta.env.VITE_10_1_VAR)
  return (
    <>
      <Router>
        <header>
          <h1>ScreenViews</h1>
        </header>
        <NavBar />
        <Routes>
          <Route path='/' element={<h1>Home</h1>}/>
          <Route path='/shows' element={<ShowsList />}/>
          <Route path='/shows/new' element={<h1>Form for New Shows</h1>}/>
          <Route path='/movies' element={<h1>All Movies</h1>}/>
        </Routes>
        <h2>-TEST-{import.meta.env.VITE_10_1_VAR}</h2>

        <footer>
          10.1 ©️
        </footer>
      </Router>
    </>
  )
}

export default App


/* Crud Action
 Create - POST shows/new or movies/new
 Read - GET shows/ (index) OR shows/:id
 Update - 
 Destroy - */