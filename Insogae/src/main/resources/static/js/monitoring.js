const myButton = document.getElementById("next-page");
myButton.addEventListener('click', () => {
	document.getElementById("container").scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "end" });
});

const myButton2 = document.getElementById("before-page");
myButton2.addEventListener('click', () => {
	document.getElementById("container").scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "start" });
});


$.ajax({
	url: "tank1data",//수조1

	success: function(res) {
		// 3. 응답받은 데이터를 console 출력

		google.charts.load('current', { 'packages': ['gauge'] });
		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {

			var data1_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['DO', 10],
				]);

			var data2_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['SALT', 10],
				]);

			var data3_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['PH', 10],
				]);

			var data4_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['TEMP', 10],
				]);




			var options1 = { //DO
				width: 200, height: 200,
				redFrom: 0, redTo: 3,
				greenFrom: 3, greenTo: 10,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 10
			};




			var options2 = { //salt
				width: 200, height: 200,
				redFrom: 0, redTo: 10,
				yellowFrom: 34, yellowTo: 40,
				greenFrom: 10, greenTo: 34,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 40
			};


			var options3 = {// ph
				width: 200, height: 200,
				redFrom: 0, redTo: 7.5,
				greenFrom: 7.5, greenTo: 10,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 10
			};

			var options4 = {//temp
				width: 200, height: 200,
				redFrom: 0, redTo: 6,
				yellowFrom: 32, yellowTo: 50,
				greenFrom: 6, greenTo: 34,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 50
			};

			var chart1_guage = new google.visualization.Gauge(document.getElementById('chart_div1'));
			var chart2_guage = new google.visualization.Gauge(document.getElementById('chart_div2'));
			var chart3_guage = new google.visualization.Gauge(document.getElementById('chart_div3'));
			var chart4_guage = new google.visualization.Gauge(document.getElementById('chart_div4'));



			chart1_guage.draw(data1_guage, options1);
			chart2_guage.draw(data2_guage, options2);
			chart3_guage.draw(data3_guage, options3);
			chart4_guage.draw(data4_guage, options4);




			var count = 0;
			console.log(res)
			setInterval(() => {
					console.log(res[count])
					time_data = res[count].record_DATE.split('T')[1].split('.')[0]
	
					do_data = res[count].do.toFixed(2);
					ph_data = res[count].ph.toFixed(2);
					temp_data = res[count].temp.toFixed(2);
					salt_data = res[count].salt.toFixed(2);
	
					$('#ondo-1').html("")
					$('#do-1').html("")
					$('#salt-1').html("")
					$('#ph-1').html("")
	
					let do_do = `<h5>` + do_data + `ppm</h5>`;
					let ph = `<h5>` + ph_data + `ph</h5>`;
					let temp = `<h5>` + temp_data + `°C</h5>`;
					let salt = `<h5>` + salt_data + `psu</h5>`;
	
	
					$('#ondo-1').append(temp);
					$('#do-1').append(do_do);
					$('#salt-1').append(salt);
					$('#ph-1').append(ph);
	
					data1_guage.setValue(0, 1, res[count].do.toFixed(1));
					chart1_guage.draw(data1_guage, options1);
	
					data2_guage.setValue(0, 1, res[count].salt.toFixed(1));
					chart2_guage.draw(data2_guage, options2);
	
					data3_guage.setValue(0, 1, res[count].ph.toFixed(1));
					chart3_guage.draw(data3_guage, options3);
	
					data4_guage.setValue(0, 1, res[count].temp.toFixed(1));
					chart4_guage.draw(data4_guage, options4);
	
					count++
				}, 1500
			);

		}

	},


	error: function() {
		console.log('요청실패');
	}
});


$.ajax({ //수조2
	url: "tank2data",

	success: function(res) {
		// 3. 응답받은 데이터를 console 출력

		google.charts.load('current', { 'packages': ['gauge'] });
		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {

			var data1_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['DO', 10],

				]);


			var data2_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['SALT', 10],
				]);


			var data3_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['PH', 10],
				]);


			var data4_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['TEMP', 10],
				]);




			var options1 = { //DO
				width: 200, height: 200,
				redFrom: 0, redTo: 3,
				greenFrom: 3, greenTo: 10,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 10
			};




			var options2 = { //salt
				width: 200, height: 200,
				redFrom: 0, redTo: 10,
				yellowFrom: 34, yellowTo: 40,
				greenFrom: 10, greenTo: 34,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 40
			};


			var options3 = {// ph
				width: 200, height: 200,
				redFrom: 0, redTo: 7.5,
				greenFrom: 7.5, greenTo: 10,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 10
			};

			var options4 = {//temp
				width: 200, height: 200,
				redFrom: 0, redTo: 6,
				yellowFrom: 32, yellowTo: 50,
				greenFrom: 6, greenTo: 34,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 50
			};

			var chart1_guage = new google.visualization.Gauge(document.getElementById('chart_div5'));
			var chart2_guage = new google.visualization.Gauge(document.getElementById('chart_div6'));
			var chart3_guage = new google.visualization.Gauge(document.getElementById('chart_div7'));
			var chart4_guage = new google.visualization.Gauge(document.getElementById('chart_div8'));



			chart1_guage.draw(data1_guage, options1);
			chart2_guage.draw(data2_guage, options2);
			chart3_guage.draw(data3_guage, options3);
			chart4_guage.draw(data4_guage, options4);




			var count = 0;
			console.log(res)
			setInterval(() => {
				console.log(res[count])
				time_data = res[count].record_DATE.split('T')[1].split('.')[0]

				do_data = res[count].do.toFixed(2);
				ph_data = res[count].ph.toFixed(2);
				temp_data = res[count].temp.toFixed(2);
				salt_data = res[count].salt.toFixed(2);

				$('#ondo-2').html("")
				$('#do-2').html("")
				$('#salt-2').html("")
				$('#ph-2').html("")

				let do_do = `<h5>` + do_data + `ppm</h5>`;
				let ph = `<h5>` + ph_data + `ph</h5>`;
				let temp = `<h5>` + temp_data + `°C</h5>`;
				let salt = `<h5>` + salt_data + `psu</h5>`;


				$('#ondo-2').append(temp);
				$('#do-2').append(do_do);
				$('#salt-2').append(salt);
				$('#ph-2').append(ph);

				data1_guage.setValue(0, 1, res[count].do.toFixed(1));
				chart1_guage.draw(data1_guage, options1);

				data2_guage.setValue(0, 1, res[count].salt.toFixed(1));
				chart2_guage.draw(data2_guage, options2);

				data3_guage.setValue(0, 1, res[count].ph.toFixed(1));
				chart3_guage.draw(data3_guage, options3);

				data4_guage.setValue(0, 1, res[count].temp.toFixed(1));
				chart4_guage.draw(data4_guage, options4);

				count++
			}, 1500

			);

		}

	},


	error: function() {
		console.log('요청실패');
	}
});


$.ajax({ //수조3
	url: "tank3data",

	success: function(res) {
		// 3. 응답받은 데이터를 console 출력

		google.charts.load('current', { 'packages': ['gauge'] });
		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {

			var data1_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['DO', 10],

				]);


			var data2_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['SALT', 10],
				]);


			var data3_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['PH', 10],
				]);


			var data4_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['TEMP', 10],
				]);




			var options1 = { //DO
				width: 200, height: 200,
				redFrom: 0, redTo: 3,
				greenFrom: 3, greenTo: 10,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 10
			};




			var options2 = { //salt
				width: 200, height: 200,
				redFrom: 0, redTo: 10,
				yellowFrom: 34, yellowTo: 40,
				greenFrom: 10, greenTo: 34,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 40
			};


			var options3 = {// ph
				width: 200, height: 200,
				redFrom: 0, redTo: 7.5,
				greenFrom: 7.5, greenTo: 10,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 10
			};

			var options4 = {//temp
				width: 200, height: 200,
				redFrom: 0, redTo: 6,
				yellowFrom: 32, yellowTo: 50,
				greenFrom: 6, greenTo: 34,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 50
			};

			var chart1_guage = new google.visualization.Gauge(document.getElementById('chart_div9'));
			var chart2_guage = new google.visualization.Gauge(document.getElementById('chart_div10'));
			var chart3_guage = new google.visualization.Gauge(document.getElementById('chart_div11'));
			var chart4_guage = new google.visualization.Gauge(document.getElementById('chart_div12'));



			chart1_guage.draw(data1_guage, options1);
			chart2_guage.draw(data2_guage, options2);
			chart3_guage.draw(data3_guage, options3);
			chart4_guage.draw(data4_guage, options4);




			var count = 0;
			console.log(res)
			setInterval(() => {
				console.log(res[count])
				time_data = res[count].record_DATE.split('T')[1].split('.')[0]

				do_data = res[count].do.toFixed(2);
				ph_data = res[count].ph.toFixed(2);
				temp_data = res[count].temp.toFixed(2);
				salt_data = res[count].salt.toFixed(2);

				$('#ondo-3').html("")
				$('#do-3').html("")
				$('#salt-3').html("")
				$('#ph-3').html("")

				let do_do = `<h5>` + do_data + `ppm</h5>`;
				let ph = `<h5>` + ph_data + `ph</h5>`;
				let temp = `<h5>` + temp_data + `°C</h5>`;
				let salt = `<h5>` + salt_data + `psu</h5>`;


				$('#ondo-3').append(temp);
				$('#do-3').append(do_do);
				$('#salt-3').append(salt);
				$('#ph-3').append(ph);

				data1_guage.setValue(0, 1, res[count].do.toFixed(1));
				chart1_guage.draw(data1_guage, options1);

				data2_guage.setValue(0, 1, res[count].salt.toFixed(1));
				chart2_guage.draw(data2_guage, options2);

				data3_guage.setValue(0, 1, res[count].ph.toFixed(1));
				chart3_guage.draw(data3_guage, options3);

				data4_guage.setValue(0, 1, res[count].temp.toFixed(1));
				chart4_guage.draw(data4_guage, options4);

				count++
			}, 1500

			);

		}

	},


	error: function() {
		console.log('요청실패');
	}
});


$.ajax({ //수조4
	url: "tank4data",

	success: function(res) {
		// 3. 응답받은 데이터를 console 출력

		google.charts.load('current', { 'packages': ['gauge'] });
		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {

			var data1_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['DO', 10],

				]);


			var data2_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['SALT', 10],
				]);


			var data3_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['PH', 10],
				]);


			var data4_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['TEMP', 10],
				]);




			var options1 = { //DO
				width: 200, height: 200,
				redFrom: 0, redTo: 3,
				greenFrom: 3, greenTo: 10,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 10
			};




			var options2 = { //salt
				width: 200, height: 200,
				redFrom: 0, redTo: 10,
				yellowFrom: 34, yellowTo: 40,
				greenFrom: 10, greenTo: 34,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 40
			};


			var options3 = {// ph
				width: 200, height: 200,
				redFrom: 0, redTo: 7.5,
				greenFrom: 7.5, greenTo: 10,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 10
			};

			var options4 = {//temp
				width: 200, height: 200,
				redFrom: 0, redTo: 6,
				yellowFrom: 32, yellowTo: 50,
				greenFrom: 6, greenTo: 34,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 50
			};

			var chart1_guage = new google.visualization.Gauge(document.getElementById('chart_div13'));
			var chart2_guage = new google.visualization.Gauge(document.getElementById('chart_div14'));
			var chart3_guage = new google.visualization.Gauge(document.getElementById('chart_div15'));
			var chart4_guage = new google.visualization.Gauge(document.getElementById('chart_div16'));



			chart1_guage.draw(data1_guage, options1);
			chart2_guage.draw(data2_guage, options2);
			chart3_guage.draw(data3_guage, options3);
			chart4_guage.draw(data4_guage, options4);




			var count = 0;
			console.log(res)
			setInterval(() => {
				console.log(res[count])
				time_data = res[count].record_DATE.split('T')[1].split('.')[0]

				do_data = res[count].do.toFixed(2);
				ph_data = res[count].ph.toFixed(2);
				temp_data = res[count].temp.toFixed(2);
				salt_data = res[count].salt.toFixed(2);

				$('#ondo-4').html("")
				$('#do-4').html("")
				$('#salt-4').html("")
				$('#ph-4').html("")

				let do_do = `<h5>` + do_data + `ppm</h5>`;
				let ph = `<h5>` + ph_data + `ph</h5>`;
				let temp = `<h5>` + temp_data + `°C</h5>`;
				let salt = `<h5>` + salt_data + `psu</h5>`;


				$('#ondo-4').append(temp);
				$('#do-4').append(do_do);
				$('#salt-4').append(salt);
				$('#ph-4').append(ph);

				data1_guage.setValue(0, 1, res[count].do.toFixed(1));
				chart1_guage.draw(data1_guage, options1);

				data2_guage.setValue(0, 1, res[count].salt.toFixed(1));
				chart2_guage.draw(data2_guage, options2);

				data3_guage.setValue(0, 1, res[count].ph.toFixed(1));
				chart3_guage.draw(data3_guage, options3);

				data4_guage.setValue(0, 1, res[count].temp.toFixed(1));
				chart4_guage.draw(data4_guage, options4);

				count++
			}, 1500

			);

		}

	},


	error: function() {
		console.log('요청실패');
	}
});


$.ajax({ //수조5
	url: "tank5data",

	success: function(res) {
		// 3. 응답받은 데이터를 console 출력

		google.charts.load('current', { 'packages': ['gauge'] });
		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {

			var data1_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['DO', 10],

				]);


			var data2_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['SALT', 10],
				]);


			var data3_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['PH', 10],
				]);


			var data4_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['TEMP', 10],
				]);




			var options1 = { //DO
				width: 200, height: 200,
				redFrom: 0, redTo: 3,
				greenFrom: 3, greenTo: 10,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 10
			};




			var options2 = { //salt
				width: 200, height: 200,
				redFrom: 0, redTo: 10,
				yellowFrom: 34, yellowTo: 40,
				greenFrom: 10, greenTo: 34,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 40
			};


			var options3 = {// ph
				width: 200, height: 200,
				redFrom: 0, redTo: 7.5,
				greenFrom: 7.5, greenTo: 10,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 10
			};

			var options4 = {//temp
				width: 200, height: 200,
				redFrom: 0, redTo: 6,
				yellowFrom: 32, yellowTo: 50,
				greenFrom: 6, greenTo: 34,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 50
			};

			var chart1_guage = new google.visualization.Gauge(document.getElementById('chart_div17'));
			var chart2_guage = new google.visualization.Gauge(document.getElementById('chart_div18'));
			var chart3_guage = new google.visualization.Gauge(document.getElementById('chart_div19'));
			var chart4_guage = new google.visualization.Gauge(document.getElementById('chart_div20'));



			chart1_guage.draw(data1_guage, options1);
			chart2_guage.draw(data2_guage, options2);
			chart3_guage.draw(data3_guage, options3);
			chart4_guage.draw(data4_guage, options4);




			var count = 0;
			console.log(res)
			setInterval(() => {
				console.log(res[count])
				time_data = res[count].record_DATE.split('T')[1].split('.')[0]

				do_data = res[count].do.toFixed(2);
				ph_data = res[count].ph.toFixed(2);
				temp_data = res[count].temp.toFixed(2);
				salt_data = res[count].salt.toFixed(2);

				$('#ondo-5').html("")
				$('#do-5').html("")
				$('#salt-5').html("")
				$('#ph-5').html("")

				let do_do = `<h5>` + do_data + `ppm</h5>`;
				let ph = `<h5>` + ph_data + `ph</h5>`;
				let temp = `<h5>` + temp_data + `°C</h5>`;
				let salt = `<h5>` + salt_data + `psu</h5>`;


				$('#ondo-5').append(temp);
				$('#do-5').append(do_do);
				$('#salt-5').append(salt);
				$('#ph-5').append(ph);

				data1_guage.setValue(0, 1, res[count].do.toFixed(1));
				chart1_guage.draw(data1_guage, options1);

				data2_guage.setValue(0, 1, res[count].salt.toFixed(1));
				chart2_guage.draw(data2_guage, options2);

				data3_guage.setValue(0, 1, res[count].ph.toFixed(1));
				chart3_guage.draw(data3_guage, options3);

				data4_guage.setValue(0, 1, res[count].temp.toFixed(1));
				chart4_guage.draw(data4_guage, options4);

				count++
			}, 1500

			);

		}

	},


	error: function() {
		console.log('요청실패');
	}
});


$.ajax({ //수조6
	url: "tank6data",

	success: function(res) {
		// 3. 응답받은 데이터를 console 출력

		google.charts.load('current', { 'packages': ['gauge'] });
		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {

			var data1_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['DO', 10],

				]);


			var data2_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['SALT', 10],
				]);


			var data3_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['PH', 10],
				]);


			var data4_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['TEMP', 10],
				]);




			var options1 = { //DO
				width: 200, height: 200,
				redFrom: 0, redTo: 3,
				greenFrom: 3, greenTo: 10,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 10
			};




			var options2 = { //salt
				width: 200, height: 200,
				redFrom: 0, redTo: 10,
				yellowFrom: 34, yellowTo: 40,
				greenFrom: 10, greenTo: 34,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 40
			};


			var options3 = {// ph
				width: 200, height: 200,
				redFrom: 0, redTo: 7.5,
				greenFrom: 7.5, greenTo: 10,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 10
			};

			var options4 = {//temp
				width: 200, height: 200,
				redFrom: 0, redTo: 6,
				yellowFrom: 32, yellowTo: 50,
				greenFrom: 6, greenTo: 34,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 50
			};

			var chart1_guage = new google.visualization.Gauge(document.getElementById('chart_div21'));
			var chart2_guage = new google.visualization.Gauge(document.getElementById('chart_div22'));
			var chart3_guage = new google.visualization.Gauge(document.getElementById('chart_div23'));
			var chart4_guage = new google.visualization.Gauge(document.getElementById('chart_div24'));



			chart1_guage.draw(data1_guage, options1);
			chart2_guage.draw(data2_guage, options2);
			chart3_guage.draw(data3_guage, options3);
			chart4_guage.draw(data4_guage, options4);




			var count = 0;
			console.log(res)
			setInterval(() => {
				console.log(res[count])
				time_data = res[count].record_DATE.split('T')[1].split('.')[0]

				do_data = res[count].do.toFixed(2);
				ph_data = res[count].ph.toFixed(2);
				temp_data = res[count].temp.toFixed(2);
				salt_data = res[count].salt.toFixed(2);

				$('#ondo-6').html("")
				$('#do-6').html("")
				$('#salt-6').html("")
				$('#ph-6').html("")

				let do_do = `<h5>` + do_data + `ppm</h5>`;
				let ph = `<h5>` + ph_data + `ph</h5>`;
				let temp = `<h5>` + temp_data + `°C</h5>`;
				let salt = `<h5>` + salt_data + `psu</h5>`;


				$('#ondo-6').append(temp);
				$('#do-6').append(do_do);
				$('#salt-6').append(salt);
				$('#ph-6').append(ph);

				data1_guage.setValue(0, 1, res[count].do.toFixed(1));
				chart1_guage.draw(data1_guage, options1);

				data2_guage.setValue(0, 1, res[count].salt.toFixed(1));
				chart2_guage.draw(data2_guage, options2);

				data3_guage.setValue(0, 1, res[count].ph.toFixed(1));
				chart3_guage.draw(data3_guage, options3);

				data4_guage.setValue(0, 1, res[count].temp.toFixed(1));
				chart4_guage.draw(data4_guage, options4);

				count++
			}, 1500

			);

		}

	},


	error: function() {
		console.log('요청실패');
	}
});


$.ajax({ // 수조 7
	url: "tank7data",

	success: function(res) {
		// 3. 응답받은 데이터를 console 출력

		google.charts.load('current', { 'packages': ['gauge'] });
		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {

			var data1_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['DO', 10],

				]);


			var data2_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['SALT', 10],
				]);


			var data3_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['PH', 10],
				]);


			var data4_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['TEMP', 10],
				]);




			var options1 = { //DO
				width: 200, height: 200,
				redFrom: 0, redTo: 3,
				greenFrom: 3, greenTo: 10,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 10
			};




			var options2 = { //salt
				width: 200, height: 200,
				redFrom: 0, redTo: 10,
				yellowFrom: 34, yellowTo: 40,
				greenFrom: 10, greenTo: 34,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 40
			};


			var options3 = {// ph
				width: 200, height: 200,
				redFrom: 0, redTo: 7.5,
				greenFrom: 7.5, greenTo: 10,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 10
			};

			var options4 = {//temp
				width: 200, height: 200,
				redFrom: 0, redTo: 6,
				yellowFrom: 32, yellowTo: 50,
				greenFrom: 6, greenTo: 34,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 50
			};

			var chart1_guage = new google.visualization.Gauge(document.getElementById('chart_div25'));
			var chart2_guage = new google.visualization.Gauge(document.getElementById('chart_div26'));
			var chart3_guage = new google.visualization.Gauge(document.getElementById('chart_div27'));
			var chart4_guage = new google.visualization.Gauge(document.getElementById('chart_div28'));



			chart1_guage.draw(data1_guage, options1);
			chart2_guage.draw(data2_guage, options2);
			chart3_guage.draw(data3_guage, options3);
			chart4_guage.draw(data4_guage, options4);




			var count = 0;
			console.log(res)
			setInterval(() => {
				console.log(res[count])
				time_data = res[count].record_DATE.split('T')[1].split('.')[0]

				do_data = res[count].do.toFixed(2);
				ph_data = res[count].ph.toFixed(2);
				temp_data = res[count].temp.toFixed(2);
				salt_data = res[count].salt.toFixed(2);

				$('#ondo-7').html("")
				$('#do-7').html("")
				$('#salt-7').html("")
				$('#ph-7').html("")

				let do_do = `<h5>` + do_data + `ppm</h5>`;
				let ph = `<h5>` + ph_data + `ph</h5>`;
				let temp = `<h5>` + temp_data + `°C</h5>`;
				let salt = `<h5>` + salt_data + `psu</h5>`;


				$('#ondo-7').append(temp);
				$('#do-7').append(do_do);
				$('#salt-7').append(salt);
				$('#ph-7').append(ph);

				data1_guage.setValue(0, 1, res[count].do.toFixed(1));
				chart1_guage.draw(data1_guage, options1);

				data2_guage.setValue(0, 1, res[count].salt.toFixed(1));
				chart2_guage.draw(data2_guage, options2);

				data3_guage.setValue(0, 1, res[count].ph.toFixed(1));
				chart3_guage.draw(data3_guage, options3);

				data4_guage.setValue(0, 1, res[count].temp.toFixed(1));
				chart4_guage.draw(data4_guage, options4);

				count++
			}, 1500

			);

		}

	},


	error: function() {
		console.log('요청실패');
	}
});


$.ajax({ //수조8
	url: "tank8data",

	success: function(res) {
		// 3. 응답받은 데이터를 console 출력

		google.charts.load('current', { 'packages': ['gauge'] });
		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {

			var data1_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['DO', 10],

				]);


			var data2_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['SALT', 10],
				]);


			var data3_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['PH', 10],
				]);


			var data4_guage = google.visualization.arrayToDataTable(

				[
					['Label', 'Value'],
					['TEMP', 10],
				]);




			var options1 = { //DO
				width: 200, height: 200,
				redFrom: 0, redTo: 3,
				greenFrom: 3, greenTo: 10,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 10
			};




			var options2 = { //salt
				width: 200, height: 200,
				redFrom: 0, redTo: 10,
				yellowFrom: 34, yellowTo: 40,
				greenFrom: 10, greenTo: 34,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 40
			};


			var options3 = {// ph
				width: 200, height: 200,
				redFrom: 0, redTo: 7.5,
				greenFrom: 7.5, greenTo: 10,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 10
			};

			var options4 = {//temp
				width: 200, height: 200,
				redFrom: 0, redTo: 6,
				yellowFrom: 32, yellowTo: 50,
				greenFrom: 6, greenTo: 34,
				minorTicks: 5,
				animation: { duration: 400 },
				max: 50
			};

			var chart1_guage = new google.visualization.Gauge(document.getElementById('chart_div29'));
			var chart2_guage = new google.visualization.Gauge(document.getElementById('chart_div30'));
			var chart3_guage = new google.visualization.Gauge(document.getElementById('chart_div31'));
			var chart4_guage = new google.visualization.Gauge(document.getElementById('chart_div32'));



			chart1_guage.draw(data1_guage, options1);
			chart2_guage.draw(data2_guage, options2);
			chart3_guage.draw(data3_guage, options3);
			chart4_guage.draw(data4_guage, options4);




			var count = 0;
			console.log(res)
			setInterval(() => {
				console.log(res[count])
				time_data = res[count].record_DATE.split('T')[1].split('.')[0]

				do_data = res[count].do.toFixed(2);
				ph_data = res[count].ph.toFixed(2);
				temp_data = res[count].temp.toFixed(2);
				salt_data = res[count].salt.toFixed(2);

				$('#ondo-8').html("")
				$('#do-8').html("")
				$('#salt-8').html("")
				$('#ph-8').html("")

				let do_do = `<h5>` + do_data + `ppm</h5>`;
				let ph = `<h5>` + ph_data + `ph</h5>`;
				let temp = `<h5>` + temp_data + `°C</h5>`;
				let salt = `<h5>` + salt_data + `psu</h5>`;


				$('#ondo-8').append(temp);
				$('#do-8').append(do_do);
				$('#salt-8').append(salt);
				$('#ph-8').append(ph);

				data1_guage.setValue(0, 1, res[count].do.toFixed(1));
				chart1_guage.draw(data1_guage, options1);

				data2_guage.setValue(0, 1, res[count].salt.toFixed(1));
				chart2_guage.draw(data2_guage, options2);

				data3_guage.setValue(0, 1, res[count].ph.toFixed(1));
				chart3_guage.draw(data3_guage, options3);

				data4_guage.setValue(0, 1, res[count].temp.toFixed(1));
				chart4_guage.draw(data4_guage, options4);

				count++
			}, 1500

			);

		}

	},


	error: function() {
		console.log('요청실패');
	}
});







function currentTime() {
	const date = new Date();
	let yyyy = date.getFullYear();
	let MM = date.getMonth() + 1;
	let dd = date.getDate();
	let hh = date.getHours();
	let mm = date.getMinutes();
	let ss = date.getSeconds();
	let session = "AM";

	if (hh > 12) {
		session = "PM";
	}

	hh = (hh < 10) ? "0" + hh : hh;
	mm = (mm < 10) ? "0" + mm : mm;
	ss = (ss < 10) ? "0" + ss : ss;

	const time = yyyy + "년 " + MM + "월 " + dd + "일 " + session + " " + hh + ":" + mm;

	document.getElementById("clock").innerText = time;

	setTimeout(() => currentTime(), 1000);
}

currentTime();

function currentTime2() {
	const date2 = new Date();
	let yyyy = date2.getFullYear();
	let MM = date2.getMonth() + 1;
	let dd = date2.getDate();
	let hh = date2.getHours();
	let mm = date2.getMinutes();
	let ss = date2.getSeconds();
	let session = "AM";

	if (hh > 12) {
		session = "PM";
	}

	hh = (hh < 10) ? "0" + hh : hh;
	mm = (mm < 10) ? "0" + mm : mm;
	ss = (ss < 10) ? "0" + ss : ss;

	const time = yyyy + "년 " + MM + "월 " + dd + "일 " + session + " " + hh + ":" + mm;

	document.getElementById("clock2").innerText = time;

	setTimeout(() => currentTime2(), 1000);
}

currentTime2();



function currentTime3() {
	const date3 = new Date();
	let yyyy = date3.getFullYear();
	let MM = date3.getMonth() + 1;
	let dd = date3.getDate();
	let hh = date3.getHours();
	let mm = date3.getMinutes();
	let ss = date3.getSeconds();
	let session = "AM";

	if (hh > 12) {
		session = "PM";
	}

	hh = (hh < 10) ? "0" + hh : hh;
	mm = (mm < 10) ? "0" + mm : mm;
	ss = (ss < 10) ? "0" + ss : ss;

	const time = yyyy + "년 " + MM + "월 " + dd + "일 " + session + " " + hh + ":" + mm;

	document.getElementById("clock3").innerText = time;

	setTimeout(() => currentTime3(), 1000);
}

currentTime3();


function currentTime4() {
	const date4 = new Date();
	let yyyy = date4.getFullYear();
	let MM = date4.getMonth() + 1;
	let dd = date4.getDate();
	let hh = date4.getHours();
	let mm = date4.getMinutes();
	let ss = date4.getSeconds();
	let session = "AM";

	if (hh > 12) {
		session = "PM";
	}

	hh = (hh < 10) ? "0" + hh : hh;
	mm = (mm < 10) ? "0" + mm : mm;
	ss = (ss < 10) ? "0" + ss : ss;

	const time = yyyy + "년 " + MM + "월 " + dd + "일 " + session + " " + hh + ":" + mm;

	document.getElementById("clock4").innerText = time;

	setTimeout(() => currentTime4(), 1000);
}

currentTime4();



function currentTime5() {
	const date5 = new Date();
	let yyyy = date5.getFullYear();
	let MM = date5.getMonth() + 1;
	let dd = date5.getDate();
	let hh = date5.getHours();
	let mm = date5.getMinutes();
	let ss = date5.getSeconds();
	let session = "AM";

	if (hh > 12) {
		session = "PM";
	}

	hh = (hh < 10) ? "0" + hh : hh;
	mm = (mm < 10) ? "0" + mm : mm;
	ss = (ss < 10) ? "0" + ss : ss;

	const time = yyyy + "년 " + MM + "월 " + dd + "일 " + session + " " + hh + ":" + mm;

	document.getElementById("clock5").innerText = time;

	setTimeout(() => currentTime5(), 1000);
}

currentTime5();



function currentTime6() {
	const date6 = new Date();
	let yyyy = date6.getFullYear();
	let MM = date6.getMonth() + 1;
	let dd = date6.getDate();
	let hh = date6.getHours();
	let mm = date6.getMinutes();
	let ss = date6.getSeconds();
	let session = "AM";

	if (hh > 12) {
		session = "PM";
	}

	hh = (hh < 10) ? "0" + hh : hh;
	mm = (mm < 10) ? "0" + mm : mm;
	ss = (ss < 10) ? "0" + ss : ss;

	const time = yyyy + "년 " + MM + "월 " + dd + "일 " + session + " " + hh + ":" + mm;

	document.getElementById("clock6").innerText = time;

	setTimeout(() => currentTime6(), 1000);
}

currentTime6();



function currentTime7() {
	const date7 = new Date();
	let yyyy = date7.getFullYear();
	let MM = date7.getMonth() + 1;
	let dd = date7.getDate();
	let hh = date7.getHours();
	let mm = date7.getMinutes();
	let ss = date7.getSeconds();
	let session = "AM";

	if (hh > 12) {
		session = "PM";
	}

	hh = (hh < 10) ? "0" + hh : hh;
	mm = (mm < 10) ? "0" + mm : mm;
	ss = (ss < 10) ? "0" + ss : ss;

	const time = yyyy + "년 " + MM + "월 " + dd + "일 " + session + " " + hh + ":" + mm;

	document.getElementById("clock7").innerText = time;

	setTimeout(() => currentTime7(), 1000);
}

currentTime7();



function currentTime8() {
	const date8 = new Date();
	let yyyy = date8.getFullYear();
	let MM = date8.getMonth() + 1;
	let dd = date8.getDate();
	let hh = date8.getHours();
	let mm = date8.getMinutes();
	let ss = date8.getSeconds();
	let session = "AM";

	if (hh > 12) {
		session = "PM";
	}

	hh = (hh < 10) ? "0" + hh : hh;
	mm = (mm < 10) ? "0" + mm : mm;
	ss = (ss < 10) ? "0" + ss : ss;

	const time = yyyy + "년 " + MM + "월 " + dd + "일 " + session + " " + hh + ":" + mm;

	document.getElementById("clock8").innerText = time;

	setTimeout(() => currentTime8(), 1000);
}

currentTime8();


