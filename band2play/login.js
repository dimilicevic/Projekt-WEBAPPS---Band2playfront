let username=document.getElementById("username");
let password=document.getElementById("password");
let submit=document.getElementById("submit2");
const form = document.querySelector('form');
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');
const uri="http://localhost:8080/register/login"
form.addEventListener('submit', function(e) {
	e.preventDefault();

	const usernameValue = usernameInput.value.trim();
	const passwordValue = passwordInput.value.trim();

	if (usernameValue === '') {
		alert('Please enter your username');
		return;
	}

	if (passwordValue === '') {
		alert('Please enter your password');
		return;
	}

	// Here, you can add your authentication logic to check the entered username and password against your backend database or API.

	alert(`Welcome, ${usernameValue}!`);
	function loadAvatar(event) {
		var avatarPreview = document.getElementById("avatar-preview");
		avatarPreview.style.display = "block";
		avatarPreview.src = URL.createObjectURL(event.target.files[0]);
	  }
	  
	  function submitForm() {
		// ...
	  }
});
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
