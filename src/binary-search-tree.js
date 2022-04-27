const { NotImplementedError } = require('../extensions/index.js');
const {Node} = require('../extensions/list-tree.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {
  constructor(){
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    this._root = addIn(this._root, data);

    function addIn(node, v){
      if(!node) return new Node(+v);
      if(node.data == v) return;

      if(v < node.data) 
        node.left = addIn(node.left, v);
      else
        node.right = addIn(node.right, v);

      return node;
    }
  }

  has(data) {
    return !!this.find(data)
  //   function hasIn(node, v){
  //     if(!node) return false;
  //     if(node.data == v) return true;

  //     return v < node.data ? hasIn(node.left, v) : hasIn(node.right, v);
  //   }
  //   return hasIn(this._root, data);
  }

  find(data) {
    // if (this._root.data == data) return this._root;
    let current = this._root;
    while (current){
      if (current.data === data) return current;
    if (data > current.data) {
      current = current.right
    } else if (data < current.data) {
      current = current.left
    }
  }
  return null



    // function findIn(node, v){
    //   if(!node) return null;
    //   if(node.data == v) return node;
    //   return v < node.data ? findIn(node.left, v) : findIn(node.right, v);
    // }
    // return findIn(this._root, data);
  }

  remove(data) {
    function deleteIn(node, v){
      if(!node) return null;
      if(v < node.data){
        node.left = deleteIn(node.left, v);
        return node;
      } else if(v > node.data){
        node.right = deleteIn(node.right, v);
        return node;
      } else {
        if(!node.left && !node.right){
          return null;
        }
        if(!node.left){
          node = node.right;
          return node;
        }
        if(!node.right){
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;
        node.left = deleteIn(node.left, maxFromLeft.data);

        
        // let maxFromLeft = this.max(node.left);
        // node.data = this.max(node.left);
        // node.left = deleteIn(node.left, node.data);

        return node;
      }
    }
    this._root = deleteIn(this._root, data);
  }

  min(tree = this._root) {
    if (!tree) return null;
    else {
      let current = tree;
      while (current.left){
        current = current.left;
      }
      return current.data;
    }
  }

  max(tree = this._root) {
    if (!tree) return null;
    else {
      let current = tree;
      while (current.right){
        current = current.right;
      }
      return current.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};