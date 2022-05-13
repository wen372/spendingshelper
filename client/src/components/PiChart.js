import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Button } from 'react-bootstrap';


function PiChart(props) { 


  let chartData = props.data
  React.useEffect(() => {
    chartData = props.data
  }, [props,chartData] );


  const data = {
    labels: ['Profit', 'Spent'],
    datasets: [
      {
        label: '# of Votes',
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

 
  // return <div><Doughnut data={data}/> <Button onClick={() => {console.log(chartData)}}>Print text</Button> </div>;
  return <Doughnut data={data}/> 

  }

export default PiChart
