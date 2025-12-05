const form = document.getElementById("emailForm")
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailMsg = document.getElementById("emailMessage");
const passMsg = document.getElementById("passwordMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;
    if (email.value.endsWith("@gmail.com")) {
        emailMsg.textContent = "Your email is verified";
        emailMsg.style.color = "green";
        emailMsg.style.textAlign ="center"
        emailMsg.style.fontWeight ="bold"
    } else {
        emailMsg.textContent = "You entered a wrong email";
        emailMsg.style.color = "red";
        emailMsg.style.textAlign ="center"
        emailMsg.style.fontWeight ="bold"
        valid = false;
    }
    if (password.value.length >= 8) {
        passMsg.textContent = "";
    } else {
        passMsg.textContent = "Password must be at least 8 characters";
        passMsg.style.color = "red";
        passMsg.style.textAlign ="center"    
        passMsg.style.fontWeight ="bold"
        passMsg.style.marginBottom = "20px"
        valid = false;
    }
    if (valid) {
        console.log("Login successful!");
    }
})