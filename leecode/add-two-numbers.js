function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    var activeNext = false
    var curr1 = l1
    var curr2 = l2
    var resultList = new ListNode(0)
    var currResultList = resultList
    while(curr1 || curr2){
        var p = curr1 ? curr1.val : 0
        var q = curr2 ? curr2.val : 0
        var m_sum = p + q + (activeNext ? 1 : 0)
        activeNext = !!Math.floor(m_sum / 10)
        currResultList.next = new ListNode(m_sum % 10)
        currResultList = currResultList.next
        curr1 = curr1 ? curr1.next : null
        curr2 = curr2 ? curr2.next : null
    }
    if (activeNext) {
        currResultList.next = new ListNode(1)
    }
    return resultList.next
};