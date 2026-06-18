'use strict';

/* ══════════════════════════════════════════════
   HERO — cursor blink + typewriter effect
   ══════════════════════════════════════════════ */
function initHero() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;
  // cursor blinks via CSS animation — nothing else needed here
}

/* ══════════════════════════════════════════════
   EXPERIENCE TABS
   ══════════════════════════════════════════════ */
function initExpTabs() {
  const tabs   = document.querySelectorAll('.exp-tab');
  const panels = document.querySelectorAll('.exp-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');

      // Update tabs
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update panels
      panels.forEach(p => {
        p.classList.remove('active');
        if (p.getAttribute('data-panel') === target) {
          p.classList.add('active');
        }
      });
    });
  });
}

/* ══════════════════════════════════════════════
   ACCORDION (Skills)
   ══════════════════════════════════════════════ */
function initAccordion() {
  const triggers = document.querySelectorAll('.acc-trigger');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const bodyId = trigger.getAttribute('data-acc');
      const body   = document.getElementById(bodyId);
      const isOpen = trigger.classList.contains('active');

      // Close all
      triggers.forEach(t => {
        t.classList.remove('active');
        const bId = t.getAttribute('data-acc');
        const b   = document.getElementById(bId);
        if (b) b.classList.remove('open');
      });

      // Toggle clicked
      if (!isOpen) {
        trigger.classList.add('active');
        if (body) body.classList.add('open');
      }
    });
  });
}

/* ══════════════════════════════════════════════
   SCROLL REVEAL
   ══════════════════════════════════════════════ */
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );

  items.forEach(el => io.observe(el));
}

/* ══════════════════════════════════════════════
   NAVBAR — scroll shadow + active link
   ══════════════════════════════════════════════ */
function initNavbar() {
  const nav = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      nav.style.boxShadow = '0 1px 12px rgba(0,0,0,0.08)';
    } else {
      nav.style.boxShadow = 'none';
    }
  }, { passive: true });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id], footer[id]');
  const links    = document.querySelectorAll('.nav-link');

  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    },
    { threshold: 0.35 }
  );

  sections.forEach(s => io.observe(s));
}

/* ══════════════════════════════════════════════
   HAMBURGER (Mobile)
   ══════════════════════════════════════════════ */
function initHamburger() {
  const btn   = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  links.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* ══════════════════════════════════════════════
   SMOOTH SCROLL for all anchor links
   ══════════════════════════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 70;
      const top    = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ══════════════════════════════════════════════
   NIGHT SKY CANVAS (stars + meteor for chatbot)
   ══════════════════════════════════════════════ */
function initStars() {
  const canvas = document.getElementById('starsCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth  || canvas.parentElement.offsetWidth;
    canvas.height = canvas.offsetHeight || canvas.parentElement.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  /* ── Stars ─────────────────────────────────── */
  const STAR_COUNT = 220;
  const stars = Array.from({ length: STAR_COUNT }, () => ({
    x:    Math.random(),
    y:    Math.random(),
    r:    Math.random() * 1.4 + 0.3,           // radius 0.3–1.7 px
    base: Math.random() * 0.55 + 0.25,         // base opacity 0.25–0.80
    a:    Math.random(),                         // current opacity
    da:   (Math.random() * 0.006 + 0.002) * (Math.random() < 0.5 ? 1 : -1),
    col:  Math.random() < 0.15                  // 15% slightly warm/cool tint
            ? `rgba(200,215,255,`
            : (Math.random() < 0.1 ? `rgba(255,230,200,` : `rgba(220,225,255,`),
  }));

  /* ── Meteor ─────────────────────────────────── */
  function newMeteor() {
    const angle = (Math.random() * 20 + 20) * Math.PI / 180; // 20–40° below horizontal
    return {
      active: false,
      x: 0, y: 0,
      dx: 0, dy: 0,
      len: Math.random() * 160 + 100,          // tail length px
      speed: Math.random() * 5 + 7,            // px per frame
      alpha: 0,
      width: Math.random() * 1.2 + 0.6,
      angle,
      // schedule next fire
      fireAt: Date.now() + (Math.random() * 6000 + 4000), // 4–10 s
    };
  }

  let meteor = newMeteor();

  function spawnMeteor() {
    meteor.active = true;
    // Start from top-right quarter, sweep to bottom-left
    meteor.x = (Math.random() * 0.6 + 0.3) * canvas.width;
    meteor.y = (Math.random() * 0.3) * canvas.height;
    meteor.dx = -Math.cos(meteor.angle) * meteor.speed;
    meteor.dy =  Math.sin(meteor.angle) * meteor.speed;
    meteor.alpha = 1;
  }

  /* ── Draw loop ──────────────────────────────── */
  function draw() {
    // Deep night sky base
    ctx.fillStyle = '#03040f';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle deep-space glow (centre bloom)
    const bloom = ctx.createRadialGradient(
      canvas.width * 0.5, canvas.height * 0.4, 0,
      canvas.width * 0.5, canvas.height * 0.4, canvas.width * 0.55
    );
    bloom.addColorStop(0,   'rgba(40,45,100,0.18)');
    bloom.addColorStop(0.6, 'rgba(20,25,70,0.08)');
    bloom.addColorStop(1,   'rgba(0,0,0,0)');
    ctx.fillStyle = bloom;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Stars
    stars.forEach(s => {
      s.a += s.da;
      if (s.a > s.base + 0.25 || s.a < s.base - 0.25) s.da *= -1;
      s.a = Math.max(0.05, Math.min(1, s.a));

      const sx = s.x * canvas.width;
      const sy = s.y * canvas.height;

      // Glow for brighter stars
      if (s.r > 1.0) {
        const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, s.r * 4);
        glow.addColorStop(0, s.col + (s.a * 0.5) + ')');
        glow.addColorStop(1, s.col + '0)');
        ctx.fillStyle = glow;
        ctx.fillRect(sx - s.r * 4, sy - s.r * 4, s.r * 8, s.r * 8);
      }

      ctx.beginPath();
      ctx.arc(sx, sy, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.col + s.a + ')';
      ctx.fill();
    });

    // Meteor
    const now = Date.now();
    if (!meteor.active && now >= meteor.fireAt) spawnMeteor();

    if (meteor.active) {
      // Tail — gradient line
      const tx = meteor.x - Math.cos(meteor.angle) * -meteor.len;
      const ty = meteor.y - Math.sin(meteor.angle) *  meteor.len;

      const grad = ctx.createLinearGradient(meteor.x, meteor.y, tx, ty);
      grad.addColorStop(0,   `rgba(255,255,255,${meteor.alpha})`);
      grad.addColorStop(0.1, `rgba(200,215,255,${meteor.alpha * 0.7})`);
      grad.addColorStop(1,   'rgba(200,215,255,0)');

      ctx.beginPath();
      ctx.moveTo(meteor.x, meteor.y);
      ctx.lineTo(tx, ty);
      ctx.strokeStyle = grad;
      ctx.lineWidth   = meteor.width;
      ctx.lineCap     = 'round';
      ctx.stroke();

      // Head glow
      const hGlow = ctx.createRadialGradient(meteor.x, meteor.y, 0, meteor.x, meteor.y, 6);
      hGlow.addColorStop(0, `rgba(255,255,255,${meteor.alpha})`);
      hGlow.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = hGlow;
      ctx.beginPath();
      ctx.arc(meteor.x, meteor.y, 6, 0, Math.PI * 2);
      ctx.fill();

      // Advance
      meteor.x += meteor.dx;
      meteor.y += meteor.dy;
      meteor.alpha -= 0.018;

      // Reset when faded or off-screen
      if (meteor.alpha <= 0 || meteor.x < -50 || meteor.y > canvas.height + 50) {
        meteor = newMeteor();
      }
    }

    requestAnimationFrame(draw);
  }
  draw();
}

/* ══════════════════════════════════════════════
   AI CHATBOT (Gemini API)
   ══════════════════════════════════════════════ */
function initChatbot() {
  const GEMINI_API_KEY = 'AIzaSyBuBbvLVgJopIsrROYIURcpcrIoWcneuvQ';
  const MAX_REQUESTS   = 10;

  const SYSTEM_PROMPT = `You are Abhishek Kanani's personal AI assistant embedded in his portfolio website.
Answer questions about Abhishek concisely, warmly, and professionally. Keep answers under 120 words unless asked for detail.

=== ABOUT ABHISHEK ===
Full name: Abhishek Kanani
Degree: M.Sc. in Electrical Engineering & IT — Technische Hochschule Deggendorf (THD), Germany
Speciality: AI/ML engineering, RAG pipelines, scalable ETL systems, production-ready ML models
Email: abhishekkanani10@gmail.com | GitHub: github.com/isabhiii | LinkedIn: linkedin.com/in/abhishek-kanani | Instagram: instagram.com/is_abhii

=== WORK EXPERIENCE ===
1. TC Teisnach Optik — Built data pipelines and ML-driven quality control systems for optical manufacturing.
2. Infineon Technologies — Worked on production ETL pipelines and Power BI dashboards for semiconductor operations.
3. Rosenberger Hochfrequenz — Delivered data analytics and reporting solutions for high-frequency tech manufacturing.

=== EDUCATION ===
• M.Sc. Electrical Engineering & IT — Technische Hochschule Deggendorf (THD), Germany
• B.Tech — Previous university in India

=== TECHNICAL SKILLS ===
Languages: Python, SQL, JavaScript
ML/AI: LangChain, RAG (Retrieval-Augmented Generation), ChromaDB, NLTK, scikit-learn, XGBoost, Optuna, YOLOv5, ONNX, PyTorch
Data: Pandas, Matplotlib, Seaborn, Plotly, DAX, Power BI, Tableau
Backend/DevOps: FastAPI, Docker, GitLab CI, Oracle DB
Tools: Git, VS Code

=== PROJECTS ===
1. Manufacturing Quality RAG — Production RAG system querying manufacturing docs in <1 second using ChromaDB + LangChain. Stack: Python, FastAPI, Docker.
2. Reddit Stock Sentiment — Real-time NLP pipeline streaming Reddit posts, VADER sentiment scoring per ticker. Stack: NLTK, PRAW, Pandas, Matplotlib.
3. ML Vehicle Sales Prediction — Gradient-boosted regression achieving 92% R² via Optuna tuning. Stack: XGBoost, scikit-learn, Pandas.
4. Object Detection DNN — Real-time 30+ FPS object detection on CPU, ONNX export. Stack: OpenCV, ONNX, PyTorch.
5. COVID-19 Viz Suite — Epidemiological analysis with Tableau + Power BI dashboards. Stack: Tableau, Power BI, DAX, SQL.
6. Power BI Dashboard Suite — KPI dashboards for manufacturing leadership with Oracle DB auto-refresh. Stack: Power BI, DAX, Oracle DB, SQL.

=== SIDE PROJECT ===
Word of Supreme: Bhagavad Gītā — A beautifully crafted iOS app and website bringing timeless Gita wisdom verse by verse. Available at wordofsupreme.com and the App Store.

If asked something unrelated to Abhishek, politely redirect to topics about his work, skills, or projects.

=== FORMATTING RULES ===
NEVER use markdown formatting of any kind. No asterisks (**bold**), no underscores, no backticks, no hyphens for lists, no headers with #. Write in clean plain prose only. For emphasis, rephrase naturally instead.`;


  const messagesEl = document.getElementById('chatMessages');
  const inputEl    = document.getElementById('chatInput');
  const sendBtn    = document.getElementById('chatSend');
  const typingEl   = document.getElementById('chatTyping');
  const countEl    = document.getElementById('msgCount');

  if (!messagesEl || !inputEl || !sendBtn) return;

  // In-memory count — resets to 0 on every page refresh
  let usedCount = 0;
  const history = [];

  function updateCount() {
    if (countEl) countEl.textContent = `${usedCount}/10`;
    if (usedCount >= MAX_REQUESTS) {
      inputEl.disabled = true;
      sendBtn.disabled = true;
      inputEl.placeholder = 'Limit reached — reach out at abhishekkanani10@gmail.com';
    }
  }
  updateCount();

  function scrollToBottom() {
    messagesEl.scrollTo({ top: messagesEl.scrollHeight, behavior: 'smooth' });
  }

  function appendMessage(text, role) {
    const wrap = document.createElement('div');
    wrap.className = `chat-msg chat-msg--${role === 'user' ? 'user' : 'bot'}`;

    const avatar = document.createElement('div');
    avatar.className = 'chat-avatar';
    if (role === 'user') {
      avatar.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
    } else {
      avatar.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`;
    }

    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    // Strip any accidental markdown asterisks/backticks the model sneaks in
    bubble.innerText = text.replace(/\*\*/g, '').replace(/\*/g, '').replace(/`/g, '');


    wrap.appendChild(avatar);
    wrap.appendChild(bubble);
    messagesEl.appendChild(wrap);
    scrollToBottom();
  }

  async function sendMessage() {
    const text = inputEl.value.trim();
    if (!text) return;

    // Enforce 10-request limit
    if (usedCount >= MAX_REQUESTS) {
      appendMessage("You've used all 10 questions! Feel free to reach out directly at abhishekkanani10@gmail.com 😊", 'bot');
      updateCount();
      return;
    }

    inputEl.value = '';
    sendBtn.disabled = true;
    appendMessage(text, 'user');
    history.push({ role: 'user', parts: [{ text }] });

    typingEl.style.display = 'flex';
    scrollToBottom();

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents: history,
          }),
        }
      );

      const data = await response.json();
      typingEl.style.display = 'none';

      if (!response.ok) {
        const msg = data?.error?.message || 'API error. Please try again.';
        appendMessage(`⚠️ ${msg}`, 'bot');
        console.error('Gemini API error:', data);
      } else if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        const reply = data.candidates[0].content.parts[0].text;
        history.push({ role: 'model', parts: [{ text: reply }] });
        appendMessage(reply, 'bot');

        // Increment count (resets on page refresh)
        usedCount++;
        updateCount();
      } else {
        console.warn('Unexpected Gemini response:', data);
        appendMessage("Hmm, something went wrong. Please try again!", 'bot');
      }
    } catch (err) {
      typingEl.style.display = 'none';
      appendMessage("Something went wrong connecting to the AI. Please try again.", 'bot');
      console.error('Chatbot error:', err);
    }

    if (usedCount < MAX_REQUESTS) sendBtn.disabled = false;
    inputEl.focus();
  }

  sendBtn.addEventListener('click', sendMessage);
  inputEl.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
}

/* ══════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initHero();
  initExpTabs();
  initAccordion();
  initReveal();
  initNavbar();
  initHamburger();
  initSmoothScroll();
  initStars();
  initChatbot();
});

