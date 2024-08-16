window.onload = function () {
  
    // 변수설정
    let popUpTitle = document.querySelector('.popup__title');
    let popUpSubtitle = document.querySelector('.popup__subtitle');
    let popUpDes = document.querySelector('.popup__description');
    let popUpThumb = document.querySelector('.popup__page-thumb img');
    let popUpUrlHref = document.querySelector('.popup__url');
    let popUpCodeHref = document.querySelector('.popup__code');
    let popUpVision = document.querySelector('.popup__develop-vision p');
    let popUpSkills = document.querySelector('.popup__skills p');
    let popUpFeature1st = document.querySelector('.popup__features__1st div');
    let popUpFeature1stImg = document.querySelector('.popup__features__1st img');
    let popUpFeature2nd = document.querySelector('.popup__features__2nd div');
    let popUpFeature2ndImg = document.querySelector('.popup__features__2nd img');
    let popUpFeedback = document.querySelector('.popup__feedback__1st');
    let popUpFeedback2nd = document.querySelector('.popup__feedback__2nd');




    // 현재 인덱스를 추적하는 변수
    let currentIndex = 0;

    // 팝업창 열기
    let works = document.querySelectorAll('.works');
    works.forEach((work, index) => {
        work.addEventListener("click", function () {
            databinding();

            // 현재 인덱스 설정
            currentIndex = index;
            // 팝업창 열기
            let wrapper = document.querySelector('.portfolio__wrapper');
            wrapper.classList.add('portfolio__wrapper--hide');
            // 팝업창 열기
            let popUp = document.querySelector(".popup");
            popUp.classList.add('popup--show');
            // 데이터 설정
            let data = popUpInfoArray[currentIndex];

            // 제목 변경
            popUpTitle.textContent = data.title;
            // 소제목 변경
            popUpSubtitle.textContent = data.subttitle;
            // 한줄 소개
            popUpDes.textContent = data.description;
            // 썸네일
            popUpThumb.setAttribute("src", data.pageThumb);
            // 썸네일 이미지 alt값
            popUpThumb.setAttribute("alt", data.pageTumbAlt);
            // Url href변경
            popUpUrlHref.setAttribute("href", data.url);
            // 코드 다운 url 변경
            popUpCodeHref.setAttribute("href", data.codeUrl);
            // 개발목표
            popUpVision.textContent = data.developVision;
            // 사용기술
            popUpSkills.textContent = data.skills;
            // 첫번째 특징
            popUpFeature1st.textContent = data.feature1st;
            // 첫번째 특징 사진 변경
            popUpFeature1stImg.setAttribute("src", data.feature1stImg);
            // 두번째 특징
            popUpFeature2nd.textContent = data.feature2nd;
            // 두번째 특징 사진 변경
            popUpFeature2ndImg.setAttribute("src", data.feature2ndImg);
            // 개선사항
            popUpFeedback.textContent = data.feedback;
            popUpFeedback2nd.textContent = data.feedback2nd;
        });
    });

    // 팝업창 닫기
    let popUpClose = document.querySelectorAll('.pop-up__button__list');
    popUpClose.forEach(function (button) {
        button.addEventListener("click", function () {
            let wrapper = document.querySelector('.portfolio__wrapper');
            wrapper.classList.remove('portfolio__wrapper--hide');

            let popUp = document.querySelector(".popup");
            popUp.classList.remove('popup--show');
        })
    });


    // next 버튼 누를 때
    let nextBtn = document.querySelectorAll('.pop-up__button__next');
    nextBtn.forEach(function (button) {
        button.addEventListener("click", function () {
            // 인덱스를 증가시키고 배열의 길이를 넘으면 0으로
            currentIndex = (currentIndex + 1) % popUpInfoArray.length;

            // 다음 데이터 설정
            let data = popUpInfoArray[currentIndex];

            popUpTitle.textContent = data.title;
            // 소제목 변경
            popUpSubtitle.textContent = data.subttitle;
            // 한줄 소개
            popUpDes.textContent = data.description;
            // 썸네일
            popUpThumb.setAttribute("src", data.pageThumb);
             // 썸네일 이미지 alt값
             popUpThumb.setAttribute("alt", data.pageTumbAlt);
            // Url href변경
            popUpUrlHref.setAttribute("href", data.url);
            // 코드 다운 url 변경
            popUpCodeHref.setAttribute("href", data.codeUrl);
            // 개발목표
            popUpVision.textContent = data.developVision;
            // 사용기술
            popUpSkills.textContent = data.skills;
            // 첫번째 특징
            popUpFeature1st.textContent = data.feature1st;
            // 첫번째 특징 사진 변경
            popUpFeature1stImg.setAttribute("src", data.feature1stImg);
            // 두번째 특징
            popUpFeature2nd.textContent = data.feature2nd;
            // 두번째 특징 사진 변경
            popUpFeature2ndImg.setAttribute("src", data.feature2ndImg);
            // 개선사항
            popUpFeedback.textContent = data.feedback;
        })
    });
};

function databinding() {
    $.ajax({
        url: 'js/portfoliodata.json',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            // data는 JSON 파일에서 로드된 배열입니다
            let popupInfoArray = data;
            let currentIndex = 0;


        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Failed to load data:', textStatus, errorThrown);
        }
    });
}