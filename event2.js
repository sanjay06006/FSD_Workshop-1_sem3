
const EventEmitter = require('events');


const button = new EventEmitter();


button.on('click', () => {
    console.log("Button was clicked!");
});


button.on('mouseover', () => {
    console.log("Mouse is over the button!");
});


button.on('dblclick', () => {
    console.log("Button was double clicked!");
});


button.emit('click');
button.emit('mouseover');
button.emit('dblclick');
