const uri="http://localhost:8080/searchbar/search"
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
const uriLike = "http://localhost:8080/users/like";
let brojLikeova = document.getElementById("brojLikeova");
let likebutton = document.getElementsByClassName("likebutton")[0];
let likebutton2 = document.getElementById("likebtnImg")

let valuesOfProfile = Array.from(document.getElementsByClassName('valuesOfProfile'));

likebutton.addEventListener('click', (e) => {
  if (likebutton2.style.backgroundImage.includes('like2.png')) {
    brojLikeova.textContent= brojLikeova.textContent *1-1;
    likebutton2.style.backgroundImage = "url('http://localhost:5500/assets/images/like.png')";

  } else {
    likebutton2.style.backgroundImage = "url('http://localhost:5500/assets/images/like2.png')";
    brojLikeova.textContent= brojLikeova.textContent *1+1;
  }
  e.preventDefault();
  fetch(uriLike, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: 'dabar', username: 'dabar2' })
  })
    .then(response => response.json())
    .then(results => {
      
    });
});

searchbtn1.addEventListener('click',(e)=> {
  e.preventDefault();
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
        console.log(result.data);
        
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
        h6.textContent=result.data.name +" " + result.data.surname;
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
            
          if(valuesArray[13].includes('dabar2')){
            likebutton2.style.backgroundImage  ="url('	http://localhost:5500/assets/images/like2.png')"
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
        console.log(results.email)
        var resultsList = document.getElementById("results");
        resultsList.innerHTML = "";
        testBtn.style.display="none";
      results.forEach(function(result) {
        const hiddenspan = document.createElement("span")
        hiddenspan.style.display = "none";
        hiddenspan.textContent= result.data.username;
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
        h6.textContent=result.data.name +" "+result.data.surname;
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
          console.log(valuesArray[13]);
          if(valuesArray[13].includes('dabar2')){
            likebutton2.style.backgroundImage  ="url('	http://localhost:5500/assets/images/like2.png')"
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



const displays1=document.getElementsByClassName("main_info")[0];
  function createUsers(){
	for (let index = 0; index < 6; index++) {
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
		span.textContent="test6"
		h6.textContent="test";
		h4.textContent="test";
		newDiv.addEventListener('click',()=>{
			panel.style.display = 'block';
			overlay2.style.display = 'block';
			//fetch
			/* h4.textContent= json; */
		})

		p.appendChild(span);
		div2.appendChild(img);
		newDiv.appendChild(h6);
		newDiv.appendChild(div2);
		newDiv.appendChild(h4);
		newDiv.appendChild(p);
		
		displays1.appendChild(newDiv);
		
	}
	
  }
  fetch(latest, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
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

          usernameHeader.textContent = signup.email;
          timestampSpan.textContent = formatTimestamp(signup.timestamp);

          listItem.appendChild(usernameHeader);
          listItem.appendChild(timestampSpan);

          signupList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // Function to format the timestamp
    function formatTimestamp(timestamp) {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
      return new Date(timestamp).toLocaleDateString('en-US', options);
    }
      
