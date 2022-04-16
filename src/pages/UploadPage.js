import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { Button} from 'react-bootstrap';
import FileDropZone from '../components/FileDropZone';


function TransactionComponent({content}) {


  const [transactionData, setTransactionData] = useState([]);


  return (
    <div className="UploadPage">
    <FileDropZone sendToParent = {setTransactionData}/>
    <Link to="/"><Button renderAs="button">Home page</Button></Link>

    </div>
  );
}

export default TransactionComponent;