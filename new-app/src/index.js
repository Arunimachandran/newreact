import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Buttoncolor from './Buttoncolor';
import Spreadd from './Spreadd';
import Pros from './Pros';
import Spread1 from './Spread1';
import Mapping1 from './Mapping1';
import Cauroslee from './Cauroslee';
import Icon from './Icon';

import Naav from './Naav';
import Product from './Product';
import Flip from './Flip';
import Userprovider from './Context/Userprovider';
import A from './A';
import Textcolorchange from './Textcolorchange';
import B from './B';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Userprovider>
  <React.StrictMode>
    
    <Flip/>
    <A/>
    <App />
    <Buttoncolor/>
    <Spreadd/>
    <Pros/>
    <Spread1/>
    <Mapping1/>
<Cauroslee/>
<Icon/>
<Naav/>
<Product/>
<Textcolorchange/>
<B/>
  </React.StrictMode>
  </Userprovider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
