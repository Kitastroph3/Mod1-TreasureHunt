//creating objects (origins of mythical objects):
class MythItem { 
    constructor(name, length, ) { 
        this.name = name
        this.length = length
    }
}

const stone = new MythItem('stone', 1)
const gold = new MythItem('gold', 1)
const sword = new MythItem('sword', 1)
const chest = new MythItem('chest', 1)


const treasure = [stone, gold, sword, chest]

//QUERIES
//make the maps

const gameArea = document.querySelector("#gamearea")

const width = 8

//FUNCTIONS
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

// assign random number to array item = x
// array item is (item, x)
//
// link array item to cel.
// if cel is clicked, then alert score i+10
//

function burytreasure() { 
    let x = Math.floor(Math.random(64))
    console.log(x)
}
//
//
 
burytreasure()


