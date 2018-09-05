var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
document.getElementById('NextButton').style.display = "none";
document.getElementById("clearMessage").style.visibility = "hidden";
//
// 前準備。
//
// canvas要素を作る。
const canvas = document.createElement('canvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;
// コンテキストを取得しておく。
const context = canvas.getContext('2d');
// body要素に追加する。
document.body.appendChild(canvas);

var circlePositionX = 150;
var circlePositionY = 150;

var rectPositionX = 450;
var rectPositionY = 450;


var CirclePositionRightFlag = false;
var CirclePositionLeftFlag = false;
var CirclePositionUpFlag = false;
var CirclePositionDownFlag = false;

var RectPositionRightFlag = false
var RectPositionLeftFlag = false;
var RectPositionUpFlag = false;
var RectPositionDownFlag = false;

var ClearFlag = false;

// 円（Circle）クラスを用意する。
// 円クラスは更新メソッドと描画メソッドを持っている。
class Circle {

  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocityX = 0;
    this.velocityY = 0;
  }
  // 更新メソッド。
  // これが呼ばれるとオブジェクトの状態を更新する。
  update(direction) {
    if (CirclePositionRightFlag === false && CirclePositionLeftFlag === false && CirclePositionUpFlag === false && CirclePositionDownFlag === false) {
      return;
    }
    // direction
    // 0:静止, 1:右, 2:左, 3:上, 4:下,
    if (direction === 0) {
      this.velocityX = 0;
    }
    if (direction === "Right") {
      console.log("右");
      if (circlePositionX <= 150 && CirclePositionRightFlag === true) {
        this.velocityX = 2;
        if (this.x >= 300) {
          circlePositionX = 300;
          CirclePositionRightFlag = false;
          this.velocityX = 0;

        }
      } else if (circlePositionX <= 300 && CirclePositionRightFlag === true) {
        this.velocityX = 2;
        if (this.x >= 450) {
          circlePositionX = 450;
          CirclePositionRightFlag = false
          this.velocityX = 0;
        }
      } else if (circlePositionX <= 450 && CirclePositionRightFlag === true) {
        this.velocityX = 2;
        if (this.x >= 600) {
          circlePositionX = 600;
          CirclePositionRightFlag = false
          this.velocityX = 0;

        }
      } else {
        this.velocityX = 0;
      }

      // if(this.velocityX === 0){
      //   return;
      // }
      this.x += this.velocityX;
      if ((this.x > rectPositionX + 50 && this.x < rectPositionX + 200) && (circlePositionY > rectPositionY + 50 && circlePositionY < rectPositionY + 200)) {
        ClearFlag = true;
        CirclePositionRightFlag = false;
        document.getElementById("clearMessage").style.visibility = "visible";
        document.getElementById("OrderButton").disabled = true;
        document.getElementById('NextButton').style.display = "block";
      }
      return;
    }
    if (direction === "Left") {
      if (circlePositionX >= 600 && CirclePositionLeftFlag === true) {
        this.velocityX = -2;
        this.velocityY = 0;
        if (this.x <= 450) {
          circlePositionX = 450;
          CirclePositionLeftFlag = false;
          this.velocityX = 0;
          this.velocityY = 0;

        }
      } else if (circlePositionX >= 450 && CirclePositionLeftFlag === true) {
        this.velocityX = -2;
        this.velocityY = 0;
        if (this.x <= 300) {
          circlePositionX = 300;
          CirclePositionLeftFlag = false;
          this.velocityX = 0;
          this.velocityY = 0;

        }
      } else if (circlePositionX >= 300 && CirclePositionLeftFlag === true) {
        this.velocityX = -2;
        this.velocityY = 0;
        if (this.x <= 150) {
          circlePositionX = 150;
          CirclePositionLeftFlag = false;
          this.velocityX = 0;
          this.velocityY = 0;

        }
      }
      this.x += this.velocityX;
      if ((this.x > rectPositionX + 50 && this.x < rectPositionX + 200) && (circlePositionY > rectPositionY + 50 && circlePositionY < rectPositionY + 200)) {
        ClearFlag = true;
        CirclePositionLeftFlag = false;
        document.getElementById("clearMessage").style.visibility = "visible";
        document.getElementById("OrderButton").disabled = true;
        document.getElementById('NextButton').style.display = "block";
      }
      return;

    }
    if (direction === "Up") {
      if (circlePositionY >= 600 && CirclePositionUpFlag === true) {
        this.velocityY = -2;
        if (this.y <= 450) {
          circlePositionY = 450;
          CirclePositionUpFlag = false;
          this.velocityX = 0;
          this.velocityY = 0;
          return;
        }
      } else if (circlePositionY >= 450 && CirclePositionUpFlag === true) {
        this.velocityY = -2;
        if (this.y <= 300) {
          circlePositionY = 300;
          CirclePositionUpFlag = false;
          this.velocityX = 0;
          this.velocityY = 0;
          return;
        }
      } else if (circlePositionY >= 300 && CirclePositionUpFlag === true) {
        this.velocityY = -2;
        if (this.y <= 150) {
          circlePositionY = 150;
          CirclePositionUpFlag = false;
          this.velocityX = 0;
          this.velocityY = 0;
          return;
        }
      } else {
        this.velocityX = 0;
        this.velocityY = 0;
        return;
      }
      this.y += this.velocityY;
      if ((circlePositionX > rectPositionX + 50 && circlePositionX < rectPositionX + 200) && (this.y > rectPositionY + 50 && this.y < rectPositionY + 200)) {
        ClearFlag = true;
        CirclePositionUpFlag = false;
        document.getElementById("clearMessage").style.visibility = "visible";
        document.getElementById("OrderButton").disabled = true;
        document.getElementById('NextButton').style.display = "block";
      }
    }
    if (direction === "Down") {
      console.log("下");
      if (circlePositionY <= 150 && CirclePositionDownFlag === true) {
        this.velocityX = 0;
        this.velocityY = 2;
        if (this.y >= 300) {
          circlePositionY = 300;
          CirclePositionDownFlag = false;
          this.velocityX = 0;
          this.velocityY = 0;
          return;
        }
      } else if (circlePositionY <= 300 && CirclePositionDownFlag === true) {
        this.velocityX = 0;
        this.velocityY = 2;
        if (this.y >= 450) {
          circlePositionY = 450;
          CirclePositionDownFlag = false;
          this.velocityX = 0;
          this.velocityY = 0;
          return;
        }
      } else if (circlePositionY <= 450 && CirclePositionDownFlag === true) {
        this.velocityY = 2;
        if (this.y >= 600) {
          circlePositionY = 600;
          CirclePositionDownFlag = false;
          this.velocityY = 0;
          return;
        }
      } else {
        this.velocityY = 0;
        return;
      }
      this.y += this.velocityY;
      if ((circlePositionX > rectPositionX + 50 && circlePositionX < rectPositionX + 200) && (this.y > rectPositionY + 50 && this.y < rectPositionY + 200)) {
        ClearFlag = true;
        CirclePositionDownFlag = false;
        document.getElementById("clearMessage").style.visibility = "visible";
        document.getElementById("OrderButton").disabled = true;
        document.getElementById('NextButton').style.display = "block";
      }
    }
  }
  // 描画メソッド。
  // これが呼ばれるとオブジェクトを描画する。
  render(context) {
    context.beginPath();
    context.fillStyle = 'rgb(255, 0, 0)'; // 赤色
    context.arc(this.x, this.y, 50, 0, 2 * Math.PI);
    context.fill();
  }
}
// 同様に四角形クラス。
class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocityX = 2; // この速度で横に移動する。
    this.velocityY = 2; // この速度で縦に移動する。
  }

  update(direction) {
    if (RectPositionRightFlag === false && RectPositionLeftFlag === false && RectPositionUpFlag === false && RectPositionDownFlag === false) {
      return;
    }
    // direction
    // 0:静止, 1:右, 2:左, 3:上, 4:下,
    if (direction === 0) {
      this.velocityX = 0;
    }
    if (direction === "Right") {
      if (rectPositionX <= 150 && RectPositionRightFlag === true) {
        this.velocityX = 2;
        if (this.x >= 300) {
          rectPositionX = 300;
          RectPositionRightFlag = false;
          this.velocityX = 0;
        }
      } else if (rectPositionX <= 300 && RectPositionRightFlag === true) {
        this.velocityX = 2;
        if (this.x >= 450) {
          rectPositionX = 450;
          RectPositionRightFlag = false;
          this.velocityX = 0;
        }
      } else if (rectPositionX <= 450 && RectPositionRightFlag === true) {
        this.velocityX = 2;
        if (this.x >= 600) {
          rectPositionX = 600;
          RectPositionRightFlag = false;
          this.velocityX = 0;
        }
      } else {
        this.velocityX = 0;
      }

      this.x += this.velocityX;
      if ((circlePositionX > this.x + 50 && circlePositionX < this.x + 200) && (circlePositionY > rectPositionY + 50 && circlePositionY < rectPositionY + 200)) {
        ClearFlag = true;
        RectPositionRightFlag = false;
        document.getElementById("clearMessage").style.visibility = "visible";
        document.getElementById("OrderButton").disabled = true;
        document.getElementById('NextButton').style.display = "block";
      }
    }
    if (direction === "Left") {
      if (rectPositionX >= 600 && RectPositionLeftFlag === true) {
        this.velocityX = -2;
        if (this.x <= 450) {
          rectPositionX = 450;
          RectPositionLeftFlag = false;
          this.velocityX = 0;
        }
      } else if (rectPositionX >= 450 && RectPositionLeftFlag === true) {
        this.velocityX = -2;
        if (this.x <= 300) {
          rectPositionX = 300;
          RectPositionLeftFlag = false;
          this.velocityX = 0;
        }
      } else if (rectPositionX >= 300 && RectPositionLeftFlag === true) {
        this.velocityX = -2;
        if (this.x <= 150) {
          rectPositionX = 150;
          RectPositionLeftFlag = false;
          this.velocityX = 0;
        }
      }
      this.x += this.velocityX;
      if ((circlePositionX > this.x + 50 && circlePositionX < this.x + 200) && (circlePositionY > rectPositionY + 50 && circlePositionY < rectPositionY + 200)) {
        ClearFlag = true;
        RectPositionLeftFlag = false;
        document.getElementById("clearMessage").style.visibility = "visible";
        document.getElementById("OrderButton").disabled = true;
        document.getElementById('NextButton').style.display = "block";
      }
    }
    if (direction === "Up") {
      if (rectPositionY >= 600 && RectPositionUpFlag === true) {
        this.velocityY = -2;
        if (this.y <= 450) {
          rectPositionY = 450;
          RectPositionUpFlag = false;
          this.velocityY = 0;

        }
      } else if (rectPositionY >= 450 && RectPositionUpFlag === true) {
        this.velocityY = -2;
        if (this.y <= 300) {
          rectPositionY = 300;
          RectPositionUpFlag = false;
          this.velocityY = 0;

        }
      } else if (rectPositionY >= 300 && RectPositionUpFlag === true) {
        this.velocityY = -2;
        if (this.y <= 150) {
          rectPositionY = 150;
          RectPositionUpFlag = false;
          this.velocityY = 0;

        }
      } else {
        this.velocityY = 0;
      }
      this.y += this.velocityY;
      if ((circlePositionX > rectPositionX + 50 && circlePositionX < r3rectPositionX + 200) && (circlePositionY > this.y + 50 && circlePositionY < this.y + 200)) {
        ClearFlag = true;
        RectPositionUpFlag = false;
        document.getElementById("clearMessage").style.visibility = "visible";
        document.getElementById("OrderButton").disabled = true;
        document.getElementById('NextButton').style.display = "block";
      }
    }
    if (direction === "Down") {
      console.log("下");
      if (rectPositionY <= 150 && RectPositionDownFlag === true) {
        this.velocityY = 2;
        if (this.y >= 300) {
          rectPositionY = 300;
          RectPositionDownFlag = false;
          this.velocityY = 0;

        }
      } else if (rectPositionY <= 300 && RectPositionDownFlag === true) {
        this.velocityY = 2;
        if (this.y >= 450) {
          rectPositionY = 450;
          RectPositionDownFlag = false;
          this.velocityY = 0;

        }
      } else if (rectPositionY <= 450 && RectPositionDownFlag === true) {
        this.velocityY = 2;
        if (this.y >= 600) {
          rectPositionY = 600;
          RectPositionDownFlag = false;
          this.velocityY = 0;

        }
      } else {
        this.velocityY = 0;

      }
      this.y += this.velocityY;
      if ((circlePositionX > rectPositionX + 50 && circlePositionX < r3rectPositionX + 200) && (circlePositionY > this.y + 50 && circlePositionY < this.y + 200)) {
        ClearFlag = true;
        RectPositionDownFlag = false;
        document.getElementById("clearMessage").style.visibility = "visible";
        document.getElementById("OrderButton").disabled = true;
        document.getElementById('NextButton').style.display = "block";
      }
    }
  }

  // update(direction) {
  //   if (direction === 0) {
  //     this.velocityY = 0;
  //   }
  //
  //
  //   this.x += this.velocityX;
  //   this.y += this.velocityY;
  // }
  render(context) {
    context.beginPath();
    context.fillStyle = 'rgb(0, 0, 255)'; // 青色
    context.rect(this.x, this.y, this.width, this.height);
    context.fill();
  }
}
//
// メイン処理。
//
// オブジェクトを管理する配列。
const objects1 = [];
const objects2 = [];
// 円と四角形を1個ずつ追加。
objects2.push(new Rectangle(450, 450, 250, 250));
objects2.forEach((obj) => obj.render(context));
objects1.push(new Circle(150, 150, 50));
objects1.forEach((obj) => obj.render(context));

function Run() {
  var code = document.getElementById('codeEditer').value;
  // document.getElementById('codeEditer').value = "";
  if (code === "red.Right") {
    CirclePositionRightFlag = true

    function loop(timestamp) {
      context.clearRect(0, 0, WIDTH, HEIGHT);
      objects2.forEach((obj) => obj.update(0));
      objects2.forEach((obj) => obj.render(context));
      objects1.forEach((obj) => obj.update("Right"));
      objects1.forEach((obj) => obj.render(context));

      window.requestAnimationFrame((ts) => loop(ts));
    }
    if (CirclePositionRightFlag = true) {
      window.requestAnimationFrame((ts) => loop(ts));
    } else {
      // return;
    }
    // window.requestAnimationFrame((ts) => loop(ts));
  } else if (code === "red.Left") {
    CirclePositionLeftFlag = true

    function loop(timestamp) {
      context.clearRect(0, 0, WIDTH, HEIGHT);
      objects2.forEach((obj) => obj.update(0));
      objects2.forEach((obj) => obj.render(context));
      objects1.forEach((obj) => obj.update("Left"));
      objects1.forEach((obj) => obj.render(context));
      window.requestAnimationFrame((ts) => loop(ts));
    }
    if (CirclePositionLeftFlag = true) {
      window.requestAnimationFrame((ts) => loop(ts));
    } else {
      return;
    }
    // window.requestAnimationFrame((ts) => loop(ts));

  } else if (code === "red.Up") {
    CirclePositionUpFlag = true;

    function loop(timestamp) {
      context.clearRect(0, 0, WIDTH, HEIGHT);
      objects2.forEach((obj) => obj.update(0));
      objects2.forEach((obj) => obj.render(context));
      objects1.forEach((obj) => obj.update("Up"));
      objects1.forEach((obj) => obj.render(context));
      window.requestAnimationFrame((ts) => loop(ts));
    }
    if (CirclePositionUpFlag = true) {
      window.requestAnimationFrame((ts) => loop(ts));
    } else {
      return;
    }
    // window.requestAnimationFrame((ts) => loop(ts));

  } else if (code === "red.Down") {
    CirclePositionDownFlag = true;

    function loop(timestamp) {
      context.clearRect(0, 0, WIDTH, HEIGHT);
      objects2.forEach((obj) => obj.update(0));
      objects2.forEach((obj) => obj.render(context));
      objects1.forEach((obj) => obj.update("Down"));
      objects1.forEach((obj) => obj.render(context));
      window.requestAnimationFrame((ts) => loop(ts));
    }
    if (CirclePositionDownFlag = true) {
      window.requestAnimationFrame((ts) => loop(ts));
    } else {
      return;
    }

  }
  //以下青
  if (code === "Blue.Right") {
    RectPositionRightFlag = true;

    function loop(timestamp) {
      context.clearRect(0, 0, WIDTH, HEIGHT);
      objects2.forEach((obj) => obj.update("Right"));
      objects2.forEach((obj) => obj.render(context));
      objects1.forEach((obj) => obj.update(0));
      objects1.forEach((obj) => obj.render(context));

      window.requestAnimationFrame((ts) => loop(ts));
    }
    if (RectPositionRightFlag = true) {
      window.requestAnimationFrame((ts) => loop(ts));
    } else {
      return;
    }
    // window.requestAnimationFrame((ts) => loop(ts));
  } else if (code === "blue.Left") {
    RectPositionLeftFlag = true;

    function loop(timestamp) {
      context.clearRect(0, 0, WIDTH, HEIGHT);
      objects2.forEach((obj) => obj.update("Left"));
      objects2.forEach((obj) => obj.render(context));
      objects1.forEach((obj) => obj.update(0));
      objects1.forEach((obj) => obj.render(context));
      window.requestAnimationFrame((ts) => loop(ts));
    }
    if (RectPositionLeftFlag = true) {
      window.requestAnimationFrame((ts) => loop(ts));
    } else {
      return;
    }
    // window.requestAnimationFrame((ts) => loop(ts));

  } else if (code === "blue.Up") {
    RectPositionUpFlag = true;

    function loop(timestamp) {
      context.clearRect(0, 0, WIDTH, HEIGHT);
      objects2.forEach((obj) => obj.update("Up"));
      objects2.forEach((obj) => obj.render(context));
      objects1.forEach((obj) => obj.update(0));
      objects1.forEach((obj) => obj.render(context));
      window.requestAnimationFrame((ts) => loop(ts));
    }
    if (RectPositionUpFlag = true) {
      window.requestAnimationFrame((ts) => loop(ts));
    } else {
      return;
    }
    // window.requestAnimationFrame((ts) => loop(ts));

  } else if (code === "blue.Down") {
    RectPositionDownFlag = true;

    function loop(timestamp) {
      context.clearRect(0, 0, WIDTH, HEIGHT);
      objects2.forEach((obj) => obj.update("Down"));
      objects2.forEach((obj) => obj.render(context));
      objects1.forEach((obj) => obj.update(0));
      objects1.forEach((obj) => obj.render(context));
      window.requestAnimationFrame((ts) => loop(ts));
    }
    if (RectPositionDownFlag = true) {
      window.requestAnimationFrame((ts) => loop(ts));
    } else {
      return;
    }

  }

}
