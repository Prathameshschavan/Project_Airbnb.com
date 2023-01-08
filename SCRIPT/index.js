// --------------Sticky navbar
window.onscroll = function() {myFunction()};

var header = document.getElementById("navpart");
var sticky = header.offsetTop;

function myFunction() {
if (window.pageYOffset > sticky) {
  header.classList.add("sticky");
} else {
  header.classList.remove("sticky");
}
}

// ---------------filter modal
let modal;
document.addEventListener("click", (e) => {
  if (e.target.className === "modal-open") {
    modal = document.getElementById(e.target.dataset.id);
    openModal(modal);
    document.getElementById("navlinks").style.zIndex = "-1";
  } else if (e.target.className === "modal-close") {
    closeModal(modal);
  } else {
    return;
  }
});
const openModal = (modal) => {
  document.body.style.overflow = "hidden";
  modal.setAttribute("open", "true");
  document.addEventListener("keydown", escClose);
  let overlay = document.createElement("div");
  overlay.id = "modal-overlay";
  document.body.appendChild(overlay);
};
const closeModal = (modal) => {
  document.body.style.overflow = "auto";
  modal.removeAttribute("open");
  document.removeEventListener("keydown", escClose);
  document.body.removeChild(document.getElementById("modal-overlay"));
};
const escClose = (e) => {
  if (e.keyCode == 27) {
    closeModal();
  }
};

// ----signuppage


// ----filterpart

var lowerSlider = document.querySelector('#lower');
var  upperSlider = document.querySelector('#upper');

document.querySelector('#two').value=upperSlider.value;
document.querySelector('#one').value=lowerSlider.value;

var  lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;
        if (lowerVal == lowerSlider.min) {
        upperSlider.value = 4;
        }
    }
    document.querySelector('#two').value=this.value
};

lowerSlider.oninput = function () {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);
    if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;
        if (upperVal == upperSlider.max) {
            lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
    }
    document.querySelector('#one').value=this.value
};

const navlinkcontainers=[...document.querySelectorAll(
  "#navlinkcontainer")];
  console.log("hiii")
  const nextbtn=[...document.querySelectorAll('#rightspan')];
  const prebtn=[...document.querySelectorAll('#leftspan')];

  navlinkcontainers.forEach((item ,i)=>{
let linkdimension=item.getBoundingClientRect();
let containerwidth=linkdimension.width;

nextbtn[i]=addEventListener("click",()=>{
  item.scrollLeft+=containerwidth;
})
prebtn[i]=addEventListener("click",()=>{
  item.scrollLeft-=containerwidth;
})
  })

   
