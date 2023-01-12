// 1
input.onfocus = () => {
    input.classList.add('information');
    info.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum eros et turpis elementum, id hendrerit libero vulputate. Donec vel erat blandit, sollicitudin tellus vel'
};
input.onblur = function() {
    this.classList.remove('information');
    info.innerHTML = "";
};

// 2
const buttonEnterWebSite = document.getElementsByClassName('put-webside-btn')[0];
const buttonOpenWebSite = document.getElementsByClassName('send-webside-btn')[0];

let enteredWebSite;
const onClick = () => {
enteredWebSite = prompt('enter the website');
}

buttonOpenWebSite.onclick = function() {
if (enteredWebSite.includes("https")) {
    window.location.href = enteredWebSite;
} else {
    const fullUrl = 'https://'.concat(enteredWebSite);
    window.location.href = fullUrl;
}
};

buttonEnterWebSite.onclick = onClick;

// 3
window.onload = chooseImage;

const myImages = ["images/2.jpg","images/3.jpg","images/4.jpg", "images/5.jpg", "images/6.jpeg", "images/7.jpeg", "images/8.jpg", "images/9.webp"];

function chooseImage() {
const randomNum = Math.floor(Math.random() * myImages.length);
document.getElementById("myPicture").src = myImages[randomNum];
}