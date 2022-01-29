// import React from "react";
// import "./Card.css";
// // import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

// export default function Card() {
//   return (
//     <div class="form-container">
//       <form class="register-form">
 
//         <input
//           id="first-name"
//           class="form-field"
//           type="text"
//           placeholder="Credit/Debit Card Number"
//           name="firstName"
//         />
      
//         <div class="cvv-input">
//               <input  class="Cvv" placeholder="Expiry(MM/YY)"/>
//               <input  class="Cvv" placeholder="CW"/>
            
//         </div>
      
      
//         <input
//           id="email"
//           class="form-field"
//           type="text"
//           placeholder="Name On Card"
//           name="email"
//         />
        
     
//         <button class="form-field" type="sumbit">
//           PAY NOW 
//         </button>
//       </form>
//     </div>
//   );
// }



// --------------------------------------------
import React, { Component } from 'react';
// import React from "react";
import "./Card.css";
import Card2 from "./Card2";

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

class Card extends Component {
  render() {
    return (      
            /* <ul className="App-header">
              <li>
                <Link to="/">Card</Link>
              </li>*/ 
        <Router>
              <div class="form-container">
      <form class="register-form">
       
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="Credit/Debit Card Number"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <div class="cvv-input">
              <input  class="Cvv" placeholder="Expiry(MM/YY)"/>
              <input  class="Cvv" placeholder="CW"/>
            
        </div>
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
      
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Name On Card"
          name="email"
        />
        {/* <button class="form-field" type="sumbit"> */}
          {/* PAY NOW  */}
        {/* </button> */}
        <a class="btn btn-primary" href="/Card2">link</a>
      </form>
    
    
           <Routes>
                 {/* <Route exact path='/Card' element={<Card/>}></Route> */}
                 <Route exact path='/Card2' element={<Card2/>}></Route>
                 {/* <Route exact path='/contact' element={< Contact />}></Route> */}
          </Routes>
          </div>
       </Router>
   );
  }
  
}
export default Card;


         