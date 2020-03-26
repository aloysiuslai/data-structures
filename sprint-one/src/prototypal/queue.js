var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var object = Object.create(queueMethods);
  return object;
};

var queueMethods = {
  storage: {},
  count: 0,
  first: 0,
  last: 0,
  enqueue: function(value) {
    this.count++;
    this.storage[this.last] = value;
    this.last++;
  },
  dequeue: function() {
    var result = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    this.count--;

    return result;
  },
  size: function() {
    return this.count > 0 ? this.count : 0;
  }
};


