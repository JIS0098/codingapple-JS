//버튼을 누르면 
//모든 오랜지 제거
//오렌지가 추가
//모든 쇼 제거
//버튼 누르면 쇼  추가

var 버튼 = $('.tab-button');
var 설명 = $('.tab-content');
for(let i = 0; i<버튼.length; i++){
    버튼.eq(i).on('click',function(){
        버튼.removeClass('orange');
        버튼.eq(i).addClass('orange')
        설명.removeClass('show');
        설명.eq(i).addClass('show');
    })
}
