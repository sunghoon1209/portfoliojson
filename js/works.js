window.onload = function () {
    // 데이터 배열
    const popUpInfoArray = [
        // 1
        {
            title: "포트폴리오",
            subttitle: "반응형 | 퍼블리싱 100%",
            description: "기존 포트폴리오에 대한 피드백을 담아 새롭게 제작한 페이지입니다.",
            pageThumb: "./images/portfolioN_pc.webp",
            pageTumbAlt: "포트폴리오 썸네일",
            url: "https://sunghoon1209.github.io/PortfolioNew/",
            codeUrl: "https://github.com/sunghoon1209/PortfolioNew/archive/refs/heads/main.zip",
            developVision: "기존에 작업했던 포트폴리오에 대해서 스스로 피드백을 해본 결과, HTML작성할때 class를 규칙성 없이 지정하다보니 코드의 가독성이 떨어지고 유지보수가 어려워서 이를 향상 시키는 연습을 하기위해 제작했습니다. 또한 기존의 포트폴리오에서는 반응형 페이지가 아닌 웹 전용 페이지임에 아쉬움을 느꼈고 Pc,Tablet,Mobile의 3단 구조로 새롭게 제작했습니다.",
            skills: "HTML SCSS JavaScript",
            feature1st: "• Class 지정할때 BEM 방법으로 가독성 향상 및 유지보수 용이화",
            feature1stImg: "./images/portfolioN_feature.webp",
            feature2nd: "• 팝업창의 경우 HTML을 하나만 생성해두고 javascript에서 각각 데이터로 묶은 후 querySelectorAll과 forEach문을 사용해서 텍스트와 이미지, 이미지의 alt값이 바뀌는 기능을 구현했습니다.",
            feature2ndImg: "./images/portfolioN_feature2.webp",
            feedback: "• 동일한 구조의 header지만 그리드를 margin 0 auto로 잡았기때문에 스크롤바가 있는 페이지와 없는 페이지의 중앙 너비가 다르게 보임",
            feedback2nd: "• 이미지들의 용량이 있어서 페이지를 로드하는 시간이 지연됨(전부 webp로 변환해서 해결완료)"

        },
        // 2
        {
            title: "포트폴리오(구버전)",
            subttitle: "Web | 퍼블리싱 100%",
            description: "기존에 작업했던 작업물들과 저를 소개하는 페이지입니다.",
            pageThumb: "./images/portfull.webp",
            pageTumbAlt: "포트폴리오 구버전 썸네일",
            url: "https://sunghoon1209.github.io/portfolio/landingpage",
            codeUrl: "https://github.com/sunghoon1209/portfolio/archive/refs/heads/main.zip",
            developVision: "기본적인 구조는 약간의 애니메이션이 적용된 Landing page에서 포트폴리오 페이지로 이동되게 제작하였습니다. 포트폴리오 해당 페이지를 제작할때 사용자 경험을 향상하고자 노력했습니다. 예를들어 저의 작업물을 소개하는 팝업 페이지에서 페이지썸네일의 스크롤이 있는 경우에 디자인적인 측면을 고려하여 scroll은 보이지 않게 숨겼습니다. 사용자 입장에서는 해당 영역이 스크롤이 가능하다는 것을 알게하기위해서 우측 하단에 마우스 스크롤 이미지를 넣었습니다. ",
            skills: "HTML SCSS JavaScript jQuery",
            feature1st: "• Contact 영역 하단 폼을 제 구글 계정 e-mail에 연동하여 제출시 사용자가 입력한 내용이 이메일로 전송되게 제작하였습니다.",
            feature1stImg: "./images/portfolio_feature.webp",
            feature2nd: null,
            feature2ndImg: "",
            feedback: "• 코드를 작성할때 class를 너무 임의로 순간적으로 작성하여 코드 가독성이 부족 유지보수하기 열악",
            feedback2nd: ""

        },
        // 3
        {
            title: "Gucci",
            subttitle: "반응형 | 퍼블리싱 100%",
            description: "기존 구찌 페이지를 보고 클론 코딩하여 제작하였습니다.",
            pageThumb: "./images/guccifull.webp",
            pageTumbAlt: "구찌 썸네일",
            url: "https://sunghoon1209.github.io/Gucci/",
            codeUrl: "https://github.com/sunghoon1209/Gucci/archive/refs/heads/main.zip",
            developVision: "SASS를 공부하고 나서 SASS에 대한 숙련도를 향상시키기 위해서 SASS를 사용하여 제작했습니다. 또한 반응형으로 제작하였고 slick.js와 wow.js등의 플러그인 등을 활용하여 기능을 추가했습니다. 추가적으로 jQuery의 숙련도 향상을 위해 jQuery로 제작되었습니다.",
            skills: "HTML SCSS jQuery",
            feature1st: "• jQuery를 이용하여 비디오 박스를 만들고 그 안에 재생/음소거 버튼을 만들어서 클릭시 버튼의 모양이 변경되면서 재생/음소거의 기능도 구현",
            feature1stImg: "./images/gucci_feature.webp",
            feature2nd: "",
            feature2ndImg: "",
            feedback: "• wow.js에서 position 문제로 등장 위치가 잘못 적용되는듯 함",
            feedback2nd: "• class 지정할때 너무 규칙이 없어서 유지보수가 어려움"

        },
        // 4
        {
            title: "데브시스터즈",
            subttitle: "Web | 퍼블리싱 100%",
            description: "Devsisters의 페이지를 참고하여 새롭게 디자인하여 제작하였습니다.",
            pageThumb: "./images/devfull.webp",
            pageTumbAlt: "데브시스터즈 썸네일",
            url: "https://sunghoon1209.github.io/Devsisters/",
            codeUrl: "https://github.com/sunghoon1209/Devsisters/archive/refs/heads/main.zip",
            developVision: " 자바스크립트와 제이쿼리를 이용하여 다양한 이벤트를 구현하는데 집중했습니다. ",
            skills: "HTML CSS JavaScript jQuery",
            feature1st: "• 지원하기 버튼을 css에서 해당 버튼의 가상요소의 크기, 반지름, 위치 등을 변수로 지정하고 자바스크립트에서 마우스 올리는 event시에 해당 마우스의 x,y좌표를 계산하여 동적으로  ripple 효과를 구현했습니다.",
            feature1stImg: "./images/devsisters_feature.webp",
            feature2nd: "",
            feature2ndImg: "",
            feedback: "• 조금 더 간결하고 쉬운 코드로 가능한 동작을 너무 길고 복잡하게 작성함 ",
            feedback2nd: ""

        },
        // 5
        {
            title: "삼양식품",
            subttitle: "Web | 퍼블리싱 100%",
            description: "삼양식품 페이지에 대한 클론 코딩입니다.",
            pageThumb: "./images/samyangfull.webp",
            pageTumbAlt: "삼양식품 썸네일",
            url: "https://sunghoon1209.github.io/samyang/",
            codeUrl: "https://github.com/sunghoon1209/samyang/archive/refs/heads/main.zip",
            developVision: "jQuery와 플러그인을 사용하여 동적인 효과를 주는데 집중했습니다.",
            skills: "HTML CSS jQuery",
            feature1st: "• jQuery를 이용하여 스크롤에 따라 반응하여 움직이는 퀵메뉴를 제작했습니다.",
            feature1stImg: "./images/samyang_feature.webp",
            feature2nd: "",
            feature2ndImg: "",
            feedback: "",
            feedback2nd: ""

        },
        // 6
        {
            title: "ITSIX",
            subttitle: "반응형 | 퍼블리싱 100%",
            description: "ITSIX페이지를 수정하여 클론 코딩하였습니다.",
            pageThumb: "./images/itsixfullpage.webp",
            pageTumbAlt: "itsix 썸네일",
            url: "https://sunghoon1209.github.io/itsix/",
            codeUrl: "https://github.com/sunghoon1209/itsix/archive/refs/heads/main.zip",
            developVision: "• PC/Mobile의 2단구조 반응형으로 제작했습니다. jQuery를 이용해 간단한 이벤트를 구현했습니다.",
            skills: "HTML CSS jQuery",
            feature1st: "• jQuery를 이용해 모바일일때와 PC일때 menu를 다르게 구현했습니다.",
            feature1stImg: "./images/itsix_feature.webp",
            feature2nd: "",
            feature2ndImg: "",
            feedback: "",
            feedback2nd: ""

        },
        // 7
        {
            title: "Petfriends",
            subttitle: "반응형 | 퍼블리싱 100%",
            description: "모바일 형식으로만 존재하던 펫프렌즈를 컨셉에 맞게 웹 페이지로 새로 만들었습니다.",
            pageThumb: "./images/petfriendsfull.webp",
            pageTumbAlt: "펫프렌즈 썸네일",
            url: "https://sunghoon1209.github.io/petfriends/",
            codeUrl: "https://github.com/sunghoon1209/petfriends/archive/refs/heads/main.zip",
            developVision: " display : grid 구조를 공부하기 위해서 해당 구조로 제작했습니다. 또한 기존에 width와 margin: 0 auto 로 조절하던 중앙 그리드를 padding으로 기존과 다른 방식으로 조절했습니다. 추가적으로 swiper slider 플러그인을 사용해서 효과를 줬습니다.  ",
            skills: "HTML SCSS JavaScript jQuery",
            feature1st: "• 장바구니 담기 버튼 기능을 구현했습니다. 그리고 사용자 경험을 위해 이미 장바구니에 담겨져있는 물건일 경우에는 알림창이 뜨면서 추가되지 않게 제작했습니다.",
            feature1stImg: "./images/petfreinds_feature.webp",
            feature2nd: "",
            feature2ndImg: "",
            feedback: "• 반응형에서 장바구니 창이 조금 더 자연스러워야함",
            feedback2nd: "• 장바구니에 담긴 물품중에 체크된 금액만 나오는 기능 추가하고싶음"

        },
        // 8
        {
            title: "H.point",
            subttitle: "Web | 퍼블리싱 100%",
            description: "H.point 페이지를 클론 코딩했습니다.",
            pageThumb: "./images/hpointfull.webp",
            pageTumbAlt: "h.point 썸네일",
            url: "https://sunghoon1209.github.io/hpoint/",
            codeUrl: "https://github.com/sunghoon1209/hpoint/archive/refs/heads/main.zip",
            developVision: "• 주로 HTML과 CSS 구현에 중점을 두고 제작했습니다. jQuery의 경우 간단한 이벤트와 Swiper와 Slick Slider 의 플러그인을 추가하였고 이에 대한 스타일과 기능을 제어했습니다.",
            skills: "HTML CSS jQuery",
            feature1st: "• CSS를 활용하여 swiper의 스타일을 제어했습니다.",
            feature1stImg: "./images/hpoint_feature.webp",
            feature2nd: "",
            feature2ndImg: "",
            feedback: "",
            feedback2nd: ""

        },
        // 9
        {
            title: "Hanhwa Chemical",
            subttitle: "Web | 퍼블리싱 100%",
            description: "Hanhwa Chemical 페이지를 클론 코딩했습니다.",
            pageThumb: "./images/hanhwafull.webp",
            pageTumbAlt: "한화 케미칼  썸네일",
            url: "https://sunghoon1209.github.io/hanhwa/",
            codeUrl: "https://github.com/sunghoon1209/hanhwa/archive/refs/heads/main.zip",
            developVision: "HTML,CSS만 사용하여 기본적인 구조와 스타일을 제작하고 wow.js만 이용하여 등장하는 애니메이션 효과를 주었습니다.",
            skills: "HTML CSS jQuery",
            feature1st: "• wow.js를 이용하여 간단하게 fadeIn 효과를 줬습니다.",
            feature1stImg: "./images/hanhwa_feature.webp",
            feature2nd: "",
            feature2ndImg: "",
            feedback: "",
            feedback2nd: ""

        },
        // 10

        {
            title: "Ground X",
            subttitle: "반응형 | 퍼블리싱 100%",
            description: "Ground X 페이지를 Figma를 통해 가져온 후 해당 디자인 파일을 바탕으로 코딩했습니다.",
            pageThumb: "./images/groundXfull.webp",
            pageTumbAlt: "Ground X 썸네일",
            url: "https://sunghoon1209.github.io/GroundX/",
            codeUrl: "https://github.com/sunghoon1209/GroundX/archive/refs/heads/main.zip",
            developVision: " 모바일과 PC 2단 반응형 구조로 제작했습니다. 또한 wow.js를 사용해서 fade in 애니메이션 효과를 줬습니다. 또한 jQuery로 스크롤 위치에 따라 메뉴의 색이 변경하고 해당 메뉴를 누르면 해당 스크롤로 이동하는 기능을 구현했습니다.",
            skills: "HTML CSS jQuery",
            feature1st: "• jQuery를 통해 scroll에 따라 헤더 메뉴의 배경색 변경, 로고이미지 변경, 메뉴의 글씨 색 변경 등 다양한 기능을 구현했습니다.",
            feature1stImg: "./images/groundx_feature.webp",
            feature2nd: "",
            feature2ndImg: "",
            feedback: "• wow.js의 등장위치에 대한 수정이 필요",
            feedback2nd: ""

        },
        // 11
        {
            title: "SK Picglobal",
            subttitle: "Web | 퍼블리싱 100%",
            description: "SK Picglobal 페이지를 클론 코딩했습니다.",
            pageThumb: "./images/skPicfull.webp",
            pageTumbAlt: "SkPicGlobal 썸네일",
            url: "https://sunghoon1209.github.io/skPicglobal/",
            codeUrl: "https://github.com/sunghoon1209/skPicglobal/archive/refs/heads/main.zip",
            developVision: "HTML과 CSS를 이용하여 기본적인 구조를 잘 제작하고, jQuery를 이용하여 다양한 기능을 구현해서 제작했습니다. slick과 wow 등의 플러그인을 활용해서 추가적인 기능을 쉽게 적용했습니다.",
            skills: "HTML CSS jQuery",
            feature1st: "• jQuery를 이용하여 아코디언메뉴를 구현했습니다.",
            feature1stImg: "./images/skpicglobal_feature.webp",
            feature2nd: "",
            feature2ndImg: "",
            feedback: "",
            feedback2nd: ""

        },
        // 12
        {
            title: "League of Legends",
            subttitle: "반응형 | 퍼블리싱 100%",
            description: "리그 오브 레전드 게임 홈페이지의 게임 모드 설명하는 영역을 새롭게 디자인 하여 퍼블리싱 했습니다.",
            pageThumb: "./images/lol.webp",
            pageTumbAlt: "league of legend 썸네일",
            url: "https://sunghoon1209.github.io/leagueoflegend/",
            codeUrl: "https://github.com/sunghoon1209/introducetovideo/archive/refs/heads/leagueoflegend.zip",
            developVision: "pc와 모바일 구조의 반응형으로 제작했습니다. SCSS의 작성법을 연습하기 위해 SCSS로 제작했습니다.",
            skills: "HTML SCSS JavaScript",
            feature1st: "반복문과 currentTarget를 이용하여 이벤트가 발생된 부분의 동영상을 제어하는 기능을 추가했습니다.",
            feature1stImg: "./images/lol_feature.webp",
            feature2nd: "",
            feature2ndImg: "",
            feedback: "",
            feedback2nd: ""

        },
        // 13
        {
            title: "배틀넷",
            subttitle: "Figma | 디자인 100% 인터렉션 100%",
            description: "Battlent 어플리케이션을 새롭게 디자인하여 Figma로 인터렉션 구현",
            pageThumb: "./images/battlenet_figma.svg",
            url: "https://www.figma.com/proto/4eJQhVwGF52em5G7bdYIwA/%EC%A3%BC%EC%84%B1%ED%9B%88-%EB%B0%B0%ED%8B%80%EB%84%B7-UIUX%EB%94%94%EC%9E%90%EC%9D%B8%ED%8F%89%EA%B0%80?node-id=1-4&t=nVJKIq1j5pa0Tf3q-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=98%3A403",
            codeUrl: "https://www.figma.com/design/4eJQhVwGF52em5G7bdYIwA/%EC%A3%BC%EC%84%B1%ED%9B%88-%EB%B0%B0%ED%8B%80%EB%84%B7-UIUX%EB%94%94%EC%9E%90%EC%9D%B8%ED%8F%89%EA%B0%80?node-id=98-403&t=zgDQvDO4OXigK6Nv-1",
            developVision: "Figma의 사용법과 UIUX에 대한 이해도를 향상하기 위해 제작하였습니다. ",
            skills: "Figma",
            feature1st: "",
            feature1stImg: "",
            feature2nd: "",
            feature2ndImg: "",
            feedback: "",
            feedback2nd: ""

        }
    ];

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