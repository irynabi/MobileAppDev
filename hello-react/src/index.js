//imports React from node modules folder
import React from 'react';
//imports ReactDom to make a react site
import ReactDOM from 'react-dom/client';
import './index.css';
//this imports a component to render
import App from './App';


//grabs root div from public>>index.html to inject react  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

