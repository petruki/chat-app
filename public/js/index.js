const socket = io()
var createOrJoin = true

// Elements
const $rooms = document.querySelector('#rooms')
const $createOrJoin = document.querySelector('#createOrJoin')
const $roomSelecionDiv = document.querySelector('#roomSelecionDiv')
const $inputRoomName = document.querySelector('#inputRoomName')

socket.emit('getRooms', (rooms) => {
    if (!rooms.length) {
        $rooms.style.display = "none"
        $createOrJoin.style.display = "none"
        $roomSelecionDiv.style.display = "none"
    }

    for (var i = 0; i < rooms.length; i++) {
        var room = rooms[i];

        var listItem = document.createElement("option");
        listItem.textContent = room;

        $rooms.appendChild(listItem);
    }
})

$createOrJoin.addEventListener('click', () => {
    if (createOrJoin) {
        $inputRoomName.style.display = "none"
        $rooms.style.display = "block"
        createOrJoin = false
    } else {
        $inputRoomName.style.display = "block"
        $rooms.style.display = "none"
        createOrJoin = true
    }

})