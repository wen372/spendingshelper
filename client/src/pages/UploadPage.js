import React, { useState } from 'react';
import { Link, Navigate} from 'react-router-dom';
import { Button} from 'react-bootstrap';
import FileDropZone from '../components/FileDropZone';


function UploadPage(props) {


  const [transactionData, setTransactionData] = useState([]);


  const [value, setValue] = useState("CHASE");;
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="UploadPage topSpace container px-4">
    <FileDropZone setTransactionData = {setTransactionData} />





    <div className="row gx-2 align-items-center">
      <select value={value} onChange={handleChange}>
        <option value="CHASE">CHASE</option>
        {/* <option value="BOA">BANK OF AMERICA</option> */}
      </select>

      <br/>
      <br/>

      <button onClick={() => {
      if (value === "CHASE") {
        props.sendToParent(transactionData);
      }
      
      }}>Submit</button>
    </div>

    <br></br>

    <Link to="/"><Button renderas="button">Home page</Button></Link>

    </div>
  );
}

export default UploadPage;