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

  //hardcode: move the snake!

  setInterval((arg) =>{
conn.write(arg)
  }, 1500,"Move: up","Move: left", "Move: left", "Move: left", "Move: down", "Move: right")

  // setTimeout(() => {
  //   conn.write( "Move: up" )
  // }, 2000)
  
  // setTimeout(() => {
  //   conn.write( "Move: left" )
  // }, 4000)
  
  // setTimeout(() => {
  //   conn.write( "Move: down" )
  // }, 6000)


  // setTimeout(() => {
  //   conn.write( "Move: right" )
  // }, 8000)


  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (serverData) =>{
    console.log(`From server: ${serverData}`)
  });

  return conn;
};

const print = () => {console.log("Connecting ...");}


module.exports = {
  connect,
  print,
};