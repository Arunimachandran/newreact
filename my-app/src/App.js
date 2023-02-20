import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mdb from './Mdb';
import Objects from './Objects';
import State from './State';
import Cards from './Cards';
import Array from './Array';
import Home from './Home';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Mdb/>
    <Routes>
      <Route path="/Objects" element={<Objects/>}/>
      <Route path="/State" element={<State/>}/>
      <Route path="/Cards" element={<Cards/>}/>
      <Route path="/Array" element={<Array/>}/>
    </Routes>
    </BrowserRouter>
    <Home/>
    </div>
  );
}

export default App;
