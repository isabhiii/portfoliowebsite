/**
 * Snake Game Mode for Portfolio
 * Pure JavaScript Snake game running on a full-screen canvas overlay.
 * Text blocks act as physical obstacles.
 */

(function () {
  let gameActive = false;
  let canvas = null;
  let ctx = null;
  let loopInterval = null;
  
  // Game parameters
  const GRID_SIZE = 20;
  const GAME_SPEED = 160; // Update interval in ms (slower movement)
  
  let snake = [];
  let direction = 'right';
  let nextDirection = 'right';
  let fruit = { x: 0, y: 0 };
  let score = 0;
  const WIN_SCORE = 5;
  let pendingGrowth = 0;
  
  let obstacles = [];
  
  // Modal DOM elements
  let overlayEl = null;
  let modalEl = null;
  let modalTitleEl = null;
  let modalDescEl = null;
  let modalBtnEl = null;

  function init() {
    // 1. Create canvas element
    canvas = document.createElement('canvas');
    canvas.id = 'gameCanvas';
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');
    
    // 2. Create Modal structure if it doesn't exist
    createModalDOM();
    
    // 3. Set up event listener on Game Toggle button
    const toggleBtn = document.getElementById('gameModeToggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleGameMode);
    }
    
    // Listen to resize to update boundaries and obstacles
    window.addEventListener('resize', handleResize);
    
    // Listen to keys
    window.addEventListener('keydown', handleKeyDown, { passive: false });
  }

  function createModalDOM() {
    overlayEl = document.createElement('div');
    overlayEl.className = 'game-overlay';
    
    modalEl = document.createElement('div');
    modalEl.className = 'game-modal';
    
    modalTitleEl = document.createElement('h3');
    modalTitleEl.className = 'game-modal-title';
    
    modalDescEl = document.createElement('p');
    modalDescEl.className = 'game-modal-desc';
    
    modalBtnEl = document.createElement('button');
    modalBtnEl.className = 'game-modal-btn';
    modalBtnEl.textContent = 'Restart';
    modalBtnEl.addEventListener('click', () => {
      hideModal();
      startGame();
    });
    
    modalEl.appendChild(modalTitleEl);
    modalEl.appendChild(modalDescEl);
    modalEl.appendChild(modalBtnEl);
    overlayEl.appendChild(modalEl);
    document.body.appendChild(overlayEl);
  }

  function showModal(title, description, buttonText = 'Restart') {
    modalTitleEl.innerHTML = title;
    modalDescEl.textContent = description;
    modalBtnEl.textContent = buttonText;
    
    // Update button action based on win/lose
    if (buttonText === 'Play Again' || buttonText === 'Restart') {
      modalBtnEl.onclick = () => {
        hideModal();
        startGame();
      };
    } else {
      modalBtnEl.onclick = () => {
        hideModal();
        toggleGameMode();
      };
    }
    
    overlayEl.classList.add('active');
  }

  function hideModal() {
    overlayEl.classList.remove('active');
  }

  function toggleGameMode() {
    const toggleBtn = document.getElementById('gameModeToggle');
    const toggleText = toggleBtn ? toggleBtn.querySelector('.game-text') : null;
    const scoreboard = document.getElementById('gameScoreboard');
    
    if (gameActive) {
      // Turn game OFF
      gameActive = false;
      document.body.classList.remove('game-mode-active');
      canvas.style.display = 'none';
      if (scoreboard) scoreboard.style.display = 'none';
      if (toggleText) toggleText.textContent = 'GAME MODE: OFF';
      stopGame();
      hideModal();
    } else {
      // Turn game ON
      gameActive = true;
      document.body.classList.add('game-mode-active');
      canvas.style.display = 'block';
      if (scoreboard) scoreboard.style.display = 'inline-flex';
      if (toggleText) toggleText.textContent = 'GAME MODE: ON';
      startGame();
    }
  }

  function handleResize() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (gameActive) {
      updateObstacles();
    }
  }

  function updateObstacles() {
    obstacles = [];
    const elements = document.querySelectorAll('.game-obstacle');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      // Only include visible, non-empty elements
      if (rect.width > 0 && rect.height > 0) {
        obstacles.push({
          left: rect.left,
          top: rect.top,
          right: rect.right,
          bottom: rect.bottom
        });
      }
    });
  }

  function startGame() {
    handleResize();
    updateObstacles();
    
    // Initialise snake in a safe space near the top center
    const startX = Math.floor(window.innerWidth / 2 / GRID_SIZE) * GRID_SIZE;
    const startY = 80; // Safe position below navbar
    
    snake = [
      { x: startX, y: startY },
      { x: startX - GRID_SIZE, y: startY },
      { x: startX - 2 * GRID_SIZE, y: startY }
    ];
    
    direction = 'right';
    nextDirection = 'right';
    score = 0;
    pendingGrowth = 0;
    
    // Update live counter badge if it exists
    updateScoreBadge();
    
    spawnFruit();
    
    if (loopInterval) clearInterval(loopInterval);
    loopInterval = setInterval(gameStep, GAME_SPEED);
  }

  function stopGame() {
    if (loopInterval) {
      clearInterval(loopInterval);
      loopInterval = null;
    }
  }

  function updateScoreBadge() {
    const scoreboard = document.getElementById('gameScoreboard');
    if (scoreboard) {
      scoreboard.textContent = `${score}/${WIN_SCORE}`;
    }
  }

  function spawnFruit() {
    const margin = 40;
    const size = GRID_SIZE;
    let attempts = 0;
    
    while (attempts < 200) {
      const fx = margin + Math.floor(Math.random() * (window.innerWidth - 2 * margin - size));
      const fy = margin + Math.floor(Math.random() * (window.innerHeight - 2 * margin - size));
      
      // Keep alignment close to grid
      const alignedX = Math.round(fx / GRID_SIZE) * GRID_SIZE;
      const alignedY = Math.round(fy / GRID_SIZE) * GRID_SIZE;
      
      // Ensure coordinates are strictly within bounds
      if (alignedX < margin || alignedX > window.innerWidth - margin ||
          alignedY < margin || alignedY > window.innerHeight - margin) {
        attempts++;
        continue;
      }

      // Check collision with obstacles
      let insideObstacle = false;
      const fRect = {
        left: alignedX - 5,
        top: alignedY - 5,
        right: alignedX + size + 5,
        bottom: alignedY + size + 5
      };
      
      for (const obstacle of obstacles) {
        if (
          fRect.left < obstacle.right &&
          fRect.right > obstacle.left &&
          fRect.top < obstacle.bottom &&
          fRect.bottom > obstacle.top
        ) {
          insideObstacle = true;
          break;
        }
      }
      
      // Check collision with snake
      let onSnake = false;
      for (const part of snake) {
        if (Math.abs(part.x - alignedX) < GRID_SIZE && Math.abs(part.y - alignedY) < GRID_SIZE) {
          onSnake = true;
          break;
        }
      }
      
      if (!insideObstacle && !onSnake) {
        fruit = { x: alignedX, y: alignedY };
        return;
      }
      attempts++;
    }
    // Fallback
    fruit = { x: GRID_SIZE * 5, y: GRID_SIZE * 5 };
  }

  function handleKeyDown(e) {
    if (!gameActive) return;
    
    // Prevent browser scrolling with arrow keys or space
    const gameKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'w', 'a', 's', 'd', 'W', 'A', 'S', 'D'];
    if (gameKeys.includes(e.key)) {
      e.preventDefault();
    }
    
    switch (e.key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        if (direction !== 'down') nextDirection = 'up';
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        if (direction !== 'up') nextDirection = 'down';
        break;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        if (direction !== 'right') nextDirection = 'left';
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        if (direction !== 'left') nextDirection = 'right';
        break;
    }
  }

  function gameStep() {
    direction = nextDirection;
    
    // Calculate new head position
    const head = { ...snake[0] };
    switch (direction) {
      case 'up':    head.y -= GRID_SIZE; break;
      case 'down':  head.y += GRID_SIZE; break;
      case 'left':  head.x -= GRID_SIZE; break;
      case 'right': head.x += GRID_SIZE; break;
    }
    
    // Check collisions
    if (checkCollision(head)) {
      gameOver();
      return;
    }
    
    // Add new head to snake
    snake.unshift(head);
    
    // Check if snake eats fruit
    const dist = Math.hypot(head.x - fruit.x, head.y - fruit.y);
    if (dist < GRID_SIZE) {
      score++;
      updateScoreBadge();
      if (score >= WIN_SCORE) {
        gameVictory();
        return;
      }
      pendingGrowth += 2; // Grows by 1 immediately (not popping tail) + 2 more in subsequent steps = 3 total
      spawnFruit();
    } else {
      if (pendingGrowth > 0) {
        pendingGrowth--;
      } else {
        // Remove tail segment
        snake.pop();
      }
    }
    
    draw();
  }

  function checkCollision(head) {
    // 1. Boundary check
    if (head.x < 0 || head.y < 0 || head.x + GRID_SIZE > window.innerWidth || head.y + GRID_SIZE > window.innerHeight) {
      return true;
    }
    
    // 2. Self collision
    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        return true;
      }
    }
    
    // 3. Obstacle collision
    const hRect = {
      left: head.x,
      top: head.y,
      right: head.x + GRID_SIZE,
      bottom: head.y + GRID_SIZE
    };
    
    for (const obstacle of obstacles) {
      if (
        hRect.left < obstacle.right &&
        hRect.right > obstacle.left &&
        hRect.top < obstacle.bottom &&
        hRect.bottom > obstacle.top
      ) {
        return true;
      }
    }
    
    return false;
  }

  function gameOver() {
    stopGame();
    showModal(
      '💥 Game Over',
      'Oops! You collided with a text block or edge.',
      'Restart'
    );
  }

  function gameVictory() {
    stopGame();
    showModal(
      '🏆 Victory!',
      'Incredible! You safely collected 5 fruits and beat the game.',
      'Play Again'
    );
  }

  function draw() {
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw Fruit
    ctx.beginPath();
    ctx.arc(fruit.x + GRID_SIZE / 2, fruit.y + GRID_SIZE / 2, GRID_SIZE / 2 - 2, 0, Math.PI * 2);
    ctx.fillStyle = '#ef4444'; // Red/Vermilion color matching branding
    ctx.fill();
    // Shiny highlight on fruit
    ctx.beginPath();
    ctx.arc(fruit.x + GRID_SIZE / 3, fruit.y + GRID_SIZE / 3, 2, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    
    // Draw Snake
    snake.forEach((part, index) => {
      ctx.beginPath();
      // Draw head with rounded nose, body as rounded blocks
      const radius = index === 0 ? 8 : 4;
      ctx.roundRect(part.x + 1, part.y + 1, GRID_SIZE - 2, GRID_SIZE - 2, radius);
      
      // Color gradient: dark green head to vibrant green body
      if (index === 0) {
        ctx.fillStyle = '#10b981'; // Primary Emerald Green for head
      } else {
        ctx.fillStyle = `rgba(16, 185, 129, ${1 - index / (snake.length + 2)})`; // Fades out slightly
      }
      ctx.fill();
      
      // Draw eyes on head
      if (index === 0) {
        ctx.fillStyle = '#ffffff';
        // Draw two small white dots for eyes depending on direction
        let eye1 = { x: 0, y: 0 };
        let eye2 = { x: 0, y: 0 };
        if (direction === 'right' || direction === 'left') {
          const offset = direction === 'right' ? GRID_SIZE - 6 : 4;
          eye1 = { x: part.x + offset, y: part.y + 5 };
          eye2 = { x: part.x + offset, y: part.y + GRID_SIZE - 7 };
        } else {
          const offset = direction === 'down' ? GRID_SIZE - 6 : 4;
          eye1 = { x: part.x + 5, y: part.y + offset };
          eye2 = { x: part.x + GRID_SIZE - 7, y: part.y + offset };
        }
        ctx.beginPath();
        ctx.arc(eye1.x, eye1.y, 2, 0, Math.PI * 2);
        ctx.arc(eye2.x, eye2.y, 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw tongue on head
        const time = Date.now();
        const showTongue = Math.floor(time / 450) % 2 === 0; // slower flickering
        
        if (showTongue) {
          ctx.strokeStyle = '#ef4444'; // Red tongue matching theme accent
          ctx.lineWidth = 2.5;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.beginPath();
          
          let startX = part.x + GRID_SIZE / 2;
          let startY = part.y + GRID_SIZE / 2;
          let midX = startX;
          let midY = startY;
          let fork1X, fork1Y, fork2X, fork2Y;
          
          const ext = 8; // length of extension
          const fork = 4; // length of fork
          
          if (direction === 'right') {
            startX = part.x + GRID_SIZE - 2;
            midX = startX + ext;
            midY = startY;
            fork1X = midX + fork; fork1Y = midY - fork;
            fork2X = midX + fork; fork2Y = midY + fork;
          } else if (direction === 'left') {
            startX = part.x + 2;
            midX = startX - ext;
            midY = startY;
            fork1X = midX - fork; fork1Y = midY - fork;
            fork2X = midX - fork; fork2Y = midY + fork;
          } else if (direction === 'up') {
            startY = part.y + 2;
            midX = startX;
            midY = startY - ext;
            fork1X = midX - fork; fork1Y = midY - fork;
            fork2X = midX + fork; fork2Y = midY - fork;
          } else if (direction === 'down') {
            startY = part.y + GRID_SIZE - 2;
            midX = startX;
            midY = startY + ext;
            fork1X = midX - fork; fork1Y = midY + fork;
            fork2X = midX + fork; fork2Y = midY + fork;
          }
          
          ctx.moveTo(startX, startY);
          ctx.lineTo(midX, midY);
          ctx.moveTo(midX, midY);
          ctx.lineTo(fork1X, fork1Y);
          ctx.moveTo(midX, midY);
          ctx.lineTo(fork2X, fork2Y);
          ctx.stroke();
        }
      }
    });
  }

  // Initialise on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
