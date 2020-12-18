const bg = document.querySelector(".slider");
const pics = document.querySelectorAll(".slidePic");
const n = pics.length;
let index = 0;

function carousel() {
  bg.style.backgroundImage = 'url("/pics/good/' + (index == 0 ? 0 : index-1) + '.jpg")';
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