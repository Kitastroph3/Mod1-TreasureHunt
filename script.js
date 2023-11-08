//creating objects (origins of mythical objects):
class MythItem { 
    constructor(name, location) { 
        this.name = name
        this.location = location
    }
}

let stone = new MythItem('stone', )
let gold = new MythItem('gold', '')
let sword = new MythItem('sword', '')
let chest = new MythItem('chest', '')


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
        //map size is 240px, 8 x 8 grid
        cel.style.height = '30px'
        cel.style.width = '30px'
        cel.style.border = '1px solid white'
        cel.style.backgroundColor = 'grey'
        map.append(cel)
    }
}

makeMap("Hunter1")

function burytreasure() {
    for (i = 0; i < treasure.length; i++) {
        treasure[i].location = Math.floor(Math.random()*64)
    }
}

burytreasure()
console.log(treasure)

