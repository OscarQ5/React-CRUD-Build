import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import NavBar from '../Components/NavBar.jsx'
import ShowsList from '../Components/ShowsRelevant/ShowsList.jsx'
import MoviesList from '../Components/MoviesRelevant/MoviesList.jsx'
import NewShowsList from '../Components/ShowsRelevant/NewShowsList.jsx'
import ShowDetails from '../Components/ShowsRelevant/ShowDetails.jsx'
import './App.css'

function App() {
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
          <Route path='/shows/new' element={<NewShowsList />}/>
          <Route path='/shows/:id' element={<ShowDetails />}/>
          <Route path='/movies' element={<MoviesList />}/>
        </Routes>
        <br />
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