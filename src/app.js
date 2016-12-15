window.onload = function(){

  const canvas = document.getElementById('gameBoard'), // retrives the node in the DOM
  ctx = canvas.getContext('2d');  // this method accesses the drawing context

  ctx.fillStyle = 'yellow';
  ctx.fillRect(0, 0, 100, 100); //draws a filled rectangle at the X, Y position.
  ctx.fill();

}


