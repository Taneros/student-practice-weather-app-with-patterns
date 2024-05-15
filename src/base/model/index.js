export class Model {
  constructor (events ) {
    this.events = events
  }

  emitChanges ( payload = {} ) {
    this.events.emit(payload)
  }
}