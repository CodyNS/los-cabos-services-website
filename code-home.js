const bg = document.querySelector(".slider");
const pics = document.querySelectorAll(".slidePic");
const n = pics.length;
let index = 0;

function carousel() {
  bg.style.backgroundImage = 'url("/pics/home/' + (index == 0 ? 0 : index-1) + '.jpg")';
  for (let i = 0; i < n; i++) pics[i].style.display = "none";  
  index++;
  if (index > n) index = 1;
  pics[index-1].style.display = "block";  
  setTimeout(carousel, 5000);    
} 
if (bg)  carousel();


document.querySelector(".top-branding").addEventListener("mouseover", function() {
    document.querySelector(".toplogo").src="/pics/logo.png";
});
document.querySelector(".top-branding").addEventListener("mouseout", function() {
    document.querySelector(".toplogo").src="/pics/logo-neg.png";
});

function openHamburger() {
    var x = document.querySelector("#hambMenu");
    if (x.style.display === "block") {
        x.style.display = "none";
        if (window.innerWidth <= 410) {
            document.querySelector('.topbar a.hambBtn').style.background = "transparent";
            document.querySelector('.topbar a.hambBtn i').style.color = "black";
        }
    } else {
        x.style.display = "block";
        if (window.innerWidth <= 410) {
            document.querySelector('.topbar a.hambBtn').style.background = "#272727";
            document.querySelector('.topbar a.hambBtn i').style.color = "white";
        }
    }
  }