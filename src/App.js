import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom' 
import Home from './components/Home.js'
import Hero from './components/Hero'



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = '/' element = {
            <>
          <Header/> 
          <Hero/>
            </>
          } 
          />
          <Route path = '/channels' element = {
          <Home/> 
          } 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
