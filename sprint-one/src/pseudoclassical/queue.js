var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.first = 0;
  this.last = 0;
};

Queue.prototype.enqueue = function (value) {
  this.count++;
  this.storage[this.last] = value;
  this.last++;
};

Queue.prototype.dequeue = function () {
  var result = this.storage[this.first];
  delete this.storage[this.first];
  this.first++;
  this.count--;
  return result;
};

Queue.prototype.size = function () {
  return this.count > 0 ? this.count : 0;
};