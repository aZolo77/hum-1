define(['canvas'], function() {
  return class Canvas {
    constructor(props = {}) {
      this.parent = props.parent
        ? document.querySelector(props.parent)
        : document.body;
      this.width = props.width ? props.width : 100;
      this.height = props.height ? props.height : 100;
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.coords = { x: 0, y: 0 };
    }

    // нарисовать квадрат
    _drawSquare(
      x = 0,
      y = 0,
      color = '#fff',
      width = this.width,
      height = this.height
    ) {
      this.ctx.fillStyle = color;
      this.ctx.fillRect(x, y, width, height);
    }

    // определить координаты клика
    _initCoords(x, y) {
      this.coords.x = x;
      this.coords.y = y;
    }

    detectClick() {
      let self = this;
      this.canvas.addEventListener('mouseup', function(e) {
        let x = e.pageX - e.target.offsetLeft;
        let y = e.pageY - e.target.offsetTop;
        self._initCoords(x, y);
        self._drawSquare(x, y, '#555', 10, 10);
      });
    }

    // создаёт новый canvas
    create() {
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.canvas.style.background = '#fff';
      this.parent.appendChild(this.canvas);
      this._drawSquare();
    }

    // очищает canvas
    clear() {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  };
});
