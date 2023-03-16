const {print, connect}= require("./client");
const { IP, PORT } = require("./constants");
const {setupInput} = require("./input")
print()

//the object returned by connect() should be passed into setupInput()
setupInput(connect(IP, PORT))

