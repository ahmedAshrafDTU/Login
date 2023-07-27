// inputs sign up
let signUpNameInput = document.querySelector(".signUp .name");
let signUpEmailInput = document.querySelector(".signUp .email");
let signUpPassInput = document.querySelector(".signUp .password");
// inputs sign in
let signInEmailInput = document.querySelector(".login .email");
let signInPassInput = document.querySelector(".login .password");
// tow buttoon in sign in and sign up
let btnsignUp = document.querySelector(".signUp button");
let btnsignIn = document.querySelector(".login button");
// localstorage
let allUsers = [];
if (localStorage.getItem("allUsers") != null) {
  allUsers = JSON.parse(localStorage.getItem("allUsers"));
} else {
  allUsers = [];
}
//********************************************************************************
btnsignUp.addEventListener("click", function () {
  if (validation() == true) {
    if (findOrNo()) {
      let user = {
        name: signUpNameInput.value,
        email: signUpEmailInput.value,
        password: signUpPassInput.value,
      };
      allUsers.push(user);
      localStorage.setItem("allUsers", JSON.stringify(allUsers));
      displaysignIn();
    } else {
      alert("the gemail found write othe email");
    }
  } else {
    window.alert(validation());
  }
});
//********************************************************************************
function validation() {
  let inputname = /^[a-z]{3,}$/i;
  let inputemaile = /^[a-z]{3,}@gmail.com$/i;
  let inputpassword = /^[a-z]{3,}$/gi;

  if (inputname.test(signUpNameInput.value) == false) {
    return "error in write name";
  } else if (inputemaile.test(signUpEmailInput.value) == false) {
    return "error in write email";
  } else if (inputpassword.test(signUpPassInput.value) == false) {
    return "error in write password";
  }
  return true;
}
//********************************************************************************
function findOrNo() {
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].email == signUpEmailInput.value) {
      return false;
    }
  }
  return true;
}
//********************************************************************************
//********************************************************************************
function displaysignIn() {
  document.querySelector(".login").classList.remove("d-none");
  document.querySelector(".signUp").classList = "d-none";
}
btnsignIn.addEventListener("click", function () {
  if (check() == true) {
    document.querySelector("form").action = "./home.html";
  } else {
    alert(check());
  }
});
function check() {
  let foiendName = false;
  let foiendPass = false;
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].email == signInEmailInput.value) {
      foiendName = true;
      break;
    } else {
      foiendName = false;
    }
  }
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].password == signInPassInput.value) {
      foiendPass = true;
      break;
    } else {
      foiendPass = false;
    }
  }
  if (foiendName == true && foiendPass == true) {
    return true;
  } else if (foiendName == false) {
    return "the name is not foiend";
  } else if (foiendPass == false) {
    return "the password is not foiend";
  }
}
// //**************************************************************************
let linkeSignUp = document.querySelector("span.linkeSignUp");
let linkeSignIn = document.querySelector("span.linkeSignIn");

let signup = document.querySelector(".signUp");
let signin = document.querySelector(".login");

linkeSignUp.addEventListener("click", function () {
  signup.classList.remove("d-none");
  signin.classList = "d-none";
});

linkeSignIn.addEventListener("click", function () {
  document.querySelector(".login").classList.remove("d-none");
  document.querySelector(".signUp").classList = "d-none";
});
// //************************************************************************************


document.querySelector(".logOut").addEventListener('click', function () {
    displaySignUp();

  add();
});

function displaySignUp() {
    signup.classList.remove("d-none");
    signin.classList = "d-none";
}
