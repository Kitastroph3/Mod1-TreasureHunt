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
// let treasure2 = [stone2, gold2, sword2, chest2]

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
// makeMap("hunterB", "gridB")

//------- assign random number to treasures------
// parameter x refers to array (treasure or treasure2)
function burytreasure(x) {
    for (let i = 0; i < x.length; i++) {
        x[i].location = Math.floor(Math.random() * 64)
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
        burytreasure()
    }
}

burytreasure(treasure)
// burytreasure(treasure2)

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

//-------wriitng fucntion to select only diiv items that match
//----- fucntion to select only div items that match locations---------
function selects(k){ 
    const a = k[0].location;
    const b = k[1].location;
    const c = k[2].location;
    const d = k[3].location;
    (console.log(a, b, c, d))
    hunterA.querySelector(`div:nth-child(${a})`).style.backgroundColor = 'pink'
    hunterA.querySelector(`div:nth-child(${b})`).style.backgroundColor = 'pink'
    hunterA.querySelector(`div:nth-child(${c})`).style.backgroundColor = 'pink'
    hunterA.querySelector(`div:nth-child(${d})`).style.backgroundColor = 'pink'
}

selects(treasure)



// makediggable(huntermap2, 'green')

// function putitemsinmap() { 
//     let item = 0;
//     let groundscore = document.querySelector('.gridA' + item)
//         console.log(groundscore)
//     for (let i = 0; i < z.length; i++) { 
//         item = z[i].location
//     //     groundscore.addEventListener('click', (e) => {
//     //         groundscore.style.backgroundColor = coloro
//     //     });
//     }
// }

// putitemsinmap()

//------- hide objects in hunter maps----------------
        // make hidden id for mythobject. 
        //if clicked on, 
        //  reveal object and 
        //  add a score to screen
        // use css to add color to screen?
        // EVENTLISTENER (event, function, usecapture)
// function puttreasureinmap(h, mip) {
//     for (i = 1; i < (width * width) + 1; i++) {
//         if (h[1].location == document.getElementById(mip + '#gridA' + h[1].location
//         )) {//&& boolean if eveentlistener selected = true? or if/else loop 
//             console.log("you found a treasure")
//         }
//     }
// }
//puttreasureinmap(treasure, huntermap)
// use '#hunterA #gridA'
// function makediggable(usermap, arrays, hitColor, missColor) {
//     for (let i = 1; i < (width * width) + 1; i++) {
//         if (arrays[1].location == document.getElementById(usermap + '#gridA' + h[1].location
//         )) { 
//             usermap.forEach(grid => {
//                 grid.addEventListener('click', (e) => {
//                     grid.style.backgroundColor = hitColor
//                 });
//             });
//     usermap.forEach(grid => {
//         grid.addEventListener('click', (e) => {
//             grid.style.backgroundColor = hitColor
//         });
//     });
// }


// function puttreasureinmap(z) {
//     let findingplace = 0;
//     let groundscore = document.getElementById('#huntermap #gridA' + findingplace);
//     for (let i = 0; i < z.length; i++) {
//         if (!groundscore) {
//             console.log(z[i].location);
//         } else {
//             console.log("nonefound");
//         }
//     }
// }




//------ make computer "go"--------------------------





//------ make sure round is valid - newmap item is selected)----



//------ check to make sure gameplay still = true
//------ over if all objects are not found by either map1 or map2---




