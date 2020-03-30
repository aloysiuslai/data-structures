var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }

  };

  list.removeHead = function() {
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target, node) {
    var current = list.head;

    while (current) { // while current is not null
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }

    return false;

    // var currentNode = node || list.head; // short-circuit
    // if (currentNode.value === target) {
    //   return true;
    // } else {
    //   if (currentNode.next){
    //     return list.contains(target, currentNode.next)
    //   }
    // }
    // return false;
  };

  return list;
  /* alternatively via traverse */
  /*
    var current = list.head;

    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;

  */
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  AddToTail: O(1)
  RemoveHead: O(1)
  Contains: O(n)
 */
