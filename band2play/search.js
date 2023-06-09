const uri="http://localhost:8080/searchbar/search"
const getUsername="http://localhost:8080/getUsername"
const filter="http://localhost:8080/searchbar/filter"
const latest="http://localhost:8080/searchbar/latest"
let zupanija = document.getElementById('county');
let searchbtn1 = document.getElementsByClassName('search-button')[0];
let searchbtn2 = document.getElementsByClassName('search-button')[1];
let elem =document.getElementsByClassName('elem')[0];
const holders = document.querySelectorAll('.main_info-item button2');
let testBtn = document.getElementById('testBtn');
let boxtitle = document.getElementsByClassName('main_info-header-title')[0];
const uriUser= "http://localhost:8080/searchbar/search";
const uriLike = "http://localhost:8080/like";
let brojLikeova = document.getElementById("brojLikeova");
let likebutton = document.getElementsByClassName("likebutton")[0];
let likebutton2 = document.getElementById("likebtnImg")
let target = "";
let tokenUsername = "";
let valuesOfProfile = Array.from(document.getElementsByClassName('valuesOfProfile'));
const displays1=document.getElementsByClassName("main_info")[0];
let userName = document.getElementById("userName");

likebutton.addEventListener('click', (e) => {
  e.preventDefault();
  like()
})

async function getUsername1() {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(getUsername, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    });
    if (response.ok) {
      const data = await response.json();
      tokenUsername = data.username;
      userName.textContent = tokenUsername;
    } else {

      console.log('Nema token');
    }
  } catch (error) {
    console.error(error);
  }
}
getUsername1();

async function like(){
  try {
    if(target!="" || target2!=""){
      
      const token = localStorage.getItem('token');
      const response = await fetch(uriLike, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({ email: target})
      })
      if (response.ok) {
        const data = await response.json();
        if (data.liked) {
          brojLikeova.textContent= brojLikeova.textContent *1-1;
          likebutton2.style.backgroundImage = "url('http://localhost:5500/assets/images/like.png')";
        } else{
          likebutton2.style.backgroundImage = "url('http://localhost:5500/assets/images/like2.png')";
          brojLikeova.textContent= brojLikeova.textContent *1+1;
        }
      } else {
        
        console.log(response);
      }
    }
 
  
  } catch (error) {
    console.log(error);
  }
}

    // Function to format the timestamp
    function formatTimestamp(timestamp) {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
      return new Date(timestamp).toLocaleDateString('en-US', options);
    }
      


/* PRVI PO USERNAME U */
searchbtn1.addEventListener('click',(e)=> {
  e.preventDefault();
  const token = localStorage.getItem('token');
  testBtn.style.display="inline-block";
  let boxes = Array.from(document.getElementsByClassName('main_info-item button2'))
  boxes.forEach(box => {
    box.remove();
  });
  var searchTerm = document.getElementById("searchInput").value;
  boxtitle.textContent="Musician by name: " + searchTerm;
  
    fetch(uri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ searchTerm: searchTerm })
    })
    .then(response => response.json())
    .then(results => {
      var resultsList = document.getElementById("results");
      resultsList.innerHTML = "";
      testBtn.style.display="none";
      results.forEach(function(result) {   
        const newDiv = document.createElement("a")
        const h6 = document.createElement("h6")
        const div2 = document.createElement("div")
        const h4 = document.createElement("h4")
        const p = document.createElement("p")
        const img = document.createElement("img")
        const span = document.createElement("span")
        const attr = document.createAttribute("class")
        attr.value = "main_info-item button2"
        newDiv.setAttributeNode(attr)
        const attr1 = document.createAttribute("class")
        attr1.value = "main_info-item-title"
        h6.setAttributeNode(attr1)
        const attr2 = document.createAttribute("class")
        attr2.value="main_info-item-photo"
        div2.setAttributeNode(attr2)
        const attr3 = document.createAttribute("src")
        attr3.value="assets/images/user.jpg"
        img.setAttributeNode(attr3)
        const attr4 = document.createAttribute("class")
        attr4.value="main_info-item-txt"
        h4.setAttributeNode(attr4)
        const attr5 = document.createAttribute("class")
        attr5.value="main_info-item-cnt"
        p.setAttributeNode(attr5)
        
        span.textContent=result.data.genre;
        h6.textContent=result.data.username;
        h4.textContent=result.data.instrument;
        newDiv.addEventListener('click',()=>{
              const valuesArray = Object.values(result.data);
              let index2=0
                for (let index = 0; index < 10; index++) {
                  if(index==2){
                    index2++;
                  }
                  valuesOfProfile[index].textContent =valuesArray[index2] 
                  index2++;
                }
              brojLikeova.textContent=valuesArray[12];
                //stavit username od tokena u includes 
               const token = localStorage.getItem('token');
              if(token){
                target = result.data.username;
                try {
                  console.log(valuesArray[13]);
                  if(valuesArray[13].includes(tokenUsername)){
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
              })
      
          p.appendChild(span);
          div2.appendChild(img);
          newDiv.appendChild(h6);
          newDiv.appendChild(div2);
          newDiv.appendChild(h4);
          newDiv.appendChild(p);
          
          displays1.appendChild(newDiv);
        

        
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });

})



/* DRUGI PO ZUPANIJI  */

searchbtn2.addEventListener('click',(e)=> {
  e.preventDefault();
  testBtn.style.display="inline-block";
  let boxes = Array.from(document.getElementsByClassName('main_info-item button2'))
  boxes.forEach(box => {
    box.remove();
  });
  var searchTerm = document.getElementById("searchInput").value;
  boxtitle.textContent="Musicians by county: " + zupanija.value;
      fetch(filter, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ searchTerm: zupanija.value })
      })
      .then(response => response.json())
      .then(results => {
        
        var resultsList = document.getElementById("results");
        resultsList.innerHTML = "";
        testBtn.style.display="none";
      results.forEach(function(result) {
      
        const hiddenspan = document.createElement("span")
        hiddenspan.style.display = "none";
        
        hiddenspan.textContent=result.data.username;
        const newDiv = document.createElement("a")
        const h6 = document.createElement("h6")
        const div2 = document.createElement("div")
        const h4 = document.createElement("h4")
        const p = document.createElement("p")
        const img = document.createElement("img")
        const span = document.createElement("span")
        const attr = document.createAttribute("class")
        attr.value = "main_info-item button2"
        newDiv.setAttributeNode(attr)
        const attr1 = document.createAttribute("class")
        attr1.value = "main_info-item-title"
        h6.setAttributeNode(attr1)
        const attr2 = document.createAttribute("class")
        attr2.value="main_info-item-photo"
        div2.setAttributeNode(attr2)
        const attr3 = document.createAttribute("src")
        attr3.value="assets/images/user.jpg"
        img.setAttributeNode(attr3)
        const attr4 = document.createAttribute("class")
        attr4.value="main_info-item-txt"
        h4.setAttributeNode(attr4)
        const attr5 = document.createAttribute("class")
        attr5.value="main_info-item-cnt"
        p.setAttributeNode(attr5)
        span.textContent=result.data.genre;
        h6.textContent=result.data.username;
        h4.textContent=result.data.instrument;
        newDiv.addEventListener('click',()=>{
          const valuesArray = Object.values(result.data);
          let index2=0
            for (let index = 0; index < 10; index++) {
              if(index==2){
                index2++;
              }
              valuesOfProfile[index].textContent =valuesArray[index2] 
              index2++;
            }
          brojLikeova.textContent=valuesArray[12];
            //stavit username od tokena u includes 
           const token = localStorage.getItem('token');
          if(token){
            target = result.data.username;
            try {
              if(valuesArray[13].includes(tokenUsername)){
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
          })
      
          p.appendChild(span);
          div2.appendChild(img);
          newDiv.appendChild(h6);
          newDiv.appendChild(div2);
          newDiv.appendChild(h4);
          newDiv.appendChild(p);
          newDiv.appendChild(hiddenspan);
          
          displays1.appendChild(newDiv);
        

        
      });
      })
      .catch(error => {
        console.error('Error:', error);
      });
})




  fetch(latest, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        number : counterOfUsers
      })
    })
      .then(response => response.json())
      .then(data => {
        const signupList = document.getElementById('signupList');

        // Iterate over signup data and create list items
        data.forEach(signup => {
          const listItem = document.createElement('li');
          const usernameHeader = document.createElement('h4');
          const timestampSpan = document.createElement('span');

          usernameHeader.className = 'elem';
          timestampSpan.className = 'elem';

          usernameHeader.textContent = signup.data.username;
          timestampSpan.textContent = formatTimestamp(signup.timestamp);

          listItem.appendChild(usernameHeader);
          listItem.appendChild(timestampSpan);

          signupList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });


