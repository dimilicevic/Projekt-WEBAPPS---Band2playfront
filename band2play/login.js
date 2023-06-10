let username=document.getElementById("username");
let password=document.getElementById("password");
let submit=document.getElementById("submit2");
const form = document.querySelector('form');
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');
const uri="https://band2playback.onrender.com/register/login"
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


async function login(event) {
    event.preventDefault();
  
    try {
      const response = await fetch('https://band2playback.onrender.com/register/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: username.value,
            password: password.value
        }),
        mode: 'cors',
      });
  
      if (response.ok) {
        const data = await response.json();
        const token = data.token; 
        localStorage.setItem('token', token);
        console.log("Token stored in localStorage:", token);
        window.location.href ="https://band2playfront.onrender.com/"; 
        console.log("wtf"); 
      } else {

        console.log('Bad credentials');
      }
    } catch (error) {
      console.error(error);
    }
  }



submit.addEventListener('click',login)
