requirejs.config({
  paths: {
    canvas: 'canvas/canvas',
    elevator: 'elevator/elevator',
    button: 'domElements/button'
  }
});

require(['canvas', 'elevator', 'button'], function(Canvas, Elevator, Button) {
  let canvas = new Canvas({
    width: 500,
    height: 500,
    parent: '#canvasContainer'
  });
  canvas.create();
  canvas.detectClick();

  let elevator = new Elevator({ width: 100, height: 140 });
  elevator.includeParent(canvas);
  elevator.create();

  console.log(canvas);
  console.log(elevator);

  let upButton = new Button({ parent: '#buttonContainer' });
  upButton.create('Вниз');
  upButton.addHandler('click', elevator.down);

  let downButton = new Button({ parent: '#buttonContainer' });
  downButton.create('Вверх');
  downButton.addHandler('click', elevator.up);

  let stopButton = new Button({ parent: '#buttonContainer' });
  stopButton.create('Стоп');
  stopButton.addHandler('click', elevator.stop);
});

/*
class Canvas {
  constructor(elem, width = 100, height) {
    this.canvas = document.querySelector(elem);
    this.ctx = document.querySelector(elem).getContext('2d');
    this.width = width;
    this.height = height;
  }

  create() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  _drawSquare(x, y, color = '#607d8b') {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, this.width, this.height);
  }

  turnOffLight() {
    this._drawSquare(0, 0, '#000');
  }

  turnOnLight() {
    this._drawSquare(0, 0, '#fff');
  }
}

document.addEventListener('DOMContentLoaded', function(e) {
  let simpleHumButton = document.querySelector('#simpleHum');
  let greetHumButton = document.querySelector('#greetingHum');

  let turnOffLight = document.querySelector('#turnOffLight');

    let canvas = new Canvas('#hum-life', 100, 170);
  let { width, height, ctx } = canvas;

  simpleHumButton.addEventListener('click', function(e) {
    canvas.clear();
    drawSimpleHum(ctx, width, height);
  });

  greetHumButton.addEventListener('click', function(e) {
    canvas.clear();
    sayHi(ctx, width, height);
  });

  turnOffLight.addEventListener('click', function(e) {
    canvas.clear();
    canvas.turnOffLight();
  });

  turnOnLight.addEventListener('click', function(e) {
    canvas.clear();
    canvas.turnOnLight();
  });
});

function drawCanvas() {
  let canvas = new Canvas('#hum-life', 100, 170);
  canvas.create();

  let { width, height, ctx } = canvas;

  drawSimpleHum(ctx, width, height);
}

function drawSquare(ctx, x, y, color = '#607d8b') {
  ctx.fillStyle = color;
  ctx.fillRect(x * 10, y * 10, 10, 10);
}

drawCanvas();

// обычный hum
function drawSimpleHum(ctx, width, height) {
  let rowsNum = height / 10;
  let colsNum = width / 10;

  for (let r = rowsNum; r > 0; r--) {
    for (let c = colsNum; c > 0; c--) {
      switch (r) {
        case rowsNum - 12:
        case rowsNum - 9:
        case rowsNum - 8:
        case rowsNum - 4:
          if (c == 4 || c == 5) {
            drawSquare(ctx, c, r);
          }
          break;
        case rowsNum - 11:
        case rowsNum - 10:
          if (c == 3 || c == 6) {
            drawSquare(ctx, c, r);
          }
          break;
        case rowsNum - 7:
        case rowsNum - 3:
        case rowsNum - 2:
          if (c == 3 || c == 6) {
            drawSquare(ctx, c, r);
          }
          break;
        case rowsNum - 6:
        case rowsNum - 5:
          if (c == 2 || c == 4 || c == 5 || c == 7) {
            drawSquare(ctx, c, r);
          }
          break;
        case rowsNum - 1:
          if (c == 2 || c == 3 || c == 6 || c == 7) {
            drawSquare(ctx, c, r);
          }
          break;
      }
    }
  }
}

// hum say hi
function sayHi(ctx, width, height) {
  // drawText(ctx, 'Николай', width, height);
  drawText(ctx, 'Дима', width, height);

  let rowsNum = height / 10;
  let colsNum = width / 10;

  for (let r = rowsNum; r > 0; r--) {
    for (let c = colsNum; c > 0; c--) {
      switch (r) {
        case rowsNum - 12:
        case rowsNum - 9:
        case rowsNum - 4:
          if (c == 4 || c == 5) {
            drawSquare(ctx, c, r);
          }
          break;
        case rowsNum - 11:
        case rowsNum - 10:
          if (c == 3 || c == 6) {
            drawSquare(ctx, c, r);
          }
          break;
        case rowsNum - 8:
          if (c == 4 || c == 5 || c == 8) {
            drawSquare(ctx, c, r);
          }
          break;
        case rowsNum - 7:
          if (c == 3 || c == 6 || c == 7) {
            drawSquare(ctx, c, r);
          }
          break;
        case rowsNum - 3:
        case rowsNum - 2:
          if (c == 3 || c == 6) {
            drawSquare(ctx, c, r);
          }
          break;
        case rowsNum - 6:
        case rowsNum - 5:
          if (c == 2 || c == 4 || c == 5) {
            drawSquare(ctx, c, r);
          }
          break;
        case rowsNum - 1:
          if (c == 2 || c == 3 || c == 6 || c == 7) {
            drawSquare(ctx, c, r);
          }
          break;
      }
    }
  }
}

function drawText(ctx, name, width, height) {
  ctx.font = '14px serif';
  ctx.fillStyle = 'red';

  // измерить ширину текста
  let textWidth = ctx.measureText(`Привет, ${name.toUpperCase()}!`).width;
  textWidth = Math.ceil(textWidth);

  if (textWidth < width) {
    ctx.fillText(`Привет, ${name.toUpperCase()}!`, 2, height - 130);
  } else {
    ctx.fillText(`Привет`, 2, height - 145);
    ctx.fillText(`${name.toUpperCase()}!`, 2, height - 130);
  }
}
*/
