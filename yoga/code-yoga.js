const bg = document.querySelector(".slider");
const pics = document.querySelectorAll(".slidePic");
const n = pics.length;
let index = 0;

function carousel() {
  bg.style.backgroundImage = 'url("/pics/yoga/' + (index == 0 ? 0 : index-1) + '.jpg")';
  for (let i = 0; i < n; i++) pics[i].style.display = "none";  
  index++;
  if (index > n) index = 1;
  pics[index-1].style.display = "block";  
  setTimeout(carousel, 5000);    
} 
if (bg)  carousel();