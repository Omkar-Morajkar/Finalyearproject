// App.js
import React from 'react';
import './App.css';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  
  const percentage = 73
  return (
    <div className="progressBar">
       <ProgressBar now={percentage} animated/>
    </div>
  );
}
export default App;