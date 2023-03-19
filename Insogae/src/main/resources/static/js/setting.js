const switchElem = document.querySelector('#switch');

//if(localStorage.isAlarmEnabled='true'){
//	document.getElementById("switch").checked = true;
//}else{
//	document.getElementById("switch").checked = false;
//}

switchElem.addEventListener('click', function() {
	const isAlarmEnabled = this.checked;
	localStorage.setItem('isAlarmEnabled', JSON.stringify(isAlarmEnabled));
});

//로컬 스토리지에서 'isChecked' 키에 저장된 값을 가져옵니다.
const isChecked = localStorage.getItem('isAlarmEnabled');

// Switch 요소를 선택합니다.
const mySwitch = document.querySelector('#switch');

// 만약 'isChecked' 키가 존재하고, 그 값이 'true'이면,
if (isChecked && isChecked === 'true') {
  // Switch 요소의 checked 속성을 true로 설정합니다.
  mySwitch.checked = true;
} else {
  // 그렇지 않으면, Switch 요소의 checked 속성을 false로 설정합니다.
  mySwitch.checked = false;
}

// Switch 요소의 상태가 변경되었을 때,
mySwitch.addEventListener('change', () => {
  // Switch 요소의 checked 속성을 로컬 스토리지에 저장합니다.
  localStorage.setItem('isChecked', mySwitch.checked);
});