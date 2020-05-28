var connetionLink = "300/";
var type, connection, elementBtn, elementSerial, ris = "", toggle = 0;

/*

START BUTTON

*/

var detectBtn = setInterval(() => {
    try {
        elementBtn = document.querySelector("#SIMULATION_ID");
        elementBtn.addEventListener("click", handleBtn);
        clearInterval(detectBtn);
    } catch (err) {}
}, 1000);

function handleBtn() {
    var classes = elementBtn.classList;
    for (let i = 0; i < classes.length; i++) {
        if (classes[i] == "active") {toggle = 1;}
        else {toggle = 0;}
    }
    if(toggle == 1) {
        var x = document.querySelector(".zaza_input").value;
        if(x != ""){connetionLink = x}
        var transport = document.querySelector(".zaza_sel").value;
        if (transport == "websocket") {
            type = "web";
            var XconnetionLink = "ws://localhost:" + connetionLink;
            connection = new WebSocket(XconnetionLink);

            // Setup websocket events

            connection.addEventListener("message", handleMsg);
            connection.addEventListener('error', rrl);

        }else{

            var link = "http://localhost:" + connetionLink;
            connection = io(link, {reconnection: false});

            // handle socket.io incoming message 

            connection.on("send", (x)=> {
                serial(x);
            });
            connection.on('connect_error', () => {
                connection.close();
                alert("Socket.io: Server not runnig, or not found");
                elementBtn.click();
            });
        }
    }
    startSerialDetect();
}

/*

Function to detect and remove websocket error event

*/

function rrl(){
    connection.removeEventListener("error", rrl);
    elementBtn.click();
    return alert("Websocket: Server not runnig, or not found");

}

/*

handle websocket message event

*/

function handleMsg(event) {
    serial(event.data);
}

/*

Start listen the serialmonitor

*/

function startSerialDetect(){
    var detectSerial = setInterval(() => {
        try {
            elementSerial = document.querySelector(".code_panel__serial__content__text");
            if (toggle == 1) {
                elementSerial.addEventListener('DOMSubtreeModified', handleSerial);
                clearInterval(detectSerial);
            }
        } catch (error) {
        }
    }, 10);
}
function handleSerial() {
    lines = (elementSerial.innerText).split(/\r\n/g);
    if (lines[0] != "") {
        if (lines[lines.length - 1] == "") {
            if (ris != "") {
                try {
                    if(type == "web"){
                        connection.send(ris);
                    }
                    else{
                        connection.emit("msg", ris);
                    }
                    console.log(ris);
                    document.querySelectorAll(".circ_btn")[22].click();
                } catch (x) {}
                ris = "";
            }
        } else {
            var x = lines[lines.length - 1];
            x = x[x.length - 1];
            ris += x;
        }
    }
}

/*

Writedown serialmonitor message

*/

function serial(x) {
    document.querySelector(".code_panel__serial__input").value = x;
    document.querySelectorAll(".circ_btn__txt")[19].click();
}

