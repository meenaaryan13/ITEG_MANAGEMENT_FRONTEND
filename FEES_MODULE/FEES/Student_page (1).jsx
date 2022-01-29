import React from 'react'
import './Student_page.css';
// import {Image} from "react-bootstrap";
// import Student_page from '../Student_page/Student_page.jpg';

 function Student_page() {
    return (
        <div>
            <div class="main">
                {/* <div class="right-container a-container" id="reset-pwd">
            <form class="account-form" id="a-form" method="" action=""> */}
                <div id="parent">
                    <div id="profile">
                        <p><i class="fas fa-camera"></i></p>
                        <input id="file" type="file" placeholder='add image' />
                    </div>

                    <h3> Profile</h3>
                    <input type="text" />
                    <h5> personal info </h5>
                    <div id="fom">
                        <input className='num' type="text" placeholder='Enter First Name' />
                        <input type="text" placeholder='Enter Last Name' /><br></br>
                        <input type="text" placeholder='Enter Date of Birth' />
                        <input type="text" placeholder='Enter Gender' /><br></br>
                        <input type="text" placeholder='Enter Email' />
                        <input type="text" placeholder='Enter Password' /><br></br>

                        <input type="text" placeholder='Enter Father Name' />
                        <input type="text" placeholder='Enter Father Contact' /><br></br>
                        <input type="text" placeholder='Enter Adress' />
                        <input type="text" placeholder='Enter Contact Number' />    <br></br>
                        {/* <Button variant="contained" color="primary" > SUBMIT  </Button>  */}
                        <button id="edit">Edit</button>
                        <button id="view">View</button>
                        <button id="histroy">Histroy</button>
                        <button id="pay">Pay</button>
                    </div>

                    {/* </div> 
            </form> */}
                </div>

                 <div class="left-container" id="link-back"> 
                {/* <Image src={Student_page} alt="not show" thumbnail style={{border:"none"}} /> */}
                 {/* <Image id="right_img" {} alt="not show" thumbnail style={{border:"none"}} />  */}
                </div>
            </div>
        </div>
    )
}
export default Student_page;
