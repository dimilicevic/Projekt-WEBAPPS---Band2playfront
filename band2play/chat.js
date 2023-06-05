let messages = Array.from(document.getElementsByClassName('messageContent'));
let chatDiv = document.getElementById("chat");
const uriMsgs= "http://localhost:8080/messages/view";
const uriPostMsgs= "http://localhost:8080/messages/post";
let sendThisMsg = document.getElementById("sendThisMsg");
let sendBtnMsg = document.getElementById("sendBtnMsg");
let skim = document.getElementById("skim");
let kolikoPoruka = document.getElementById("kolikoPoruka");


function checkToken(){
  const token = localStorage.getItem('token');
  if(token){
    console.log("noice");
  }else{
    window.location.href = "http://127.0.0.1:5500/login.html";
  }
}
checkToken()



sendBtnMsg.addEventListener('click',()=>{
  const token = localStorage.getItem('token');
    fetch(uriPostMsgs, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ msgId: "647e2505fab64c2c068e5cfc" ,content: sendThisMsg.value})
      })
      .then(response => response.json())
      .then(results => {
        window.location.href = "http://127.0.0.1:5500/chatbox.html";
      })
})


async function createAndAppendChatMessage() {
  const token = localStorage.getItem('token');
    const response= await fetch(uriMsgs, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({  msgId: "647e2505fab64c2c068e5cfc" })
      });
      const results = await response.json();
      kolikoPoruka.textContent= results.msg.length;
            for (let index = 0; index <results.msg.length; index++) { 
                // Create the elements
                const li = document.createElement('li');
                if(results.msg[index].author == results.email)
                    li.className = 'me';
                else{
                    skim.textContent = results.msg[index].author;
                    li.className = 'you';
                }
                    

                
                const enteteDiv = document.createElement('div');
                enteteDiv.className = 'entete';
            
                const authorH2 = document.createElement('h2');
                authorH2.textContent = results.msg[index].author;
            
                const timeH3 = document.createElement('h3');
                timeH3.textContent = results.msg[index].timestamp;
            
                const messageDiv = document.createElement('div');
                messageDiv.className = 'message';
            
                const contentSpan = document.createElement('span');
                contentSpan.className = 'messageContent';
                contentSpan.textContent = results.msg[index].content;
            
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
