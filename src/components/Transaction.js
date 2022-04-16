import React from 'react';

function Transaction({content}) {

  let transactionString = "" 


  //parses over Transaction list object and combines values of each key into one string with spaces between each value
  Object.keys(content).forEach(column => {
    transactionString += content[column] + " "
  })

  return (
    <div className="transaction">
        {transactionString}
    </div>
  );
}

export default Transaction;