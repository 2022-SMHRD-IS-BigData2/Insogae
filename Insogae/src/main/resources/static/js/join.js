// 회원가입 비동기방식 로직
$('#submit').on('click', function() {
	if ($('#id').val() != "") {
		if ($('#pw').val() != "") {
			if ($('#name').val() != "") {
				if ($('#pw').val() == $('#pw2').val()) {
					$.ajax({
						url: "join.do",
						data: {
							COMPANY_ID: $('#id').val(),
							COMPANY_PW: $('#pw').val(),
							COMPANY_NAME: $('#name').val(),
							COMPANY_TEL: $('#tel').val(),
							COMPANY_ADDRESS: $('#address').val()
						},
						type: "post",
						success: function(res) {
							if (res) {
								location.href = "goMain.do"
							} else {
								location.href = ""
							}
						},
						error: function(e) {
							console.log(e);
							Swal.fire({
								title: '이미 존재하는 아이디 입니다.',
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
					})
				} else {
					Swal.fire({
						title: '비밀번호가 일치하지 않습니다.',
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
			} else {
				Swal.fire({
					title: '이름을 입력해주세요.',
					showClass: {
						popup: 'animate__animated animate__fadeInDown'
					},
					hideClass: {
						popup: 'animate__anmated animate__fadeOutUp'
					},
					icon: 'warning',
					confirmButtonColor: '#8BBDFF',
					confirmButtonText: '확인'
				})
			}
		} else {
			Swal.fire({
				title: '비밀번호를 입력해주세요.',
				showClass: {
					popup: 'animate__animated animate__fadeInDown'
				},
				hideClass: {
					popup: 'animate__anmated animate__fadeOutUp'
				},
				icon: 'warning',
				confirmButtonColor: '#8BBDFF',
				confirmButtonText: '확인'
			})
		}
	} else {
		Swal.fire({
			title: '아이디를 입력해주세요.',
			showClass: {
				popup: 'animate__animated animate__fadeInDown'
			},
			hideClass: {
				popup: 'animate__anmated animate__fadeOutUp'
			},
			icon: 'warning',
			confirmButtonColor: '#8BBDFF',
			confirmButtonText: '확인'
		})
	}
})