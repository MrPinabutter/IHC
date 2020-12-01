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
    console.log(event.y0);
    event.target.style.backgroundColor = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`
})
    
const position1 = { x: 0, y: 0 }

interact('.hold').on('hold', (event) => {
    event.target.style.backgroundColor = '#d44'
    event.currentTarget.innerText = 'Arraste'
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
            event.target.style.backgroundColor = '#f63'
            event.currentTarget.innerText = 'Segure e solte para arrastar'
            event.currentTarget.classList.remove('drig')
        }
    }})


var angle = 0


interact('.rot').gesturable({
    listeners:{
      move: function (event) {
        angle += event.da;
        event.target.innerText = "To ficando tontoooo"
        event.target.style.webkitTranform = 'rotate(' + angle + 'deg)';
        event.target.style.transform = 'rotate(' + angle + 'deg)';
      },
      end(event){
        event.target.innerText = "Me gire"
      }
    }
  })
var angleScale = {
  angle: 0,
  scale: 1
}

interact('.zoom').gesturable({
  listeners:{
    start(event){
      angleScale.angle -=event.angle

    },
    move (event) {
      var currentAngle = event.angle + angleScale.angle
      var currentScale = event.scale * angleScale.scale

      event.target.style.webkitTransform =
      event.target.style.transform =
      'rotate(' + currentAngle + 'deg)' + 'scale(' + currentScale + ')'

      dragMoveListener(event)
    },
    end (event) {
      angleScale.angle = angleScale.angle + event.angle
      angleScale.scale = angleScale.scale * event.scale
    }
  }
}).draggable({
  listeners: { move: dragMoveListener }
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}