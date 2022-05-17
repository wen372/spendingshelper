import React from 'react';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

import '../about.css';

function AboutPage({Arg}) {


  

//   return (
//     <div className="application topSpace container-fluid homepage TransactionComponent col-10 col-md-10 col-lg-10">
//       <div className="nobdr innerInfo container col-1 col-md-6 col-lg-8">
        
//         <div className='col-bg'>
//             About Us
//             <br/>
//             <br/>
//             <div className="col-md">
// This web interface renders a visual chart to help people to track their spending habits and to help them to improve their spending habits aswell. 
//             </div>
//             <div className="row topSpace">  
//                 <div className="col-md">
//                     <img src="https://cunytechprep.nyc/_next/static/image/public/ctp-logo-square.57c4c8517df448c781ad113a7e0bb894.png" className="img-fluid img-ctp" alt="Cuny Tech Prep Logo "/>
//                 </div>   
//             </div>
//         </div> 
      
//       </div>
    
//     </div>
//   );
  return(
  <div className="application topSpace container-fluid homepage col-sm-10 col-12 col-md-8 col-lg-8 ">
    <div className="card-body card-text">
      <h1><strong>About Us</strong></h1>
      <br></br>
      <h4>Our Motivation</h4>
      
      <div className="AboutUsInfo">
        <p>The motivation for this application was to create a web application that renders a visual chart to help people track their spending habits and to help them to improve their spending habits as well. </p>
      </div>
      <h3>Developers</h3>

      <div className="AboutUsDevelopers ">
          <div className="AboutUsDevelopersInfo" class="AboutUsDevelopersInfo">
            <div className="Developer1" class="Developer">
              <h4>Titus Wen</h4>
                <div className="AboutUsDevelopersLinks" class="AboutUsDevelopersLinks">
                  <a target="_blank"  rel='noreferrer' class = "socialLinks"  href="https://www.linkedin.com/in/tituswen/">
                      <img src={linkedin} alt="linkedin" width="32" height="32"/> 
                  </a>
                  <a target="_blank"  rel='noreferrer' class = "socialLinks" href="https://github.com/wen372">
                      <img src={github} alt="github" width="32" height="32"/> 
                  </a>
                </div>
            </div>
            
            <div className="Developer2" class="Developer">
              <h4>Caesar Cuzco</h4>
                <div className="AboutUsDevelopersLinks" class="AboutUsDevelopersLinks space">
                    <a target="_blank"  rel='noreferrer' class = "socialLinks"  href="https://www.linkedin.com/in/caesar001/">
                        <img src={linkedin} alt="linkedin" width="32" height="32"/> 
                    </a>
                    <a target="_blank"  rel='noreferrer' class = "socialLinks" href="https://github.com/caesarc6">
                        <img src={github} alt="github" width="32" height="32"/> 
                    </a>
                </div>
            </div>

          </div>

      </div>





    
  </div>

</div>)
  
}




export default AboutPage;