 
// const { format } = require('date-fns');
// const { v4: uuidv4 } = require('uuid');
 const logevents = require('./logevents'); 
// console.log(format(new Date(), 'yyyy-MM-dd'));
// console.log(uuidv4());

const emitter=require('events');
 
class MyEmitter extends emitter {}
const myEmitter = new MyEmitter();
myEmitter.on('log', (event, message) => {
  console.log(`Event: ${event}, Message: ${message}`);
});
myEmitter.emit('log', 'Server started', 'The server is running on port 3000');