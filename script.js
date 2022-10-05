let searchbtn = document.querySelector('.searchbtn');
let closebtn = document.querySelector('.closebtn');
let searchBox = document.querySelector('.searchBox');


searchbtn.onclick = function () {
    searchBox.classList.add('active');
    searchbtn.classList.add('active');
    closebtn.classList.add('active');
}

closebtn.onclick = function () {
    searchBox.classList.remove('active');
    searchbtn.classList.remove('active');
    closebtn.classList.remove('active');
}