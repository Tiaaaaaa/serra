const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");

let port;
let parser;

SerialPort.list((err, list) => {
  for (i in list) {
    if (list[i].manufacturer === "Arduino (www.arduino.cc)") {
      port = new SerialPort(list[i].comName, { baudRate: 9600 });
      parser = port.pipe(new Readline({ delimiter: "\n" }));

      // Read the port data
      port.on("open", () =>
        console.log(`port open. Data rate: ${port.baudRate}`)
      );
      parser.on("data", data => {
        console.log("got word from arduino:", data);
      });
      setTimeout(() => {
        port.write("Hello world", err => {
          if (err) return console.log("Error on write: ", err.message);
          console.log("message written");
        });
      }, 500);
    } else {
    }
  }
});
