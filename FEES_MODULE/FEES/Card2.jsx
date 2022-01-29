import React from "react";
import "./Card2.css";



export default function Card2() {
  return (
    <div class="form-container">
      <form class="register-form">
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="Your VPA(Virtual Payment Address)"
          name="firstName"
         /> 
        {/* Uncomment the next line to show the error message */}
        <span id="first-name-error"> Example: Albusp@gmail.com  </span>
       
        <button class="form-field" type="sumbit"> 
          PAY NOW 
        {/* <FontAwesomeIcon icon ={faCoffee}></FontAwesomeIcon>    */}
        </button>
      </form>
    </div>
  );
}