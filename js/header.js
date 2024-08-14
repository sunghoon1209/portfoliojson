/* .header__nav-list 를 변수설정해서
.header__nav-list가 
left 0 인 경우 이는 모바일이므로 top값을 0으로 만들고
그 외에 경우에는 태블릿므로 left값을 0으로 만든다.
해당 이벤트는 .header__hbm 를 클릭할때 시작되도록

*/

document.querySelector('.header__hbm').addEventListener('click', function () {
    let hbm = document.querySelector('.header__hbm');
    let xbtn = document.querySelector('.header__hbm__active');
    hbm.style.display = "none";
    xbtn.style.display = "block";
    let navList = document.querySelector('.header__nav-list');
    let width = window.innerWidth;
    if (width < 768) {
        navList.style.top = "0";
    } else {
        navList.style.left = "0";

    }



});
document.querySelector('.header__hbm__active').addEventListener('click', function () {
    let hbm = document.querySelector('.header__hbm');
    let xbtn = document.querySelector('.header__hbm__active');
    hbm.style.display = "block";
    xbtn.style.display = "none";
    let navList = document.querySelector('.header__nav-list');
    let width = window.innerWidth;
    if (width < 768) {
        navList.style.top = "";
    } else {
        navList.style.left = "";

    }



});