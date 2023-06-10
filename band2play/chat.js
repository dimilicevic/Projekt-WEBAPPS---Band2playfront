let messages = Array.from(document.getElementsByClassName('messageContent'));
let chatDiv = document.getElementById("chat");
const uriMsgs= "https://band2playback.onrender.com/messages/getMsgs";
const uriPostMsgs= "https://band2playback.onrender.com/messages/post";
let sendThisMsg = document.getElementById("sendThisMsg");
let sendBtnMsg = document.getElementById("sendBtnMsg");
let skim = document.getElementById("skim");
let kolikoPoruka = document.getElementById("kolikoPoruka");
let appendHere = document.getElementsByClassName('appendHere')[0];
let user = "";
let currentChat="";
let targetsImg = document.getElementById('targetsImg');
function checkToken(){
  const token = localStorage.getItem('token');
  if(token){
    console.log("noice");
  }else{
    window.location.href = "https://band2playfront.onrender.com/login.html";
  }
}
checkToken()



sendBtnMsg.addEventListener('click',async()=>{
  const token = localStorage.getItem('token');
  const response = await fetch(uriPostMsgs, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ msgId:currentChat ,content: sendThisMsg.value})
      });
      if (response.ok) {
        window.location.href = "https://band2playfront.onrender.com/chatbox.html";
      } else {
        alert("neki error")
      }
     
})
let arrayOfImgs=["user6.jpg","user1.jpg","user2.jpg","user3.jpg","user4.jpg","user5.jpg"]

async function createAndAppendChatMessage() {
  let i=0;
  const token = localStorage.getItem('token');
    const response= await fetch(uriMsgs, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        /* body: JSON.stringify({  msgId: "647e2505fab64c2c068e5cfc" }) */
      });
      const results = await response.json();
      results.msg.forEach((element,index) => {

        // Create the <li> element
        const listItem = document.createElement('li');

        // Create the <img> element
        const img = document.createElement('img');
        img.src = "assets/images/"+arrayOfImgs[i++] ;
        img.alt = '';

        // Create the <div> element
        const div = document.createElement('div');

        // Create the <h2> element
        const h2 = document.createElement('h2');

        if(results.token!==element.user1){
          h2.textContent = element.user1;
          user = element.user2;
        }
          
        else if(results.token!==element.user2){
          user = element.user1;
          h2.textContent = element.user2;
        }
         
        else
          console.log("bug");
        
        

        // Create the <h3> element
        const h3 = document.createElement('h3');

        // Create the <span> element
        const span = document.createElement('span');
        span.className = 'status orange';

        // Create the "offline" text node
        const offlineText = document.createTextNode('offline');

        // Append elements to build the structure
        h3.appendChild(span);
        h3.appendChild(offlineText);
        div.appendChild(h2);
        div.appendChild(h3);
        listItem.appendChild(img);
        listItem.appendChild(div);
        appendHere.appendChild(listItem);

        listItem.addEventListener('click',()=>{
          while (chatDiv.firstChild) {
            chatDiv.removeChild(chatDiv.firstChild);
          }
          
      
          //load njegove poruke
          currentChat= element._id;
          for (let index2 = 0; index2 <results.msg[index].messages.length; index2++) { 
            // Create the elements
            
            const li = document.createElement('li');
            if(results.msg[index].messages[index2].author == user)
                li.className = 'me';
            else{
                li.className = 'you';
            }
                
            const enteteDiv = document.createElement('div');
            enteteDiv.className = 'entete';
        
            const authorH2 = document.createElement('h2');
            authorH2.textContent = results.msg[index].messages[index2].author;
        
            const timeH3 = document.createElement('h3');
            timeH3.textContent = results.msg[index].messages[index2].timestamp;
        
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message';
        
            const contentSpan = document.createElement('span');
            contentSpan.className = 'messageContent';
            contentSpan.textContent = results.msg[index].messages[index2].content;

            if(results.msg[index].user1 == user){
              skim.textContent = results.msg[index].user2;  
              targetsImg.src = img.src ;
            }
            else{
                skim.textContent = results.msg[index].user1;  
                targetsImg.src = img.src ;
                }
        
            // Build the structure
            enteteDiv.appendChild(authorH2);
            enteteDiv.appendChild(timeH3);
            messageDiv.appendChild(contentSpan);
            li.appendChild(enteteDiv);
            li.appendChild(messageDiv);
        
            // Append to the chat ul
            const chatUl = document.getElementById('chat');
            chatUl.appendChild(li);
            } 
     
          
        })
      });
      let timestamps=[];
      function findLatestTimestamp(results) {
        results.forEach((chat) => {
          timestamps.push(chat.messages[chat.messages.length-1].timestamp2)
        });
        timestamps.sort(function(a,b){return a-b})
       
      }
      
      const latestTimestamp = findLatestTimestamp(results.msg);
      console.log(timestamps);
      
      function findLatestTimestampId(results) {
        let messageIndex = null;
      
        results.forEach((chat, index) => {
         
          if (chat.messages[chat.messages.length-1].timestamp2 === timestamps[timestamps.length-1]) {
            messageIndex = index;
            return; // Found the matching message, exit the loop
          }
        });
      
        return messageIndex;
      }
      const messageIndex = findLatestTimestampId(results.msg);
     
      console.log(messageIndex); // Output: Index of the message with matching timestamp, or null if not found
      if(results.msg[messageIndex].user1 == user){
        skim.textContent = results.msg[messageIndex].user2; 
        targetsImg.src = "assets/images/"+arrayOfImgs[0]; 
      }
          
      else{
          skim.textContent = results.msg[messageIndex].user1;  
        targetsImg.src = "assets/images/"+arrayOfImgs[0]; 

          }
      

       currentChat = results.msg[messageIndex]._id 

        for (let index = 0; index <results.msg[messageIndex].messages.length; index++) { 
            // Create the elements
            
            const li = document.createElement('li');
            if(results.msg[messageIndex].messages[index].author == user)
                li.className = 'me';
            else{
                li.className = 'you';
            }
                
            const enteteDiv = document.createElement('div');
            enteteDiv.className = 'entete';
        
            const authorH2 = document.createElement('h2');
            authorH2.textContent = results.msg[messageIndex].messages[index].author;
        
            const timeH3 = document.createElement('h3');
            timeH3.textContent = results.msg[messageIndex].messages[index].timestamp;
        
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message';
        
            const contentSpan = document.createElement('span');
            contentSpan.className = 'messageContent';
            contentSpan.textContent = results.msg[messageIndex].messages[index].content;
        
            // Build the structure
            enteteDiv.appendChild(authorH2);
            enteteDiv.appendChild(timeH3);
            messageDiv.appendChild(contentSpan);
            li.appendChild(enteteDiv);
            li.appendChild(messageDiv);
        
            // Append to the chat ul
            const chatUl = document.getElementById('chat');
            chatUl.appendChild(li);
            } 
     
     
  }




window.addEventListener('load', async () => {
    await createAndAppendChatMessage();
    executeAfter100mil();
  });

  function executeAfter100mil() {
    setTimeout(() => {
        const chatDiv = document.getElementById("chat");
        chatDiv.scrollTop = chatDiv.scrollHeight - chatDiv.clientHeight;
    }, 100);
  }
