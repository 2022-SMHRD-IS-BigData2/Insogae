var user = $('#user-id').text();

$('#submit').on('click', function() {
    console.log("클릭됨")
    if ($('#pw').val() == "" || $('#name').val() == "" || $('#tel').val() == "" || $('#address').val() == "") {
        alert("빈칸을 모두 채워주세요");
        return;
    }
    $.ajax({
        url : "update.do",//어디로?
        type : "post",// get? or post?
        data : {
            COMPANY_ID: user,
            COMPANY_PW: $('#pw').val(),
            COMPANY_NAME: $('#name').val(),
            COMPANY_TEL: $('#tel').val(),
            COMPANY_ADDRESS: $('#address').val()
        },
        success : function(res){
            // 성공하면 실행되는 함수
            console.log(res)
            if (res == 'true') {
                alert("변경이 완료되었습니다.")
                location.href = "/"
            } else{
                location.href = ""
            }
        },
        error : function(e){
            alert("에러ㅋ");
        }
    });
});
