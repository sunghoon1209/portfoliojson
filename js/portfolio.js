window.onload = function () {
    // 데이터 배열
    const popUpInfoArray = [
        // 1
        {
            name: "포트폴리오",
            subname: "반응형 | 퍼블리싱 100%",
            skills: "HTML SCSS JavaScript",
            url: "https://sunghoon1209.github.io/PortfolioNew/",
            github: "https://github.com/sunghoon1209/PortfolioNew",
            img: "./images/portfolio.jpg",
            alt: "포트폴리오",
            description: "기존에 작업했던 포트폴리오에 대해서 스스로 피드백을 해본 결과,HTML작성할때 class를 규칙성 없이 지정하다보니 코드의 가독성이 떨어진다고 생각을 하게 되었습니다.이를 해결하기위해서 고민하던 중 BEM명명법이라는 규칙에대해서 공부를 하게 되었고 이를 바탕으로 class를 지정하며 코드의 가독성을 향상해 새롭게 제작했습니다. 또한 지난 작업물들이 모두 메인페이지만 존재하는 점이 아쉽다고 생각해서 메인페이지 외에 두개의 페이지를 추가하여 연결시켰습니다.페이지의 통일감을 위해서 배경색과 포인트컬러등을 변수로 지정해서 사용했으며,header와 같이 공통으로 사용된 부분에 대해서는 아예 모듈화하여 유지보수가 용이하게 제작하였습니다. 마지막으로 기존 포트폴리오와 다르게 반응형을 두개의 Break Point로 추가하여 PC,태블릿,모바일 3 개의 화면에서 다르게 볼 수 있도록 제작하였습니다."
        },
        // 2
        {
            name: "포트폴리오 구버전",
            subname: "반응형 | 퍼블리싱 100%",
            skills: "HTML SCSS JavaScript",
            url: "https://sunghoon1209.github.io/introducetovideo/",
            github: "https://github.com/sunghoon1209/PortfolioNew",
            img: "./images/portfolio.jpg",
            description: "포트폴리오 소개2"
        },
        // 3구찌
        {
            name: "Gucci 클론 코딩",
            subname: "반응형 | 퍼블리싱 100%",
            skills: "HTML SCSS JavaScript",
            url: "https://sunghoon1209.github.io/introducetovideo/",
            github: "https://github.com/sunghoon1209/PortfolioNew",
            img: "./images/gucci.jpg",
            description: "포트폴리오 소개2"
        },
        // 데브시스터즈
        {
            name: "데브시스터즈",
            subname: "반응형 | 퍼블리싱 100%",
            skills: "HTML SCSS JavaScript",
            url: "https://sunghoon1209.github.io/introducetovideo/",
            github: "https://github.com/sunghoon1209/PortfolioNew",
            img: "./images/gucci.jpg",
            description: "포트폴리오 소개2"
        },
        // 삼양식품
        {
            name: "삼양식품",
            subname: "반응형 | 퍼블리싱 100%",
            skills: "HTML SCSS JavaScript",
            url: "https://sunghoon1209.github.io/introducetovideo/",
            github: "https://github.com/sunghoon1209/PortfolioNew",
            img: "./images/gucci.jpg",
            description: "포트폴리오 소개2"
        },
        // itsix
        {
            name: "ITSIX",
            subname: "반응형 | 퍼블리싱 100%",
            skills: "HTML SCSS JavaScript",
            url: "https://sunghoon1209.github.io/introducetovideo/",
            github: "https://github.com/sunghoon1209/PortfolioNew",
            img: "./images/gucci.jpg",
            description: "포트폴리오 소개2"
        },
        // 펫프렌즈
        {
            name: "Petfriends",
            subname: "반응형 | 퍼블리싱 100%",
            skills: "HTML SCSS JavaScript",
            url: "https://sunghoon1209.github.io/introducetovideo/",
            github: "https://github.com/sunghoon1209/PortfolioNew",
            img: "./images/gucci.jpg",
            description: "포트폴리오 소개2"
        },
        // hpoint
        {
            name: "hpoint",
            subname: "반응형 | 퍼블리싱 100%",
            skills: "HTML SCSS JavaScript",
            url: "https://sunghoon1209.github.io/introducetovideo/",
            github: "https://github.com/sunghoon1209/PortfolioNew",
            img: "./images/gucci.jpg",
            description: "포트폴리오 소개2"
        },
        // hanhwa 
        {
            name: "hanhwa",
            subname: "반응형 | 퍼블리싱 100%",
            skills: "HTML SCSS JavaScript",
            url: "https://sunghoon1209.github.io/introducetovideo/",
            github: "https://github.com/sunghoon1209/PortfolioNew",
            img: "./images/gucci.jpg",
            description: "포트폴리오 소개2"
        },
        // ground X
        {
            name: "Ground X",
            subname: "반응형 | 퍼블리싱 100%",
            skills: "HTML SCSS JavaScript",
            url: "https://sunghoon1209.github.io/introducetovideo/",
            github: "https://github.com/sunghoon1209/PortfolioNew",
            img: "./images/gucci.jpg",
            description: "포트폴리오 소개2"
        },
        // 3D site
        {
            name: "3D site",
            subname: "반응형 | 퍼블리싱 100%",
            skills: "HTML SCSS JavaScript",
            url: "https://sunghoon1209.github.io/introducetovideo/",
            github: "https://github.com/sunghoon1209/PortfolioNew",
            img: "./images/gucci.jpg",
            description: "포트폴리오 소개2"
        },
        // sk Picglobal
        {
            name: "Sk Picglobal",
            subname: "반응형 | 퍼블리싱 100%",
            skills: "HTML SCSS JavaScript",
            url: "https://sunghoon1209.github.io/introducetovideo/",
            github: "https://github.com/sunghoon1209/PortfolioNew",
            img: "./images/gucci.jpg",
            description: "포트폴리오 소개2"
        },
       
        // video
        {
            name: "video",
            subname: "앱 | UIUX design 100%",
            skills: "Figma",
            url: "https://sunghoon1209.github.io/introducetovideo/",
            github: "https://github.com/sunghoon1209/PortfolioNew",
            img: "./images/gucci.jpg",
            description: "피그마"
        },
        // battlenet
        {
            name: "배틀넷 앱",
            subname: "앱 | UIUX design 100%",
            skills: "Figma",
            url: "https://sunghoon1209.github.io/introducetovideo/",
            github: "https://github.com/sunghoon1209/PortfolioNew",
            img: "./images/gucci.jpg",
            description: "피그마"
        }
    ];

    // 변수설정
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
            document.body.style.overflowY='hidden';

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
        document.body.style.overflowY='';
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
};
