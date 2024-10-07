import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/intro'
import Task1 from './components/Navbar/Task1'
import Task2 from './components/Navbar/Task2'
import Task3 from './components/Navbar/Task3'
import Task4 from './components/Navbar/Task4'
import Task5 from './components/Navbar/Task5'
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
          <Route exact path="/" element={<Task1 />}>
          </Route>

          <Route path="/task2" element={<Task2 />} >
          </Route>

          <Route path="/task3" element={<Task3 />}>
          </Route>

          <Route path="/task4" element={<Task4 />}>
          </Route>

          <Route path="/task5" element={<Task5 />}>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
