var connection = new WebSocket('ws://html5rocks.websocket.org/echo', ['soap', 'xmpp']);

<script>

function quiz1(vol) {
document.querySelector('#quiz1').value = vol;
q1 = Number(vol);

}
function quiz2(vol) {
document.querySelector('#quiz2').value = vol;
q2 = Number(vol);
}
function midterm(vol) {
document.querySelector('#midterm').value = vol;
midterm = Number(vol);
}
function grade() {
//var q1 = $("#quiz1).val();
result = (q1 + q2 + midterm);
var avg = result/3;

alert(avg);
WebSocketTest();
}

function refresh() {
window.location.reload();
}
function WebSocketTest()
{
  if ("WebSocket" in window)
  {
     alert("WebSocket is supported by your Browser!");
     // Let us open a web socket
     var ws = new WebSocket("ws://localhost:3000/echo");
     ws.onopen = function()
     {
        // Web Socket is connected, send data using send()
        ws.send(avg);
        alert("Message is sent...");
     };
     ws.onmessage = function (evt) 
     { 
        var received_msg = evt.data;
        alert("Message is received...");
     };
     ws.onclose = function()
     { 
        // websocket is closed.
        alert("Connection is closed..."); 
     };
  }
  else
  {
     // The browser doesn't support WebSocket
     alert("WebSocket NOT supported by your Browser!");
  }
}
</script>