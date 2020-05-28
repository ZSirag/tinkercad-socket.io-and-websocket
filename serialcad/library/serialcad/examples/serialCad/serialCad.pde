import websockets.*;
import serialCad.*;

SerialStart serial;
WebsocketServer tinkercad;

void setup(){
  serial = new SerialStart(this);
  tinkercad = new WebsocketServer(this,300,"/");
}
void draw(){
  if(serial.available()){
    println(serial.read());
    tinkercad.sendMessage("C");
  }
}

void webSocketServerEvent(String msg){
  serial.send(msg);
}
