
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
data={"image1": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/0335ee87-74de-484f-8025-92eddcec1d99.jpeg?im_w=960", "image2": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/8d6aff10-5a55-4e94-98a6-846c75e8a608.jpeg?im_w=480", "image3": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/8ddab15f-ec1a-41d3-9799-b97064211e0d.jpeg?im_w=480", "image4": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/8ba49496-8d4b-4fbf-aa80-936b781fe7f7.jpeg?im_w=480", "image5": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-29862895/original/01f04dc2-fd82-4508-9215-41d1604aee04.jpeg?im_w=480", "name": "Surat Thani, Thailand", "dist": "Ocean views", "date": "18-23 Mar", "price": "₹29,363 per night",}
 

 


localStorage.setItem("detail_data",JSON.stringify(data));

display();

console.log("object");