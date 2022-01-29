import React from "react";
import './Project.css';

function Project() {
    return (
        <div >
            <h1 class="heading">Online Payment</h1>
            <div class="box">
            
                <h1 class="head" >Payment Options:Cards(Credit/Debit) </h1>
                <div class="card">
                <ul>
                <div class="cards">
                  <pre><li class="far fa-credit-card">    Cards</li></pre>
                </div>
                <div class="banks">
                   <pre> <li class="fas fa-university">    Banks</li></pre>
                    </div>
                    <div class="UPI">
                    <pre><li class="fas fa-caret-right">   UPI</li></pre>
                    </div>
                    <div class="wallets">
                   <pre> <li class="fas fa-wallet">    Wallets</li></pre>
                    </div>
                    </ul>
                </div>
            </div>
            </div>
        
            )
}
            export default Project;