var BinarySearchTree = function(value) {
  var obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};

/**
 *  Accepts a value and places it in the tree in the correct position.
 */
/* Create Root Value
   Insert new value
    Compare Root and new value to determine if left or right
      if root.left or root.right = null, make root property = BTS(new value)
      If not null, repeat comparision by making root.left or right be the new root.
*/
//3
BinarySearchTree.prototype.insert = function(value, node = this) {
  // Check root value to determine left or right
// 2 > 3
  if ( node.value > value) {
    // read this.right and if null then
    if (node.left === null) {
      node.left = BinarySearchTree(value);
    } else {
      //2
      node.insert(value, node.left);
      //node.left = { value: 2, left: null, right: null }
    }
    //if not null then recursive call
  } else {
    if (node.right === null) {
      node.right = BinarySearchTree(value);
    } else {
      node.insert(value, node.right);
    }
  }

  // var helper = function(node) {
  //   // Check root value to determine left or right
  //         // 2 > 3
  //   if ( node.value > value) {
  //     // read this.right and if null then
  //     if (node.left === null) {
  //       node.left = BinarySearchTree(value);
  //     } else {
  //               // 2
  //       helper(node.left)  // node.left = { value: 2, left: null, right: null }
  //     }
  //     // if not null then recursive call
  //   } else {
  //     if (node.right === null) {
  //       node.right = BinarySearchTree(value);
  //     } else {
  //       helper(node.right)
  //     }
  //   }
  // }
  // //       5
  // helper(this);
};

/**
 * Accepts a value and returns a boolean reflecting whether or not the value is
 * contained in the tree.
**/
//9
BinarySearchTree.prototype.contains = function(value, node = this) {
  // base case
  if (node.value === value) {
    return true;
  }

  // recursive calls
  if (node.value > value && node.left !== null) {
    return node.contains(value, node.left);
  } else if (node.value < value && node.right !== null) {
    return node.contains(value, node.right);
  }
  return false;
};

/**
 *  Accepts a callback and executes it on every value contained in the tree.
 *  left | right
 *    0  |   0
 *    0  |   1
 *    1  |   0
 *    0  |   0
 */
BinarySearchTree.prototype.depthFirstLog = function(cb) {
  // Justification: execute cb() on every node in the BST
  //
  // Specification:
  //  I: call back function
  //  O: none
  //  C: visiting a node's `.left` or `.right` property of value `null`
  //  E: none
  //
  // How are we going to visit every node?

  // Push Root into array
  // Check if root.right and left is a value. Ignore null.
  //Recursion root.right as new root. Same for left
  // cb(this.value);
  // for (let key in this) {
  //   if (key === "value") {
  //     cb(this.value);
  //   }
  //   this.key (left)
  //   this.key (right)
  // }
  var helper = function(node) {
    cb(node.value);

    // left | right
    //   0  |   0
    //   0  |   1
    //   1  |   0
    //   1  |   1

    // leaf node
    // left | right
    //   0  |   0
    if (node.left === null && node.right === null) {
      return;
    }

    // left | right
    //   0  |   1
    if (node.left === null && node.right !== null) {
      return helper(node.right);
    }

    // left | right
    //   0  |   1
    if (node.left !== null && node.right === null) {
      return helper(node.left);
    }

    // left | right
    //   1  |   1
    if (node.left !== null && node.right !== null) {
      return helper(node.left) + helper(node.right);
    }


  };

  helper(this);
  // cb(this.left.value)
  // cb(this.left.right.value);
  // cb(this.right.value);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// callback function for .depthFirstLog()
// var array = [];
// var func = function(value) { array.push(value); };

// BST instantiation and operations
// var bst = BinarySearchTree(8);
// bst.insert(3);
// bst.insert(10);
// bst.insert(1);
// bst.insert(14);
// bst.insert(6);
// bst.insert(4);
// bst.insert(13);
// bst.insert(7);
// bst.depthFirstLog(func);

// // output
// console.log(array);
// console.log(bst);
