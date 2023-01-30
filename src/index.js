import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

const element = <h1>Hello World</h1>;
ReactDOM.render(element, document.getElementById('root')); 


const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(element, container);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
