//---------MAKE OBJECTS----------------------------
//---creating objects (origins of mythical objects):
class MythItem { 
    constructor(name, location, size) { 
        this.name = name
        this.location = location
        this.size = size
    }
}

let stone = new MythItem('stone', 1)
let gold = new MythItem('gold', 1)
let sword = new MythItem('sword', 1)
let chest = new MythItem('chest', 1)

let stone2 = new MythItem('stone', 1)
let gold2 = new MythItem('gold', 1)
let sword2 = new MythItem('sword', 1)
let chest2 = new MythItem('chest', 1)

//-----------------arrays---------------------------
const treasure = [stone, gold, sword, chest]
const treasure2 = [stone2, gold2, sword2, chest2]
//----------------FUNCTIONS--------------------------
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
        cel.classList.add("miss")
        cel.id = i+1
        map.append(cel)
    }
}

makeMap("hunterA", "gridA")
makeMap("hunterB", "gridB")

//------- assign random number to treasures---------------
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
        console.log("treasure map created!")
    } else {
        burytreasure(x)
    }
}

burytreasure(treasure)
burytreasure(treasure2)
// ------- Event listeners for player boxes--------------
//-------Define dynamic classes for hunterA--------
const aa = treasure[0].location;
const ab = treasure[1].location;
const ac = treasure[2].location;
const ad = treasure[3].location;

const playerlocatearray = [aa, ab, ac, ad]

const boxA = hunterA.querySelector(`div:nth-child(${aa})`)
const boxB = hunterA.querySelector(`div:nth-child(${ab})`)
const boxC = hunterA.querySelector(`div:nth-child(${ac})`)
const boxD = hunterA.querySelector(`div:nth-child(${ad})`)
    
const arrayofPlayerBoxLocation = [boxA, boxB, boxC, boxD]
    
function changeclasses(boxLocation) {
    for (let i = 0; i < boxLocation.length; i++)
        boxLocation[i].classList.remove('miss')
    for (let i = 0; i < boxLocation.length; i++)
        boxLocation[i].classList.add('hit')    //would not work if add function followed remove in same loop
}

changeclasses(arrayofPlayerBoxLocation)
//------Define dynamic classes for player B-------------------------------
const ba = treasure2[0].location;
const bb = treasure2[1].location;
const bc = treasure2[2].location;
const bd = treasure2[3].location;

const computerlocatearray = [ba, bb, bc, bd]

const boxBA = hunterB.querySelector(`div:nth-child(${ba})`)
const boxBB = hunterB.querySelector(`div:nth-child(${bb})`)
const boxBC = hunterB.querySelector(`div:nth-child(${bc})`)
const boxBD = hunterB.querySelector(`div:nth-child(${bd})`)
    
const arrayofComputerBoxLocation = [boxBA, boxBB, boxBC, boxBD]

changeclasses(arrayofComputerBoxLocation)
//------Define boxes to have different colors for hit/miss----------------
let hunterAmissmap = document.querySelectorAll("div.miss")    
let hunterAhitmap = document.querySelectorAll("div.hit")

function makediggable(usermap, digColor) {
    usermap.forEach(grid => {
        grid.addEventListener('click', (e) => {
            grid.style.backgroundColor = digColor
        });
    }, {once: true}); 
}

makediggable(hunterAmissmap, 'darkslategrey')
makediggable(hunterAhitmap, 'goldenrod')
//----- function to show items on opponent map---------
function hideitems(mapinput) {
    for (let i = 0; i < computerlocatearray.length; i++) {
        mapinput.querySelector(`div:nth-child(${computerlocatearray[i]})`).style.backgroundColor = 'pink'
    }
}
hideitems(hunterB)
//------ detect input from player -------------------------
let hunterAmap = document.getElementById('hunterA')

let playergridtrack = []
hunterAmap.addEventListener('click', (e) => {
        playergridtrack.push(e.target.id)
    })
//----------------------------------------------------------
const rounds = document.createElement('h3')
let round = 0;
document.querySelector('header').appendChild(rounds)
function tracking() {
    round++
    rounds.innerText = `Round: ${round}`
}
//----------------------------------------------------------

//------ make computer "go"--------------------------
let computergridtrack = []
function computerturn(h) {
    let rando = Math.ceil(Math.random() * 64)
    //-- make sure every turn is at unique location-----------------------
    if (h.querySelector(`div:nth-child(${rando})`).style.backgroundColor != 'purple' &&
        h.querySelector(`div:nth-child(${rando})`).style.backgroundColor != 'darkslategray') {
        //would not work with a loop :'()
        if (rando == computerlocatearray[0] || rando == computerlocatearray[1] || rando == computerlocatearray[2] || rando == computerlocatearray[3]) {
            h.querySelector(`div:nth-child(${rando})`).style.backgroundColor = 'purple'
            computergridtrack.push(rando)
        } else {
            h.querySelector(`div:nth-child(${rando})`).style.backgroundColor = 'darkslategray'
            computergridtrack.push(rando)
        }
    } else {
        computerturn(h)
    }
}
//--------ROUNDS/ Alternate turns--------------------------
function autoRound() {
    hunterAmap.addEventListener('click', (e) => {
        if (e.target.classList.contains('hit')) {
            computerturn(hunterB)
            winlose()
            tracking()
        } else {
            computerturn(hunterB)
            winlose()
            tracking()
        } 
    })
}
autoRound()
//--------Win State/Lose state-----------------------------
function winlose() {
    let playergridtracktonumber = playergridtrack.map(Number)
    for (let i = 0; i < playergridtracktonumber.length; i++) {
        if (playergridtracktonumber.includes(playerlocatearray[0]) && playergridtracktonumber.includes(playerlocatearray[1]) && playergridtracktonumber.includes(playerlocatearray[2]) && playergridtracktonumber.includes(playerlocatearray[3])) {
            console.log("you win!")
        } else if (computergridtrack.includes(computerlocatearray[0]) && computergridtrack.includes(computerlocatearray[1]) && computergridtrack.includes(computerlocatearray[2]) && computergridtrack.includes(computerlocatearray[3])) {
            console.log("computer wins!")
        } else { 
            console.log(round)
        }
    }
} 
// ------------------