
document.getElementById("reserve_btn").addEventListener("click",goToPayment)

function goToPayment(){
    window.location.href="../HTML/Payment-Process/reserev-Payment-Page.html"
}

function display(){
document.getElementById("detail_1st").src=data.image1;
document.getElementById("detail_2nd").src=data.image2;
document.getElementById("detail_3rd").src=data.image3;
document.getElementById("detail_4th").src=data.image4;
document.getElementById("detail_5th").src=data.image5;
let price = data.price;
price=price.replace("per","");
console.log(price);
price=price.replace("night","");
console.log(price);
document.getElementById("detail_price").textContent=price;
}

let data = JSON.parse(localStorage.getItem("detail_data")) || {};

console.log(data);
display();

console.log("object");

document.getElementById("navbar_logo").addEventListener("click",()=>{
    window.location.href="../HTML/product.html"
})