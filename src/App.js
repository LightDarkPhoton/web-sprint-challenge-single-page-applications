import React, { useState, useEffect } from "react";
import axios from 'axios';
import Form from './Form'

// React Router Import
import { BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { Route, Link } from 'react-router-dom';


const App = () => {
  return (

    <BrowserRouter>
    <div>
      <Route exact path='/'>
        <Link to='/pizza'>
        <button>Form</button>
        </Link>
      </Route>

  
      <Route path='/pizza'>
        <Form />

      </Route>
    </div>

    </BrowserRouter>
  );
};

export default App;
