const {print, connect}= require("./client");
const {setupInput} = require("./input")
print()

//the object returned by connect() should be passed into setupInput()
setupInput(connect())

