define(['elevator'], function() {
  return class Button {
    constructor(props = {}) {
      this.bgc = props.bgc ? props.bgc : '#555';
      this.parent = props.parent
        ? document.querySelector(props.parent)
        : document.body;
      this.button = document.createElement('button');
    }

    // создать кнопку
    create(text) {
      this.button.textContent = text;
      this.parent.appendChild(this.button);
    }

    // добавить событие и обработчик
    addHandler(event, handler) {
      this.button.addEventListener(event, handler);
    }
  };
});
