class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  //Algo asked for solution below
    depthFirstSearch(array) {
          array.push(this.name)
          this.children.forEach(child => {
              this.depthFirstSearch.call(child, array)
          })
      return array;
    }
  }