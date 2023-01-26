import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Add from './Add';


import Mdb from './Mdb';



import Increments from './Increments';
import Ternary from './Ternary';
import Ternary1 from './Ternary1';
import Spread from './Spread';
import Dummyjs from './Dummyjs';
import { Alert } from 'react-bootstrap';
import Useeffect from './Useeffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     
    <App />
    <Add/>
    
   
   <Ternary/><Ternary1/>
   <Spread/>
   <Dummyjs/>
   <Useeffect/>
   
<Increments/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
