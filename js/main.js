let sharebtn = document.querySelector(".icon-share");
let menuShare = document.querySelector(".share")
sharebtn.onclick = () => {
    if (menuShare.classList.contains("hide")) {
        sharebtn.classList.add("icon-share-active");
        menuShare.classList.remove("hide");
    }
    else {
        sharebtn.classList.remove("icon-share-active");
        menuShare.classList.add("hide");
    }

};