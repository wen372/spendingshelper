import React, {useState, useCallback} from 'react';
import {useDropzone} from 'react-dropzone'

import Papa from 'papaparse';





function FileDropZone() {

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
  console.log(parsedCsvData)
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({onDrop, accept:'text/csv, application/vnd.ms-excel'});



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
      <tbody>
        <tr key={index}>
        
          <td>{parsedData.Details}</td>
          <td>{parsedData.PostingDate}</td>
          <td>{parsedData.Amount}</td>
          <td>{parsedData.Description}</td>
          <td>{parsedData.Type}</td>
          <td>{parsedData.CheckNo}</td>
          <td>{parsedData.Balance}</td>

        </tr>
      </tbody>
    ))}



    
  </div>
  
);



}

export default FileDropZone;