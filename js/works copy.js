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

databinding();
