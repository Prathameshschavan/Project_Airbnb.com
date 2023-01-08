


document.querySelector(".pay-now-payment-page-button-CLASS").addEventListener("click", otpPage);
function sendToOtpPage() {

    var aTag = document.querySelector(".pay-now-button-a-tag-CLASS");
    // location.replace("otpPage.html");
    window.location.replace("otpPage.html");
}

function otpPage() {
    event.preventDefault();
    if (document.getElementById("card-number-on-payment-ID").value == 1234567812345678) {
        if (document.getElementById("cvv-on-payment-ID").value == 123) {
            sendToOtpPage();
        } else {
            alert("Card details entered are incorrect ( Card number, card expiry and CVV)");
        }
    } else {
        alert("Card details entered are incorrect ( Card number, card expiry and CVV)");
    }
    console.log(document.getElementById("card-number-on-payment-ID").value);
    console.log(document.getElementById("cvv-on-payment-ID").value);
}