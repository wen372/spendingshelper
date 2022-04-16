import React from 'react';
import Transaction from './Transaction';

function TransactionList({list}) {

  //creates list of Transaction components
  let finalList = list.map((transaction,index) => 
      <Transaction content= {transaction} key={index}/>
  )

  return (
    <div className="TransactionList">
        {finalList} 
    </div>
  );
}

export default TransactionList;