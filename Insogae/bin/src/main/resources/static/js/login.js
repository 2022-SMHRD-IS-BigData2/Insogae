$('#submit').on('click', function() {
	$.ajax({
		url: 'login.do',
		data: {
			COMPANY_ID: $('#id').val(),
			COMPANY_PW: $('#pw').val(),
		},
		type: 'post',
		success: function(res) {
			console.log(res == 'true')
			if (res == 'true') {
				location.href = "goMain.do"
			} else {
				Swal.fire({
					title: '로그인에 실패했습니다.',
					showClass: {
						popup: 'animate__animated animate__fadeInDown'
					},
					hideClass: {
						popup: 'animate__animated animate__fadeOutUp'
					},
					icon: 'warning',
					confirmButtonColor: '#8BBDFF',
					confirmButtonText: '확인'
				})
			}
		},
		error: function(e) {
			console.log(e)
		}
	})

})
/*
$('#id').on('keyup', function(key) {
	if (key.keyCode == 13) {
		$.ajax({
			url: 'login.do',
			data: {
				COMPANY_ID: $('#id').val(),
				COMPANY_PW: $('#pw').val()
			},
			type: 'post',
			success: function(res) {
				console.log(res == 'true')
				if (res == 'true') {
					location.href = "goMain.do"
				} else {
					Swal.fire({
						title: '로그인에 실패했습니다.',
						showClass: {
							popup: 'animate__animated animate__fadeInDown'
						},
						hideClass: {
							popup: 'animate__animated animate__fadeOutUp'
						},
						icon: 'warning',
						confirmButtonColor: '#8BBDFF',
						confirmButtonText: '확인'
					})
				}
			},
			error: function(e) {
				console.log(e)
			}
		})
	}
})
$('#pw').on('keyup', function(key) {
	if (key.keyCode == 13) {
		$.ajax({
			url: 'login.do',
			data: {
				COMPANY_ID: $('#id').val(),
				COMPANY_PW: $('#pw').val(),
			},
			type: 'post',
			success: function(res) {
				console.log(res == 'true')
				if (res == 'true') {
					location.href = "goMain.do"
				} else {
					Swal.fire({
						title: '로그인에 실패했습니다.',
						showClass: {
							popup: 'animate__animated animate__fadeInDown'
						},
						hideClass: {
							popup: 'animate__animated animate__fadeOutUp'
						},
						icon: 'warning',
						confirmButtonColor: '#8BBDFF',
						confirmButtonText: '확인'
					})
				}
			},
			error: function(e) {
				console.log(e)
			}
		})
	}
})*/