import React from 'react'
import './Otp_page.css';
// import { Image } from "react-bootstrap";
// import Otp_page  from '../pay_card/Otp_page.jpg';
import swal from 'sweetalert';

function number(){
    swal({
        title:"payment succesfull",
        button : "cancel",
        icon: "success",
        button: "Aceptar"
    });
};
export default function Otp_page () {
    return (
        <center>
        <div id="main">
             {/* <img id="img" src="./otp.jpg"/> */}
             {/* <Image id="img" src={Otp_page} alt="not show" thumbnail style={{border:"none"}} />   */} 
            <h2>OTP Verification</h2>
            <h3>Enter the OTP sent to +91-99876345xxx</h3>
            <input id="partitioned" type="text" maxlength="4" />
    
         {/* <center><button>VERIFY & PROCEED</button></center> */}
       <center><button onClick={number} > VERIFY & PROCEES </button></center>
         {/* className='btn btn-secondary' */}
        </div>
     </center>
    )
}
