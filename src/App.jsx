import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import { Routes, Route } from "react-router-dom"

import Navigation from './components/navigation/navigation.component';
import Home from './components/home/home.component';
import Quiz from './components/quizFetchApi/Quiz';


function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>} />
            <Route path='/quiz' element={<Quiz/>}/>
          </Route>
        </Routes>
      </div>

      
    
  );
}

export default App;
