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
import HomePage from './pages/HomePage';
import UploadPage from './pages/UploadPage';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [userTransactionData, setTransactionData] = useState([]);


   React.useEffect(() => {
    //code here
    console.log("Transaction Data updated")
  }, [userTransactionData]);




  return (
  <div>
    
    <Router>
        <NavBar/>
        <Routes>
                <Route path="/2" element={<FileDropZone sendToParent = {setTransactionData}/>}/>
                <Route path="/upload" element={<UploadPage/>} />

                <Route path="/1" element={<TransactionComponent/>} />
                {/* <Route path="/" element={<HomePage transactions = {transactionData}/>} /> */}
                {/* <Route path="/" element={<HomePage message = "test"/>} /> */}
                <Route path="/" element={<HomePage transactionData = {userTransactionData}/>} />
                

        </Routes>
    </Router>
    {/* // <div className="App">
    //   Hello
    //   <Transaction content="transaction test"/>
    //   <TransactionComponent/>
    //   <FileDropZone />
    // </div> */}

    <button onClick={() => {console.log(userTransactionData)}}>console.log</button>

  </div>

  );
}


export default App;
