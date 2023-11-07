//creating objects (origins of mythical objects):
class mythitem { 
    constructor(name, length, ) { 
        this.name = name
        this.length = length
    }
}

const stone = new mythitem('stone', 2)
const gold = new mythitem('gold', 2)
const sword = new mythitem('sword', 3)
const chest = new mythitem('chest', 4)

//QUERIES
//make the maps
const gamearea = document.querySelector('#gamearea')

//FUCNTIONS
function makemap() {
    const width = 8
    const map = document.createElement('div')
    map.classList.add('map')
    gamearea.append(map)

    for (let i = 0; i < width * width; i++) { 
        const cel = document.createElement('div')
        cel.classList.add('cel')
        //map size is 240px, 8 x 8 grid
        cel.style.height = '30px'
        cel.style.width = '30px'
        cel.style.border = '1px solid white'
        cel.style.backgroundColor = 'grey'
        map.append(cel)
    }
}

makemap()
makemap()

