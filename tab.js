//버튼을 누르면 
//모든 오랜지 제거
//오렌지가 추가
//모든 쇼 제거
//버튼 누르면 쇼  추가




var 버튼 = $('.tab-button');
var 설명 = $('.tab-content');


$('.list').on('click',function(e){
    탭열기(e.target.dataset.id)

})


function 탭열기(숫자){
    버튼.removeClass('orange');
    버튼.eq(숫자).addClass('orange')
    설명.removeClass('show');
    설명.eq(숫자).addClass('show');
}

