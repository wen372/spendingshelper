import React, {useState, useCallback} from 'react';
import {useDropzone} from 'react-dropzone'
import Papa from 'papaparse';
import { Button} from 'react-bootstrap';

import { useNavigate} from 'react-router-dom';



function FileDropZone(props) {

  const parseFile = file => {
    Papa.parse(file, {
      header: true,
      complete: results => {
      setParsedCsvData(results.data)
      },
    });
    
  };

  const [parsedCsvData, setParsedCsvData] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
    if (acceptedFiles.length) {
      parseFile(acceptedFiles[0]);
    }
    
  }, []);
  // console.log(parsedCsvData) //
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({onDrop, accept:'text/csv, application/vnd.ms-excel'});

  // function to redirection page
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }

return (
  <div>
  <div {...getRootProps({
      className: `dropzone
      ${isDragAccept && 'dropzoneAccept'}
      ${isDragReject && 'dropzoneReject'}`,
    })}>

    <input {...getInputProps()} />
    {isDragActive ? (<p>Drop the files here ...</p>) : (<p>Drag 'n' drop some files here, or click to select files</p>)}
    
    <button>Import</button>
    
    </div>

    {parsedCsvData.map((parsedData, index) => (
      
        <div className = {"item :" + {index}}>
        
          {/* {console.log("ParsedData = " + Object.keys(parsedData))} */}
          {/* {console.log("ParsedData = " + parsedData.Type)} */}





          {Object.keys(parsedData).forEach(column => {

            console.log(column, ':', parsedData[column]);
            
            <td>{parsedData[column]}</td>
            // console.log(parsedData.Amount);
            })
            }

          {/* <td>{parsedData.Details}</td>
          <td>{parsedData.PostingDate}</td>
          <td>{parsedData.Amount}</td>
          <td>{parsedData.Description}</td>
          <td>{parsedData.Type}</td>
          <td>{parsedData.CheckNo}</td>
          <td>{parsedData.Balance}</td> */}

        </div>
      
    ))}


<Button color="primary" className="px-4"
            onClick={routeChange}
              >
              Homepage
            </Button>

<button onClick={() => {props.sendToParent(parsedCsvData)}}>Update</button>



  </div>
  
);



}

export default FileDropZone;