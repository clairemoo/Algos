function firstRemoveDuplicatesFromLinkedList(linkedList) {
    let current = linkedList;
      
      while (current) {
          if (current.next) {
              if (current.value === current.next.value) {
                  current.next = current.next.next;
                  continue;
              }
          }
          current = current.next
      }
      
      return linkedList;
  }

  function secondRemoveDuplicatesFromLinkedList(linkedList) {
    let current = linkedList;
   while (current) {
       let nextNode = current.next;
       while (nextNode && nextNode.value === current.value) {
           nextNode = nextNode.next;
       }
       
       current.next = nextNode;
       current = nextNode;
   }
   
   return linkedList;
}