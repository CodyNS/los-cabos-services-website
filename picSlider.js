const bg = document.querySelector(".slider");
let windowWidth = window.innerWidth;
let usingBigPics = true;
let crossedOver = false;
let pics = getPics();
const n = pics.length;
let index = 0;
let scripts = document.getElementsByTagName('script');
let thisScript = scripts[scripts.length-1];
let dir = thisScript.dataset.page;

function getPics() {
  if (windowWidth < 600) {
    usingBigPics = false;
    return document.querySelectorAll(".slidePicSm");
  } else {
    usingBigPics = true;
    return document.querySelectorAll(".slidePic");
  }  
}

function carousel() {
  bg.style.backgroundImage = windowWidth >= 600 ?
                              'url("/pics/' + dir + '/' + (index == 0 ? 0 : index-1) + '.jpg")' :
                              'url("/pics/' + dir + '/' + (index == 0 ? 0 : index-1) + 's.jpg")';
  for (let i = 0; i < n; i++)  pics[i].style.display = "none";
  index++;
  if (index > n)  index = 1;
  if (crossedOver) {
    pics = getPics();
    crossedOver = false;
  }
  pics[index-1].style.display = "block";  
  setTimeout(carousel, 5000);    
} 
if (bg)  carousel();


window.onresize = () => {
  windowWidth = window.innerWidth;
  if ((!usingBigPics && windowWidth >= 600) || (usingBigPics && windowWidth < 600))
    crossedOver = true;
};