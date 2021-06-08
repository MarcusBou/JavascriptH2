//variables
var messages;
var messageLength;
var messageID = 0;


window.onload = function (){
    if(localStorage.Username != ""){ //an if statement when local has a username in storage
        getMessagesFromAPI();// on startup run getmessages from api
        setInterval(function(){ //Every 5 seconds it will get messages
            getMessagesFromAPI();
        },5000)
    }else{ // if username isnt there it will be sent back to login
        window.location.href="../HTML/login.html"
        alert("You Do Not Have A Username");
    }
}

//an ajax With get, to get the messages fromthe api
function getMessagesFromAPI() {
    $.ajax({
        type: "GET",
        url: "http://chillyskye.dk/api/",
        data: "data",
        dataType: "json",
        success: function (response) {
            console.log(response);
            showMessages(response);
        }
    });
}

function showMessages(responseMessage){
    messages = responseMessage;

    messages.forEach(element => {
        if(element.id > messageID){
            messageCreate(element.name, element.message, element.timestamp);
            messageID = element.id
        }
        scrolldown();
    });
}

//in message create. it takes name, message and timestamp. after it splits it up for easier management of the different properties and get assembled in FMessage
function messageCreate(name, message, timeStamp){
    let Htime, Hname, Hmessage, Fmessage;
    timeStamp = new Date(timeStamp * 1000);
    Hname = "<p class='name'>" + name + "</p>";
    Hmessage = "<p class='message'>" + message + "</p>";
    Htime = "<p class='time'>" + getDateString(timeStamp) + "</p>";
    Fmessage ="<div class='fMess'>" + Hname + Hmessage +  Htime + "</div><br>";
    document.getElementById("chatbox").innerHTML += Fmessage;//adds in the chatbox div
}

function scrolldown() {// makes sure that it alwais is scrolled down with the newest messages
    let element = document.getElementById("chatbox");
    element.scrollTop = element.scrollHeight;
}

function getDateString(date = Date) { //provides a readable string of date and time
    return (date.getHours()) + ":" + (date.getMinutes()) + ":" + (date.getSeconds()) + " " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

document.addEventListener("keydown", function(e){
    if(e.key == "Enter"){//listen after enter, to post on messages
        let name, SendMessage;
        name = localStorage.Username;
        SendMessage = $("#inputTextField").val();
        post(name, SendMessage);
    } else{//if key is not enter, and the input text field isnt in focus, then it will focus into the textfield
        document.getElementById("inputTextField").focus();
    }
})

function post(name, SendMessage) { //post is a basic message post to ajax
    if(SendMessage.length <= 300){//checks if message is longer then 300 and if it is give error
        $.ajax({
            type: "POST",
            url: "http://chillyskye.dk/api/",
            data: {name:name, message:SendMessage},
            success: function (response) {
                console.log(name + ", " + SendMessage);
            }
        });
        getMessagesFromAPI();
        $("#inputTextField").val("");
    }else{
        alert("Message is too long");
    }
 }

$("#Send").click(function(){//is a click event for when buttton is pressed
    let name, SendMessage;
    name = localStorage.Username;
    SendMessage = $("#inputTextField").val();
    post(name, SendMessage);
});


