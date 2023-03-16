const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541// PORT number here,
  });
  
  //Upon connection, print the line and write a name
  conn.on("connect",()=>{
    console.log("Connection established!");
    conn.write("Name: XZW");
  
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (serverData) =>{
    console.log(`From server: ${serverData}`)
  });
//  console.log(conn)
  return conn;
};


const print = () => {console.log("Connecting ...");}


module.exports = {
  connect,
  print,
};