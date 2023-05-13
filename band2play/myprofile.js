let inputs = Array.from(document.getElementsByClassName('form-control'));
const uri2 = "http://localhost:8080/editprofile/get";
const uri3 = "http://localhost:8080/editprofile/post";
let profilebutton = document.getElementsByClassName('profile-button')[0];
function getInfo(){
    let i= 0;
      fetch(uri2, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: "dabar" })
      })
      .then(response => response.json())
      .then(results => {
        inputs.forEach(element => {
            element.value=results[i]
            i++;
        });
  
        
      })
      .catch(error => {
        console.error('Error:', error);
      });
  
  }
  getInfo();

  async function update(e){
    e.preventDefault() 
    let arr=[];
    let i = 0;
    inputs.forEach(element => {
       arr.push(element.value)
        
    })
        const response=fetch(uri3,{
            method:"POST",
            credentials:"include",
            headers:{
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({
                email: "dabar",
                name: arr[i++],
                surname: arr[i++],
                address: arr[i++],
                county: arr[i++],
                age: arr[i++],
                instrument: arr[i++],
                genre: arr[i++],
                singerb: arr[i++],
                other: arr[i++],
                country: arr[i++],
                city: arr[i++]
            })
        })
        if((await response)){
            console.log("nice")
            window.location.href = "http://localhost:5500/myprofile.html";
    
        }else if((await response).status==403){
            console.log("korisnik vec postoji u bazi")
        }else{
            console.log("server.error")
        }
    }
    

    profilebutton.addEventListener('click',update)