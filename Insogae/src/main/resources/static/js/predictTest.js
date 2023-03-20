// 수조1
document.getElementById("expand-1").addEventListener("click", function() {
	var btn3 = document.getElementById("expand-1")
	btn3.style.display = "none";
	var btn2 = document.getElementById("goOriginalBox-1")
	btn2.style.display = "block";
	var box = document.querySelector('#content1');
	box.style.width = '100%';
	box.style.height = '98%';
	var boxes1 = document.querySelectorAll('.rectangle-gp-1');
	boxes1.forEach(function(box1) {
		box1.style.width = '1400px';
	});
	var btn = document.querySelector('#btn-container');
	btn.style.display = "none";
	var other1 = document.querySelector('#main-1 > div > div:nth-child(3)');

	other1.style.display = "none";

});

document.getElementById("goOriginalBox-1").addEventListener("click", function() {
	var btn2 = document.getElementById("goOriginalBox-1");
	btn2.style.display = "none";
	var btn3 = document.getElementById("expand-1");
	btn3.style.display = "block";
	var box = document.querySelector('#content1');
	box.style.width = '49.77%';
	box.style.height = '50%';
var boxes1 = document.querySelectorAll('.rectangle-gp-1');
	boxes1.forEach(function(box1) {
		box1.style.width = '670px';
	});
	var btn = document.querySelector('#btn-container');
	btn.style.display = "inline";
	var other1 = document.querySelector('#main-1 > div > div:nth-child(3)');

	other1.style.display = "block";

	
});

//=======================================================================
// 수조2
document.getElementById("expand-2").addEventListener("click", function() {
	var btn5 = document.getElementById("expand-2")
	btn5.style.display = "none";
	var btn6 = document.getElementById("goOriginalBox-2")
	btn6.style.display = "block";
	var box3 = document.querySelector('#content2');
	box3.style.width = '100%';
	box3.style.height = '98%';
var boxes2 = document.querySelectorAll('.rectangle-gp-2');
	boxes2.forEach(function(box4) {
		box4.style.width = '1400px';
	});
	var btn = document.querySelector('#btn-container');
	btn.style.display = "none";
	var other2 = document.querySelector('#main-1 > div > div:nth-child(2)');
	other2.style.display = "none";

});

document.getElementById("goOriginalBox-2").addEventListener("click", function() {
	var btn6 = document.getElementById("goOriginalBox-2");
	btn6.style.display = "none";
	var btn3 = document.getElementById("expand-2");
	btn3.style.display = "block";
	var box3 = document.querySelector('#content2');
	box3.style.width = '49.77%';
	box3.style.height = '50%';
var boxes2 = document.querySelectorAll('.rectangle-gp-2');
	boxes2.forEach(function(box4) {
		box4.style.width = '670px';
	});
	var btn = document.querySelector('#btn-container');
	btn.style.display = "inline";
	var other2 = document.querySelector('#main-1 > div > div:nth-child(2)');

	setTimeout(function() {
        other2.style.display = "block";
    }, 1000);

	
});

//=======================================================================
// 수조3
document.getElementById("expand-3").addEventListener("click", function() {
	var btn7 = document.getElementById("expand-3")
	btn7.style.display = "none";
	var btn8 = document.getElementById("goOriginalBox-3")
	btn8.style.display = "block";
	var box5 = document.querySelector('#content3');
	box5.style.width = '98%';
	box5.style.height = '98%';
    var boxes3 = document.querySelectorAll('.rectangle-gp-3');
	boxes3.forEach(function(box6) {
		box6.style.width = '1400px';
	});
	var btn = document.querySelector('#btn-container');
	btn.style.display = "none";
	var other3 = document.querySelector('#main-1 > div > div:nth-child(2)');
	var other4 = document.querySelector('#main-1 > div > div:nth-child(3)');
	var other5 = document.querySelector('#main-1 > div > div:nth-child(5)');
	other5.style.display = "none";
	setTimeout(function() {
	other3.style.display = "none";
	other4.style.display = "none";
	 }, 200);
});

document.getElementById("goOriginalBox-3").addEventListener("click", function() {
	var btn8 = document.getElementById("goOriginalBox-3");
	btn8.style.display = "none";
	var btn3 = document.getElementById("expand-3");
	btn3.style.display = "block";
	var box5 = document.querySelector('#content3');
	box5.style.width = '49.77%';
	box5.style.height = '50%';
var boxes3 = document.querySelectorAll('.rectangle-gp-3');
	boxes3.forEach(function(box6) {
		box6.style.width = '670px';
	});
	var btn = document.querySelector('#btn-container');
	btn.style.display = "inline";
	var other3 = document.querySelector('#main-1 > div > div:nth-child(2)');
	var other4 = document.querySelector('#main-1 > div > div:nth-child(3)');
	var other5 = document.querySelector('#main-1 > div > div:nth-child(5)');
	other3.style.display = "block";
	other4.style.display = "block";
	other5.style.display = "block";

	
});

//=======================================================================
// 수조4
document.getElementById("expand-4").addEventListener("click", function() {
	var btn9 = document.getElementById("expand-4")
	btn9.style.display = "none";
	var btn10 = document.getElementById("goOriginalBox-4")
	btn10.style.display = "block";
	var box7 = document.querySelector('#content4');
	box7.style.width = '99%';
	box7.style.height = '98%';
	var boxes4 = document.querySelectorAll('.rectangle-gp-4');
	boxes4.forEach(function(box8) {
		box8.style.width = '1400px';
	});
	var btn = document.querySelector('#btn-container');
	btn.style.display = "none";
	var other6 = document.querySelector('#main-1 > div > div:nth-child(2)');
	var other7 = document.querySelector('#main-1 > div > div:nth-child(3)');
	var other8 = document.querySelector('#main-1 > div > div:nth-child(4)');
	other8.style.display = "none";
	setTimeout(function() {
	other6.style.display = "none";
	other7.style.display = "none";
	  }, 200);
});

document.getElementById("goOriginalBox-4").addEventListener("click", function() {
	var btn10 = document.getElementById("goOriginalBox-4");
	btn10.style.display = "none";
	var btn3 = document.getElementById("expand-4");
	btn3.style.display = "block";
	var box7 = document.querySelector('#content4');
	box7.style.width = '49.77%';
	box7.style.height = '50%';
var boxes4 = document.querySelectorAll('.rectangle-gp-4');
	boxes4.forEach(function(box8) {
		box8.style.width = '670px';
	});
	var btn = document.querySelector('#btn-container');
	btn.style.display = "inline";
	var other6 = document.querySelector('#main-1 > div > div:nth-child(2)');
	var other7 = document.querySelector('#main-1 > div > div:nth-child(3)');
	var other8 = document.querySelector('#main-1 > div > div:nth-child(4)');
    other6.style.display = "block";
    other7.style.display = "block";
		setTimeout(function() {
	other8.style.display = "block";
	  }, 1000);	


	
});
//=======================================================================
// 수조5
document.getElementById("expand-5").addEventListener("click", function() {
	var btn11 = document.getElementById("expand-5")
	btn11.style.display = "none";
	var btn12 = document.getElementById("goOriginalBox-5")
	btn12.style.display = "block";
	var box9 = document.querySelector('#content5');
	box9.style.width = '100%';
	box9.style.height = '98%';
	var boxes5 = document.querySelectorAll('.rectangle-gp-5');
	boxes5.forEach(function(box10) {
		box10.style.width = '1400px';
	});
	var btn = document.querySelector('#btn-container');
	btn.style.display = "none";
	var other9 = document.querySelector('#main- > div > div:nth-child(3)');

	other9.style.display = "none";

});

document.getElementById("goOriginalBox-5").addEventListener("click", function() {
	var btn2 = document.getElementById("goOriginalBox-5");
	btn2.style.display = "none";
	var btn3 = document.getElementById("expand-5");
	btn3.style.display = "block";
	var box9 = document.querySelector('#content5');
	box9.style.width = '49.77%';
	box9.style.height = '50%';
var boxes5 = document.querySelectorAll('.rectangle-gp-5');
	boxes5.forEach(function(box10) {
		box10.style.width = '670px';
	});
	var btn = document.querySelector('#btn-container');
	btn.style.display = "inline";
	var other9 = document.querySelector('#main-2 > div > div:nth-child(3)');

	other9.style.display = "block";

	
});

//=======================================================================
// 수조6
document.getElementById("expand-6").addEventListener("click", function() {
	var btn13 = document.getElementById("expand-6")
	btn13.style.display = "none";
	var btn14 = document.getElementById("goOriginalBox-6")
	btn14.style.display = "block";
	var box11 = document.querySelector('#content6');
	box11.style.width = '100%';
	box11.style.height = '98%';
var boxes6 = document.querySelectorAll('.rectangle-gp-6');
	boxes6.forEach(function(box12) {
		box12.style.width = '1400px';
	});
	var btn = document.querySelector('#btn-container');
	btn.style.display = "none";
	var other12 = document.querySelector('#main-2 > div > div:nth-child(2)');
	other12.style.display = "none";

});

document.getElementById("goOriginalBox-6").addEventListener("click", function() {
	var btn14 = document.getElementById("goOriginalBox-6");
	btn14.style.display = "none";
	var btn3 = document.getElementById("expand-6");
	btn3.style.display = "block";
	var box11 = document.querySelector('#content6');
	box11.style.width = '49.77%';
	box11.style.height = '50%';
var boxes6 = document.querySelectorAll('.rectangle-gp-6');
	boxes6.forEach(function(box12) {
		box12.style.width = '670px';
	});
	var btn = document.querySelector('#btn-container');
	btn.style.display = "inline";
	var other12 = document.querySelector('#main-2 > div > div:nth-child(2)');

	setTimeout(function() {
        other12.style.display = "block";
    }, 1000);

	
});

//=======================================================================
// 수조7
document.getElementById("expand-7").addEventListener("click", function() {
	var btn15 = document.getElementById("expand-7")
	btn15.style.display = "none";
	var btn16 = document.getElementById("goOriginalBox-7")
	btn16.style.display = "block";
	var box13 = document.querySelector('#content7');
	box13.style.width = '98%';
	box13.style.height = '98%';
    var boxes7 = document.querySelectorAll('.rectangle-gp-7');
	boxes7.forEach(function(box14) {
		box14.style.width = '1400px';
	});
	var btn = document.querySelector('#btn-container');
	btn.style.display = "none";
	var other13 = document.querySelector('#main-2 > div > div:nth-child(2)');
	var other14 = document.querySelector('#main-2 > div > div:nth-child(3)');
	var other15 = document.querySelector('#main-2 > div > div:nth-child(5)');
	other15.style.display = "none";
	setTimeout(function() {
	other13.style.display = "none";
	other14.style.display = "none";
	 }, 200);
});

document.getElementById("goOriginalBox-7").addEventListener("click", function() {
	var btn16 = document.getElementById("goOriginalBox-7");
	btn16.style.display = "none";
	var btn3 = document.getElementById("expand-7");
	btn3.style.display = "block";
	var box13 = document.querySelector('#content7');
	box13.style.width = '49.77%';
	box13.style.height = '50%';
var boxes7 = document.querySelectorAll('.rectangle-gp-7');
	boxes7.forEach(function(box14) {
		box14.style.width = '670px';
	});
	var btn = document.querySelector('#btn-container');
	btn.style.display = "inline";
	var other13 = document.querySelector('#main-2 > div > div:nth-child(2)');
	var other14 = document.querySelector('#main-2 > div > div:nth-child(3)');
	var other15 = document.querySelector('#main-2 > div > div:nth-child(5)');
	other13.style.display = "block";
	other14.style.display = "block";
	other15.style.display = "block";

	
});

//=======================================================================
// 수조8
document.getElementById("expand-8").addEventListener("click", function() {
	var btn17 = document.getElementById("expand-8")
	btn17.style.display = "none";
	var btn18 = document.getElementById("goOriginalBox-8")
	btn18.style.display = "block";
	var box15 = document.querySelector('#content8');
	box15.style.width = '99%';
	box15.style.height = '98%';
	var boxes8 = document.querySelectorAll('.rectangle-gp-8');
	boxes8.forEach(function(box16) {
		box16.style.width = '1400px';
	});
	var btn = document.querySelector('#btn-container');
	btn.style.display = "none";
	var other16 = document.querySelector('#main-2 > div > div:nth-child(2)');
	var other17 = document.querySelector('#main-2 > div > div:nth-child(3)');
	var other18 = document.querySelector('#main-2 > div > div:nth-child(4)');
	other18.style.display = "none";
	setTimeout(function() {
	other16.style.display = "none";
	other17.style.display = "none";
	  }, 200);
});

document.getElementById("goOriginalBox-8").addEventListener("click", function() {
	var btn18 = document.getElementById("goOriginalBox-8");
	btn18.style.display = "none";
	var btn3 = document.getElementById("expand-8");
	btn3.style.display = "block";
	var box15 = document.querySelector('#content8');
	box15.style.width = '49.77%';
	box15.style.height = '50%';
var boxes8 = document.querySelectorAll('.rectangle-gp-8');
	boxes8.forEach(function(box16) {
		box16.style.width = '670px';
	});
	var btn = document.querySelector('#btn-container');
	btn.style.display = "inline";
	var other16 = document.querySelector('#main-2 > div > div:nth-child(2)');
	var other17 = document.querySelector('#main-2 > div > div:nth-child(3)');
	var other18 = document.querySelector('#main-2 > div > div:nth-child(4)');
	other16.style.display = "block"; 
	other17.style.display = "block";
	setTimeout(function() {       
	other18.style.display = "block";	
 	 }, 1000);

	
});