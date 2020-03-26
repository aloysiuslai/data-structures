var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var first = 0;
  var last = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    storage[last] = value;
    last++;
  };

  someInstance.dequeue = function() {
    var result = storage[first];
    delete storage[first];
    count--;
    first++;
    return result;
  };

  someInstance.size = function() {
    if (count < 0) {
      return 0;
    } else {
      return count;
    }

  };

  return someInstance;
};