
var bookingData = JSON.parse(localStorage.getItem("detail_data")) || {};

// var bookingData = [{ "image1": "https://a0.muscache.com/im/pictures/6db44cb4-4c96-4ff3-b76d-d1af4cae05b8.jpg?im_w=960", "image2": "https://a0.muscache.com/im/pictures/5e737504-c46e-43ae-9fc0-8ff2aa69b9ef.jpg?im_w=480", "image3": "https://a0.muscache.com/im/pictures/223b7b4d-0132-4ba0-93cd-fa431282953a.jpg?im_w=480", "image4": "https://a0.muscache.com/im/pictures/5a9cdcd0-1786-45fc-8012-196b3e49e582.jpg?im_w=480", "image5": "https://a0.muscache.com/im/pictures/53db79a7-3d0d-47b0-a1a2-9343a6f234c0.jpg?im_w=480", "name": "Klein Kussewitz, Germany", "dist": "Built in 1945", "date": "5-10 Jan", "price": "₹23,153 per night", }]


displayBookingDetails(bookingData);

function displayBookingDetails(Data) {
    console.log("ele: ");

    

        document.querySelector(".trip-date-Class").textContent = Data.date;
        console.log("ele: ", Data.date);
        document.querySelector(".show-rent-and-day-Class").textContent = Data.price;
        let price = Data.price;
        price = price.replace("per", "")
        price = price.replace("night", "")
        console.log("sds", price);

        document.querySelector(".show-rent-without-tax-Class").textContent = price;
        price = price.replace("₹", "")
        price = price.replace(",", "")
        price = price.replace(",","");
        
        price = (parseInt(price) + 3551);
        console.log(price+"ab kr raha hu");
        document.getElementById("total-onpayment-page-ID").textContent = "₹" + price;
        document.getElementById("stay-image-on-payment-ID").src = Data.image1;

        document.getElementById("stay-name-on-payment-ID").textContent = Data.name;


    



}


var totalAmount = 0;
console.log("jdsafsdfjds");


    let price = bookingData.price;
    console.log(price);
    price = price.replace("per", "")
    price = price.replace("night", "")
    price = price.replace("₹", "")
    price = price.replace(",", "")
    price = price.replace(",", "")
    console.log(price);
    totalAmount = (parseInt(price) + 3551);



console.log("totalVar1A: ", totalAmount);
export { totalAmount };
// user_login
//promocode
//image
// Promocode here
