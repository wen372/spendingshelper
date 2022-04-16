import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { Button} from 'react-bootstrap';
import FileDropZone from '../components/FileDropZone';


function UploadPage(props) {


  const [transactionData, setTransactionData] = useState([]);


  return (
    <div className="UploadPage">
    <FileDropZone setTransactionData = {setTransactionData}/>
    <button onClick={() => {props.sendToParent(transactionData)}}>Submit</button>

    <br></br>

    <Link to="/"><Button renderAs="button">Home page</Button></Link>

    </div>
  );
}

export default UploadPage;