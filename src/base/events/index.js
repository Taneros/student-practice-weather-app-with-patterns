export class EventEmitter {
  constructor() {
    this._events = [];
  }

  // class field
  on = (listener) => {
    this._events.push( listener )
    return () => this.off(listener)
  }

  off = ( listener ) => {
    this.setEvents(this._events.filter(l => l !== listener))
  }

  emit = ( data ) => {
      this._events.forEach(callback => callback(data));
  }

  //this depends on call const first = useContext(second)
  offAll() {
    this._events = [];
  }

  setEvents = (events) => {
    this._events = events
  }

  trigger = ( listener, data = {} ) => {
    const triggeredListener = this._events.find( l => l === listener )
    if ( triggeredListener ) {
      triggeredListener(data)
    }
  }
}

