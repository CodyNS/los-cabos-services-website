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