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
import Tablemap from './Tablemap';
import Obj from './Obj';
import Spreadnew from './Spreadnew';
import Ternarynew from './Ternarynew';
import Spreadnwe1 from './Spreadnwe1';
import Useeffectnew from './Useeffectnew';
import Propsnew from './Propsnew';
import Spreadtask from './Spreadtask';
import Concattask from './Concattask';
import Newapi from './Newapi';
import Newapicarousel from './Newapicarousel';
import Newcontext from './Newcontext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Newcontext>
    <App />
    </Newcontext>
    <Add/>
   <Ternary/><Ternary1/>
   <Spread/>
   <Dummyjs/>
   <Useeffect/>
<Increments/>
<Tablemap/>
<Obj/>
<Spreadnew/>
<Ternarynew/>
<Spreadnwe1/>
<Useeffectnew/>
<Propsnew/>
<Spreadtask/>
<Concattask/>
<Newapi/>
<Newapicarousel/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
