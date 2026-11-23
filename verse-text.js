/* ══════════════════════════════════════════════
   VERSE TEXT: Spider-Verse comic misregistration & glitch
   Vanilla JS port of <VerseText /> (24fps, seeded PRNG,
   shards, CMY plates, interlace comb, halftone debris).
   ══════════════════════════════════════════════ */
(() => {
  const FRAME_MS = 1000 / 24;
  const FLAT = ['violet', 'magenta', 'green', 'gold'];
  const FLAT_LIGHT = [false, false, true, true];
  const PLATES = ['c', 'm', 'y'];
  const PAD_X = 15;
  const PAD_Y = 30;
  const COMB_TOP = -0.15;
  const COMB_BOTTOM = 1.35;
  const COMB_BODY = [0.42, 0.95];
  const COMB_REACH_Y = 0.75;
  const FIRST_BURST = Math.round(600 / FRAME_MS);
  const BURST_GAP = [Math.round(1000 / FRAME_MS), Math.round(2500 / FRAME_MS)];
  const BURST_TICKS = { flick: [1, 3], medium: [4, 6], stuck: [8, 14] };
  const MOST_PER_FRAME = 4;

  const INK = {
    violet: 'var(--vt-paint-violet)',
    magenta: 'var(--vt-paint-magenta)',
    green: 'var(--vt-paint-green)',
    gold: 'var(--vt-paint-gold)',
    key: 'var(--vt-paint-key)',
    dot: 'var(--vt-paint-dot)',
  };

  function rng(seed) {
    let state = seed >>> 0;
    return () => {
      state = (state + 0x6d2b79f5) >>> 0;
      let t = state;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function mixSeed(a, b) {
    let h = (Math.imul(a >>> 0, 0x9e3779b1) ^ (b >>> 0)) >>> 0;
    h = Math.imul(h ^ (h >>> 16), 0x85ebca6b);
    h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35);
    return (h ^ (h >>> 16)) >>> 0;
  }

  function draws(seed) {
    const random = rng(seed);
    const between = (lo, hi) => lo + (hi - lo) * random();
    return {
      random,
      between,
      int: (lo, hi) => lo + Math.floor(random() * (hi - lo + 1)),
      sign: () => (random() < 0.5 ? -1 : 1),
      chance: (p) => random() < p,
    };
  }

  const noiseSeed = (seed) => (seed % 999983) + 1;
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const em = (v) => `${v.toFixed(3)}em`;
  const flatInk = (i) => INK[FLAT[i] || 'violet'];

  function polygonArea(points) {
    let sum = 0;
    for (let i = 0; i < points.length; i++) {
      const [x0, y0] = points[i] || [0, 0];
      const [x1, y1] = points[(i + 1) % points.length] || [0, 0];
      sum += x0 * y1 - x1 * y0;
    }
    return Math.abs(sum) / 2;
  }

  function centroid(points) {
    let x = 0;
    let y = 0;
    for (const [px, py] of points) {
      x += px;
      y += py;
    }
    return [x / points.length, y / points.length];
  }

  function tidy(points) {
    return points.filter((p, i) => {
      const q = points[(i + 1) % points.length];
      return !q || Math.hypot(p[0] - q[0], p[1] - q[1]) > 1e-6;
    });
  }

  function splitPoly(polygon, a, b) {
    const side = (p) => (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]);
    const left = [];
    const right = [];
    for (let i = 0; i < polygon.length; i++) {
      const p = polygon[i];
      const q = polygon[(i + 1) % polygon.length];
      if (!p || !q) continue;
      const sp = side(p);
      const sq = side(q);
      if (sp >= 0) left.push(p);
      if (sp <= 0) right.push(p);
      if ((sp > 0 && sq < 0) || (sp < 0 && sq > 0)) {
        const t = sp / (sp - sq);
        const cut = [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t];
        left.push(cut);
        right.push(cut);
      }
    }
    return [tidy(left), tidy(right)];
  }

  function onEdge(edge, t) {
    if (edge === 0) return [t * 100, 0];
    if (edge === 1) return [100, t * 100];
    if (edge === 2) return [t * 100, 100];
    return [0, t * 100];
  }

  function shatter(seed) {
    const d = draws(seed);
    let pieces = [[[0, 0], [100, 0], [100, 100], [0, 100]]];
    const cuts = d.int(2, 3);
    for (let k = 0; k < 8 && (k < cuts || pieces.length < 3); k++) {
      const from = d.int(0, 3);
      const to = (from + d.int(1, 3)) % 4;
      const a = onEdge(from, d.between(0.1, 0.9));
      const b = onEdge(to, d.between(0.1, 0.9));
      const next = [];
      for (const piece of pieces) {
        const [left, right] = splitPoly(piece, a, b);
        const whole = left.length >= 3 && right.length >= 3;
        const thin = !whole || polygonArea(left) < 900 || polygonArea(right) < 900;
        if (thin || next.length + 2 > 8) next.push(piece);
        else next.push(left, right);
      }
      pieces = next;
    }
    for (let k = 0; k < 4 && pieces.length < 3; k++) {
      const biggest = pieces.reduce((best, p) => (polygonArea(p) > polygonArea(best) ? p : best));
      const [mx, my] = centroid(biggest);
      const angle = d.between(0.35, 1.2) * d.sign();
      const halves = splitPoly(
        biggest,
        [mx - Math.cos(angle) * 10, my - Math.sin(angle) * 10],
        [mx + Math.cos(angle) * 10, my + Math.sin(angle) * 10]
      );
      if (halves[0].length < 3 || halves[1].length < 3) continue;
      pieces = [...pieces.filter((p) => p !== biggest), ...halves];
    }
    return pieces.map((points) => {
      const [cx, cy] = centroid(points);
      const ox = (cx - 50) / 50;
      const oy = (cy - 50) / 50;
      const pushX = ox * d.between(0.08, 0.3);
      const pushY = oy * d.between(0.05, 0.2);
      return {
        points,
        rim: points.map(([x, y]) => [cx + (x - cx) * 1.16, cy + (y - cy) * 1.16]),
        cx,
        cy,
        dx: pushX,
        dy: pushY,
        turn: d.sign() * d.between(2, 13),
        color: d.int(0, FLAT.length - 1),
        streak: d.chance(0.35) ? (Math.atan2(pushY, pushX) * 180) / Math.PI : -1,
      };
    });
  }

  function platesAround(seed, reach) {
    const angle = rng(seed)() * Math.PI * 2;
    const at = (k) => {
      const t = angle + (k * Math.PI * 2) / 3;
      const x = Math.cos(t);
      const y = Math.sin(t) * 0.55;
      const len = Math.hypot(x, y);
      return [(x / len) * reach, (y / len) * reach];
    };
    return { c: at(0), m: at(1), y: at(2) };
  }

  function copiesOf(d, count) {
    return Array.from({ length: count }, () => ({
      dx: d.sign() * d.between(0.1, 0.35),
      dy: (d.random() - 0.5) * 0.24,
      color: d.int(0, FLAT.length - 1),
    }));
  }

  function inBody(strip) {
    const mid = (strip.top + strip.bottom) / 2;
    return mid > COMB_BODY[0] && mid < COMB_BODY[1];
  }

  function combOf(seed) {
    const d = draws(seed);
    const slips = Array.from({ length: 3 }, () => d.sign() * d.between(0.03, 0.15));
    const strips = [];
    for (let top = COMB_TOP; top < COMB_BOTTOM; ) {
      const bottom = top + d.between(0.06, 0.1);
      const slipped = strips.length % 2 === 1;
      strips.push({ top, bottom, slip: slipped ? d.int(0, slips.length - 1) : -1, tint: null });
      top = bottom;
    }
    const tintable = strips.filter((s) => s.slip >= 0 && inBody(s));
    for (let k = d.int(1, 3); k > 0 && tintable.length > 0; k--) {
      const [strip] = tintable.splice(d.int(0, tintable.length - 1), 1);
      if (strip) strip.tint = d.chance(0.5) ? 'c' : 'm';
    }
    return { slips, strips };
  }

  function materialise(seed, kind) {
    const d = draws(mixSeed(seed, 3));
    if (kind === 'shards') {
      return {
        key: false,
        plates: null,
        shards: shatter(mixSeed(seed, 4)),
        copies: d.chance(0.5) ? copiesOf(d, 1) : [],
        comb: null,
        noise: noiseSeed(seed),
      };
    }
    return {
      key: false,
      plates: platesAround(mixSeed(seed, 5), d.between(0.15, 0.4)),
      shards: null,
      copies: copiesOf(d, d.int(1, 2)),
      comb: combOf(mixSeed(seed, 6)),
      noise: noiseSeed(seed),
    };
  }

  function wordFrames(seed) {
    const d = draws(seed);
    const first = d.chance(0.6) ? 'shards' : 'copies';
    const other = first === 'shards' ? 'copies' : 'shards';
    const kinds = d.chance(0.45) ? [first, other] : [first];
    const frames = kinds.map((kind, k) => ({ ticks: 1, look: materialise(mixSeed(seed, k + 1), kind) }));
    const reach = d.between(0.12, 0.22);
    const shares = d.chance(0.5) ? [1, 0.55, 0.25, 0.08] : [1, 0.42, 0.14];
    const lines = mixSeed(seed, 9);
    for (const share of shares) {
      frames.push({
        ticks: 2,
        look: { key: true, plates: platesAround(lines, reach * share), shards: null, copies: [], comb: null, noise: 0 },
      });
    }
    return frames;
  }

  function printSchedule(seed) {
    const frames = wordFrames(mixSeed(seed, 2));
    const end = frames.reduce((sum, f) => sum + f.ticks, 1);
    return { start: 1, frames, end };
  }

  function burstKind(roll) {
    if (roll < 0.25) return 'stuck';
    return roll < 0.55 ? 'medium' : 'flick';
  }

  function burstHolds(d, kind) {
    const [lo, hi] = BURST_TICKS[kind];
    const holds = [];
    for (let left = d.int(lo, hi); left > 0; ) {
      const hold = Math.min(left, kind === 'stuck' ? 2 : d.int(1, 3));
      holds.push(hold);
      left -= hold;
    }
    return holds;
  }

  function burstLook(seed, frame, last) {
    if (last) {
      return { key: true, plates: platesAround(seed, 0.05), shards: null, copies: [], comb: null, noise: 0 };
    }
    const d = draws(mixSeed(seed, frame + 11));
    const roll = d.random();
    if (roll < 0.4) return materialise(mixSeed(seed, frame + 21), 'shards');
    if (roll < 0.7) return materialise(mixSeed(seed, frame + 21), 'copies');
    return {
      key: true,
      plates: platesAround(mixSeed(seed, frame + 31), d.between(0.15, 0.3)),
      shards: null,
      copies: d.chance(0.5) ? copiesOf(d, 1) : [],
      comb: combOf(mixSeed(seed, frame + 51)),
      noise: noiseSeed(mixSeed(seed, frame + 41)),
    };
  }

  function nudge(look, seed) {
    const d = draws(seed);
    const by = () => d.between(0.88, 1.12);
    const move = ([x, y]) => [x * by(), y * by()];
    return {
      ...look,
      plates: look.plates ? { c: move(look.plates.c), m: move(look.plates.m), y: move(look.plates.y) } : null,
      shards: look.shards
        ? look.shards.map((s) => ({ ...s, dx: s.dx * by(), dy: s.dy * by(), turn: clamp(s.turn * by(), -13, 13) }))
        : null,
      copies: look.copies.map((c) => ({ ...c, dx: c.dx * by(), dy: c.dy * by() })),
      comb: look.comb
        ? { ...look.comb, slips: look.comb.slips.map((s) => Math.sign(s) * clamp(Math.abs(s) * by(), 0.03, 0.15)) }
        : null,
    };
  }

  function burstAt(seed, k, previous) {
    const d = draws(mixSeed(seed, 77 + k));
    const gap = k === 0 ? FIRST_BURST : d.int(BURST_GAP[0], BURST_GAP[1]);
    const bSeed = mixSeed(seed, 1000 + k);
    const bd = draws(bSeed);
    const kind = burstKind(d.random());
    const holds = burstHolds(bd, kind);
    const stuck = kind === 'stuck';
    const frames = holds.map((ticks, f) => {
      const settle = kind === 'medium' && holds.length > 1 && f === holds.length - 1;
      const look = burstLook(mixSeed(bSeed, 0), stuck ? 0 : f, settle);
      return {
        ticks,
        look: stuck && f > 0 ? nudge(look, mixSeed(bSeed, f)) : look,
      };
    });
    return { start: previous + gap, kind, frames };
  }

  function burstEnd(b) {
    return b.start + b.frames.reduce((s, f) => s + f.ticks, 0);
  }

  function toShardBox([x, y]) {
    return `${((x + PAD_X) / (100 + 2 * PAD_X)) * 100}% ${((y + PAD_Y) / (100 + 2 * PAD_Y)) * 100}%`;
  }

  function polygonCss(points) {
    return `polygon(${points.map(toShardBox).join(', ')})`;
  }

  function escHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function debrisHtml(seed, comb, ink) {
    const random = rng(seed);
    const between = (lo, hi) => lo + (hi - lo) * random();
    let html = '';
    const cx = between(-10, 110);
    const cy = between(-70, 170);
    const pitch = 0.12;
    for (let row = -2; row <= 2; row++) {
      for (let col = -3; col <= 3; col++) {
        if (random() < 0.42 || Math.hypot(col, row * 1.4) > 3.2) continue;
        const ox = (col + (row % 2 ? 0.5 : 0)) * pitch;
        const oy = row * pitch * 0.866;
        const size = em(0.075 + random() * 0.03);
        html += `<span class="vt-bit" data-kind="dot" style="left:calc(${cx}% + ${ox}em);top:calc(${cy}% + ${oy}em);width:${size};height:${size};background-color:${INK.dot}"></span>`;
      }
    }
    for (let k = 0, n = 3 + Math.floor(random() * 4); k < n; k++) {
      const size = em(0.04 + random() * 0.04);
      html += `<span class="vt-bit" data-kind="speck" style="left:${between(-25, 125)}%;top:${between(-80, 180)}%;width:${size};height:${size};background-color:${INK.gold}"></span>`;
    }
    if (comb) {
      const torn = comb.strips.filter((s) => s.slip >= 0 && s.tint === null && inBody(s));
      for (let k = 0, n = 1 + Math.floor(random() * 2); k < n; k++) {
        const [strip] = torn.splice(Math.floor(random() * torn.length), 1);
        if (!strip) break;
        const slip = comb.slips[strip.slip] || 0;
        const width = between(0.1, 0.3);
        const away = between(0.04, 0.22);
        const left = slip > 0 ? `calc(100% + ${em(slip + away)})` : em(slip - away - width);
        html += `<span class="vt-bit" data-kind="ink" style="left:${left};top:${em(strip.top)};width:${em(width)};height:${em(strip.bottom - strip.top)};background-color:${ink}"></span>`;
      }
    }
    return html;
  }

  function combLayers(comb) {
    const at = (y) => em(y + COMB_REACH_Y);
    const groups = new Map([['-1:', { slip: -1, tint: null }]]);
    for (const strip of comb.strips) {
      groups.set(`${strip.slip}:${strip.tint || ''}`, { slip: strip.slip, tint: strip.tint });
    }
    return [...groups.values()].map((group) => {
      const home = group.slip < 0 && group.tint === null;
      const paint = (on) => (on ? '#000' : 'transparent');
      const stops = [`${paint(home)} 0 ${at(COMB_TOP)}`];
      for (const strip of comb.strips) {
        const member = strip.slip === group.slip && strip.tint === group.tint;
        stops.push(`${paint(member)} ${at(strip.top)} ${at(strip.bottom)}`);
      }
      stops.push(`${paint(home)} ${at(comb.strips.at(-1)?.bottom ?? COMB_BOTTOM)} 100%`);
      return { slip: comb.slips[group.slip] || 0, tint: group.tint, mask: `linear-gradient(to bottom, ${stops.join(', ')})` };
    });
  }

  function inksHtml(look, text, keyed) {
    let html = keyed ? `<span class="vt-key-ink">${text}</span>` : '';
    for (const c of look.copies) {
      html += `<span class="vt-copy" style="color:${flatInk(c.color)};transform:translate(${c.dx}em,${c.dy}em)">${text}</span>`;
    }
    if (look.plates) {
      for (const p of PLATES) {
        const pt = look.plates[p];
        html += `<span class="vt-plate" data-plate="${p}" style="transform:translate(${pt[0]}em,${pt[1]}em)">${text}</span>`;
      }
    }
    return html;
  }

  function renderWordState(el, rawText, state) {
    const text = escHtml(rawText);
    if (state === 'printed') {
      el.removeAttribute('data-state');
      el.removeAttribute('data-key');
      el.innerHTML = text;
      return;
    }
    if (state === 'waiting') {
      el.setAttribute('data-state', 'waiting');
      el.removeAttribute('data-key');
      el.innerHTML = text;
      return;
    }
    el.removeAttribute('data-state');
    const look = state;
    const comb = look.comb;
    el.setAttribute('data-key', String(Boolean(look.key && comb === null)));

    let glitch = '';
    if (comb) {
      for (const layer of combLayers(comb)) {
        const xform = layer.slip ? `transform:translateX(${em(layer.slip)});` : '';
        const body = layer.tint
          ? `<span class="vt-comb-ink" data-tint="${layer.tint}">${text}</span>`
          : inksHtml(look, text, look.key);
        glitch += `<span class="vt-comb" style="mask-image:${layer.mask};-webkit-mask-image:${layer.mask};${xform}"><span class="vt-comb-body">${body}</span></span>`;
      }
    } else {
      glitch += inksHtml(look, text, false);
    }

    if (look.shards) {
      glitch += '<span class="vt-gap"></span>';
      for (const s of look.shards) {
        const move = `translate(${s.dx}em,${s.dy}em) rotate(${s.turn}deg)`;
        const origin = toShardBox([s.cx, s.cy]);
        const ink = FLAT_LIGHT[s.color] ? 'dark' : 'light';
        glitch += `<span class="vt-rim" style="clip-path:${polygonCss(s.rim)};transform:${move};transform-origin:${origin}"></span>`;
        glitch += `<span class="vt-shard" data-color="${FLAT[s.color]}" data-ink="${ink}" data-streak="${s.streak >= 0}" style="clip-path:${polygonCss(s.points)};transform:${move};transform-origin:${origin};--streak:${s.streak + 90}deg"><span class="vt-shard-text">${text}</span></span>`;
      }
    }

    if (look.noise) {
      const ink = look.key || !look.copies[0] ? INK.key : flatInk(look.copies[0].color);
      glitch += debrisHtml(look.noise, comb, ink);
    }

    el.innerHTML = `${text}<span class="vt-glitch" aria-hidden="true">${glitch}</span>`;
  }

  function createVerseWord(el, text, seed) {
    el.classList.add('vt-root', 'vt-word');
    const schedule = printSchedule(mixSeed(seed, 1));
    const bursts = [];
    let tick = 0;
    let raf = 0;
    let last = 0;
    let carry = 0;
    let lastStateKey = '';

    function getBurstAt(t) {
      const bSeed = mixSeed(seed, 1);
      while (!bursts.length || bursts.at(-1).start <= t) {
        const prev = bursts.at(-1);
        bursts.push(burstAt(bSeed, bursts.length, prev ? burstEnd(prev) : schedule.end));
      }
      for (let i = bursts.length - 1; i >= 0; i--) {
        if (bursts[i].start <= t) return bursts[i];
      }
      return null;
    }

    const MAX_TICKS = 72; // 3 seconds at 24fps

    function stateAt(t) {
      if (t >= MAX_TICKS) return 'printed';
      let age = t - schedule.start;
      if (age < 0) return 'waiting';
      for (const frame of schedule.frames) {
        if (age < frame.ticks) return frame.look;
        age -= frame.ticks;
      }
      const b = getBurstAt(t);
      if (b) {
        let bAge = t - b.start;
        for (const frame of b.frames) {
          if (bAge < frame.ticks) return frame.look;
          bAge -= frame.ticks;
        }
      }
      return 'printed';
    }

    function draw(t) {
      const st = stateAt(t);
      const key = typeof st === 'string' ? st : JSON.stringify(st);
      if (key !== lastStateKey) {
        lastStateKey = key;
        renderWordState(el, text, st);
      }
    }

    function step(now) {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
        draw(MAX_TICKS);
        raf = 0;
        return;
      }
      if (last > 0) {
        carry += (now - last) / FRAME_MS;
        const whole = Math.min(Math.floor(carry), MOST_PER_FRAME);
        carry -= Math.floor(carry);
        if (whole > 0) {
          tick += whole;
          draw(tick);
          if (tick >= MAX_TICKS) {
            raf = 0;
            return;
          }
        }
      }
      last = now;
      raf = requestAnimationFrame(step);
    }

    function replay() {
      cancelAnimationFrame(raf);
      tick = 0;
      last = 0;
      carry = 0;
      lastStateKey = '';
      draw(0);
      raf = requestAnimationFrame(step);
    }

    return { el, once: el.hasAttribute('data-verse-once'), replay };
  }

  let instances = [];

  function mountVerseTargets() {
    instances = instances.filter((inst) => document.contains(inst.el));
    document.querySelectorAll('[data-verse-text]').forEach((el) => {
      if (el.__vtMounted) return;
      el.__vtMounted = true;
      const text = el.getAttribute('data-verse-text') || el.textContent.trim();
      const seed = Number(el.getAttribute('data-verse-seed')) || 1610;
      const inst = createVerseWord(el, text, seed);
      instances.push(inst);
      inst.replay();
    });
  }

  window.mountVerseTexts = mountVerseTargets;
  window.replayVerseTexts = () => {
    mountVerseTargets();
    instances.forEach((inst) => {
      if (!inst.once) inst.replay();
    });
  };

  document.addEventListener('DOMContentLoaded', mountVerseTargets);
})();
