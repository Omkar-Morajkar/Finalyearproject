import React from 'react';

const Billing = () =>{
    return(
    <>
        <div class="container">
            <form action="">
                <div class="row">
                    <div class="col">
                        <h3 class="title">BILLING ADDRESS</h3>
                        <div class="inputBox">
                            <span>Full Name :</span>
                            <input type="text" placeholder="ABC EFG"/>
                        </div>
                        <div class="inputBox">
                            <span>Email :</span>
                            <input type="email" placeholder="example@example.com"/>
                        </div>
                        <div class="inputBox">
                            <span>Address :</span>
                            <input type="text" placeholder="Hno. - street - locality"/>
                        </div>
                        <div class="inputBox">
                            <span>City :</span>
                            <input type="text" placeholder="GOA"/>
                        </div>
                        <div class="flex">
                            <div class="inputBox">
                                <span>State :</span>
                                <input type="text" placeholder="INDIA"/>
                            </div>
                            <div class="inputBox">
                                <span>Zip Code :</span>
                                <input type="text" placeholder="123 456"/>
                            </div>
                        </div>

                    </div>
                    <div class="col">
                        <h3 class="title">PAYMENT</h3>

                        <div class="inputBox">
                            <span>CARDS ACCEPTED :</span>
                            <img src="images/card_img.png" alt=""/>
                        </div>
                        <div class="inputBox">
                            <span>Name On Card :</span>
                            <input type="text" placeholder="Mr. ABC EFG"/>
                        </div>
                        <div class="inputBox">
                            <span>Credit Card Number :</span>
                            <input type="text" placeholder="1111-2222-3333-4444"/>
                        </div>
                        <div class="inputBox">
                            <span>Exp Month :</span>
                            <input type="text" placeholder="january"/>
                        </div>

                        <div class="flex">
                            <div class="inputBox">
                                <span>Exp Year :</span>
                                <input type="number" placeholder="2022"/>
                            </div>
                            <div class="inputBox">
                                <span>CVV :</span>
                                <input type="text" placeholder="1234"/>
                            </div>
                        </div>

                    </div>
            
                </div>

                <input type="submit" value="proceed to Donate" class="submit-btn"/>
            </form>
        </div>    
    </>
    );
}
export default Billing;