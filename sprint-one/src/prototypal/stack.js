var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var object = Object.create(stackMethods);
  return object;
};

// var stackMethods = {};
var stackMethods = {
  storage: {},
  count: 0,
  push: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },

  pop: function() {
    var result = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return result;
  },

  size: function() {
    return this.count > 0 ? this.count : 0;
  },
};


