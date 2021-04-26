async function picExists(url) {
    try {
        await $.ajax({
            url: url,
            type:'HEAD'
        });
        return true;
    } catch (error) {
        return false;
    }
}

async function countPics(usingBigPics, dir) {
    let i = 0;
    while (true) {
        let url = usingBigPics ? '/pics/' + dir + '/' + i + '.jpg' : 
                                 '/pics/' + dir + '/' + i + 's.jpg';
        if (await picExists(url))  i++;
        else  break;
    }
    return i;
}

function populateSlider(numPics, dir, bg) {
    let html = "";
    for (let i = 0; i < numPics; i++) 
        html += '<img src="/pics/' + dir + '/' + i + '.jpg" class="slidePic anifade">' +
                '<img src="/pics/' + dir + '/' + i + 's.jpg" class="slidePicSm anifade">';
    bg.innerHTML += html;
}

function getPics(usingBigPics) {
    if (usingBigPics)  
        return document.querySelectorAll(".slidePic");
    else  
        return document.querySelectorAll(".slidePicSm");
}

async function init() {
    let windowWidth = window.innerWidth;
    let usingBigPics = (windowWidth > 600);
    let scripts = document.getElementsByTagName('script');
    let thisScript = scripts[scripts.length-1];
    let dir = thisScript.dataset.page;
    const bg = document.querySelector("#slider");
    let crossedOver = false;
    let n = await countPics(usingBigPics, dir);
    
    populateSlider(n, dir, bg);
    let pics = getPics(usingBigPics);
    let index = 0;

    async function carousel() {
        let sufx = crossedOver ? usingBigPics ? 's' : '' : usingBigPics ? '' : 's';
        bg.style.backgroundImage = 'url("/pics/' + dir + '/' + (index == 0 ? 0 : index-1) + sufx + '.jpg")';
        for (let pic of pics)  pic.style.display = "none";
        index++;
        if (index > n)  index = 1;
        if (crossedOver) {
            pics = getPics(usingBigPics);
            crossedOver = false;
        }
        pics[index-1].style.display = "block";  
        setTimeout(carousel, 5000);        
    } 
    if (n > 1 && bg)  carousel();  // no need to run the slider if there's only one pic

    
    window.onresize = () => {
        windowWidth = window.innerWidth;
        if ((!usingBigPics && windowWidth > 600) || (usingBigPics && windowWidth <= 600)) {
            crossedOver = true;
            usingBigPics = !usingBigPics;
        }
    };
}

init();