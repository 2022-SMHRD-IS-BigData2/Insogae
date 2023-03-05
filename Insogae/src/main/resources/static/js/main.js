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
    