import React, { useState } from "react";
// import './Connect.css';
import Module from "../Click/Module";

function Click_main() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
       <div class="form-container">
      <form class="register-form">
 
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="Credit/Debit Card Number"
          name="firstName"
        />
      
        <div class="cvv-input">
              <input  class="Cvv" placeholder="Expiry(MM/YY)"/>
              <input  class="Cvv" placeholder="CW"/>
            
        </div>
      
      
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Name On Card"
          name="email"
        />
        
     
        <button class="form-field" type="sumbit">
          PAY NOW 
        </button>
      </form>
    </div>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

      {modalOpen && <Module setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Click_main;