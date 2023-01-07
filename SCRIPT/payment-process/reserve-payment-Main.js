
var bookingData = JSON.parse(localStorage.getItem());

// var bookingData = [{ "image1": "https://a0.muscache.com/im/pictures/6db44cb4-4c96-4ff3-b76d-d1af4cae05b8.jpg?im_w=960", "image2": "https://a0.muscache.com/im/pictures/5e737504-c46e-43ae-9fc0-8ff2aa69b9ef.jpg?im_w=480", "image3": "https://a0.muscache.com/im/pictures/223b7b4d-0132-4ba0-93cd-fa431282953a.jpg?im_w=480", "image4": "https://a0.muscache.com/im/pictures/5a9cdcd0-1786-45fc-8012-196b3e49e582.jpg?im_w=480", "image5": "https://a0.muscache.com/im/pictures/53db79a7-3d0d-47b0-a1a2-9343a6f234c0.jpg?im_w=480", "name": "Klein Kussewitz, Germany", "dist": "Built in 1945", "date": "5-10 Jan", "price": "₹23,153 per night", }]


displayBookingDetails(bookingData);

function displayBookingDetails(bookingData) {
    console.log("ele: ");

    bookingData.forEach(element => {

        document.querySelector(".trip-date-Class").textContent = element.date;
        console.log("ele: ", element.date);
        document.querySelector(".show-rent-and-day-Class").textContent = element.price;
        let price = element.price;
        price = price.replace("per", "")
        price = price.replace("night", "")
        console.log("sds", price);

        document.querySelector(".show-rent-without-tax-Class").textContent = price;
        price = price.replace("₹", "")
        price = price.replace(",", "")
        document.getElementById("total-onpayment-page-ID").textContent = "₹" + (parseInt(price) + 3551);
        document.getElementById("stay-image-on-payment-ID").src = element.image1;

        document.getElementById("stay-name-on-payment-ID").textContent = element.name;


    });



}


var totalAmount = 0;
console.log("jdsafsdfjds");

bookingData.forEach((elem) => {
    let price = elem.price;
    price = price.replace("per", "")
    price = price.replace("night", "")
    price = price.replace("₹", "")
    price = price.replace(",", "")

    totalAmount = (parseInt(price) + 3551);


});

console.log("totalVar1A: ", totalAmount);
export { totalAmount };
// user_login
//promocode
//image
// Promocode here
