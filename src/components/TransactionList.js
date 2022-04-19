import React from 'react';
import Transaction from './Transaction';

function TransactionList({list}) {

  //creates list of Transaction components
  let finalList = list.map((transaction,index) => 
        
          <Transaction content= {transaction} key={index}/>
        
  )





  return (

        <table className='TransactionTable'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Remaining Balance</th>
            </tr>
          </thead>
          <tbody>
            {finalList}
          </tbody>
        </table>

        

  );
}

export default TransactionList;