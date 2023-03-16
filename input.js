// Stores the active TCP connection object.
let connection1;

const setupInput = function (conn) {
  connection1 = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (conn) => {
  if(conn === "w"){
    connection1.write("Move: up");
    //console.log("It works")
  }
  if(conn === "s"){
    connection1.write("Move: down")
  }
  if(conn === "a"){
    connection1.write("Move: left")
  }
  if(conn ==="d"){
    connection1.write("Move: right")
  }
  if(conn ==="x"){
    connection1.write("Say: Arsenal is the best club")
  }

  if (conn === '\u0003') {
    process.exit();
  } 

 };


 module.exports = {
  setupInput
 }

