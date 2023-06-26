const player = document.getElementById('player');
const stones = document.getElementsByClassName('stones')[0].children;
const moveSize = 40;
var playerWalk = 0;
var canvasWidth = 790;
var canvasHeight = 794;

function detectCollision(player) {
  const playerRect = player.getBoundingClientRect();

  for (let i = 0; i < stones.length; i++) {
    const stoneRect = stones[i].getBoundingClientRect();

    if (
      playerRect.left < stoneRect.right &&
      playerRect.right > stoneRect.left &&
      playerRect.top < stoneRect.bottom &&
      playerRect.bottom > stoneRect.top
    ) {
      // Collision détectée !
      console.log('Collision avec la pierre détectée !');
      return true; // Indiquer qu'une collision a été détectée
    }
  }

  // Pas de collision
  console.log('Pas de collision avec la pierre.');
  return false; // Indiquer qu'il n'y a pas de collision
}

document.addEventListener('keydown', function(event) {
  if (event.key == 'z' && player.offsetTop - moveSize >= 0) {
    const newTop = player.offsetTop - moveSize;
    player.style.top = newTop + "px";

    if (!detectCollision(player)) {
      playerWalk = playerWalk + 1;
      if (player.style.backgroundImage === 'url("img/5.png")') {
        player.style.backgroundImage = 'url("img/6.png")';
      } else {
        player.style.backgroundImage = 'url("img/5.png")';
      }
    } else {
      player.style.top = (newTop + moveSize) + "px";
    }
  } else if (event.key == 'd' && player.offsetLeft + moveSize <= canvasWidth - player.offsetWidth) {
    const newLeft = player.offsetLeft + moveSize;
    player.style.left = newLeft + "px";

    if (!detectCollision(player)) {
      playerWalk = playerWalk + 1;
      if (player.style.backgroundImage === 'url("img/7.png")') {
        player.style.backgroundImage = 'url("img/8.png")';
      } else {
        player.style.backgroundImage = 'url("img/7.png")';
      }
    } else {
      player.style.left = (newLeft - moveSize) + "px";
    }
  } else if (event.key == 's' && player.offsetTop + moveSize <= canvasHeight - player.offsetHeight) {
    const newTop = player.offsetTop + moveSize;
    player.style.top = newTop + "px";

    if (!detectCollision(player)) {
      playerWalk = playerWalk + 1;
      if (player.style.backgroundImage === 'url("img/1.png")') {
        player.style.backgroundImage = 'url("img/2.png")';
      } else {
        player.style.backgroundImage = 'url("img/1.png")';
      }
    } else {
      player.style.top = (newTop - moveSize) + "px";
    }
  } else if (event.key == 'q' && player.offsetLeft - moveSize >= 0) {
    const newLeft = player.offsetLeft - moveSize;
    player.style.left = newLeft + "px";

    if (!detectCollision(player)) {
      playerWalk = playerWalk + 1;
      if (player.style.backgroundImage === 'url("img/3.png")') {
        player.style.backgroundImage = 'url("img/4.png")';
      } else {
        player.style.backgroundImage = 'url("img/3.png")';
      }
    } else {
      player.style.left = (newLeft + moveSize) + "px";
    }
  }
});

document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowUp' && player2.offsetTop - moveSize >= 0) {
    const newTop = player2.offsetTop - moveSize;
    player2.style.top = newTop + "px";

    if (!detectCollision(player2)) {
      playerWalk = playerWalk + 1;
      if (player2.style.backgroundImage === 'url("img/5.png")') {
        player2.style.backgroundImage = 'url("img/6.png")';
      } else {
        player2.style.backgroundImage = 'url("img/5.png")';
      }
    } else {
      player2.style.top = (newTop + moveSize) + "px";
    }
  } else if (event.code == 'ArrowRight' && player2.offsetLeft + moveSize <= canvasWidth - player2.offsetWidth) {
    const newLeft = player2.offsetLeft + moveSize;
    player2.style.left = newLeft + "px";

    if (!detectCollision(player2)) {
      playerWalk = playerWalk + 1;
      if (player2.style.backgroundImage === 'url("img/7.png")') {
        player2.style.backgroundImage = 'url("img/8.png")';
      } else {
        player2.style.backgroundImage = 'url("img/7.png")';
      }
    } else {
      player2.style.left = (newLeft - moveSize) + "px";
    }
  } else if (event.code== 'ArrowDown' && player2.offsetTop + moveSize <= canvasHeight - player2.offsetHeight) {
    const newTop = player2.offsetTop + moveSize;
    player2.style.top = newTop + "px";

    if (!detectCollision(player2)) {
      playerWalk = playerWalk + 1;
      if (player2.style.backgroundImage === 'url("img/1.png")') {
        player2.style.backgroundImage = 'url("img/2.png")';
      } else {
        player2.style.backgroundImage = 'url("img/1.png")';
      }
    } else {
      player2.style.top = (newTop - moveSize) + "px";
    }
  } else if (event.code == 'ArrowLeft' && player2.offsetLeft - moveSize >= 0) {
    const newLeft = player2.offsetLeft - moveSize;
    player2.style.left = newLeft + "px";

    if (!detectCollision(player2)) {
      playerWalk = playerWalk + 1;
      if (player2.style.backgroundImage === 'url("img/3.png")') {
        player2.style.backgroundImage = 'url("img/4.png")';
      } else {
        player2.style.backgroundImage = 'url("img/3.png")';
      }
    } else {
      player2.style.left = (newLeft + moveSize) + "px";
    }
  }
});
