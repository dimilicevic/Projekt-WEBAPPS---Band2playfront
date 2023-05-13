const posts = [
    {
      username: "JohnDoe",
      content: "Hello, everyone! How's your day going?"
    },
    {
      username: "JaneSmith",
      content: "Just had an amazing dinner with friends. 🍕🎉"
    },
    {
      username: "MikeJohnson",
      content: "Excited to announce the launch of my new website! Check it out: www.example.com"
    }
    ,
    {
      username: "MikeJohnson",
      content: "Excited to announce the launch of my new website! Check it out: www.example.com"
    }
  ];

  const filter2="http://localhost:8080/searchbar/filter"
  
  const postList = document.getElementById('postList');
  function test(){

    fetch(filter2, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ searchTerm: "Istarska" })
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
                    usernameHeader.textContent = results[index].data.username;
                    contentParagraph.textContent = results[index].data.address;
                    let atr= document.createAttribute("class")
                    atr.value="postListLi";
                    listItem.setAttributeNode(atr)

                    div1.addEventListener('click',()=>{
                        console.log("test");
                        const valuesArray = Object.values(results[index].data);
                    let index2=0
                        for (let index = 0; index < 10; index++) {
                        if(index==2){
                            index2++;
                        }
                        valuesOfProfile[index].textContent =valuesArray[index2] 
                        index2++;
                        }
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

test();