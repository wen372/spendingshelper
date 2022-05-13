import React from 'react';


import '../about.css';

function AboutPage({Arg}) {


  

  return (
    <div className="application topSpace container-fluid homepage TransactionComponent col-10 col-md-10 col-lg-10">
      <div className="nobdr innerInfo container col-1 col-md-6 col-lg-8">
        
        <div className='col-bg'>
            About Us
            <br/>
            <br/>
            <div className="col-md">
This web interface renders a visual chart to help people to track their spending habits and to help them to improve their spending habits aswell. 
            </div>
            <div className="row topSpace">  
                <div className="col-md">
                    <img src="https://cunytechprep.nyc/_next/static/image/public/ctp-logo-square.57c4c8517df448c781ad113a7e0bb894.png" className="img-fluid img-ctp" alt="Cuny Tech Prep Logo "/>
                </div>   
            </div>
        </div> 
      
      </div>
    
    </div>
  );
  
}




export default AboutPage;