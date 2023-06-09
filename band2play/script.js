const hiddenPanel = document.getElementsByClassName('panel')[0];
const buttonexit = document.getElementById("panel-no");
const SendMsgPopup =document.getElementById("SendMsgPopup");
const buttonexit2 = document.getElementById("panel-no2");
const textareaMsg = document.getElementsByClassName('textareaMsg')[0];
const messageUs = document.getElementsByClassName('messageUs')[0];
const uriPostMsgsFirst= "http://localhost:8080/messages/postFirst";
const msgPopUP = document.getElementsByClassName('msgPopUP')[0];
const users = "http://localhost:8080/users";
let counter = document.getElementById("counter");
const latest2="http://localhost:8080/searchbar/latest"
let logoutBtn = document.getElementById("logout");
let counterOfUsers = 0;
let counter2 = document.getElementById("numberOfMembers");

let valuesOfProfile1 = Array.from(document.getElementsByClassName('valuesOfProfile'));


let brojLikeova2 = document.getElementById("brojLikeova");

function checkToken(){
	const token = localStorage.getItem('token');
	if(token){
	  logoutBtn.style.display ="block"

	}else{
		logoutBtn.style.display ="none"
	}
  }
  checkToken()


  logoutBtn.addEventListener('click',()=>{
	localStorage.removeItem('token');
    console.log("Token removed from localStorage");
	window.location.href = "http://127.0.0.1:5500/";
  })

buttonexit.addEventListener('click', () => {
	// Handle "No" button click
	panel.style.display = 'none';
	overlay2.style.display = 'none';
  });

buttonexit2.addEventListener('click', () => {
	// Handle "No" button click
	msgPopUP.style.display = 'none';
  });


SendMsgPopup.addEventListener('click',async()=>{
	try {
		const token = localStorage.getItem('token');
		console.log(textareaMsg.value);
		if(textareaMsg.value!=""){
			const response = await fetch(uriPostMsgsFirst, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer ' + token
				},
				body: JSON.stringify({target:target,content: textareaMsg.value})
				});
				if (response.ok) {
					textareaMsg.value="";
				window.location.href = "http://127.0.0.1:5500/chatbox.html";
				} else {
				alert("Ne mozes sebi slat poruku")
				}
		
		}else{
			alert("nemozes poslat praznu poruku!")
		}
		
	} catch (error) {
		console.log(error);
		alert("Niste prijaviti")
	}
	

		
  })
  

  messageUs.addEventListener('click',()=>{
	msgPopUP.style.display= 'block';
	textareaMsg.value="";
  })


let arrayOfImgs=["user6.jpg","user1.jpg","user2.jpg","user3.jpg","user4.jpg","user5.jpg"]

const displays=document.getElementsByClassName("main_info")[0];
async function createUsers() {
	const displays = document.getElementsByClassName("main_info")[0];
	try {
		const response = await fetch(latest2, {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json'
		  },
		  body:JSON.stringify({
			number : counterOfUsers
		  })
		});
	
		if (response.ok) {
		  const data = await response.json();
		  for (let index = 0; index < 3; index++) {
			const newDiv = document.createElement("a");
			newDiv.classList.add("main_info-item", "button2");
		
			const h6 = document.createElement("h6");
			h6.classList.add("main_info-item-title");
		
			const div2 = document.createElement("div");
			div2.classList.add("main_info-item-photo");
		
			const img = document.createElement("img");
			img.src = "assets/images/"+arrayOfImgs[counterOfUsers++] ;
		
			const h4 = document.createElement("h4");
			h4.classList.add("main_info-item-txt");
		
			const p = document.createElement("p");
			p.classList.add("main_info-item-cnt");
			
			const span = document.createElement("span");
		
			span.textContent = data[index].data.genre;
			h6.textContent=data[index].data.username;
			h4.textContent=data[index].data.instrument;
			
		
			const handleClick = () => {
				const valuesArray = Object.values(data);
				valuesOfProfile1[0].textContent =data[index].data.name;
				valuesOfProfile1[1].textContent =data[index].data.surname;
				valuesOfProfile1[2].textContent =data[index].data.county;
				valuesOfProfile1[3].textContent =data[index].data.age;
				valuesOfProfile1[4].textContent =data[index].data.instrument;
				valuesOfProfile1[5].textContent =data[index].data.genre;
				valuesOfProfile1[6].textContent =data[index].data.singerb;
				valuesOfProfile1[7].textContent =data[index].data.other;
				valuesOfProfile1[8].textContent =data[index].data.country;
				valuesOfProfile1[9].textContent =data[index].data.city;
				brojLikeova2.textContent = data[index].data.like;
               const token = localStorage.getItem('token');
              if(token){
                target = data[index].data.username;
                 try {
                  if(data[index].data.wholiked.includes(tokenUsername)){
                    likebutton2.style.backgroundImage  ="url('	http://localhost:5500/assets/images/like2.png')"
                  }else{
                    likebutton2.style.backgroundImage  ="url('	http://localhost:5500/assets/images/like.png')"
                  }
                } catch (error) {
                  console.log(error);
                } 
              }else{
                likebutton2.style.backgroundImage  ="url('	http://localhost:5500/assets/images/like.png')"
              }

			  panel.style.display = 'block';
			  overlay2.style.display = 'block';
			};
		
			newDiv.addEventListener('click', handleClick);
		
			p.appendChild(span);
			div2.appendChild(img);
			newDiv.appendChild(h6);
			newDiv.appendChild(div2);
			newDiv.appendChild(h4);
			newDiv.appendChild(p);
		
			displays.appendChild(newDiv);
		  }
		  
			/* counterOfUsers +=3; */
		  
		} else {
		  console.log("Server error");
		}
	  } catch (error) {
		console.error('Error:', error);
	  }
  }
  
  let btn11 = document.getElementById('testBtn');
  btn11.addEventListener('click',createUsers)
  createUsers();

function showUserNumber() {
	fetch(users, {
	  method: "GET",
	  credentials: "include",
	  headers: {
		"Content-Type": "application/json"
	  }
	})
	  .then(response => response.json())
	  .then(results => {
	
		counter.textContent = results;
		counter2.textContent = counter.textContent;
	  })
	  .catch(error => {
		console.error("Error retrieving user number:", error);
		counter.textContent = "Error retrieving user number";
	  });
}
  
  showUserNumber();
  