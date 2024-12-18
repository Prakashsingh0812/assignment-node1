const EventEmitter = require('events'); // Import EventEmitter module

// 1. Event Producer
class LogProducer extends EventEmitter {
  logError(message) {
    const timestamp = new Date().toISOString();
    this.emit('errorLogged', { timestamp, message }); // Emit 'errorLogged' event
  }
}

// 2. Consumers
const errorLogger = (eventDetails) => {
  console.log('Error Logged:', eventDetails); // Logs event details to the console
};

const errorArray = [];
const errorSaver = (eventDetails) => {
  errorArray.push(eventDetails); // Save event details to an array
  console.log('Error saved to array:', errorArray);
};

// 3. Setup Event Listeners
const logProducer = new LogProducer();

// Attach consumers (listeners) to the 'errorLogged' event
logProducer.on('errorLogged', errorLogger);
logProducer.on('errorLogged', errorSaver);

// 4. Emit Events
logProducer.logError('File not found');
logProducer.logError('Connection timeout');
logProducer.logError('Syntax error in line 42');
