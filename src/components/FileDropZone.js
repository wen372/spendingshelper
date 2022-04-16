import React, {useState, useCallback} from 'react';
import {useDropzone} from 'react-dropzone'
import Papa from 'papaparse';



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
      props.setTransactionData(parsedCsvData)
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

  React.useEffect(() => {
    props.setTransactionData(parsedCsvData)
  }, [props,parsedCsvData]);

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
    
  </div>
  
);



}

export default FileDropZone;