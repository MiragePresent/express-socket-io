const { Message: MessageClass } = require('./message')

class Parser {
  createMessage(eventEncoded) {
    const decoded = this.decode(eventEncoded)

    if (typeof decoded !== 'string' && !decoded.event) {
      throw Error('Event name is not valid')
    }

    if (typeof decoded.data !== 'object') {
      throw Error('Event data is not valid')
    }

    return new MessageClass(decoded.event, decoded.data)
  }
  decode(eventEncoded) {
    return JSON.parse(eventEncoded)
  }
}

function createParser() {
  return new Parser()
}

module.exports = {
  Parser,
  createParser,
}
