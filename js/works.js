window.onload = function () {
   
    // 변수설정
   
    
    $(".works__wrapper").on("click",function(){        
        let wrapper = document.querySelector('.portfolio__wrapper');
        wrapper.classList.add('portfolio__wrapper--hide');
        // 팝업창 열기
        let popUp = document.querySelector(".popup");
        popUp.classList.add('popup--show');
        databinding();
    });
};
//팝업창 닫기
$('.pop-up__button__list').on('click',function(){
    let wrapper = document.querySelector('.portfolio__wrapper');
    wrapper.classList.remove('portfolio__wrapper--hide');
    let popUp = document.querySelector(".popup");
    popUp.classList.remove('popup--show');   
});

// json 데이터 바인딩
function databinding() {
    $.ajax({
        url: 'js/portfoliodata.json',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            let popUpTitle = $('.popup__title');
            let popUpSubtitle = $('.popup__subtitle');
            let popUpDes = $('.popup__description');
            let popUpThumb = $('.popup__page-thumb img');
            let popUpUrlHref = $('.popup__url');
            let popUpCodeHref = $('.popup__code');
            let popUpVision = $('.popup__develop-vision p');
            let popUpSkills = $('.popup__skills p');
            let popUpFeature1st = $('.popup__features__1st .popup__features__desc');
            let popUpFeature1stImg = $('.popup__features__1st img');
            let popUpFeature2nd = $('.popup__features__2nd .popup__features__desc');
            let popUpFeature2ndImg = $('.popup__features__2nd img');
            let popUpFeedback = $('.popup__feedback__1st');
            let popUpFeedback2nd = $('.popup__feedback__2nd');
           
            let item = data[0];
            popUpTitle.text(item.title);
            popUpSubtitle.text(item.subttitle);
            popUpDes.text(item.description);
            popUpThumb.attr({
                "src": item.pageThumb,
                "alt": item.pageTumbAlt
            });
           popUpUrlHref.attr("href",item.url);
            popUpCodeHref.attr("href",item.codeUrl);
            popUpVision.text(item.develpVision);
            popUpSkills.text(item.skills);
            popUpFeature1st.text(item.feature1st);
            popUpFeature1stImg.attr("href",item.feature1stImg);
            popUpFeature2nd.text(item.feature2nd);
            popUpFeature2ndImg.attr("href",item.feature2ndImg);
            popUpFeedback.text(item.feedback);
            popUpFeedback2nd.text(item.feedback2nd);

        

        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Failed to load data:', textStatus, errorThrown);
        }
    });
};