const myButton = document.getElementById("next-page");
;
    myButton.addEventListener('click', e=> {
      document.getElementById("container").scrollIntoView({behavior:'smooth', block: "nearest", inline: "end"});
    });

const myButton2 = document.getElementById("before-page");
;
    myButton2.addEventListener('click', e=> {
      document.getElementById("container").scrollIntoView({behavior:'smooth', block: "nearest", inline: "start"});
    });    
    
    
	
function currentTime() {
  const date = new Date(); 
  let yyyy = date.getFullYear();
  let MM = date.getMonth()+1;
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

  const time = yyyy + "년 " + MM + "월 " + dd + "일 " + session + " "  + hh + ":" + mm;

  document.getElementById("clock").innerText = time;

  setTimeout(() => currentTime(), 1000);
}

currentTime();