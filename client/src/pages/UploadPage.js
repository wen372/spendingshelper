import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { Button} from 'react-bootstrap';
import FileDropZone from '../components/FileDropZone';
import Select from 'react-select';
import makeAnimated from 'react-select/animated'

function UploadPage(props) {


  const [transactionData, setTransactionData] = useState([]);


  const [value, setValue] = useState("CHASE");;
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="UploadPage topSpace container px-4">
    <FileDropZone setTransactionData = {setTransactionData} />
    <button onClick={() => {
      console.log("test")
      if (value === "CHASE") {
        props.sendToParent(transactionData)
      }
      
      }}>Submit</button>

    <div className="row gx-2 align-items-center">
      <select value={value} onChange={handleChange}>
        <option value="CHASE">CHASE</option>
        <option value="BOA">BANK OF AMERICA</option>
      </select>
      <button onClick={() => {console.log(value)}}>test</button>
    </div>

    <br></br>

    <Link to="/"><Button renderAs="button">Home page</Button></Link>

    </div>
  );
}

export default UploadPage;