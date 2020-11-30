const position = { x: 0, y: 0 }

interact('.draggable').draggable({
    listeners: {
        start (event) {
            console.log(`Inicio: x = ${position.x} y = ${position.y}`);
        },
        move (event) {
            position.x += event.dx
            position.y += event.dy
            
            event.target.style.transform =
            `translate(${position.x}px, ${position.y}px)`
        }
    }})
    
interact('.event').on('tap', (event) => {
    console.log(event);
    event.target.style.backgroundColor = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`
})
    
const position1 = { x: 0, y: 0 }

interact('.hold').on('hold', (event) => {
    console.log("segurou");
    event.currentTarget.classList.toggle('drig')
})

interact('.drig').draggable({
    listeners: {
        start (event) {
            console.log(`Inicio: x = ${position1.x} y = ${position1.y}`);
        },
        move (event) {
            position1.x += event.dx
            position1.y += event.dy
            
            event.target.style.transform =
            `translate(${position1.x}px, ${position1.y}px)`
        },
        end (event){
            event.currentTarget.classList.remove('drig')
        }
    }})


var angle = 0

interact('.rot').gesturable({
    listeners:{
        move: function (event) {
            angle += event.da;
            console.log(event);
            event.target.style.webkitTranform =
            event.target.style.transform = 'rotate(' + angle + 'deg)';
        }
    }
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}