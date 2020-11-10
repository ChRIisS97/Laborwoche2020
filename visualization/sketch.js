let ws = new WebSocket("ws://localhost:18800/ws/recieve")

ws.onopen = function(event){
    console.log(event);
}

ws.onmessage = function(msg){
    console.log(msg);
}