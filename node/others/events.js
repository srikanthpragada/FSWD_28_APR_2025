// Import and create object of EventEmitter
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Register event handler for count event
eventEmitter.on('count', 
    value => { console.log(`Count is ${value}`); }
);

// Raise event
eventEmitter.emit('count', 10);
 