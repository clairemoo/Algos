var deleteDuplicates = function(head) {
    let memo = {};
    let queue = [];
    let final = new ListNode();
    let current = final;
    
    while (head) {
        if (memo[head.val]) {
            memo[head.val] = memo[head.val] + 1;
        } else {
            memo[head.val] = 1;
        }
        queue.push(head.val);
        head = head.next;
    }
    
    for (let i = 0; i < queue.length; i++) {
        if (memo[queue[i]] === 1) {
            current.next = new ListNode(queue[i]);
            current = current.next;
        }
    }
    
    return final.next;
};