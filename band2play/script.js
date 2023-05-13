const hiddenPanel = document.getElementsByClassName('panel')[0];
const buttonexit = document.getElementById("panel-no");




/* button2.addEventListener('click', () => {
	panel.style.display = 'block';
	overlay2.style.display = 'block';
  }); */
  buttonexit.addEventListener('click', () => {
	// Handle "No" button click
	panel.style.display = 'none';
	overlay2.style.display = 'none';
  });

const displays=document.getElementsByClassName("main_info")[0];
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
		
		displays.appendChild(newDiv);
		
	}
	
  }

  let btn11 = document.getElementById('testBtn');
  btn11.addEventListener('click',createUsers)
  createUsers();
