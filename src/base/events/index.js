export class EventEmitter {
  constructor() {
    this._events = new Map();
  }

  on(eventName, callback) {
    if (!this._events.has(eventName)) {
      this._events.set(eventName, new Set());
    }
    this._events.get(eventName).add(callback);
  }

  off(eventName, callback) {
    if (this._events.has(eventName)) {
      this._events.get(eventName).delete(callback);
      if (this._events.get(eventName).size === 0) {
        this._events.delete(eventName);
      }
    }
  }

  emit ( eventName, data ) {
    console.log(`events/index.js - line: 23 ->> emit eventName, data`, eventName, data)
    this._events.forEach( ( subscribers, name ) => {
      console.log(`events/index.js - line: 25 ->> subscribers, name`, subscribers, name)
      if (name === eventName) {
        subscribers.forEach(callback => callback(data));
      }
    });
  }

  onAll(callback) {
    this.on('*', callback);
  }

  offAll() {
    this._events = new Map();
  }

  trigger(eventName, context = {}) {
    return (event = {}) => {
      this.emit(eventName, { ...event, ...context });
    };
  }
}
