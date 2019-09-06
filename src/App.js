import React from 'react';
import Navbar from './Comps/Navbar'
import HomePage from './Comps/HomePage'
import Footer from './Comps/Footer'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './Styles/App.scss'

function App() {
  return (
    <Router>
      <div>
        <Route path='/' component={Navbar} />
        <Route exact path="/" component={HomePage} /> 
        <Route path="/" component={Footer} />
      </div>
    </Router>
  );
}

export default App;
