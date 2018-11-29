define(['elevator'], function() {
  return class Elevator {
    constructor(props = {}) {
      this.width = props.width ? props.width : 100;
      this.height = props.height ? props.height : 140;
      this.canvas = {};
      this.coords = { x: 0, y: 0 };
      this.timer = null;
      // публичные методы
      this.down = this.down.bind(this);
      this.up = this.up.bind(this);
      this.stop = this.stop.bind(this);
    }

    // перерисовка
    _drawSquare(
      x = 0,
      y = 0,
      color = '#fff',
      width = this.width,
      height = this.height
    ) {
      this.canvas.ctx.fillStyle = color;
      this.canvas.ctx.strokeRect(x, y, width, height);
    }

    // движение лифта
    _move(direction) {
      let self = this;
      let timer = setInterval(() => {
        // очищаем место, где находился elevator
        self.canvas.ctx.clearRect(
          self.coords.x - 1,
          self.coords.y - 1,
          self.width + 2,
          self.height + 2
        );
        // меняем координату [Y]
        self.coords.y = self.coords.y + direction;
        // создаём новый elevator
        self._drawSquare(
          self.coords.x,
          self.coords.y,
          '#777',
          self.width,
          self.height
        );

        // проверяем направление движения
        switch (direction) {
          case 2:
            if (self.coords.y + self.height + 1 >= self.canvas.height) {
              clearInterval(timer);
            }
            break;
          case -2:
            if (self.coords.y <= 10) {
              clearInterval(timer);
            }
            break;
        }
      }, 30);

      this.timer = timer;
    }

    _stopMoving() {
      clearInterval(this.timer);
    }

    includeParent(canvas) {
      this.canvas = canvas;
    }

    create() {
      let x = this.canvas.width / 2 - this.width / 2;
      this.canvas.ctx.fillStyle = '#777';
      this.canvas.ctx.strokeRect(x, 10, this.width, this.height);
      this.coords.x = x;
      this.coords.y = 10;
    }

    up() {
      this._stopMoving();
      this._move(-2);
    }

    down() {
      this._stopMoving();
      this._move(2);
    }

    stop() {
      this._stopMoving();
    }

    close() {}

    open() {}
  };
});
