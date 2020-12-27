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