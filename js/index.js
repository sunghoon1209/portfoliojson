// 
// function contactClick(){
//     let checked = document.querySelector('.card__tab__about card__tab__checked');
//     let tab = document.querySelector('card__tab') ; 
 // };




// 카드내용 어바웃 미
let infoAbout = document.querySelector('.card__info__about')
// 카드내용 경험
let infoExperience = document.querySelector('.card__info__experience')
// 카드내용 연락
let infoContact = document.querySelector('.card__info__contact')

// 탭 메뉴 about me
let tabAbout = document.querySelector('.card__tab__about');
// 탭 메뉴 experience
let tabExperience = document.querySelector('.card__tab__experience');
// 탭 메뉴 contact
let tabContact = document.querySelector('.card__tab__contact');

// about탭 메뉴 클릭시
function aboutClick(){
 //  선택된 내용
 let infoActive = document.querySelector('.card__info__active');
 // 선택된 탭메뉴
 let tabActive = document.querySelector('.card__tab__active');
    
    // 이미 선택된 카드내용과 탭메뉴 해제
    infoActive.classList.remove('card__info__active');
    tabActive.classList.remove('card__tab__active');
    infoAbout.classList.add('card__info__active');
    tabAbout.classList.add('card__tab__active');

};
// contact탭 메뉴 클릭시
function contactClick(){
     //  선택된 내용
let infoActive = document.querySelector('.card__info__active');
// 선택된 탭메뉴
let tabActive = document.querySelector('.card__tab__active');
    // 이미 선택된 카드내용과 탭메뉴 해제
    infoActive.classList.remove('card__info__active');
    tabActive.classList.remove('card__tab__active');
    infoContact.classList.add('card__info__active');
    tabContact.classList.add('card__tab__active');

};
// experience탭 메뉴 클릭시
function experienceClick(){
     //  선택된 내용
let infoActive = document.querySelector('.card__info__active');
// 선택된 탭메뉴
let tabActive = document.querySelector('.card__tab__active');
    // 이미 선택된 카드내용과 탭메뉴 해제
    infoActive.classList.remove('card__info__active');
    tabActive.classList.remove('card__tab__active');
    infoExperience.classList.add('card__info__active');
    tabExperience.classList.add('card__tab__active');

};

// 카드클릭시 회전됨
let card = document.querySelector('.card');
card.addEventListener("click",function(){
    document.querySelector('.card__inner').style.transform = "rotateY(180deg)";
});

// 페이지가 로드 된 후 몇초 후에 시작되게

// setTimeout(function(){
//     document.querySelector('.card__inner').style.transform = "rotateY(180deg)";
// }, 2000);