let eventpostbtn = document.getElementsByClassName('btn-primary')[0];
const eventpost = "http://localhost:8080/events/post"
const postsUri="http://localhost:8080/events/"
const getUserData="http://localhost:8080/searchbar/search"
let textarea = document.getElementsByClassName('status-box')[0];
let valuesOfProfile2 = Array.from(document.getElementsByClassName('valuesOfProfile'));
  const filter2="http://localhost:8080/searchbar/filter"
  
  const postList = document.getElementById('postList');

  function ShowLatest5(){

    fetch(postsUri, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(results => {
            
            for (let index = 0; index < results.length; index++) {
                    const listItem = document.createElement('li');
                    const div1= document.createElement('div');
                    const div2= document.createElement('div');
                    const usernameHeader = document.createElement('h4');
                    const contentParagraph = document.createElement('p');
                    const img = document.createElement("img")

                    const attr2 = document.createAttribute("class")
                    attr2.value="leftSidePost";
                    div1.setAttributeNode(attr2);

                    const attr4 = document.createAttribute("class")
                    attr4.value="rightSidePost";
                    div2.setAttributeNode(attr4);

                    const attr3 = document.createAttribute("src")
                    attr3.value="assets/images/user.jpg"
                    img.setAttributeNode(attr3)
                    usernameHeader.textContent = results[index].email;
                    contentParagraph.textContent = results[index].content;
                    let atr= document.createAttribute("class")
                    atr.value="postListLi";
                    listItem.setAttributeNode(atr)

                    div1.addEventListener('click',()=>{
                        console.log("test");
                        fetch(getUserData, {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json'
                          },
                          body: JSON.stringify({ searchTerm: results[index].email })
                        })
                        .then(response => response.json())
                        .then(results2 => {
              
                          let temp = results2;
                          console.log();
                          valuesOfProfile2[0].textContent =temp[0].data.name;
                          valuesOfProfile2[1].textContent =temp[0].data.surname;
                          valuesOfProfile2[2].textContent =temp[0].data.county;
                          valuesOfProfile2[3].textContent =temp[0].data.age;
                          valuesOfProfile2[4].textContent =temp[0].data.instrument;
                          valuesOfProfile2[5].textContent =temp[0].data.genre;
                          valuesOfProfile2[6].textContent =temp[0].data.singerb;
                          valuesOfProfile2[7].textContent =temp[0].data.other;
                          valuesOfProfile2[8].textContent =temp[0].data.country;
                          valuesOfProfile2[9].textContent =temp[0].data.city;

                        }) 
                        
                        panel.style.display = 'block';
                        overlay2.style.display = 'block';
                        })

                        listItem.appendChild(div1);
                        listItem.appendChild(div2);
                        div1.appendChild(usernameHeader);
                        div1.appendChild(img);
                        div2.appendChild(contentParagraph);
                        postList.appendChild(listItem);
                    
                }
            })
    .catch(error => {
      console.error('Error:', error);
    });
      
  };


  ShowLatest5();

eventpostbtn.addEventListener('click',() => {
  console.log(textarea.value);
  fetch(eventpost, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: "dabar", content: textarea.value })
  })
  .then(response => response.json())
  .then(results => {
    window.location.href = "http://localhost:5500/events.html";

  }) 
})