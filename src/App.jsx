import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/intro'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Intro />}>
          </Route>

          <Route path="/task2" >
          </Route>

          <Route path="/task3" >
          </Route>

          <Route path="/task4" >
          </Route>

          <Route path="/task5" >
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
