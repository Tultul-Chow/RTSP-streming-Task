import React from 'react'
import VideoPlay from './components/videoPlay'
import Header from './components/Header'
import './App.css'
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"> <Home /> </Route>
        </Switch>
      </Router>
   
    </div>
  )
}

export default App
