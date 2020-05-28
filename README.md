# tinkercad to socket.io and websocket


### note! websocket error events will be logged constanly, because it's use async method and it's always return error on console, even you put try and catch statement.

# installation process on the browser

1. download and unzip this repo on your pc 
2. open a chromium based browser (Chrome native browser, Chromium, Microsoft Edge chromium version, etc...) 
3. go to extension tab 
4. switch on development mode
5. click on upload uncompressed and navigate to the unzipped file
6. select the extension folder

# installation process on processing 

1. oper processing
2. click on file -> preferences.
3. you should see a sketch path.
4. open file manager and navigate to that directory
5. open the folder named libraries and cut and paste the content of library folder of the unzipped file  
6. try out the example code

# using with socket.io and nodejs

1. install socket.io module for nodejs using ``` npm install socket.io ``` 
2. write down your code, in oder to get data from tinkercad you have write:
```javascript
var arduino = require('socket.io')(port); 
arduinoUno = arduino.of("/namespace");
arduinoUno.on("connection", (device) => {
  device.on("msg", (data)=> {
    console.log(data);
  });
});

```

# External library
websocket library for processing: https://github.com/alexandrainst/processing_websockets

socket.io library: https://socket.io/ or https://github.com/socketio
