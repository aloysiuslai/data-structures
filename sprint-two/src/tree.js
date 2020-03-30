var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];// fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};
/* Root
    Root.c[0]
      Root.c[0].c[0]  X Red
      Root.c[0].c[1]
      Root.c[0].c[2]
    Root.c[1]
      Root.c[1].c[0] Green
*/

treeMethods.contains = function(target) {
  var result = false;
  if ( this.value === target) {
    return true; // or result
  }
  var find = function (children) {
    for (let i = 0; i < children.length; i++) {
      if (children[i].value === target) {
        result = true;
      }
      find(children[i].children); // true is in limbo
    }
    return result;
  };

  return find(this.children);
};


// if (this.value === target) {
//   return true;
// } else {

// }
// var find = function(target) {
//   for ( var i = 0; i < this.children.length; i++) {
//     if (this.children[i] === target) {
//       return true;
//     } else {

//     }
//   }
//   let result = true;
//   var find = function(tree) {
//     if (tree.value === target) {
//       // return true;
//       return result;
//     }

//     if (tree.children.length !== 0) {
//       for (let i = 0; i < tree.children.length; i++) {
//         // maybe console log tree.children[i] to help our intuition
//         return find(tree.children[i]);
//       }
//     }

//   }

//   // function using root
//   // return find(this);
//   find(this);
//   return result;
// // };







/*
 * Complexity: What is the time complexity of the above functions?
 */

/* Root (gen 0)


 */

var tree = Tree();
tree.addChild(5);
tree.addChild(6);
tree.children[0].addChild(7);
tree.children[1].addChild(8);
console.log(tree.contains(7)); // expect true
console.log(tree.contains(8)); // expect true
