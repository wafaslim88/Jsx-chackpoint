import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';





const rootElement = document.getElementById("root");//We call this a “root” DOM node because everything inside it will be managed by React DOM.
ReactDOM.render(<App />,rootElement);
