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

function makeMap(hunter, mapname) {
    const map = document.createElement('div')
    map.id = hunter
    map.classList.add('map')
    gameArea.append(map)

    for (let i = 0; i < width * width; i++) { 
        const cel = document.createElement('div')
        cel.classList.add(mapname)
        cel.id = i+1
        map.append(cel)
    }
}

makeMap("hunterA", "gridA")
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

// ------- add event listeners for grid boxes----------
let huntermap = document.querySelectorAll(".gridA")
// let huntermap2 = document.querySelectorAll(".gridB")

function makediggable(usermap, digColor) {
    usermap.forEach(grid => {
        grid.addEventListener('click', (e) => {
            grid.style.backgroundColor = digColor
        });
    });
}

makediggable(huntermap, 'blue')

//-------wriitng fucntion to select only div items that match
//----- fucntion to select only div items that match locations---------
function selectsA(k, mapinput) {
    const a = k[0].location;
    const b = k[1].location;
    const c = k[2].location;
    const d = k[3].location;
    (console.log(a, b, c, d))

        mapinput.querySelector(`div:nth-child(${a})`).style.backgroundColor = 'pink'
        mapinput.querySelector(`div:nth-child(${b})`).style.backgroundColor = 'pink'
        mapinput.querySelector(`div:nth-child(${c})`).style.backgroundColor = 'pink'
        mapinput.querySelector(`div:nth-child(${d})`).style.backgroundColor = 'pink'
    }

selectsA(treasure2, hunterB)



// makediggable(huntermap2, 'green')

// function selectsA(k, mapinput, digColor) {
//     const a = k[0].location;
//     const b = k[1].location;
//     const c = k[2].location;
//     const d = k[3].location;
//     (console.log(a, b, c, d))

//     const boxA = mapinput.querySelector(`div:nth-child(${a})`)
//     boxA.classList.remove('miss')
//     const boxB = mapinput.querySelector(`div:nth-child(${b})`)
//     boxB.classList.remove('miss')
//     const boxC = mapinput.querySelector(`div:nth-child(${c})`)
//     boxC.classList.remove('miss')
//     const boxD = mapinput.querySelector(`div:nth-child(${d})`)
//     boxD.classList.remove('miss')

//     let map = document.querySelectorAll(".miss")
//     map.forEach(grid => {
//         map.addEventListener('click', (e) => {
//             grid.style.backgroundColor = digColor
//         });
//     });
// }
//------- hide objects in hunter maps----------------


//------ make computer "go"--------------------------



//------ make sure round is valid - newmap item is selected)----


//------ check to make sure gameplay still = true
//------ over if all objects are not found by either map1 or map2---




