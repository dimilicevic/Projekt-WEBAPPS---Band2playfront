let username=document.getElementById("username");
let password=document.getElementById("password");
let repassword=document.getElementById("Re-password");
let submit=document.getElementById("submit");
const uri="https://band2playback.onrender.com/register/post"
async function register(e){
    e.preventDefault() 
    if (username.value.trim().length < 3 || password.value.trim().length < 3 || repassword.value.trim().length < 3) {
        alert('Username and password must be at least 3 characters long.');
        return;
      }
      if(password.value!=repassword.value){
        alert("Lozinke se ne podudaraju")
        return
      }
        const response=fetch(uri,{
            method:"POST",
            headers:{
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({
                email: username.value,
                password: password.value,
                repassword: repassword.value
            })
        })
        console.log(response)
        if((await response).ok){
            console.log("nice")
            window.location.href = "/index.html";
    
        }else if((await response).status==403){
            console.log("korisnik vec postoji u bazi")
        }else{
            console.log("server.error")
        }
    }
    

submit.addEventListener('click',register)
