 // JavaScript to toggle the visibility of the nav items when the menu icon is clicked
//  document.getElementById('menu-icon').addEventListener('click', function () {
//     var navItems = document.querySelectorAll('nav h4');
//     navItems.forEach(function (item) {
//         item.style.display = (item.style.display === 'none' || item.style.display === '') ? 'block' : 'none';
//     });
// });

let addBookBtn=document.getElementById("addBook")
let openpopup=document.getElementById("open-popup")
addBookBtn.addEventListener("click" ,()=>{
    opendivPopup()    
})

const opendivPopup = () => {
    openpopup.innerHTML = `
    <div class="pop-content">
    <p class="popup-para">To add books you have to login first</p>
    <h5 class="popuplogin-btn"><a href="login.html">login</a></h5>
    
    </div>
    `
    // <button id="close-img"><img src="img/close.png"></button>
    openpopup.parentElement.style.display = "block";
}


// let closepopup=document.getElementById("close-img")

// closepopup.addEventListener('click', ()=>{
//     openpopup.parentElement.style.display = "none";

// })