

// for skills


let circleProgress = document.querySelectorAll(".circular-progress");
let callValue = document.querySelectorAll(".value");
let spanElement = document.getElementsByClassName("value");

let myElement = document.querySelector("#main-4-area");
let a = true;

function pie(moving, num, end) {
  let progressValue = 0;
  let progressEndValue = end;
  let speed = 80;

  let progress = setInterval(() => {
    progressValue++;
    // value
    num.textContent = `${progressValue}%`;
    // progressBar
    moving.style.background = `conic-gradient( #FF8E00 ${progressValue * 3.6}deg,#EBF7F5 ${progressValue * 3.6}deg)`;
    if (progressValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);

};


function call() {
  for (let j = 0; j < circleProgress.length; j++) {
    let numberValue = parseInt(spanElement[j].innerText);
    // value = callValue[j];
    pie(circleProgress[j], callValue[j], numberValue)
  }
}


// for page


let reveals = document.querySelectorAll(".area");
let windowHeight = window.innerHeight;
let elementVisible = 150;

function reveal() {

  for (let i = 0; i < reveals.length; i++) {

    let elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("show");

      // skill start 
      if (reveals[i] == myElement && a === true) {
        setTimeout(call, 1355);
        // call();
        a = false;
      }

    } else {
      reveals[i].classList.remove("show");
    }
  }

}

window.addEventListener("scroll", reveal);


// for education


var boxes = document.querySelectorAll('.edu-dit-container');
const tri = window.innerHeight / 5 * 4;

function check() {
  boxes.forEach(box => {
    const boxtop = box.getBoundingClientRect().top;
    if (boxtop < tri) {
      box.classList.add("show2");
    }
    else {
      box.classList.remove("show2");
    }
  })
}

window.addEventListener('scroll', check);


let addbtn = document.querySelectorAll(".copy-btn");
let p_text = document.getElementsByClassName("text-muted"); 
let phone_number = document.getElementById("phone-number");

addbtn[0].addEventListener("click",()=>{

  navigator.clipboard.writeText(p_text[0].innerHTML);

  addbtn[0].classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(()=>{
    addbtn[0].classList.remove("active");
  },2500)
});

addbtn[1].addEventListener("click",()=>{

  navigator.clipboard.writeText(phone_number.innerText);

  addbtn[1].classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(()=>{
    addbtn[1].classList.remove("active");
  },2500)
});