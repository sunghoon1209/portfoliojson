window.onload = function () {
    // 두개의 버튼을 변수로 지정
    let buttons = document.querySelectorAll('.skills__button');
    // 두개의 버튼이 있는 배열에 foreach로 각각 함수가 실행되게
    buttons.forEach((button, ) => {
        button.addEventListener("click", function () {

            let skillsItems = document.querySelectorAll('.skills__item');
            let toolsItems = document.querySelectorAll('.tools__item');
            let skills = document.querySelector('.skills__button-skills');
            let tools = document.querySelector('.skills__button-tools');

            // 두개의 버튼중 skills 버튼을 눌렀을때
            if (button.classList.contains('skills__button-skills')) {
                // skills 박스를 모두 활성화 해주고
                skillsItems.forEach(item => item.style.display = "flex");
                // items 박스들은 안보이게 가려줌
                toolsItems.forEach(item => item.style.display = "none");;
                //  선택된 제목의 style인 담긴 class 제거하고
                tools.classList.remove('skills__button_active');
                // 여기에 class를 넣어줌
                skills.classList.add('skills__button_active');


                // 두개의 버튼중 skills 이외의 버튼을 눌렀을때
            } else {
                skillsItems.forEach(item => item.style.display = "none");
                toolsItems.forEach(item => item.style.display = "flex");
                skills.classList.remove('skills__button_active');
                tools.classList.add('skills__button_active');

            };

        });
    });
}