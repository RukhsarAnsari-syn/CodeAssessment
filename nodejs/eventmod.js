const events=require('events');
const eventEmitter=new events.EventEmitter();
const connectHandler=function connected(){
  console.log('connected successfully');
  eventEmitter.emit('data received');
}
eventEmitter.on('connection',connectHandler);
eventEmitter.on('data receiverd',()=>{
    console.log('data receive successfully');
});
eventEmitter.emit('connection');
console.log('program ended');