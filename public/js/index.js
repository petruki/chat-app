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
        $roomSelecionDiv.style.display = "none"
    } else {
        $rooms.style.display = !createOrJoin ? "block" : "none"
    }

    for (var i = 0; i < rooms.length; i++) {
        var room = rooms[i]

        var listItem = document.createElement("option")
        listItem.textContent = room

        $rooms.appendChild(listItem)
    }
})

$createOrJoin.addEventListener('click', () => {
    toggleCreateJoin()
    createOrJoin = !createOrJoin
})

const toggleCreateJoin = () => {
    if (createOrJoin) {
        $inputRoomName.style.display = "none"
        $inputRoomName.name = ""

        $rooms.style.display = "block"
        $rooms.name = "room"
    } else {
        $inputRoomName.style.display = "block"
        $inputRoomName.name = "room"

        $rooms.style.display = "none"
        $rooms.name = ""
    }
    $rooms.toggleAttribute("required")
    $inputRoomName.toggleAttribute("required")
}