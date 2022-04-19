import React from 'react';

function Transaction({content}) {

  var date,name,amount,remaining;
  date = name = amount = remaining = "null";


  
  Object.keys(content).forEach((column) =>{
    var columnLowerCase = column.toLowerCase();
    if(columnLowerCase.includes("date")){
      date = content[column]
    } else if (columnLowerCase.includes("description")){
      name = content[column]
    } else if (columnLowerCase.includes("amount")){
      amount = content[column]
    } else if (columnLowerCase.includes("balance")){
      remaining = content[column]
    }
  })

  // var dataList = Object.keys(content).map((column) => {
  //   return <td>{content[column]}</td>;
  // })

  return (
    
    <tr className="transaction">
        {/* {dataList} */}

        <td>{date}</td>
        <td>{name}</td>
        <td>{amount}</td>
        <td>{remaining}</td>


    </tr>
    );

}

export default Transaction;