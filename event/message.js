class Message {
  constructor(name, data) {
    this.name = name
    this.data = data
  }
  getData() {
    return this.data
  }
  getName() {
    return this.name
  }
  toJson() {
    return JSON.stringify({name: this.getName(), data: this.getData()})
  }
}

module.exports = { Message }
