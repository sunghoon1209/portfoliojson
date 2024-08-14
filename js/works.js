window.onload = function () {
    // JSON 파일에서 데이터 로드
    fetch('portfoliodata.json')
        .then(response => response.json())
        .then(popUpInfoArray => {
            // 변수 설정
            let popUpTitle = document.querySelector('.popup__info-title');
            let popUpSubtitle = document.querySelector('.popup__info-subtitle span');
            let popUpSkills = document.querySelector('.popup__info-skills span');
            let popUpUrl = document.querySelector('.popup__info-url span');
            let popUpUrlHref = document.querySelector('.popup__info-url a');
            let popUpGit = document.querySelector('.popup__info-github span');
            let popUpGitHref = document.querySelector('.popup__info-github a');
            let popUpImg = document.querySelector('.pop-up__img__wrap img');
            let popUpDes = document.querySelector('.pop-up__content__description');

            // 현재 인덱스를 추적하는 변수
            let currentIndex = 0;

            // 팝업창 열기
            let works = document.querySelectorAll('.works');
            works.forEach((work, index) => {
                work.addEventListener("click", function () {
                    // 현재 인덱스 설정
                    currentIndex = index;
                    // 팝업창 열기
                    let popUp = document.querySelector(".pop-up__wrapper");
                    popUp.classList.add('pop-up__wrapper__show');
                    document.body.style.overflowY = 'hidden';

                    // 데이터 설정
                    let data = popUpInfoArray[currentIndex];

                    // 제목 변경
                    popUpTitle.textContent = data.name;
                    // 소제목 변경
                    popUpSubtitle.textContent = data.subname;
                    // 사용기술
                    popUpSkills.textContent = data.skills;
                    // Url 변경
                    popUpUrl.textContent = data.url;
                    // Url href변경
                    popUpUrlHref.setAttribute("href", data.url);
                    // Git Url 변경
                    popUpGit.textContent = data.github;
                    // Git Url href변경
                    popUpGitHref.setAttribute("href", data.github);
                    // 이미지경로변경
                    popUpImg.setAttribute("src", data.img);
                    // 이미지알트값
                    popUpImg.setAttribute("alt", data.alt);
                    // 설명부분
                    popUpDes.textContent = data.description;
                });
            });

            // 팝업창 닫기
            let popUpClose = document.querySelector('.pop-up__button__list');
            popUpClose.addEventListener("click", function () {
                let popUp = document.querySelector(".pop-up__wrapper");
                popUp.classList.remove('pop-up__wrapper__show');
                document.body.style.overflowY = '';
            });

            // next 버튼 누를 때
            let nextBtn = document.querySelector('.pop-up__button__next');
            nextBtn.addEventListener("click", function () {
                // 인덱스를 증가시키고 배열의 길이를 넘으면 0으로
                currentIndex = (currentIndex + 1) % popUpInfoArray.length;

                // 다음 데이터 설정
                let data = popUpInfoArray[currentIndex];

                // 제목 변경
                popUpTitle.textContent = data.name;
                // 소제목 변경
                popUpSubtitle.textContent = data.subname;
                // 사용기술
                popUpSkills.textContent = data.skills;
                // Url 변경
                popUpUrl.textContent = data.url;
                // Url href변경
                popUpUrlHref.setAttribute("href", data.url);
                // Git Url 변경
                popUpGit.textContent = data.github;
                // Git Url href변경
                popUpGitHref.setAttribute("href", data.github);
                // 이미지경로변경
                popUpImg.setAttribute("src", data.img);
                // 이미지알트값
                popUpImg.setAttribute("alt", data.alt);
                // 설명부분
                popUpDes.textContent = data.description;
            });
        })
        .catch(error => {
            console.error('Error loading JSON data:', error);
        });
};