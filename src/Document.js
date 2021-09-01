const Ref = require("./Ref");

class Document {
  constructor(document) {
    // this = {...document.data}
    this.id = document.ref.id;
    this.ref = new Ref(document.ref);
    this.timestamp = document.ts;

    let keys = Object.keys(document.data);
    for (let x = 0; x < keys.length; x++) {
      let key = keys[x];
      let value = document.data[key];
      this[key] = value;
    }
  }
}

module.exports = Document;
