function getSignedIn(){
    alert('Here you will find opetions to sign in on Netflix.')
}
function getStarted(email){
    let email1 = document.getElementById(email).value;
    if(email1){
        alert(`${email1} has successfully registered and is not a Netflix Member`)
    }
    else{
        alert('Please provide valid email to get started...')
    }
    document.getElementById(email).value = "";
}
function show_hide(dd_menu){
    if(document.getElementById(dd_menu).className === 'dropdown-menu show'){
        document.getElementById(dd_menu).className = "dropdown-menu";
    } else {
        document.getElementById(dd_menu).className = "dropdown-menu show";
    }
}
function myFunction(b,ans) {
    let x = document.getElementById(ans);
    let btn = document.getElementById(b);
    if (x.style.display === "none") {
        x.style.display = "block";
        btn.innerText = "x";
    } else {
      x.style.display = "none";
      btn.innerText = "+";
    }
    b = null;
    ans = null;
}










