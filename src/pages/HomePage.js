import React,{useState, useCallback} from 'react';
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import PiChart from '../components/PiChart';
import TransactionList from '../components/TransactionList';




function HomePage({transactionData}) {


  

  return (
    <div className="application topSpace container-fluid homepage TransactionComponent col-10 col-md-10 col-lg-10">
      <div className="innerInfo container col-10 col-md-6 col-lg-8">
        <div className="pichatPlusInfo row "> 
          <div className="rowBoxOne piChart col-sm">
              Pie Chart
              <PiChart/>
          </div>
          <div className='rowBoxTwo col-sm' >
            <div className='rowBoxTwoInfo d-inline-flex p-2'>
              InfoBox
            </div>
          </div>
        </div>
        
        <div className='transactionInfoList'>

            <TransactionList list={transactionData}/>

        </div> 
      
      </div>
    
    </div>
  );
  
}




export default HomePage;