let ws = new WebSocket("ws://localhost:18800/ws/recieve")
let bar2;
let bar3;
let bar4;

ws.onmessage = function(msg){
    p = msg.data;
    p = p.split(',');

    t0 = new Array(p[0])
    t1 = new Array(p[1])
    t2 = new Array(p[2])
    //console.log(t0);
    bar2 = t0
    bar3 = t1
    bar4 = t2

    document.getElementById('data').innerHTML = t0 + " °C";
    document.getElementById('data1').innerHTML = t1 + " °C";
    return document.getElementById('data2').innerHTML = t2 + " °C";
}

setInterval(function(){
    document.getElementById("myProgress").value = bar2;
  }, 1000);
setInterval(function(){
    document.getElementById("myProgress2").value = bar3;
  }, 1000);  
setInterval(function(){
    document.getElementById("myProgress3").value = bar4;
  }, 1000);

  