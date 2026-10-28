/* eslint-disable */
// @ts-nocheck
/**
 * All interactive behaviour of the portfolio, ported from the original index.html:
 * theme toggle, nav + Play view, resume / ask modals, orchestrator demo, RFID lab,
 * project diagrams (arrows + moving packets), music player and the three arcade games.
 * It attaches to the markup rendered by the React components in src/components.
 */
export function initPortfolio(): void {
  if (typeof window === "undefined") return;
  if ((window as any).__portfolioInit) return; /* never initialise twice */
  (window as any).__portfolioInit = true;

  /* ---- part 1 ---- */
(function() {
  'use strict';

  // -------------------------------------------------------------
  // Theme Toggle & Local Storage
  // -------------------------------------------------------------
  var root = document.documentElement;
  function lsGet(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} }
  var themeToggleBtn = document.getElementById('themeToggleBtn');
  var savedTheme = lsGet('jp_theme') === 'light' ? 'light' : 'dark';
  root.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function() {
      var current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      var next = current === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      lsSet('jp_theme', next);
    });
  }

  // -------------------------------------------------------------
  // Interactive 3D Cyber Matrix Canvas (Image 2 Aesthetic)
  // Cursor-reactive isometric illuminated cubes & particles
  // -------------------------------------------------------------
  var canvas = document.getElementById('cyberCanvas');
  var ctx = canvas.getContext('2d');
  var mouse = { x: -9999, y: -9999, targetX: -9999, targetY: -9999 };
  var goldOrb = document.getElementById('goldOrb');
  var orbPos = { x: window.innerWidth * 0.55, y: window.innerHeight * 0.45 };

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  window.addEventListener('pointermove', function(e) {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
  });

  // Starfield particles
  var stars = [];
  var STAR_COUNT = 70;
  for (var s = 0; s < STAR_COUNT; s++) {
    stars.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.8 + 0.6,
      baseAlpha: Math.random() * 0.6 + 0.2,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.4 + 0.1
    });
  }

  // Isometric Grid parameters
  var COLS = 14;
  var ROWS = 10;
  var TILE_W = 68;
  var TILE_H = 34;

  function drawIsometricCube(cx, cy, size, elevation, glowFactor) {
    var hw = size;
    var hh = size * 0.5;
    var h = 18 + elevation * 22; // Height of cube

    // Top face
    ctx.beginPath();
    ctx.moveTo(cx, cy - hh - h);
    ctx.lineTo(cx + hw, cy - h);
    ctx.lineTo(cx, cy + hh - h);
    ctx.lineTo(cx - hw, cy - h);
    ctx.closePath();

    if (glowFactor > 0.05) {
      ctx.fillStyle = 'rgba(139, 92, 246, ' + (0.15 + glowFactor * 0.4) + ')';
      ctx.strokeStyle = glowFactor > 0.4 ? 'rgba(var(--spot), ' + (glowFactor * 0.8) + ')' : 'rgba(6, 182, 212, ' + (glowFactor * 0.6) + ')';
      ctx.lineWidth = 1.2 + glowFactor * 1.5;
    } else {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.2)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 0.8;
    }
    ctx.fill();
    ctx.stroke();

    // Right face
    ctx.beginPath();
    ctx.moveTo(cx, cy + hh - h);
    ctx.lineTo(cx + hw, cy - h);
    ctx.lineTo(cx + hw, cy);
    ctx.lineTo(cx, cy + hh);
    ctx.closePath();
    ctx.fillStyle = glowFactor > 0.1 ? 'rgba(20, 25, 45, ' + (0.3 + glowFactor * 0.4) + ')' : 'rgba(8, 12, 22, 0.2)';
    ctx.fill();
    ctx.stroke();

    // Left face
    ctx.beginPath();
    ctx.moveTo(cx, cy + hh - h);
    ctx.lineTo(cx - hw, cy - h);
    ctx.lineTo(cx - hw, cy);
    ctx.lineTo(cx, cy + hh);
    ctx.closePath();
    ctx.fillStyle = glowFactor > 0.1 ? 'rgba(30, 38, 65, ' + (0.4 + glowFactor * 0.4) + ')' : 'rgba(11, 16, 28, 0.2)';
    ctx.fill();
    ctx.stroke();
  }

  function renderCyberScene(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Mouse lerp
    mouse.x += (mouse.targetX - mouse.x) * 0.08;
    mouse.y += (mouse.targetY - mouse.y) * 0.08;

    // Golden Orb inertia
    if (goldOrb) {
      orbPos.x += (mouse.x - orbPos.x) * 0.045;
      orbPos.y += (mouse.y - orbPos.y) * 0.045;
      goldOrb.style.left = orbPos.x + 'px';
      goldOrb.style.top = orbPos.y + 'px';
    }

    // 1. Draw drifting starfield
    for (var i = 0; i < stars.length; i++) {
      var st = stars[i];
      st.y -= st.speed;
      if (st.y < 0) st.y = canvas.height;
      var alpha = st.baseAlpha + Math.sin(time * 0.002 + st.phase) * 0.25;
      ctx.fillStyle = (root.getAttribute('data-theme') === 'light' ? 'rgba(40, 55, 120, ' : 'rgba(255, 255, 255, ') + Math.max(0, Math.min(1, alpha)) + ')';
      ctx.beginPath();
      ctx.arc(st.x, st.y, st.size, 0, Math.PI * 2);
      ctx.fill();
    }

    // 2. Soft flowing lines
    var lt = root.getAttribute('data-theme') === 'light', cols = lt ? ['59,79,216','10,124,134','154,91,0'] : ['139,155,255','110,211,197','242,200,121'], sy = window.pageYOffset * 0.2;
    ctx.globalCompositeOperation = 'source-over';
    for (var k = 0; k < 6; k++) {
      ctx.beginPath();
      for (var x = 0; x <= canvas.width; x += 14) {
        var y = canvas.height * (0.18 + 0.14 * k) - sy * (0.3 + k * 0.08) + Math.sin(x * 0.0035 + time * 0.00035 * (1 + k * 0.12) + k * 1.9) * 60 + Math.sin(x * 0.009 - time * 0.0006 + k) * 18 + (mouse.y - canvas.height / 2) * 0.03 * (k - 2.5);
        if (x) ctx.lineTo(x, y); else ctx.moveTo(x, y);
      }
      ctx.strokeStyle = 'rgba(' + cols[k % 3] + ',' + (lt ? 0.22 : 0.17) + ')';
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }
    requestAnimationFrame(renderCyberScene);
  }
  requestAnimationFrame(renderCyberScene);

  // -------------------------------------------------------------
  // Active Navigation Pill Indicator on Scroll
  // -------------------------------------------------------------
  var sections = document.querySelectorAll('section[id], #about');
  var navLinks = document.querySelectorAll('.nav-pill-wrapper .nav-item');

  function setActiveLink(id) {
    navLinks.forEach(function(lnk) {
      lnk.classList.toggle('active', lnk.getAttribute('href') === '#' + id);
    });
  }
  function updateActiveNav() {
    if (document.body.classList.contains('view-play')) { setActiveLink('arcade'); return; }
    var scrollY = window.pageYOffset + 120;
    sections.forEach(function(sec) {
      var top = sec.offsetTop;
      var height = sec.offsetHeight;
      var id = sec.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        setActiveLink(id);
      }
    });

    // Floating back to top visibility
    var floatingBackTop = document.getElementById('floatingBackTop');
    if (floatingBackTop) {
      if (window.pageYOffset > 400) {
        floatingBackTop.classList.add('visible');
      } else {
        floatingBackTop.classList.remove('visible');
      }
    }
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });
  window.__jpNav = updateActiveNav;

  var floatingBackTop = document.getElementById('floatingBackTop');
  if (floatingBackTop) {
    floatingBackTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile Drawer
  var mobileMenuBtn = document.getElementById('mobileMenuBtn');
  var mobileDrawer = document.getElementById('mobileDrawer');
  var closeDrawerBtn = document.getElementById('closeDrawerBtn');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileDrawer.classList.add('open');
    });
    closeDrawerBtn.addEventListener('click', function() {
      mobileDrawer.classList.remove('open');
    });
    document.querySelectorAll('.mobile-nav-link').forEach(function(l) {
      l.addEventListener('click', function() {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // -------------------------------------------------------------
  // Testimonials / Recommendations Slider (Card 2)
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // Resume Modal & Download PDF Handler (Matching Image 3)
  // -------------------------------------------------------------
  var openResumeBtn = document.getElementById('openResumeBtn');
  var closeResumeBtn = document.getElementById('closeResumeBtn');
  var resumeModalBackdrop = document.getElementById('resumeModalBackdrop');
  var printPdfBtn = document.getElementById('printPdfBtn');

  function openResume() {
    resumeModalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeResume() {
    resumeModalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (openResumeBtn) openResumeBtn.addEventListener('click', openResume);
  if (closeResumeBtn) closeResumeBtn.addEventListener('click', closeResume);
  if (resumeModalBackdrop) {
    resumeModalBackdrop.addEventListener('click', function(e) {
      if (e.target === resumeModalBackdrop) closeResume();
    });
  }
  if (printPdfBtn) {
    printPdfBtn.addEventListener('click', function() {
      window.print();
    });
  }

  // -------------------------------------------------------------
  // Live RFID Attendance Hardware Simulation
  // -------------------------------------------------------------
  var tapCardBtn = document.getElementById('tapCardBtn');
  var uidTxt = document.getElementById('uidTxt');
  var stTxt = document.getElementById('stTxt');
  var dashSub = document.getElementById('dashSub');
  var pkt = document.getElementById('pkt');
  var rfidLog = document.getElementById('rfidLog');
  var rfidScans = 0;

  function genHex() {
    var h = '';
    for (var i = 0; i < 4; i++) {
      h += ('0' + Math.floor(Math.random() * 256).toString(16)).slice(-2).toUpperCase() + (i < 3 ? ' ' : '');
    }
    return h;
  }

  function addLog(text) {
    var li = document.createElement('li');
    li.textContent = text;
    rfidLog.appendChild(li);
    while (rfidLog.children.length > 3) {
      rfidLog.removeChild(rfidLog.firstChild);
    }
  }

  function runRfidScan() {
    if (tapCardBtn.disabled) return;
    tapCardBtn.disabled = true;

    var uid = genHex();
    var kind = (rfidScans % 2 === 0) ? 'ENTRY' : 'EXIT';
    uidTxt.textContent = uid;
    stTxt.textContent = 'MFRC522 detected card';
    document.getElementById('n-card').classList.add('hot');
    addLog('Card detected UID ' + uid);

    setTimeout(function() {
      document.getElementById('n-esp').classList.add('hot');
      stTxt.textContent = 'ESP8266 sending Wi-Fi packet';
      addLog('ESP8266 ➔ Flask Wi-Fi dispatch');

      setTimeout(function() {
        document.getElementById('n-flask').classList.add('hot');
        stTxt.textContent = 'Flask authenticated ' + kind;
        addLog('Flask API verified: ' + kind);

        setTimeout(function() {
          rfidScans++;
          dashSub.textContent = rfidScans + ' records';
          document.getElementById('n-dash').classList.add('hot');
          stTxt.textContent = 'Dashboard updated via WebSocket';

          setTimeout(function() {
            document.querySelectorAll('#pipeSvg .node').forEach(function(n) {
              n.classList.remove('hot');
            });
            stTxt.textContent = 'waiting for card tap';
            tapCardBtn.disabled = false;
          }, 1200);
        }, 500);
      }, 500);
    }, 500);
  }
  if (tapCardBtn) tapCardBtn.addEventListener('click', runRfidScan);

  // -------------------------------------------------------------
  // Project Notes Drawer Toggles
  // -------------------------------------------------------------
  document.querySelectorAll('.btn-toggle-notes').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var targetId = btn.getAttribute('data-target');
      var drawer = document.getElementById(targetId);
      if (drawer) {
        var isOpen = drawer.classList.toggle('open');
        btn.textContent = isOpen ? 'Build Notes −' : 'Build Notes +';
      }
    });
  });

  // -------------------------------------------------------------
  // Interactive Arcade (Snake, TTT, Memory)
  // -------------------------------------------------------------
  var tabSnake = document.getElementById('tabSnake');
  var tabTtt = document.getElementById('tabTtt');
  var tabMem = document.getElementById('tabMem');
  var panelSnake = document.getElementById('panelSnake');
  var panelTtt = document.getElementById('panelTtt');
  var panelMem = document.getElementById('panelMem');

  function switchTab(activeBtn, activePanel) {
    [tabSnake, tabTtt, tabMem].forEach(function(b) { b.classList.remove('active'); });
    [panelSnake, panelTtt, panelMem].forEach(function(p) { p.style.display = 'none'; });
    activeBtn.classList.add('active');
    activePanel.style.display = 'grid';
  }

  tabSnake.addEventListener('click', function() { switchTab(tabSnake, panelSnake); });
  tabTtt.addEventListener('click', function() { switchTab(tabTtt, panelTtt); });
  tabMem.addEventListener('click', function() { switchTab(tabMem, panelMem); });

  // 1. Snake Game
  var sCanvas = document.getElementById('snakeCanvas');
  var sCtx = sCanvas.getContext('2d');
  var snakeScore = document.getElementById('snakeScore');
  var snakeBest = document.getElementById('snakeBest');
  var snakeOverlay = document.getElementById('snakeOverlay');
  var snakeOverlayText = document.getElementById('snakeOverlayText');
  var snakeStartBtn = document.getElementById('snakeStartBtn');
  var snakePauseBtn = document.getElementById('snakePauseBtn');

  var sGrid = 20;
  var sSize = sCanvas.width / sGrid;
  var snake = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }];
  var sDir = { x: 1, y: 0 };
  var sNextDir = { x: 1, y: 0 };
  var sFood = { x: 15, y: 10 };
  var sScore = 0;
  var sBestScore = parseInt(lsGet('jp_snake_best'), 10) || 0;
  snakeBest.textContent = sBestScore;
  var sTimer = null;
  var sState = 'idle'; /* idle | running | paused | over */

  function placeFood() {
    var free = [];
    for (var gx = 0; gx < sGrid; gx++) for (var gy = 0; gy < sGrid; gy++) {
      if (!snake.some(function(p) { return p.x === gx && p.y === gy; })) free.push({ x: gx, y: gy });
    }
    sFood = free.length ? free[Math.floor(Math.random() * free.length)] : { x: -1, y: -1 };
  }
  function drawSnake() {
    sCtx.fillStyle = '#090d16';
    sCtx.fillRect(0, 0, sCanvas.width, sCanvas.height);
    sCtx.fillStyle = 'rgba(255,255,255,0.03)';
    for (var gx = 0; gx < sGrid; gx++) for (var gy = 0; gy < sGrid; gy++) {
      if ((gx + gy) % 2 === 0) sCtx.fillRect(gx * sSize, gy * sSize, sSize, sSize);
    }
    sCtx.fillStyle = '#F2C879';
    sCtx.fillRect(sFood.x * sSize + 3, sFood.y * sSize + 3, sSize - 6, sSize - 6);
    snake.forEach(function(part, i) {
      sCtx.fillStyle = (i === 0) ? '#8B9BFF' : '#6ED3C5';
      sCtx.fillRect(part.x * sSize + 1, part.y * sSize + 1, sSize - 2, sSize - 2);
    });
  }
  function showSnakeOverlay(text, btnText) {
    snakeOverlayText.textContent = text;
    snakeStartBtn.textContent = btnText;
    snakeOverlay.style.display = 'flex';
  }
  function runSnakeTimer() {
    clearInterval(sTimer);
    sTimer = setInterval(snakeStep, Math.max(60, 115 - sScore * 3));
  }
  function snakeStep() {
    sDir = sNextDir;
    var head = { x: snake[0].x + sDir.x, y: snake[0].y + sDir.y };
    var willEat = head.x === sFood.x && head.y === sFood.y;
    var body = willEat ? snake : snake.slice(0, -1);
    if (head.x < 0 || head.x >= sGrid || head.y < 0 || head.y >= sGrid ||
        body.some(function(p) { return p.x === head.x && p.y === head.y; })) {
      clearInterval(sTimer);
      sState = 'over';
      showSnakeOverlay('GAME OVER: ' + sScore, 'Play Again');
      snakePauseBtn.textContent = 'Restart';
      if (sScore > sBestScore) {
        sBestScore = sScore;
        snakeBest.textContent = sBestScore;
        lsSet('jp_snake_best', sBestScore);
      }
      return;
    }
    snake.unshift(head);
    if (willEat) { sScore++; snakeScore.textContent = sScore; placeFood(); runSnakeTimer(); }
    else { snake.pop(); }
    drawSnake();
  }
  function startSnake() {
    snake = [{ x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 }];
    sDir = { x: 1, y: 0 }; sNextDir = { x: 1, y: 0 };
    sScore = 0; snakeScore.textContent = '0';
    placeFood(); drawSnake();
    snakeOverlay.style.display = 'none';
    sState = 'running';
    snakePauseBtn.textContent = 'Pause';
    runSnakeTimer();
  }
  function pauseSnake() {
    if (sState !== 'running') return;
    clearInterval(sTimer);
    sState = 'paused';
    showSnakeOverlay('PAUSED', 'Resume');
    snakePauseBtn.textContent = 'Resume';
  }
  function resumeSnake() {
    if (sState !== 'paused') return;
    snakeOverlay.style.display = 'none';
    sState = 'running';
    snakePauseBtn.textContent = 'Pause';
    runSnakeTimer();
  }
  function snakeAction() {
    if (sState === 'running') pauseSnake();
    else if (sState === 'paused') resumeSnake();
    else startSnake();
  }
  window.__jpPause = pauseSnake;
  document.addEventListener('visibilitychange', function() { if (document.hidden) pauseSnake(); });
  snakeStartBtn.addEventListener('click', function() { if (sState === 'paused') resumeSnake(); else startSnake(); });
  snakePauseBtn.addEventListener('click', snakeAction);

  function steer(dx, dy) {
    if (sState === 'idle' || sState === 'over') startSnake();
    else if (sState === 'paused') resumeSnake();
    if (dx !== 0 && sDir.x === -dx) return;
    if (dy !== 0 && sDir.y === -dy) return;
    sNextDir = { x: dx, y: dy };
  }
  window.addEventListener('keydown', function(e) {
    if (!document.body.classList.contains('view-play') || panelSnake.style.display === 'none') return;
    var tag = e.target && e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    var k = e.key;
    var map = { ArrowUp: [0, -1], w: [0, -1], W: [0, -1], ArrowDown: [0, 1], s: [0, 1], S: [0, 1],
                ArrowLeft: [-1, 0], a: [-1, 0], A: [-1, 0], ArrowRight: [1, 0], d: [1, 0], D: [1, 0] };
    if (map[k]) { e.preventDefault(); steer(map[k][0], map[k][1]); }
    else if ((k === ' ' || k === 'p' || k === 'P') && tag !== 'BUTTON') { e.preventDefault(); snakeAction(); }
  });
  var touchStart = null;
  sCanvas.style.touchAction = 'none';
  sCanvas.addEventListener('pointerdown', function(e) { touchStart = { x: e.clientX, y: e.clientY }; });
  sCanvas.addEventListener('pointerup', function(e) {
    if (!touchStart) return;
    var dx = e.clientX - touchStart.x, dy = e.clientY - touchStart.y;
    touchStart = null;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 18) return;
    if (Math.abs(dx) > Math.abs(dy)) steer(dx > 0 ? 1 : -1, 0); else steer(0, dy > 0 ? 1 : -1);
  });
  drawSnake();

  // 2. Tic-Tac-Toe Game
  var tttGrid = document.getElementById('tttGrid');
  var tttStatus = document.getElementById('tttStatus');
  var tttScoreX = document.getElementById('tttScoreX');
  var tttScoreO = document.getElementById('tttScoreO');
  var tttResetBtn = document.getElementById('tttResetBtn');
  var tttBoard = ['', '', '', '', '', '', '', '', ''];
  var tttActive = true;
  var scoreX = 0, scoreO = 0;

  var tttTimer = null;
  function initTtt() {
    clearTimeout(tttTimer);
    tttGrid.innerHTML = '';
    tttBoard = ['', '', '', '', '', '', '', '', ''];
    tttActive = true;
    tttStatus.textContent = 'Your turn (Playing as X)';
    for (var i = 0; i < 9; i++) {
      (function(idx) {
        var cell = document.createElement('button');
        cell.type = 'button';
        cell.className = 'ttt-cell';
        cell.setAttribute('aria-label', 'Cell ' + (idx + 1));
        cell.addEventListener('click', function() { handleTttClick(idx); });
        tttGrid.appendChild(cell);
      })(i);
    }
  }
  var winCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  function checkWinner() {
    for (var i = 0; i < winCombos.length; i++) {
      var c = winCombos[i];
      if (tttBoard[c[0]] && tttBoard[c[0]] === tttBoard[c[1]] && tttBoard[c[0]] === tttBoard[c[2]]) return { winner: tttBoard[c[0]], line: c };
    }
    if (tttBoard.every(Boolean)) return { winner: 'draw' };
    return null;
  }
  function findLine(mark) {
    for (var i = 0; i < winCombos.length; i++) {
      var c = winCombos[i], vals = c.map(function(x) { return tttBoard[x]; });
      if (vals.filter(function(v) { return v === mark; }).length === 2 && vals.indexOf('') > -1) return c[vals.indexOf('')];
    }
    return -1;
  }
  function aiPick() {
    var m = findLine('O'); if (m > -1) return m;
    m = findLine('X'); if (m > -1) return m;
    if (!tttBoard[4]) return 4;
    var corners = [0, 2, 6, 8].filter(function(i) { return !tttBoard[i]; });
    if (corners.length) return corners[Math.floor(Math.random() * corners.length)];
    var sides = [1, 3, 5, 7].filter(function(i) { return !tttBoard[i]; });
    return sides[Math.floor(Math.random() * sides.length)];
  }
  function handleTttClick(i) {
    if (!tttActive || tttBoard[i]) return;
    tttBoard[i] = 'X';
    renderTtt();
    var res = checkWinner();
    if (res) { finishTtt(res); return; }
    tttActive = false;
    tttStatus.textContent = 'AI is calculating move...';
    tttTimer = setTimeout(function() {
      var pick = aiPick();
      if (pick !== undefined) tttBoard[pick] = 'O';
      renderTtt();
      var res2 = checkWinner();
      if (res2) { finishTtt(res2); return; }
      tttActive = true;
      tttStatus.textContent = 'Your turn (X)';
    }, 450);
  }
  function renderTtt(line) {
    tttGrid.querySelectorAll('.ttt-cell').forEach(function(c, i) {
      c.textContent = tttBoard[i];
      c.classList.toggle('o', tttBoard[i] === 'O');
      c.classList.toggle('win', !!(line && line.indexOf(i) > -1));
    });
  }
  function finishTtt(res) {
    tttActive = false;
    renderTtt(res.line);
    if (res.winner === 'X') { scoreX++; tttScoreX.textContent = scoreX; tttStatus.textContent = '🎉 You won!'; }
    else if (res.winner === 'O') { scoreO++; tttScoreO.textContent = scoreO; tttStatus.textContent = '🤖 AI won!'; }
    else { tttStatus.textContent = 'Game is a draw!'; }
  }
  tttResetBtn.addEventListener('click', initTtt);
  initTtt();

  // 3. Memory Match Game
  var memGrid = document.getElementById('memGrid');
  var memMoves = document.getElementById('memMoves');
  var memTime = document.getElementById('memTime');
  var memStatus = document.getElementById('memStatus');
  var memShuffleBtn = document.getElementById('memShuffleBtn');
  var techIcons = ['🐍 Python', '🚀 FastAPI', '🍃 MongoDB', '📡 RFID', '⚛️ React', '⚡ TypeScript', '🗺️ Leaflet', '🌶️ Flask'];
  var memCards = [];
  var memFirst = null;
  var memLock = false;
  var movesCount = 0;
  var memMatched = 0;
  var memTimer = null;
  var memSeconds = 0;

  function startMemTimer() {
    if (memTimer) return;
    memTimer = setInterval(function() {
      memSeconds++;
      memTime.textContent = memSeconds + 's';
    }, 1000);
  }
  function initMem() {
    clearInterval(memTimer);
    memTimer = null;
    memSeconds = 0;
    memTime.textContent = '0s';

    memGrid.innerHTML = '';
    memFirst = null;
    memLock = false;
    movesCount = 0;
    memMatched = 0;
    memMoves.textContent = '0';
    memStatus.textContent = 'Match all 8 tech pairs!';

    var deck = techIcons.concat(techIcons).sort(function() { return 0.5 - Math.random(); });
    deck.forEach(function(label, i) {
      var card = document.createElement('div');
      card.className = 'mcard';
      card.setAttribute('data-val', label);
      card.innerHTML = '<div class="mcard-inner mcard-back">JP</div><div class="mcard-inner mcard-front">' + label + '</div>';
      card.addEventListener('click', function() { flipMemCard(card); });
      memGrid.appendChild(card);
    });
  }

  function flipMemCard(card) {
    if (memLock || card.classList.contains('open') || card.classList.contains('done')) return;
    startMemTimer();
    card.classList.add('open');

    if (!memFirst) {
      memFirst = card;
      return;
    }

    movesCount++;
    memMoves.textContent = movesCount;

    if (memFirst.getAttribute('data-val') === card.getAttribute('data-val')) {
      memFirst.classList.add('done');
      card.classList.add('done');
      memMatched++;
      memFirst = null;
      if (memMatched === 8) {
        clearInterval(memTimer);
        memTimer = null;
        memStatus.textContent = '🎉 Cleared in ' + movesCount + ' moves, ' + memSeconds + 's!';
      }
    } else {
      memLock = true;
      setTimeout(function() {
        memFirst.classList.remove('open');
        card.classList.remove('open');
        memFirst = null;
        memLock = false;
      }, 750);
    }
  }
  memShuffleBtn.addEventListener('click', initMem);
  initMem();

  // -------------------------------------------------------------
  // Ask Me Anything Modal & AI Query
  // -------------------------------------------------------------
  var openAskBtn = document.getElementById('openAskBtn');
  var closeAskBtn = document.getElementById('closeAskBtn');
  var askModalBackdrop = document.getElementById('askModalBackdrop');
  var chatResponseBox = document.getElementById('chatResponseBox');
  var chatInput = document.getElementById('chatInput');
  var chatSendBtn = document.getElementById('chatSendBtn');

  function openAsk() {
    askModalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(function() { if (chatInput) chatInput.focus(); }, 60);
  }
  function closeAsk() {
    askModalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
  window.addEventListener('keydown', function(e) {
    if (e.key !== 'Escape') return;
    closeAsk();
    closeResume();
  });
  if (chatInput) chatInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && chatInput.value.trim()) answerQuestion(chatInput.value.trim());
  });

  if (openAskBtn) openAskBtn.addEventListener('click', openAsk);
  if (closeAskBtn) closeAskBtn.addEventListener('click', closeAsk);
  if (askModalBackdrop) {
    askModalBackdrop.addEventListener('click', function(e) {
      if (e.target === askModalBackdrop) closeAsk();
    });
  }

  var FAQ = {
    'stack': 'Joel works with Python (Flask, FastAPI), JavaScript/TypeScript, React, Tailwind CSS and MongoDB, plus ESP8266 IoT hardware and machine learning for risk prediction. He is also exploring agentic AI and RAG.',
    'rfid': 'The RFID Attendance System reads cards with an ESP8266 and MFRC522 reader (programmed in Arduino IDE) and sends each scan over Wi-Fi to a Flask backend, which keeps attendance records and shows live entry/exit logs with date and timestamp.',
    'safenav': 'SafeNav Mumbai predicts accident risks using machine learning spatial density analysis, overlaying safer alternate routes on Leaflet.js maps.',
    'hire': 'Yes! Joel is seeking a full-stack / backend developer role or internship.'
  };

  function answerQuestion(q) {
    var lower = q.toLowerCase();
    if (lower.indexOf('stack') > -1 || lower.indexOf('tech') > -1 || lower.indexOf('language') > -1) {
      chatResponseBox.innerHTML = '<strong>Tech Stack:</strong> ' + FAQ.stack;
    } else if (lower.indexOf('rfid') > -1 || lower.indexOf('hardware') > -1 || lower.indexOf('attendance') > -1) {
      chatResponseBox.innerHTML = '<strong>RFID Project:</strong> ' + FAQ.rfid;
    } else if (lower.indexOf('safe') > -1 || lower.indexOf('nav') > -1 || lower.indexOf('mumbai') > -1) {
      chatResponseBox.innerHTML = '<strong>SafeNav Mumbai:</strong> ' + FAQ.safenav;
    } else if (lower.indexOf('hire') > -1 || lower.indexOf('job') > -1 || lower.indexOf('role') > -1 || lower.indexOf('available') > -1) {
      chatResponseBox.innerHTML = '<strong>Availability:</strong> ' + FAQ.hire;
    } else {
      chatResponseBox.innerHTML = 'Joel Patole is a backend & IoT software engineer based in Mumbai. He builds production Flask/FastAPI servers, microcontrollers, and geospatial ML applications. Email: <a href="mailto:joelpatole1@gmail.com" style="color:var(--accent-light)">joelpatole1@gmail.com</a>';
    }
  }

  document.querySelectorAll('.q-chip').forEach(function(chip) {
    chip.addEventListener('click', function() {
      var q = chip.getAttribute('data-q');
      chatInput.value = q;
      answerQuestion(q);
    });
  });

  if (chatSendBtn) {
    chatSendBtn.addEventListener('click', function() {
      if (chatInput.value.trim()) {
        answerQuestion(chatInput.value.trim());
      }
    });
  }

  // -------------------------------------------------------------
  // Live IST Clock & Copy Email Helper
  // -------------------------------------------------------------
  var localClock = document.getElementById('localClock');
  function updateClock() {
    try {
      localClock.textContent = new Intl.DateTimeFormat('en-IN', {
        hour: 'numeric',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata'
      }).format(new Date()) + ' IST';
    } catch(e) {
      localClock.textContent = 'IST (Mumbai)';
    }
  }
  updateClock();
  setInterval(updateClock, 30000);

  var copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', function() {
      var done = function() {
        copyEmailBtn.textContent = 'Copied to Clipboard! ✓';
        setTimeout(function() { copyEmailBtn.textContent = 'Copy Email'; }, 2000);
      };
      var fallback = function() {
        var ta = document.createElement('textarea');
        ta.value = 'joelpatole1@gmail.com';
        ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); done(); } catch (e) { copyEmailBtn.textContent = 'joelpatole1@gmail.com'; }
        document.body.removeChild(ta);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText('joelpatole1@gmail.com').then(done, fallback);
      } else { fallback(); }
    });
  }

  // Pixel dog bark click easter egg
  var pixelDog = document.getElementById('pixelDog');
  if (pixelDog) {
    pixelDog.addEventListener('click', function() {
      var tooltip = pixelDog.querySelector('.dog-tooltip');
      if (tooltip) {
        tooltip.textContent = 'Bork! Let\'s build the future!';
        tooltip.style.opacity = '1';
        setTimeout(function() { tooltip.style.opacity = ''; }, 2500);
      }
    });
  }

})();

  /* ---- part 2 ---- */
(function(){
'use strict';
var root=document.documentElement;
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var canHover=window.matchMedia('(hover: hover)').matches;
function $(s,c){return (c||document).querySelector(s)}
function $$(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))}
function store(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v);}catch(e){}return null}
function pad(n){return n<10?'0'+n:''+n}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
function emitTheme(){document.dispatchEvent(new Event('themechange'))}
/* ---------- project system diagrams ---------- */
var DW=150, DH=58;
var DIAGRAMS=[
  {h:290,nodes:[
    {id:'ui',t:'Browser UI',s:'HTML, CSS, JS',x:20,y:120},{id:'api',t:'Flask API',s:'CRUD, authorization',x:245,y:120},
    {id:'db',t:'MongoDB',s:'users, documents',x:470,y:120},{id:'clerk',t:'Clerk Auth',s:'register, login',x:245,y:20}],
   links:[['ui','clerk','sign in'],['clerk','api','verified'],['ui','api','CRUD'],['api','db','store']],
   note:{x:20,y:226,w:620,t:'Each user can only reach their own documents'}},
  {h:290,nodes:[
    {id:'card',t:'RFID card',s:'tap to scan',x:20,y:40},{id:'esp',t:'ESP8266',s:'+ MFRC522 reader',x:245,y:40},
    {id:'flask',t:'Flask server',s:'attendance records',x:470,y:40},{id:'dash',t:'Web dashboard',s:'live entry and exit',x:470,y:160}],
   links:[['card','esp','scan'],['esp','flask','Wi-Fi'],['flask','dash','live']],
   note:{x:20,y:226,w:620,t:'ESP8266 programmed in Arduino IDE, timestamps on every record'}},
  {h:290,nodes:[
    {id:'rep',t:'Accident reports',s:'from users',x:20,y:40},{id:'api',t:'FastAPI',s:'REST APIs',x:245,y:40},
    {id:'db',t:'MongoDB',s:'reports, hotspots',x:470,y:40},{id:'ml',t:'ML model',s:'hotspot risk',x:245,y:160},
    {id:'map',t:'Leaflet map',s:'hotspots, safer routes',x:470,y:160}],
   links:[['rep','api','report'],['api','db','store'],['api','ml','analyse'],['ml','map','risk zones']],
   note:{x:20,y:226,w:620,t:'Dashboards show accident statistics and hotspot insights'}},
  {h:290,nodes:[
    {id:'scan',t:'Scan workspaces',s:'recursive',x:20,y:30},{id:'find',t:'Find heavy folders',s:'node_modules, venv',x:245,y:30},
    {id:'free',t:'Free disk space',s:'reclaim gigabytes',x:470,y:30},{id:'files',t:'Project files',s:'from the browser',x:20,y:150},
    {id:'sec',t:'Secret scan',s:'detect, redact',x:245,y:150},{id:'gh',t:'GitHub',s:'clean upload',x:470,y:150}],
   links:[['scan','find','walk'],['find','free','delete'],['files','sec','check'],['sec','gh','upload']],
   note:{x:20,y:236,w:620,t:'Credentials are redacted on the fly before anything leaves your machine'}}
];
DIAGRAMS.push({h:290,nodes:[
 {id:'brief',t:'Your brief',s:'city, goal, budget',x:20,y:30},{id:'orch',t:'AI Orchestrator',s:'plans and delegates',x:245,y:30},{id:'ag',t:'7 agents',s:'climate to safety',x:470,y:30},
 {id:'rag',t:'RAG',s:'source-grounded',x:470,y:150},{id:'api',t:'Live APIs + data',s:'weather, transit',x:245,y:150},{id:'rep',t:'City report',s:'suitability score',x:20,y:150}],
 links:[['brief','orch','ask'],['orch','ag','delegate'],['ag','rag','retrieve'],['rag','api','fetch'],['api','rep','report']],
 note:{x:20,y:236,w:620,t:'Every answer is grounded in sources, not guesswork'}});
var ARW=9; /* arrowhead length */
function route(a,b){
  var ax=a.x+DW/2, ay=a.y+DH/2, bx=b.x+DW/2, by=b.y+DH/2, dx=bx-ax, dy=by-ay, x1,y1,x2,y2, lx, ly, anchor='middle';
  if(Math.abs(dx)>=Math.abs(dy)){
    if(dx>0){x1=a.x+DW;x2=b.x}else{x1=a.x;x2=b.x+DW}
    y1=ay;y2=by; lx=(x1+x2)/2; ly=(y1+y2)/2-9;
  } else {
    if(dy>0){y1=a.y+DH;y2=b.y}else{y1=a.y;y2=b.y+DH}
    x1=ax;x2=bx; lx=x1+10; ly=(y1+y2)/2+4; anchor='start';
  }
  var len=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1))||1, ux=(x2-x1)/len, uy=(y2-y1)/len;
  var cx=x2-ux*ARW, cy=y2-uy*ARW, px=-uy*4.6, py=ux*4.6;
  return {
    d:'M'+x1+' '+y1+'L'+cx+' '+cy,
    head:'M'+x2+' '+y2+'L'+(cx+px)+' '+(cy+py)+'L'+(cx-px)+' '+(cy-py)+'Z',
    lx:lx, ly:ly, anchor:anchor
  };
}
function renderDiagram(svg,d,idx){
  var byId={}, h='';
  d.nodes.forEach(function(n){byId[n.id]=n});
  var paths=[];
  d.links.forEach(function(l,k){
    var r=route(byId[l[0]],byId[l[1]]); paths.push(r.d);
    h+='<g class="lk" style="--d:'+(0.35+k*0.25).toFixed(2)+'s">'
     + '<path class="lnk" pathLength="1" d="'+r.d+'"/>'
     + '<path class="flow" pathLength="1" d="'+r.d+'"/>'
     + '<path class="head" d="'+r.head+'"/>'
     + '<text class="lb" x="'+r.lx+'" y="'+r.ly+'" text-anchor="'+r.anchor+'">'+l[2]+'</text></g>';
  });
  d.nodes.forEach(function(n,k){
    h+='<g class="nd" style="--d:'+(k*0.12).toFixed(2)+'s"><rect x="'+n.x+'" y="'+n.y+'" width="'+DW+'" height="'+DH+'" rx="8"/><text x="'+(n.x+12)+'" y="'+(n.y+25)+'">'+n.t+'</text><text class="sb" x="'+(n.x+12)+'" y="'+(n.y+43)+'">'+n.s+'</text></g>';
  });
  if(d.note) h+='<g class="note" style="--d:1.4s"><rect x="'+d.note.x+'" y="'+d.note.y+'" width="'+d.note.w+'" height="34" rx="6"/><text x="'+(d.note.x+14)+'" y="'+(d.note.y+21)+'">'+d.note.t+'</text></g>';
  svg.setAttribute('viewBox','0 0 660 '+d.h); svg.innerHTML=h; svg._paths=paths;
}
$$('.proj').forEach(function(p){
  var i=parseInt(p.getAttribute('data-i'),10), svg=$('.diag',p);
  renderDiagram(svg,DIAGRAMS[i],i);
});
/* glowing data packets that travel along every arrow, in the direction of the arrow */
function startPackets(proj){
  if(reduce) return;
  var svg=$('.diag',proj), NS='http://www.w3.org/2000/svg';
  if(!svg||svg._packets) return; svg._packets=true;
  svg._paths.forEach(function(d,k){
    var dur=(2.4+k*0.25).toFixed(2)+'s';
    var c=document.createElementNS(NS,'circle'); c.setAttribute('r','4.6'); c.setAttribute('class','pk'); c.setAttribute('opacity','0');
    var am=document.createElementNS(NS,'animateMotion'); am.setAttribute('path',d); am.setAttribute('dur',dur); am.setAttribute('repeatCount','indefinite'); am.setAttribute('begin','indefinite');
    var an=document.createElementNS(NS,'animate'); an.setAttribute('attributeName','opacity'); an.setAttribute('values','0;1;1;0'); an.setAttribute('keyTimes','0;.12;.88;1'); an.setAttribute('dur',dur); an.setAttribute('repeatCount','indefinite'); an.setAttribute('begin','indefinite');
    c.appendChild(am); c.appendChild(an); svg.appendChild(c);
    setTimeout(function(){ try{ am.beginElement(); an.beginElement(); }catch(e){} }, 1700+k*380);
  });
}
$$('.toggle').forEach(function(btn){
  btn.addEventListener('click',function(){
    var panel=document.getElementById(btn.getAttribute('aria-controls')), open=btn.getAttribute('aria-expanded')==='true';
    btn.setAttribute('aria-expanded',String(!open)); panel.classList.toggle('open',!open);
  });
});

/* ---------- music ---------- */
var SONGS=[
  {
    title:'Yellow',
    artist:'Coldplay',
    why:'A timeless anthem for late-night inspiration and starry moods.',
    spotifyUrl:'https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg?si=8e5bf03934f3409a',
    spotifyId:'3AJwUDP919kvQ9QcozQPxg',
    previewUrl:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/66/f3/1a/66f31a76-a6ed-cb4c-f353-23310a7ae9a8/mzaf_10593596652344378873.plus.aac.p.m4a',
    cover:'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e029164bafe9aaa168d93f4816a'
  },
  {
    title:'Apocalypse',
    artist:'Cigarettes After Sex',
    why:'Dreamy ambient reverb for entering pure flow state.',
    spotifyUrl:'https://open.spotify.com/track/1oAwsWBovWRIp7qLMGPIet?si=3f515df10ad44b4a',
    spotifyId:'1oAwsWBovWRIp7qLMGPIet',
    previewUrl:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/b1/43/b0/b143b0ee-863a-8f7c-3c56-a67110ef1591/mzaf_10438092015459317290.plus.aac.p.m4a',
    cover:'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02dfed999f959177dfc4f33cdc'
  },
  {
    title:'A Thousand Years',
    artist:'Christina Perri',
    why:'Gentle strings and calm melodies for patient problem-solving.',
    spotifyUrl:'https://open.spotify.com/track/6lanRgr6wXibZr8KgzXxBl?si=1e44fe01603d4417',
    spotifyId:'6lanRgr6wXibZr8KgzXxBl',
    previewUrl:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8e/3a/e7/8e3ae749-5e13-a9ca-fef6-61d615bc3087/mzaf_5415208554281396500.plus.aac.p.m4a',
    cover:'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e023dea4a2ccd58ad1f8e4dbb03'
  },
  {
    title:'Creep',
    artist:'Radiohead',
    why:'Raw 90s alt-rock energy when a stubborn bug needs breaking.',
    spotifyUrl:'https://open.spotify.com/track/70LcF31zb1H0PyJoS1Sx1r?si=5c48863e8ab140de',
    spotifyId:'70LcF31zb1H0PyJoS1Sx1r',
    previewUrl:'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1f/18/e2/1f18e22b-264e-88f8-ee89-c196fa9abd7a/mzaf_14184372154331980897.plus.aac.p.m4a',
    cover:'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ec548c00d3ac2f10be73366d'
  }
];
(function(){
  var cur=0, isPlaying=false;
  var deck=$('#musicDeck'), lab=$('#vLabel'), arm=$('#arm'), eq=$('#eq'), list=$('#playlist'), vinyl=$('#vinyl');
  var npIdx=$('#npIdx'), npTot=$('#npTot'), npTitle=$('#npTitle'), npArtist=$('#npArtist'), npWhy=$('#npWhy');
  var npSpot=$('#npSpot'), npYt=$('#npYt');
  var playBtn=$('#playBtn'), playIco=$('#playIco'), playTxt=$('#playTxt'), turnPower=$('#turnPower');
  var npProgress=$('#npProgress'), npBar=$('#npBar'), npCurTime=$('#npCurTime'), npDurTime=$('#npDurTime'), spotifyEmbed=$('#spotifyEmbed');

  npTot.textContent=pad(SONGS.length);

  var audio=new Audio();
  audio.preload='auto';

  function hue(s){var h=0;for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))>>>0;return h%360}
  function coverSvg(i,s){
    var h=hue(s.title+s.artist+i);
    return '<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="cg'+i+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl('+h+',78%,58%)"/><stop offset="1" stop-color="hsl('+((h+70)%360)+',70%,34%)"/></linearGradient></defs><rect width="100" height="100" fill="url(#cg'+i+')"/><circle cx="'+(28+h%44)+'" cy="'+(26+(h*3)%40)+'" r="'+(16+h%14)+'" fill="rgba(255,255,255,.24)"/><path d="M0 '+(58+h%24)+' Q50 '+(26+h%34)+' 100 '+(66+h%22)+' V100 H0Z" fill="rgba(0,0,0,.28)"/></svg>';
  }

  for(var k=0;k<28;k++){eq.appendChild(document.createElement('i'))}
  function reseed(){ $$('i',eq).forEach(function(b){b.style.setProperty('--t',(0.45+Math.random()*0.7).toFixed(2)+'s');b.style.setProperty('--d',(-Math.random()).toFixed(2)+'s')}) }

  function formatTime(s){
    if(isNaN(s)||!isFinite(s)) return '0:00';
    var m=Math.floor(s/60), sec=Math.floor(s%60);
    return m+':'+(sec<10?'0':'')+sec;
  }

  function setPlayingState(playing){
    isPlaying=playing;
    if(playing){
      if(deck) deck.classList.add('is-playing');
      if(playIco) playIco.innerHTML='&#9208;';
      if(playTxt) playTxt.textContent='PAUSE';
      if(turnPower) turnPower.textContent='STOP';
      if(!reduce&&arm){arm.classList.remove('drop');void arm.offsetWidth;arm.classList.add('drop')}
      reseed();
    }else{
      if(deck) deck.classList.remove('is-playing');
      if(playIco) playIco.innerHTML='&#9654;';
      if(playTxt) playTxt.textContent='PLAY';
      if(turnPower) turnPower.textContent='POWER';
    }
    updatePlaylistLabels();
  }

  function playAudio(){
    var s=SONGS[cur];
    if(audio.src!==s.previewUrl){
      audio.src=s.previewUrl;
      audio.load();
    }
    var prom=audio.play();
    if(prom&&prom.then){
      prom.then(function(){
        setPlayingState(true);
      }).catch(function(err){
        console.warn('Playback error / policy block:', err);
        setPlayingState(false);
      });
    }else{
      setPlayingState(true);
    }
  }

  function pauseAudio(){
    audio.pause();
    setPlayingState(false);
  }

  function togglePlay(){
    if(isPlaying){
      pauseAudio();
    }else{
      playAudio();
    }
  }

  function updatePlaylistLabels(){
    $$('.pl-item',list).forEach(function(b,k){
      var isCur=(k===cur);
      b.setAttribute('aria-current',String(isCur));
      var m=b.querySelector('.m');
      var ico=b.querySelector('.pl-ico');
      if(m){
        if(isCur){
          m.textContent=isPlaying?'playing':'paused';
          if(ico) ico.textContent=isPlaying?'⏸':'▶';
        }else{
          m.textContent='';
          if(ico) ico.textContent='▶';
        }
      }
    });
  }

  SONGS.forEach(function(s,i){
    var li=document.createElement('li'), b=document.createElement('button');
    b.type='button'; b.className='pl-item';
    b.setAttribute('aria-label','Play '+s.title+' by '+s.artist);

    var n=document.createElement('span'); n.className='n';
    var ico=document.createElement('span'); ico.className='pl-ico'; ico.textContent='▶';
    n.appendChild(ico);
    var num=document.createElement('span'); num.textContent=pad(i+1);
    n.appendChild(num);

    var t=document.createElement('span');
    var tb=document.createElement('b'); tb.textContent=s.title;
    var ti=document.createElement('i'); ti.textContent=s.artist;
    t.appendChild(tb); t.appendChild(ti);

    var m=document.createElement('span'); m.className='m';

    b.appendChild(n); b.appendChild(t); b.appendChild(m);

    b.addEventListener('click',function(){
      if(cur===i){
        togglePlay();
      }else{
        select(i,false,true);
      }
    });
    li.appendChild(b);
    list.appendChild(li);
  });

  function select(i,instant,startPlaying){
    cur=(i+SONGS.length)%SONGS.length;
    var s=SONGS[cur];

    npIdx.textContent=pad(cur+1);
    npTitle.textContent=s.title;
    npArtist.textContent=s.artist;
    npWhy.textContent=s.why;

    // Cover art in vinyl center
    lab.innerHTML='';
    var img=document.createElement('img');
    img.src=s.cover;
    img.alt=s.title+' album art';
    img.onerror=function(){lab.innerHTML=coverSvg(cur,s)};
    lab.appendChild(img);

    // Links & Spotify Embed
    npSpot.href=s.spotifyUrl;
    npYt.href='https://www.youtube.com/results?search_query='+encodeURIComponent(s.title+' '+s.artist);
    if(spotifyEmbed){
      spotifyEmbed.src='https://open.spotify.com/embed/track/'+s.spotifyId+'?utm_source=generator&theme=0';
    }

    // Reset progress
    npBar.style.width='0%';
    npCurTime.textContent='0:00';
    npDurTime.textContent='0:30';

    audio.src=s.previewUrl;
    audio.load();

    if(startPlaying){
      playAudio();
    }else if(isPlaying){
      playAudio();
    }else{
      setPlayingState(false);
    }
  }

  audio.addEventListener('timeupdate',function(){
    var c=audio.currentTime, d=audio.duration||30;
    var pct=Math.min(100,Math.max(0,(c/d)*100));
    npBar.style.width=pct.toFixed(2)+'%';
    if(npProgress) npProgress.setAttribute('aria-valuenow',Math.round(pct));
    npCurTime.textContent=formatTime(c);
    if(audio.duration) npDurTime.textContent=formatTime(audio.duration);
  });

  audio.addEventListener('error',function(){
    var badge=$('#npBadge'); if(badge) badge.textContent='USE SPOTIFY BELOW';
    setPlayingState(false);
  });
  audio.addEventListener('loadstart',function(){var badge=$('#npBadge'); if(badge) badge.textContent='AUDIO PREVIEW'});
  audio.addEventListener('ended',function(){
    select(cur+1,false,true);
  });

  audio.addEventListener('play',function(){
    setPlayingState(true);
  });

  audio.addEventListener('pause',function(){
    setPlayingState(false);
  });

  playBtn.addEventListener('click',togglePlay);
  if(turnPower) turnPower.addEventListener('click',togglePlay);
  if(vinyl){
    vinyl.addEventListener('click',togglePlay);
    vinyl.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();togglePlay()}});
  }

  $('#prev').addEventListener('click',function(){select(cur-1,false,isPlaying)});
  $('#next').addEventListener('click',function(){select(cur+1,false,isPlaying)});

  if(npProgress){
    npProgress.addEventListener('click',function(e){
      var rect=npProgress.getBoundingClientRect();
      var x=e.clientX-rect.left;
      var ratio=Math.max(0,Math.min(1,x/rect.width));
      var d=audio.duration||30;
      audio.currentTime=ratio*d;
      npBar.style.width=(ratio*100).toFixed(2)+'%';
    });
  }

  select(0,true,false);
})();
/* ===== Dusk Reel ===== */
(function(){
function view(){
  var p=location.hash==='#arcade';
  document.body.classList.toggle('view-play',p);
  if(window.__jpNav) window.__jpNav();
  if(p){
    scrollTo({top:0,behavior:'instant'});
    setTimeout(function(){var b=document.getElementById('snakeStartBtn');if(b&&b.offsetParent){try{b.focus({preventScroll:true})}catch(e){b.focus()}}},140);
  } else {
    if(window.__jpPause) window.__jpPause();
    if(location.hash.length>1){var el=document.getElementById(location.hash.slice(1));if(el)setTimeout(function(){el.scrollIntoView()},0)}
  }
}
addEventListener('hashchange',view);view();
var pg=$('#prog');addEventListener('scroll',function(){var m=document.documentElement.scrollHeight-innerHeight;pg.style.setProperty('--p',m>0?Math.min(1,scrollY/m):0)},{passive:true});
if('IntersectionObserver' in window){var rio=new IntersectionObserver(function(es){es.forEach(function(en){if(!en.isIntersecting)return;en.target.classList.add('in','inview');if(en.target.classList.contains('proj'))startPackets(en.target);rio.unobserve(en.target)})},{threshold:.12});$$('[data-reveal]').forEach(function(e){rio.observe(e)})}else $$('[data-reveal]').forEach(function(e){e.classList.add('in','inview')});
if(matchMedia('(hover: hover)').matches&&!reduce){
 $$('.building-card,.orch').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*8+'deg');c.style.setProperty('--rx',(.5-(e.clientY-r.top)/r.height)*8+'deg')});c.addEventListener('pointerleave',function(){c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')})});
 $$('.btn-resume,.btn-ask-anything,.btn-get-in-touch,.btn.primary').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+(e.clientX-r.left-r.width/2)*.18+'px,'+(e.clientY-r.top-r.height/2)*.28+'px)'});b.addEventListener('pointerleave',function(){b.style.transform=''})})}
/* agent orchestrator demo (illustrative scores) */
var A=['🌦️ Climate','🚆 Transport','💰 Cost of living','🏠 Accommodation','🎓 Education','🛡️ Safety & health','📍 Location intel'];
var D={Mumbai:[58,80,40,32,85,68,88],Pune:[76,60,64,62,80,72,70],Bengaluru:[82,58,52,48,84,70,82],Berlin:[60,90,55,45,88,86,90],Toronto:[50,82,42,38,90,88,86]};
var W={Study:[1,1,1.4,1.2,1.6,1.1,.8],Work:[1,1.3,1.1,1.1,.7,1.1,1.3],Travel:[1.6,1.3,.9,1,.8,1.3,1.2]};
var ul=$('#agents'),run=$('#oRun'),ring=$('#oRing'),note=$('#oNote'),bud=$('#oBudget'),busy=false;
ul.innerHTML=A.map(function(a){return'<li><span>'+a+'</span><i><u></u></i><em>--</em></li>'}).join('');
function cl(n){return Math.max(5,Math.min(98,Math.round(n)))}
bud.addEventListener('input',function(){$('#oBudgetV').textContent='₹'+bud.value+'k'});
run.addEventListener('click',function(){
 if(busy)return;busy=true;run.disabled=true;var b=+bud.value,s=D[$('#oCity').value].slice(),w=W[$('#oPurpose').value];s[2]=cl(s[2]+(b-80)/2);s[3]=cl(s[3]+(b-80)/3);
 var tot=0,ws=0;s.forEach(function(v,i){tot+=v*w[i];ws+=w[i]});var fin=Math.round(tot/ws);
 $$('li',ul).forEach(function(li){$('u',li).style.width='0';$('em',li).textContent='--'});ring.style.setProperty('--v',0);$('b',ring).textContent='--';note.textContent='Orchestrator is delegating to 7 agents...';
 s.forEach(function(v,i){setTimeout(function(){var li=ul.children[i];$('u',li).style.width=v+'%';$('em',li).textContent=v},reduce?0:i*320)});
 setTimeout(function(){var n=0,t=setInterval(function(){n=Math.min(fin,n+3);ring.style.setProperty('--v',n);$('b',ring).textContent=n;if(n>=fin){clearInterval(t);note.textContent=(fin>=75?'Strong fit':fin>=62?'Workable, with trade-offs':'Tough fit on this budget')+' for '+$('#oPurpose').value.toLowerCase()+' in '+$('#oCity').value+'. Demo scores, not live data.';busy=false;run.disabled=false}},reduce?0:25)},reduce?0:7*320+200)});
})();
})();

  /* ---- part 3 ---- */
(function(){var r=document.documentElement,i=document.getElementById('intro'),done=false;
function end(){if(done)return;done=true;i.classList.add('out');setTimeout(function(){r.classList.remove('intro-on');window.scrollTo(0,0)},350);setTimeout(function(){i.style.display='none'},1100)}
if(matchMedia('(prefers-reduced-motion: reduce)').matches){r.classList.remove('intro-on');i.style.display='none';return}
setTimeout(end,3600);i.addEventListener('click',end);addEventListener('keydown',end,{once:true});})();

  /* ---- part 4 ---- */
(function(){var r=document.documentElement,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
addEventListener('pointermove',function(e){r.style.setProperty('--mx',e.clientX+'px');r.style.setProperty('--my',e.clientY+'px')},{passive:true});
addEventListener('scroll',function(){r.style.setProperty('--sy',scrollY)},{passive:true});
[].forEach.call(document.querySelectorAll('.building-card,.orch,.turn'),function(c){c.addEventListener('pointermove',function(e){var b=c.getBoundingClientRect();c.style.setProperty('--cx',e.clientX-b.left+'px');c.style.setProperty('--cy',e.clientY-b.top+'px')})});
if(reduce||!('IntersectionObserver' in window))return;
var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}})},{threshold:.12});
[].forEach.call(document.querySelectorAll('main > section:not(.hero-section) > .container > *:not([data-reveal]), .education-section > *, .edu-cards-grid > *, .vis-card-grid > *, .contact-section .container > *'),function(el){el.classList.add('rv');io.observe(el)});
})();

  /* ---- part 5 ---- */
(function(){
  [].forEach.call(document.querySelectorAll('.edu-photo-card'),function(card){
    var btn=card.querySelector('.edu-expand-btn'); if(!btn) return;
    btn.addEventListener('click',function(){
      var open=card.classList.toggle('open');
      btn.setAttribute('aria-expanded',open?'true':'false');
    });
  });
})();
}
