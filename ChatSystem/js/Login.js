
$(document).ready(function(){
    if(typeof(Storage) !== "undefined"){//Checks if local storage is accesible
        $("#login").click(function(){
            let username = document.getElementById("WishedUsername").value;
            localStorage.Username = username;//stores username in local storage.
            console.log(localStorage.Username);
            window.location.href = "../HTML/Chat.html";//sends on to chat Window
        });
    }else{
        alert("You dont have access to local Storage");
    }
});