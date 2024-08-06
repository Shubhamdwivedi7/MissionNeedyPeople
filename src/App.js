// import logo from './logo.svg';
import './App.css';

// import Navbar from './components/Navbar';
// import Main from './components/Main';
// import Footer from './components/Footer';
// import Work from './components/Work';
import Home from './components/Home';
import Ourmentors from './components/Ourmentors';
import Visionmission from './components/Visionmission';
import Donate from './components/Donate';
import Contact from './components/Contact';

import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";
// import Visionmission from './components/Visionmission';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      
      {/* <Main className="main"/> */}
      <Router>
       {/* <Navbar/> */}

       <Routes>
        <Route exact path="/" element={<Home/>}/>
        {/* <Route exact path="/" element={<Work/>}/> */}
        {/* <Route exact path=""/> */}
        <Route exact path="/ourmentors" element={<Ourmentors/>}/> 
        <Route exact path="/donation" element={<Donate/>}/>
        <Route exact path="/vissionmission" element={<Visionmission/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>

      </Routes>
      </Router>
      {/* <Main/>
       <Work/>  */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
