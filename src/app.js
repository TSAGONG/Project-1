window.onload = function(){

var canvas = document.createElement('canvas');
var ctx =  canvas.getContext('2d');

canvas.width = 950;
canvas.height = 700;

ctx.font = "15px 'Press Start 2P', cursive";

var body = document.getElementsByTagName('body')[0];
body.appendChild(canvas);


function init(){
  direction = 'right';
  score = 0;
  body = [
    {x: 100, y: 100},
    {x:100, y: 100}
  ];
}

init();

function createFood(){
  food = {
    x: Math.floor(Math.random()*39),
    y: Math.floor(Math.random()*24)};

  for(var i=0; i<body.length; i++){
    var snake = body[i];
    if(food.x*20 == snake.x && food.y*20 == snake.y){
    }
  }
}

createFood();

document.addEventListener('keydown', function(e){

  if(e.keyCode === 37 && direction != 'right'){
    direction = 'left';
  }
  else if(e.keyCode === 38 && direction != 'down'){
    direction = 'up';
  }
  else if(e.keyCode === 39 && direction != 'left'){
    direction = 'right';
  }
  else if(e.keyCode === 40 && direction != 'up'){
    direction = 'down';
  }
});

function eat(){
  var lastBall = body[body.length-1];
  if(direction == 'right'){
     body.push({x:lastBall.x +20, y:lastBall.y})
  }
  if(direction == 'down'){
     body.push({x:lastBall.x, y:lastBall.y +20})
  }
  if(direction == 'left'){
     body.push({x:lastBall.x -20, y:lastBall.y})
  }
  if(direction == 'up'){
     body.push({x:lastBall.x, y:lastBall.y -20})
  }
}

/*function collission(){
  if(body[0].x<0 || body[0].x>=)
}*/

function ani(){
  ctx.clearRect(0, 0, 950, 700);
  body.shift();
  eat();
  var lastBall = body[body.length-1];

  if(lastBall.x == food.x*20 && lastBall.y == food.y*20 ){
    score += 5;
    eat();
    createFood();
  }

  for(var i=0; i<body.length; i++){
    snake = body[i];
    if(i === body.length-1){
      ctx.fillStyle = '#43FF00';
    }

  // This goes past the canvas and returns from the other side of the canvas.
  /*  if(body.x >= 974 || body.x <= 974){
      console.log('gameover');
    }
    if(body.y >=724 || body.y <= 724){
      console.log('gameover');
    }*/

    if (snake.x ==lastBall.x && snake.y == lastBall.y && i < body.length-2){
      alert('Game Over, Your Score Is ' + score);
      init();
    }

    ctx.fillRect(snake.x, snake.y, 19, 19);
  }
  ctx.fillRect(food.x*20, food.y*20, 19, 19);

  ctx.fillText('Score: ' + score , 10, canvas.height-10);
}

setInterval(ani, 60);

}


