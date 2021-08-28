class Ref {
  constructor(ref) {
    this.collection = ref.collection.id;
    this.id = ref.id;
  }
}

module.exports = Ref;
