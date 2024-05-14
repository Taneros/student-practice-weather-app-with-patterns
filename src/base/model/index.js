export class Model {
  constructor (events ) {
    this.events = events
  }

  emitChanges ( event, payload ) {
    this.events.emit(event, payload ?? {})
  }
}