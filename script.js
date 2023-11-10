//MAKE OBJECTS
//---creating objects (origins of mythical objects):
class MythItem { 
    constructor(name, location, size) { 
        this.name = name
        this.location = location
        this.size = size
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
const treasure = [stone, gold, sword, chest]
const treasure2 = [stone2, gold2, sword2, chest2]

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

// ------- Event listeners for player boxes----------
//-------Define boxes to have color if uncovered -------------------
const aa = treasure[0].location;
const bb = treasure[1].location;
const cc = treasure[2].location;
const dd = treasure[3].location;

const playerlocatearray = [aa, bb, cc, dd]
console.log(playerlocatearray)

const boxA = hunterA.querySelector(`div:nth-child(${aa})`)
const boxB = hunterA.querySelector(`div:nth-child(${bb})`)
const boxC = hunterA.querySelector(`div:nth-child(${cc})`)
const boxD = hunterA.querySelector(`div:nth-child(${dd})`)
    
const arrayofBoxLocation = [boxA, boxB, boxC, boxD]
    
function giveDifferentColor(boxLocation) {
    for (let i = 0; i < boxLocation.length; i++)
        boxLocation[i].classList.remove('miss')
    for (let i = 0; i < boxLocation.length; i++)
        boxLocation[i].classList.add('hit')    //would not work if add function followed remove in same loop

}
giveDifferentColor(arrayofBoxLocation)
//------Define boxes to have different colors for hit/miss----------------
let hunterAmissmap = document.querySelectorAll("div.miss")    
let hunterAhitmap = document.querySelectorAll("div.hit")

function makediggable(usermap, digColor) {
    usermap.forEach(grid => {
        grid.addEventListener('click', (e) => {
            grid.style.backgroundColor = digColor

        });
    });
}

makediggable(hunterAmissmap, 'darkslategrey')
makediggable(hunterAhitmap, 'gold')
//----- function to show items on opponent map---------
const a = treasure2[0].location;
const b = treasure2[1].location;
const c = treasure2[2].location;
const d = treasure2[3].location;

const locatearray = [a, b, c, d]

console.log(locatearray)

function hideitems(mapinput) {
    for (let i = 0; i < locatearray.length; i++) {
        mapinput.querySelector(`div:nth-child(${locatearray[i]})`).style.backgroundColor = 'pink'
    }
}
hideitems(hunterB)

//------ make computer "go"--------------------------

function computerturn(h) {
    let rando = Math.ceil(Math.random() * 64)
    for (let i = 0; i < locatearray.length; i++) {
        if (rando == locatearray[i]) {
            h.querySelector(`div:nth-child(${rando})`).style.backgroundColor = 'purple'
            console.log(rando)
        } else {
            h.querySelector(`div:nth-child(${rando})`).style.backgroundColor = 'darkslategray'
            console.log(rando)
        }
    }
}
computerturn(hunterB)

//------ detect input from player -------------------------
let hunterAmap = document.getElementById('hunterA')

hunterAmap.addEventListener('click', (e) => {
    if (e.target.classList.contains('hit')) {
        console.log("hit")
    } else { 
        console.log("miss")
    }
})
//--------Alternate Turns-----------------------------------
hunterAmap.addEventListener('click', (e) => {
    if (e.target.classList.contains('hit')) {
        computerturn(hunterB)
    } else { 
        computerturn(hunterB)
    }
    })
//----------------------------------------------------------
// hunterAmap.
//     hunterAmap.forEach(gridclicked => {
//         gridclicked.addEventListener('click', (e) => {trackclicks(gridclicked.id)});
//     });

// captureevent(hunterAmap)
//---------- track clicked elements------------
// let clickedarray = [];
// function clickondivs(e) { 
//     let divitem = hunterAmap.queryselector();
//     clickedarray.push(id)

// }
//------ check to make sure gameplay still = true
//------ over if all objects are not found by either map1 or map2---