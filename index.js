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
        },
    end (event){
        console.log(`Final: x = ${position.x} y = ${position.y}`);
    }
}})

interact('.event').on('tap', (event) => {
    console.log(event);
    event.target.style.backgroundColor = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`
})

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