const paymentMethod = () => {
    return `<div id="for-logedin-user-ID">
                            <p>Choose Payment Method</p>
                            <div>
                                <img src="https://imgpile.com/images/dRCvwX.png" alt="pay-with-cards">
                            </div>
                            <div id="credit-card-div-ID">
                                <select name="creditcard" id="creditcard-input-ID">
                                    <option value="creditcard">
                                        Pay with Credit OR Debit Card
                                    </option>
                                </select>
                            </div>
                            <div id="Coupon-code-div-ID">

                                <input type="text" id="Coupon-code-input-ID" placeholder="Enter Your Save Code">
                               
                            </div>
                                   <div> <button id="have-a-promo-code-a-ID">Add Promo Code</button></div>
                            <div>
                                <img src="https://imgpile.com/images/dRC3sh.png" alt="">
                            </div>

                            <div id="Confirm&Pay-button-div-ID" >
                                <a href="creditCard.html"> <button id="ConfirmPayment-buttom-ID" >Confirm & Pay</button></a>
                            </div>

                        </div>`

};

export default paymentMethod;