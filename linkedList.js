

class Node{
   
   constructor(data){
     this.data=data;
     this.next=null
   }
}



class LinkedList{
  
    
      constructor(){
        this.head =null
      }
      
      insertNodeAtStart(data){
        let newNode = new Node(data)
        if(this.head===null){
          this.head=newNode
        }else{
          newNode.next = this.head
          this.head=newNode
        }
      }
      
      insertNode(data){
           let newNode = new Node(data)
        if(this.head===null){
           this.head = newNode
        }
        else{
          let current = this.head
          while(current.next!==null){
            current=current.next
          }
          current.next=newNode
        }
      }
      
      deleteNode(incomingData){
             let current = this.head
             let previousNode =this.head
                   if(this.head.data===incomingData){
                     this.head=current.next
                   }
            while(current!==null){
                   
                if(current.data ===incomingData){
                  previousNode.next=current.next
                }
                previousNode=current
                current=current.next
                
                
            }
      }
      
      traverseNodes(){
        console.log("head dekh",this.head)
        if(this.head===null){
          console.log("no nodes present")
          return
        }
         else{
          let current = this.head
          while(current!==null){
            console.log(current.data)
            current=current.next
          }
        }
      }
   
}

let linkedList = new LinkedList()
linkedList.insertNode(5)
linkedList.insertNode(6)
linkedList.insertNode(7)
linkedList.insertNodeAtStart(11)
linkedList.deleteNode(7)
linkedList.traverseNodes()
// console.log(linkedList)