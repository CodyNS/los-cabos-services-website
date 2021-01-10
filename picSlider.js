const bg = document.querySelector("#slider");
let windowWidth = window.innerWidth;
let usingBigPics = (windowWidth > 600);
let crossedOver = false;
let pics = getPics();
const n = pics.length;
let index = 1;
let scripts = document.getElementsByTagName('script');
let thisScript = scripts[scripts.length-1];
let dir = thisScript.dataset.page;

function getPics() {
    if (windowWidth > 600) {
        usingBigPics = true;
        return document.querySelectorAll(".slidePic");
    } else {
        usingBigPics = false;
        return document.querySelectorAll(".slidePicSm");
    }  
}

function carousel() {
    let sufx = crossedOver ? usingBigPics ? 's' : '' : usingBigPics ? '' : 's';
    bg.style.backgroundImage = 'url("/pics/' + dir + '/' + (index == 0 ? 0 : index-1) + sufx + '.jpg")';
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
if (n > 1 && bg)  setTimeout(carousel, 5000);  // no need to run the slider if there's only one pic
// if (usingBigPics)  bg.style.backgroundImage = 'url("/pics/' + dir + '/0.jpg")';


window.onresize = () => {
    windowWidth = window.innerWidth;
    if ((!usingBigPics && windowWidth > 600) || (usingBigPics && windowWidth <= 600)) {
        crossedOver = true;
        usingBigPics = !usingBigPics;
    }
};
