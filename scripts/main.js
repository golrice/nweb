let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/test_img.jpg") {
        myImage.setAttribute("src", "images/love.jpg");
    } else {
        myImage.setAttribute("src", "images/test_img.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick = function () {
    setUserName();
};

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        setUserName();
    }
    localStorage.setItem("name", myName);
    myHeading.textContent = "你好，" + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "你好，" + storedName;
}

localStorage.clear();
