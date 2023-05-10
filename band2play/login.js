let username=document.getElementById("username");
let password=document.getElementById("password");
let submit=document.getElementById("submit2");
const uri="http://localhost:8080/register/login"
async function register(e){
    e.preventDefault() 
    if (username.value.trim().length < 3 || password.value.trim().length < 3) {
        alert('Username and password must be at least 3 characters long.');
        return;
    }
    const response=fetch(uri,{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type": 'application/json'
        },
        body:JSON.stringify({
            email: username.value,
            password: password.value
        })
    })
    console.log(response)
    if((await response).redirected){
        console.log("uso sam u account")
        window.location.href = (await response).url;
    }else if((await response).status==403){
        console.log("kriva lozinka")
    }else{
        console.log("server.error")
    }

}

submit.addEventListener('click',register)
