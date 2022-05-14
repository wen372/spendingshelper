import React from "react";
import { Doughnut } from "react-chartjs-2";



function PiChart(props) { 
  
  
  let chartData = props.data;

  // console.log(props.data)
  // React.useEffect(() => {
  //   chartData = props.data
  // }, [props,chartData] );


  const data = {
    labels: ['Profit', 'Spent'],
    datasets: [
      {
        label: 'transactions',
        data: chartData,
        backgroundColor: [
          'rgba(65, 245, 32, 0.8)',
          'rgba(246, 10, 12, 0.8)',
        ],
        borderColor: [
          'rgba(76, 216, 50, 0.8)',
          'rgba(246, 10, 12, 0.8)',
          
        ],
        borderWidth: 3,
      },
    ],
  };

  var doughnutComponent = null;
  if (props.data[0] !== 0.00 &&  props.data[1] !== 0.00) {
    doughnutComponent = <Doughnut data={data} />
  } 
  // return <Doughnut data={data}/> 
  return doughnutComponent 

  }

export default PiChart
