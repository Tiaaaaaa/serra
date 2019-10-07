const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");

let port;
let parser;

SerialPort.list((err, list) => {
  for (i in list) {
  //  if (list[i].manufacturer === "Arduino (www.arduino.cc)")
    if (list[i].ID === "2341:0042") {

      port = new SerialPort(list[i].comName/*"/dev/ttyACM0"*/, { baudRate: 9600 });
      parser = port.pipe(new Readline({ delimiter: "\n" }));

      // Read the port data
      port.on("open", () =>
        console.log(`port open. Data rate: ${port.baudRate}`)
      );

      let i = 0;
      let array = [];

      parser.on("data", data => {

        array[i] = data;
        console.log(array[i]);

      });

      i++;

      if(i === 5) i = 0;



      let input = "b"; //VARIABILE DA COLLEGARE

      if(input != "0"){

        setTimeout(() => {
          port.write(input, err => {

            if (err) return console.log("Error on write: ", err.message);
            console.log("message written");
            input = "0";

          });
        }, 500);
      }else{
      }


    } else {
    }

    console.log("No arduino attached found");

  }
});
