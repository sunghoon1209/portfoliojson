function databinding(){
    $.ajax({
        url: 'js/portfoliodata.json',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            // 데이터가 성공적으로 로드되었을 때 호출되는 함수

            // 각 항목에 대해 변수로 저장하기
            data.forEach(function(item) {
                var name = item.name;
                var subname = item.subname;
                var skills = item.skills;
                var url = item.url;
                var github = item.github;
                var img = item.img;
                var alt = item.alt;
                var description = item.description;

                // 데이터를 HTML로 출력하거나 다른 작업 수행하기
            
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // 데이터 로드 실패 시 호출되는 함수
            console.error('Failed to load data:', textStatus, errorThrown);
        }
    });
};


databinding();