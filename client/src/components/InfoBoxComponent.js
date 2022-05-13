import React from 'react';
import { Button } from 'react-bootstrap';

function InfoBoxComponent(props) {

  var positive = 0
  var negative = 0
  for (const x in props.list){
    if (props.list[x].Amount >= 0)
      positive += parseFloat(props.list[x].Amount)
    else
      negative += parseFloat(props.list[x].Amount)
    
  }

  React.useEffect(() => {
    props.sendToParent([positive, negative])
  }, []);


  var total = (negative + positive).toFixed(2)
  negative = negative.toFixed(2)
  positive = positive.toFixed(2)
  
  
  return (
    
        <div className='infoBox'>

          <h5>Amount Spent : {negative}</h5>
          <h5>Amount Gained : {positive}</h5>
          <h5>Total Takehome : {total}</h5>
          {/* <Button onClick={() => {console.log(list)}}>Print text</Button> */}


        </div>
    );

}

export default InfoBoxComponent;