import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import React, { useState } from "react";

import Transaction from './components/Transaction';
import TransactionComponent from './components/TransactionComponent';
import FileDropZone from './components/FileDropZone';
import HomePage from './components/HomePage';


function App() {

  const [childData, setChildData] = useState("");

  return (
<div>
    <Router>
        <Routes>
                <Route path="/2" element={<FileDropZone sendToParent = {setChildData}/>} exact/>
                <Route path="/1" element={<TransactionComponent/>} exact/>
                <Route path="/" element={<HomePage/>} exact/>
        </Routes>
    </Router>
    {/* // <div className="App">
    //   Hello
    //   <Transaction content="transaction test"/>
    //   <TransactionComponent/>
    //   <FileDropZone />
    // </div> */}
    
    <button onClick={() => {console.log(childData)}}>console.log</button>

    </div>

  );
}


export default App;
