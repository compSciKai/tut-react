import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

const [firstItemInArray] = ["boots", "tent", "headlamp"];
console.log(firstItemInArray);

ReactDOM.render(<App authorized={true}/>, document.getElementById('root')
);
