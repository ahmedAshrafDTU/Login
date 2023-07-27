let h2 = document.querySelector('h2');

let all = [];
all= JSON.parse(localStorage.getItem('allUsers')); 

 h2.innerHTML = all[0].name;
