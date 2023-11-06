//creating objects (origins of mythical objects):
class mythitem { 
    constructor(name, length) { 
        this.name = name
        this.length = length
    }
}

const stone = new mythitem('stone', 2)
const gold = new mythitem('gold', 3)
const sword = new mythitem('sword', 3)
const chest = new mythitem('chest', 4)

//make the maps
const gamearea= document.querySelector('#gamearea')

function makemap() { 
    const width = 8
    const map = document.createElement('div')
    map.classList.add('map')

    for (let i = 0; i < width * width; i++) { 
        const cel = document.createElement('div')
        cel.classList.add('cel')
        cel.style.height = '30px'
        cel.style.width = '30px'
        cel.style.border = 'white'
        cel.style.backgroundColor = 'grey'
        gamearea.append(cel)   
    }
}

makemap()


