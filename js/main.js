let icoClose = document.getElementById('close-ico');
let miniChat = document.getElementById('mini-chat');
let Chat = document.getElementById('chat');

icoClose.onclick = function () {
    Chat.style.display = 'none';
}

miniChat.onclick = function () {
    Chat.style.display = 'block';
}

text.addEventListener("keyup",function (e){
    if (e.keyCode == 13) {
        let newDiv = document.createElement("div");
        newDiv.className = "message admin";
        let pTag = document.createElement("p");
        pTag.innerText = text.value;
    }
})