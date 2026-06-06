var nameInput = document.getElementById("userinput")
var emailInput = document.getElementById("gmailinput")
var passwordInput = document.getElementById("passwordinput")
var input = document.querySelector(".input")
var input2 = document.querySelector(".input2")
var input3 = document.querySelector(".input3")

var nameError = document.getElementById("usererror")
var emailError = document.getElementById("gmailerror")
var passwordError = document.getElementById("Passworderror")

var button = document.getElementById("button")

nameInput.addEventListener("input", function () {
    var namevalue = nameInput.value.trim()
    if (namevalue == "") {
        nameError.textContent = "Name cannot be empty"
        input.classList.remove("vaild")
        input.classList.add("invaild")


    }
    else {
        nameError.textContent = ""
       input.classList.remove("invaild")
      input.classList.add("vaild")

    }
   checkAllFields()
})

emailInput.addEventListener("input", function () {
    var emailvalue = emailInput.value.trim()
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (emailvalue == "") {
        emailError.textContent = "EmailBox cannot be empty"
        input2.classList.remove("vaild")
        input2.classList.add("invaild")
    }
    else if (!emailPattern.test(emailvalue)) {
        emailError.textContent = " Enter a valid email like name@gmail.com"
        input2.classList.remove("vaild")
        input2.classList.add("invaild")
    }
    else{
        emailError.textContent=""
        input2.classList.remove("invaild")
        input2.classList.add("vaild")
    }
checkAllFields()  
})
passwordInput.addEventListener("input", function () {
    var passwordvalue = passwordInput.value
    
    if (passwordvalue == "") {
        passwordError.textContent ="Password cannot be empty"
        input3.classList.remove("vaild")
        input3.classList.add("invaild")
    }
    else if (passwordvalue. length<6 ) {
        passwordError.textContent = "Password must be at least 6 characters"
        input3.classList.remove("vaild")
        input3.classList.add("invaild")
    }
    else{
        passwordError.textContent =""
        input3.classList.remove("invaild")
        input3.classList.add("vaild")
    }
 checkAllFields()
})
function checkAllFields() {
    var nameok = input.classList.contains("vaild")
    var emailok = input2.classList.contains("vaild")
    var passwordok = input3.classList.contains("vaild")
    if(nameok && emailok && passwordok ) {
        button.disabled = false

    }  
    else{
        button.disabled = true
    }
}
button.addEventListener("click", function(){
    alert ("Registration Successful! Welcome "+ nameInput.value)
})



