document.getElementById("expand-1").addEventListener("click", function() {
	var btn3 = document.getElementById("expand-1")
	btn3.style.display = "none";
	var btn2 = document.getElementById("goOriginalBox-1")
	btn2.style.display = "block";
	var box = document.querySelector('.rectangle-2');
	box.style.width = '98%';
	box.style.height = '98%';
	var box2 = document.querySelector('.rectangle-gp-1');
	box2.style.width = '1400px';
	var btn = document.querySelector('#btn-container');
	btn.style.display = "none";
	var other1 = document.querySelector('#main-1 > div > div:nth-child(3)');
	var other2 = document.querySelector('#main-1 > div > div:nth-child(3)');
	var other3 = document.querySelector('#main-1 > div > div:nth-child(3)');
	other1.style.display = "none";
	other2.style.display = "none";
	other3.style.display = "none";
});

document.getElementById("goOriginalBox-1").addEventListener("click", function() {
	var btn2 = document.getElementById("goOriginalBox-1");
	btn2.style.display = "none";
	var btn3 = document.getElementById("expand-1");
	btn3.style.display = "block";
	var box = document.querySelector('.rectangle-2');
	box.style.width = '49.77%';
	box.style.height = '50%';
	var box2 = document.querySelector('.rectangle-gp-1');
	box2.style.width = '670px';
	var btn = document.querySelector('#btn-container');
	btn.style.display = "inline";
	var other1 = document.querySelector('#main-1 > div > div:nth-child(3)');
	var other2 = document.querySelector('#main-1 > div > div:nth-child(3)');
	var other3 = document.querySelector('#main-1 > div > div:nth-child(3)');
	other1.style.display = "block";
	other2.style.display = "block";
	other3.style.display = "block";
	
});