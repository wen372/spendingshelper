import React,{useState} from 'react';
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import PiChart from '../components/PiChart';
import TransactionList from '../components/TransactionList';
import InfoBoxComponent from '../components/InfoBoxComponent';





function HomePage({transactionData}) {

  const [piChartData, setPiChartData] = useState([]);


  

  return (
    <div className="application topSpace container-fluid homepage TransactionComponent col-10 col-md-10 col-lg-10">
      <div className="innerInfo container col-10 col-md-6 col-lg-8">
        <div className="pichatPlusInfo row "> 
          <div className="rowBoxOne piChart col-sm">
              Pie Chart
              <PiChart data = {piChartData}/>
          </div>
          <div className='rowBoxTwo col-sm' >
            <div className='rowBoxTwoInfo d-inline-flex p-2'>
              
              <InfoBoxComponent list ={transactionData} sendToParent = {setPiChartData}/>
            </div>
          </div>
        </div>
        
        <div className='transactionInfoList row'>
            <TransactionList list={transactionData}/>
        </div> 
      
      </div>
    
    </div>
  );
  
}




export default HomePage;