var Graph = function() {
  //This = Object.Create(Graph.prototype)

  // add some properties here
  this._storage = {};

  //Return This
};

// Add a node to the graph, passing in the node's value.

Graph.prototype.addNode = function(node) {
  // can't use bracket notation for `this` keyword

  // HOLD OFF: check if `node` value in `_storage`
  this._storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  return node in this._storage;

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // Loop thru this._storage[node]
  // removeEdge(node, this._storage[node][i])
  for ( let i = 0; i < this._storage[node].length; i++) {
    this.removeEdge(node, this._storage[node][i]);
  }
  delete this._storage[node];
};


// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check if 'fromNode' value contains 'toNode and vice versa
  // return boolean
  return this._storage[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // check if `fromNode` and `toNode` in `_storage`
  if (fromNode in this._storage && toNode in this._storage) {
    if (fromNode === toNode) {
      this._storage[fromNode].push(toNode);
    } else {
      this._storage[fromNode].push(toNode);
      this._storage[toNode].push(fromNode);
    }
  }
  //  if true
  //    at key `fromNode` push `toNode` value
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // Go to fromNode value
  //Loop thru array to find toNode and obtain index
  for (let i = 0; i < this._storage[fromNode].length; i++) {
    if (this._storage[fromNode][i] === toNode) {
      // Splice fromNode value at index
      this._storage[fromNode].splice(i, 1);
      // repeat for toNode
      this.removeEdge(toNode, fromNode);
    }
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // identical to array forEach
  // input is a call back function
  // output: none
  // Our objective is to loop and visit each node and pass the node as input to the call back function
  for (let key of Object.keys(this._storage)) {
    cb(Number.parseInt(key));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  addNode: O(1) Constant
  containsNode: O(n) linear
  removeNode: O(n^2) quadratic
  addEdge: O(n) linear
  removeEdge: O(n) linear
  forEachNode:
    Best Case: O(n) linear
    Worse Case: O(n^3) quadratic
 */


// call back function
// var connectToFive = function(item) {
//   console.log(item);
//   graph.addEdge(item, 5);
// };

// // object instantiation
// var graph = new Graph();

// // method calls
// graph.addNode(5);
// graph.addNode(2);
// graph.addNode(1);
// graph.addNode(3);
// graph.forEachNode(connectToFive);

// // check output
// console.log(graph.hasEdge(2, 5))
// console.log(graph.hasEdge(1, 5))
// console.log(graph.hasEdge(3, 5))
// console.log(graph.hasEdge(5, 5))
// console.log(graph._storage);
