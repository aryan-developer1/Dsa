class Node{
    constructor(data){
        this.prev=null
        this.data=data
        this.next=null
    } 
}

class DoublyLinkedList{

    constructor(){
        this.head=null;
        this.tail=null
    }

    appendNode(data){
        const newNode = new Node(data)
        if(this.head===null){
            this.head=newNode
            this.tail=newNode
        }else{
            let currentLastNode = this.tail
            currentLastNode.next=newNode
            newNode.prev=currentLastNode
            this.tail=newNode
        }
    }
    
    traverse(){
      let currentNode =this.head
      if(this.head===null){
        console.log("no nodes present")
        return
      }
      else{
         while(currentNode!==null){
           console.log(currentNode.data)
           currentNode=currentNode.next
         }
      }
    }

}

let linkedList = new DoublyLinkedList()
linkedList.appendNode(1)
linkedList.appendNode(2)
linkedList.traverse()
// console.log(linkedList)