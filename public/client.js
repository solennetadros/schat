var socket = io();
var userName = "";

//reading data from server
socket.on('welcome message', function(data){
	$('#messages').append($('<li>').text(data+userName));
	console.log("welcome is working");
})

socket.on('latest message', function(data){
	$('#messages').append($('<li>').text(data.userName + ": " + data.message));
})

myFunction();

function myFunction() {

	var person = prompt("Please enter your name", "enter");
    if (person != null) {
        $('#messages').append($('<li>').text("You are now " + person));
        userName = person;
        submitFired();
    }
}


//sending data to server
$('form').submit(submitFired);

function submitFired(){
	var dataFromClient = {
		userName : userName,
		msgText : $('#m').val()
		
	}
	socket.emit('chat message', dataFromClient);
	//userName;
	$('#m').val();
	return false;
}