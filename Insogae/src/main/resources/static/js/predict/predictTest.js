var user = $('#ryu').text();
var tank = $('#namuk').text();
const chartList = ["testChart1","testChart2","testChart3","testChart4","testChart5"]


for (let i =0;i<5;i++){
$.ajax({
	url : 'tank1data',
	data : {
		userData : user,
		tankData : tank
	},
	success : function(res){
			let count = 0; 
			time_data = res[count].record_DATE.split('T')[1].split('.')[0]
			temp_data = res[count].temp.toFixed(2);
			let labels = [];
	        const data0 = {
	          labels: labels,
	          datasets: [{
	            label: '온도',
	            data: [],
	            fill: false,
	            backgroundColor: [],
	            borderColor: [],
	            tension: 0.1,
	            borderWidth: 1
	          }]
	        };
	        let config0 = {
	                type: 'line',
	                data: data0,
	                options: {
	                  scales: {
	                    x: {
	                      tick: {
	                        display: false,
	                        callback: function(label, index, labels) {
	                          return hiddenLabel;
	                        }
	                      }
	                    }
	                  }
	                }
	              };
	        let chart0 = new Chart(
	                $(chartList[i]),
	                config0
	                );
	        let hiddenLabel =[]
	        setInterval(()=> {
	            hiddenLabel.push("");
	          
	            if (data0.datasets[0].data.length > 12){
	            labels.shift();
	            data0.datasets[0].data.shift();
	            data0.datasets[0].backgroundColor.shift();
	            data0.datasets[0].borderColor.shift();
	            }
	            labels.push(time_data);
	            data0.datasets[0].data.push(res[count].temp);
	            data0.datasets[0].backgroundColor.push(3 >=res[count].temp ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
	            data0.datasets[0].borderColor.push(3 >= res[count].temp ? 'rgba(255, 0, 0)' : 'rgba(0, 255, 0)');
	           
	            chart0.update();
	            count++;
	            }, 3000); 
		},
	error : function(){
		console.log('에러');
	}
})
};