//MAKE OBJECTS
//---creating objects (origins of mythical objects):
class MythItem { 
    constructor(name, location, size) { 
        this.name = name
        this.location = location
        this.size = size
    }
    beuncovered() { 
        this.location = 0
    }
}

let stone = new MythItem('stone', 1, 1)
let gold = new MythItem('gold', 1, 1 )
let sword = new MythItem('sword', 1, 1)
let chest = new MythItem('chest', 1, 1)

let stone2 = new MythItem('stone', 1, 1)
let gold2 = new MythItem('gold', 1, 1)
let sword2 = new MythItem('sword', 1, 1)
let chest2 = new MythItem('chest', 1, 1)

//-----------------arrays---------------------------
let treasure = [stone, gold, sword, chest]
let treasure2 = [stone2, gold2, sword2, chest2]

//FUNCTIONS
//----------------makemaps---------------------------
const gameArea = document.querySelector("#gamearea")
const width = 8

function makeMap(hunter, mapname, miss) {
    const map = document.createElement('div')
    map.id = hunter
    map.classList.add('map')
    gameArea.append(map)

    for (let i = 0; i < width * width; i++) { 
        const cel = document.createElement('div')
        cel.classList.add(mapname)
        cel.classList.add(miss)
        cel.id = i+1
        map.append(cel)
    }
}

makeMap("hunterA", "gridA", "miss")
console.log(hunterA)
makeMap("hunterB", "gridB")
console.log(hunterB)

//------- assign random number to treasures------
// parameter x refers to array (treasure or treasure2)
function burytreasure(x) {
    for (let i = 0; i < x.length; i++) {
        x[i].location = Math.ceil(Math.random() * 64)
    }
    //make sure each treasure location is unique
    if (x[0].location != x[1].location &&
        x[0].location != x[2].location &&
        x[0].location != x[3].location &&
        x[1].location != x[2].location &&
        x[1].location != x[3].location &&
        x[2].location != x[3].location) {
        console.log(x)
    } else {
        burytreasure(x)
    }
}

burytreasure(treasure)
burytreasure(treasure2)

// ------- add event listeners for player boxes----------

// let huntermap2 = document.querySelectorAll(".gridB")
    const aa = treasure[0].location;
    const bb = treasure[1].location;
    const cc = treasure[2].location;
    const dd = treasure[3].location;

    const boxA = hunterA.querySelector(`div:nth-child(${aa})`)
    boxA.classList.remove('miss')
    boxA.classList.add('hit')
    const boxB = hunterA.querySelector(`div:nth-child(${bb})`)
    boxB.classList.remove('miss')
    boxB.classList.add('hit')
    const boxC = hunterA.querySelector(`div:nth-child(${cc})`)
    boxC.classList.remove('miss')
    boxC.classList.add('hit')
    const boxD = hunterA.querySelector(`div:nth-child(${dd})`)
    boxD.classList.remove('miss')
    boxD.classList.add('hit')

let hunterAmap = document.querySelectorAll("div.miss")    
let hunterAhitmap = document.querySelectorAll("div.hit")

function makediggable(usermap, digColor) {
    usermap.forEach(grid => {
        grid.addEventListener('click', (e) => {
            grid.style.backgroundColor = digColor
        });
    });
}

makediggable(hunterAmap, 'blue')
makediggable(hunterAhitmap, 'gold')

//----- function to select items on opponent map---------
function hideitems(k, mapinput) {
    const a = k[0].location;
    const b = k[1].location;
    const c = k[2].location;
    const d = k[3].location;
    
    const locatearray = [a, b, c, d]

    console.log(locatearray)

    for (let i = 0; i < 4; i++)
        mapinput.querySelector(`div:nth-child(${locatearray[i]})`).style.backgroundColor = 'pink'
}

hideitems(treasure2, hunterB)
//------------change color-------------------//

//------- hide objects in hunter maps----------------


//------ make computer "go"--------------------------



//------ make sure round is valid - newmap item is selected)----


//------ check to make sure gameplay still = true
//------ over if all objects are not found by either map1 or map2---




