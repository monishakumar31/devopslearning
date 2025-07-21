const { format } = require('date-fns');
const { v4: uuidv4 } = require('uuid');

const fs=require('fs');
const path=require('path'); 
const fspromise=require('fs').promises;
console.log(format(new Date(), 'yyyy-MM-dd'));
console.log(uuidv4());

const logevents = (event, message) => {
  const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`;
  const logItem = `${dateTime}\t${uuidv4()}\t${event}\t${message}\n`;
  if(!fs.existsSync(path.join(__dirname, 'logs'))) {
    fspromise.mkdir(path.join(__dirname, 'logs'))
      .then(() => console.log('Logs directory created'))
      .catch(err => console.error('Error creating logs directory:', err));
  }  
  fspromise.appendFile(path.join(__dirname, 'logs', 'eventLogs.txt'), logItem)
    .then(() => console.log('Log event recorded'))
    .catch(err => console.error('Error writing to log file:', err));
}

module.exports = logevents;
