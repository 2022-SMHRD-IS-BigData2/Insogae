function warningToast(data){
	if(data!=null){		
		$('.toast-body').html('<a href="goHistory.do">이상 수치가 발견됐습니다. 보러가기</a>');
//		$('.toast').toast({
//			delay: 3000 // 3초
//		});
		$('.toast').toast('show');
	}
}