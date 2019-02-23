"use strict";

var food;
var snake;

function setup() {
  createCanvas(525, 525);
  frameRate(60);
  var foodX = Math.floor(random(0, 15)) * 35;
  var foodY = Math.floor(random(0, 15)) * 35;
  food = new Food(foodX, foodY, 35, 60);
  console.log("Food X: ".concat(foodX));
  console.log("Food Y: ".concat(foodY));
  snake = new Snake(0, 0, 35, 35, 35);
}

function keyPressed() {
  snake.keyPressed();
}

function draw() {
  background(0);
  noStroke();
  snake.update();
  snake.draw();
  food.update();
  food.draw();
}
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Food =
/*#__PURE__*/
function () {
  function Food(x, y, width, height) {
    _classCallCheck(this, Food);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  _createClass(Food, [{
    key: "update",
    value: function update() {}
  }, {
    key: "draw",
    value: function draw() {
      fill(255, 0, 0);
      rect(this.x, this.y, this.width, this.height);
    }
  }]);

  return Food;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Snake =
/*#__PURE__*/
function () {
  function Snake(x, y, width, height, delay) {
    _classCallCheck(this, Snake);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.delay = delay;
    this.xdir = 1;
    this.ydir = 0;
    this.delta = 0;
  }

  _createClass(Snake, [{
    key: "setDir",
    value: function setDir(x, y) {
      this.xdir = x;
      this.ydir = y;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.delta == this.delay) {
        this.x += Math.floor(this.width * this.xdir);
        this.y += Math.floor(this.height * this.ydir);
        this.delta = 0;
      }

      this.delta++;
    }
  }, {
    key: "keyPressed",
    value: function keyPressed() {
      this.move();
    }
  }, {
    key: "move",
    value: function move() {
      if (keyCode === LEFT_ARROW && this.xdir != 1) {
        this.setDir(-1, 0);
      } else if (keyCode === RIGHT_ARROW && this.xdir != -1) {
        this.setDir(1, 0);
      } else if (keyCode === UP_ARROW && this.ydir != 1) {
        this.setDir(0, -1);
      } else if (keyCode === DOWN_ARROW && this.ydir != -1) {
        this.setDir(0, 1);
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      fill(0, 255, 0);
      rect(this.x, this.y, this.width, this.height);
    }
  }]);

  return Snake;
}();
//# sourceMappingURL=all.js.map
