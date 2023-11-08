//creating objects (origins of mythical objects):
class MythItem { 
    constructor(name, size, location) { 
        this.name = name
        this.size = size
        this.location = location
    }
}

let stone = new MythItem('stone', 1, 1)
let gold = new MythItem('gold', 1, 1)
let sword = new MythItem('sword', 1, 1)
let chest = new MythItem('chest', 1, 1)


//QUERIES
let treasure = [stone, gold, sword, chest]
const gameArea = document.querySelector("#gamearea")
const huntermap = document.querySelectorAll('div')

const width = 8

//FUNCTIONS
//makemap
function makeMap(hunter) {
    const map = document.createElement('div')
    map.id = hunter
    map.classList.add('map')
    gameArea.append(map)

    for (let i = 0; i < width * width; i++) { 
        const cel = document.createElement('div')
        cel.classList.add('cel')
        cel.id = i+1
        map.append(cel)
    }
}

makeMap("hunter1")


//------- assign random number to treasures------
function burytreasure() {
    for (i = 0; i < treasure.length; i++) {
        treasure[i].location = Math.floor(Math.random() * 64)
    }
}
//------- add event listeners for grid boxes
// huntermap.forEach(item => {
//     item.addEventListener('click', onclick())})

// function changecolor() {
//     document.cel.style.backgroundColor = 'blue';
// }
// huntermap.forEach(item).addEventListener('click', function onClick(event) {
//     div.style.backgroundColor = 'blue'
// })
//https://bobbyhadz.com/blog/javascript-change-background-color-on-click


//----------------
burytreasure()
console.log(treasure)

