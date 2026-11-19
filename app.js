/* ══════════════════════════════════════════════
   DATA: ALL 34 FAVORITES FROM DESIGNERDADA.COM
   ══════════════════════════════════════════════ */
const FAVORITES = [
  { title: 'Anthropic', desc: 'AI company I trust', domain: 'anthropic.com', faviconDomain: 'www.anthropic.com', href: 'https://www.anthropic.com/', category: 'Apps', preview: 'https://assets.claude.com/6d4a0d28992ade92d6fa63646fd9c9d318245c6c.jpg' },
  { title: 'Raycast', desc: 'My Shortcut to Everything', domain: 'raycast.com', faviconDomain: 'www.raycast.com', href: 'https://www.raycast.com/', category: 'Apps', preview: 'https://www.raycast.com/opengraph-image-pwu6ef.png?opengraph-image.1f-98etzkaz5s.png' },
  { title: 'What Human Memory Teaches Us About Building AI Memory', desc: '', domain: 'moderndata101.substack.com', faviconDomain: 'moderndata101.substack.com', href: 'https://moderndata101.substack.com/p/memory-blueprint-for-ai', category: 'Blogs', preview: 'https://substackcdn.com/image/fetch/$s_!mqCF!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6ee6d47e-83a8-41c9-8d3f-2d0623855c68_1565x891.png' },
  { title: 'Python', desc: 'favourite coding language', domain: 'python.org', faviconDomain: 'www.python.org', href: 'https://www.python.org/', category: 'Apps', preview: 'https://www.python.org/static/opengraph-icon-200x200.png' },
  { title: 'Dhurandhar', desc: 'Based on Incredible true event', domain: 'netflix.com', faviconDomain: 'www.netflix.com', href: 'https://www.netflix.com/de-en/title/82156122', category: 'Movies', preview: 'https://occ-0-8336-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQSpyGF5vVvn0CHkaK29kxqUmAZb2nEIYs1uezqtwSnNp7qg7ykmnN0_tt6cr6GY0oXMwEvTJsiTmv3s0Eu5Zom9I-PJI_o8nXvE.jpg?r=db9' },
  { title: 'RenameMail', desc: 'Keeps my Gmail inbox sane', domain: 'renamemail.com', faviconDomain: 'www.renamemail.com', icon: 'renamemail-icon.png', href: 'https://renamemail.com/', category: 'Apps', preview: 'https://renamemail.vercel.app/og-image.png' },
  { title: 'Making softwares', desc: 'illustrated tech manual', domain: 'makingsoftware.com', faviconDomain: 'www.makingsoftware.com', href: 'https://www.makingsoftware.com/', category: 'Blogs', preview: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fwww.makingsoftware.com%2F?w=600' },
  { title: 'Developing Taste', desc: '', domain: 'emilkowal.ski', faviconDomain: 'emilkowal.ski', href: 'https://emilkowal.ski/ui/developing-taste', category: 'Blogs', preview: 'https://emilkowal.ski/ui/developing-taste/opengraph-image.jpg?504f64db8768edb1' },
  { title: 'time.fyi', desc: 'Loved the landing page. Clear, concise, and direct!', domain: 'time.fyi', faviconDomain: 'time.fyi', href: 'https://time.fyi/', category: 'Design', preview: 'https://time.fyi/og.png' },
  { title: 'Moctale', desc: 'Favourite place to find movies, TV-shows, series', domain: 'moctale.in', faviconDomain: 'www.moctale.in', href: 'https://www.moctale.in/', category: 'Apps', preview: 'moctale-preview.jpg' },
  { title: 'waitbutwhy', desc: '', domain: 'waitbutwhy.com', faviconDomain: 'waitbutwhy.com', href: 'https://waitbutwhy.com/', category: 'Blogs', preview: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fwaitbutwhy.com%2F?w=600' },
  { title: 'Lofree Block', desc: 'The keyboard that makes me feel like a kid again.', domain: 'lofree.co', faviconDomain: 'www.lofree.co', href: 'https://www.lofree.co/products/lofree-block-wireless-mechanical-keyboard-1', category: 'Hardware', preview: 'https://www.lofree.co/cdn/shop/files/BlockP101.webp?v=1713779123&width=2048' },
  { title: 'The physics of doing hard things', desc: '', domain: 'laylool.substack.com', faviconDomain: 'laylool.substack.com', href: 'https://laylool.substack.com/p/the-physics-of-doing-hard-things', category: 'Blogs', preview: 'https://substackcdn.com/image/fetch/$s_!5hlK!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F483c1d54-1c2b-4324-86da-532d63b26c8d_4032x3024.jpeg' },
  { title: "JoJo's Bizarre Adventure : Golden Wind", desc: 'Favourite Anime', domain: 'netflix.com', faviconDomain: 'www.netflix.com', href: 'https://www.netflix.com/de-en/title/80179831', category: 'Movies', preview: 'jojo-preview.jpg' },
  { title: 'Geist & Geist Mono', desc: 'Product font I blindly use', domain: 'vercel.com', faviconDomain: 'vercel.com', href: 'https://vercel.com/font', category: 'Typography', preview: 'https://k2mkucxia43oc7fa.public.blob.vercel-storage.com/front/geist-font-page/og/geist-font-og.png' },
  { title: 'Departure Mono', desc: 'Beautiful pixel mono font', domain: 'departuremono.com', faviconDomain: 'departuremono.com', href: 'https://departuremono.com/', category: 'Typography', preview: 'https://departuremono.com/assets/departure-og.png' },
  { title: 'Gmail: Designed to be joyfully simple', desc: '', domain: 'elizlaraki.substack.com', faviconDomain: 'elizlaraki.substack.com', href: 'https://elizlaraki.substack.com/p/gmail-designed-to-be-joyfully-simple', category: 'Blogs', preview: 'https://substackcdn.com/image/fetch/$s_!evoZ!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F16101b48-bebc-4a93-8f0f-3fe7a5414ccb_2662x1082.png' },
  { title: 'Neal Agarwal', desc: "Click only if you've 2 hours to spare.", domain: 'neal.fun', faviconDomain: 'neal.fun', href: 'https://neal.fun/', category: 'Design', preview: 'https://me.sh/_next/static/media/home.2e1n0digy0vmm.jpg' },
  { title: 'Mobbin', desc: 'my iOS design inspiration', domain: 'mobbin.com', faviconDomain: 'mobbin.com', href: 'https://mobbin.com/', category: 'Design', preview: 'https://uah9o0nekz8ndp4g.public.blob.vercel-storage.com/tools/mobbin/og-1779224458068.png' },
  { title: 'People are portals', desc: '', domain: 'velvetnoise.substack.com', faviconDomain: 'velvetnoise.substack.com', href: 'https://velvetnoise.substack.com/p/people-are-portals', category: 'Blogs', preview: 'https://substackcdn.com/image/fetch/$s_!fi7V!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F11e4835a-09ba-41d0-a597-7d73f5adb80e_1200x720.png' },
  { title: 'Curated Supply', desc: 'All the things I wish to own someday', domain: 'curated.supply', faviconDomain: 'curated.supply', href: 'https://curated.supply/', category: 'Design', preview: 'https://framerusercontent.com/images/yQRnqZsGDmPBZ7e7xuDVv7qyNQ.png' },
  { title: 'Alan Menken', desc: 'Portfolio of a award winning songwriter', domain: 'alanmenken.com', faviconDomain: 'www.alanmenken.com', href: 'https://www.alanmenken.com/', category: 'People', preview: 'https://www.alanmenken.com/assets/images/share_image.jpg' },
  { title: 'About Time', desc: 'My comfort zone', domain: 'netflix.com', faviconDomain: 'www.netflix.com', href: 'https://www.netflix.com/de-en/title/70261674', category: 'Movies', preview: 'https://occ-0-8336-2774.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXMZlCiZsx_JFoY2zd6yzSuH-x9aY8_pI9LjHSHPS-ECz-5IRbSNcOF8bpG4VRDWWV030Zj0m8kxQQuOQGf1fbASjWpJr8t2dIbJ.jpg?r=697' },
  { title: 'what should a machine see in human behaviour', desc: '', domain: 'interhuman.ai', faviconDomain: 'www.interhuman.ai', href: 'https://www.interhuman.ai/blog/what-should-a-machine-see-in-human-behavior', category: 'Blogs', preview: 'https://www.interhuman.ai/images/blog/what-should-a-machine-see-in-human-behaviour.webp' },
  { title: 'Clay', desc: 'Top notch product & website design', domain: 'clay.earth', faviconDomain: 'clay.earth', href: 'https://clay.earth/', category: 'Design', preview: 'https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/68309ab48369f7ad9b4a40e1_open-graph.jpg' },
  { title: 'Principles', desc: '', domain: 'nabeelqu.substack.com', faviconDomain: 'nabeelqu.substack.com', href: 'https://nabeelqu.substack.com/p/principles', category: 'Blogs', preview: 'https://substackcdn.com/image/fetch/$s_!CnfO!,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fnabeelqu.substack.com%2Ftwitter%2Fsubscribe-card.jpg%3Fv%3D1404990252%26version%3D9' },
  { title: 'Lovi', desc: 'So simple landing page', domain: 'lovi.care', faviconDomain: 'lovi.care', href: 'https://lovi.care/', category: 'Design', preview: 'https://cdn.prod.website-files.com/6040b8a8176ad35fd8dbf709/606597ba2d86c0c02d518010_og.jpg' },
  { title: 'The Penguin', desc: 'My favourite TV-show', domain: 'hbomax.com', faviconDomain: 'www.hbomax.com', href: 'https://www.hbomax.com/de/en/show/5756c2bf-36f8-4890-b1f9-ef168f1d8e9c', category: 'Movies', preview: 'https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/5756c2bf-36f8-4890-b1f9-ef168f1d8e9c/7adf9113-5f4f-4108-8b5f-e7954bf0dc5d?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=500' },
  { title: 'Stripe Dev', desc: 'Blog websites can be thoughtful', domain: 'stripe.dev', faviconDomain: 'stripe.dev', href: 'https://stripe.dev/', category: 'Design', preview: 'https://stripe.dev/dev_social.jpeg' },
  { title: 'Thoughts on ownership', desc: '', domain: 'x.com', faviconDomain: 'x.com', href: 'https://x.com/thorstenball/status/2066907538499506349', category: 'Blogs', preview: 'https://pbs.twimg.com/media/HK8hajHXsAA1v1B?format=webp&name=large' },
  { title: 'Stripe Press', desc: 'Books I wish to own', domain: 'press.stripe.com', faviconDomain: 'press.stripe.com', href: 'https://press.stripe.com/', category: 'Design', preview: 'https://images.stripeassets.com/fzn2n1nzq965/13zaWB3aiz08hqNr69CMW4/772586e910faef5d26d15e01edb9c010/social.png?q=80' },
  { title: 'Breadcrumbs', desc: '', domain: 'map.simonsarris.com', faviconDomain: 'map.simonsarris.com', href: 'https://map.simonsarris.com/p/breadcrumbs', category: 'Blogs', preview: 'https://substackcdn.com/image/fetch/$s_!BeWV!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3416b6c3-f2e1-4062-8c6c-12859fa77b63_503x686.jpeg' },
  { title: 'ogimage Gallery', desc: 'Design inspiration for og-images', domain: 'ogimage.gallery', faviconDomain: 'ogimage.gallery', href: 'https://ogimage.gallery/', category: 'Design', preview: 'https://framerusercontent.com/assets/Jhi3cyuhNcM8mpK969isaxEVmbk.png' },
  { title: 'Hardik Pandya', desc: 'Brilliant design leader', domain: 'hvpandya.com', faviconDomain: 'hvpandya.com', href: 'https://hvpandya.com/', category: 'People', preview: 'https://hvpandya.com/assets/hvpandya-cropped.jpeg' },
  { title: 'the power of knowing what you like', desc: '', domain: 'fortherecordink.substack.com', faviconDomain: 'fortherecordink.substack.com', href: 'https://fortherecordink.substack.com/p/the-power-of-knowing-what-you-like', category: 'Blogs', preview: 'https://substackcdn.com/image/fetch/$s_!Y_CJ!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1161587d-d6a8-498e-ab45-112d317bc70a_1697x1103.png' },
  { title: 'Darius Dan', desc: "Big fan of Darius' illustrations", domain: 'dariusdan.com', faviconDomain: 'dariusdan.com', href: 'https://dariusdan.com/', category: 'People', preview: 'https://framerusercontent.com/assets/UohMusTItaAfC9DwtvkPsm2Vc8.jpg' },
  { title: 'Ramayana: The Legend of Prince Rama', desc: 'Favourite Rāmāyaṇa', domain: 'imdb.com', faviconDomain: 'www.imdb.com', href: 'https://www.imdb.com/title/tt0259534/', category: 'Movies', preview: 'ramayana-preview.jpg' },
  { title: 'Becoming yourself is a social project', desc: '', domain: 'velvetnoise.substack.com', faviconDomain: 'velvetnoise.substack.com', href: 'https://velvetnoise.substack.com/p/becoming-yourself-is-a-social-project', category: 'Blogs', preview: 'https://substackcdn.com/image/fetch/$s_!k-SD!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4b52d16f-9ef5-4b8d-95e5-3b1f06c3a405_735x720.png' },
  { title: 'Gavin Nelson', desc: 'Designer at Linear', domain: 'nelson.co', faviconDomain: 'nelson.co', href: 'https://nelson.co/', category: 'People', preview: 'https://nelson.co/og.png' },
  { title: 'Dieter Rams', desc: 'My source of inspiration', domain: 'rams-foundation.org', faviconDomain: 'rams-foundation.org', href: 'https://rams-foundation.org/', category: 'People', preview: 'https://rams-foundation.org/wp-content/uploads/2026/06/Oliver-Design-Studio-wide.jpg' },
  { title: 'The power of side projects', desc: '', domain: 'verifiedinsider.substack.com', faviconDomain: 'verifiedinsider.substack.com', href: 'https://verifiedinsider.substack.com/p/the-power-of-side-projects', category: 'Blogs', preview: 'https://substackcdn.com/image/fetch/$s_!NrAm!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd7d2dc35-7283-4c3d-9f14-883d079f9112_1110x768.png' },
  { title: 'Bauhaus Clock', desc: 'A minimal and beautiful clock screensaver for your mac.', domain: 'bauhausclock.com', faviconDomain: 'bauhausclock.com', href: 'https://bauhausclock.com/', category: 'Apps', preview: 'https://framerusercontent.com/images/vTxvYBhi0Zzlm16K4AQRqpeA.png' },
  { title: 'how to enter side doors', desc: '', domain: 'velvetnoise.substack.com', faviconDomain: 'velvetnoise.substack.com', href: 'https://velvetnoise.substack.com/p/how-to-enter-side-doors', category: 'Blogs', preview: 'https://substackcdn.com/image/fetch/$s_!q2Im!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0fd9389d-10ed-4a1b-9a39-cdc1683d92eb_736x561.jpeg' },
  { title: 'Foxchat', desc: 'Lightweight Intercom alternative', domain: 'foxchat.dev', faviconDomain: 'www.foxchat.dev', href: 'https://www.foxchat.dev/', category: 'Apps', preview: 'https://www.foxchat.dev/foxchat-og.jpg' },
  { title: "Brian's wiritng section", desc: '', domain: 'brianlovin.com', faviconDomain: 'brianlovin.com', href: 'https://brianlovin.com/writing', category: 'Blogs', preview: 'https://brianlovin.com/img/og.png' },
  { title: 'Granola', desc: 'My companion in all sales calls', domain: 'granola.ai', faviconDomain: 'www.granola.ai', href: 'https://www.granola.ai/', category: 'Apps', preview: 'https://www.granola.ai/og-image.png' },
  { title: 'Perfect Days', desc: 'A humble little film, maybe, but an enriching one.', domain: 'mubi.com', faviconDomain: 'mubi.com', href: 'https://mubi.com/en/in/films/perfect-days', category: 'Movies', preview: 'https://images.mubicdn.net/images/film/343977/cache-903999-1745501776/image-w1280.jpg' },
  { title: 'Hugeicons', desc: 'Using these icons in all of my projects', domain: 'hugeicons.com', faviconDomain: 'hugeicons.com', href: 'https://hugeicons.com/', category: 'Design', preview: 'https://hugeicons.com/og_preview.png' },
  { title: 'Bens bites', desc: '', domain: 'bensbites.com', faviconDomain: 'www.bensbites.com', href: 'https://www.bensbites.com/', category: 'Blogs', preview: 'https://substackcdn.com/image/fetch/$s_!2s4n!,w_400,h_400,c_fill,f_auto,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fffa6fb9f-cf26-4e66-b4fe-53d8122a840b_256x256.png' },
  { title: 'Thiings.co', desc: 'Love their everyday 3d icons', domain: 'thiings.co', faviconDomain: 'thiings.co', href: 'https://thiings.co/', category: 'Design', preview: 'https://www.thiings.co/meta-new.png' },
  { title: 'Seline', desc: 'Analytics with beauty and brain', domain: 'seline.com', faviconDomain: 'seline.com', href: 'https://seline.com/', category: 'Apps', preview: 'https://seline.com/_next/static/media/seline-og.0rw-3ss980kwf.png' },
  { title: 'Leica M6', desc: 'Only generational wealth I will pass on', domain: 'leica-camera.com', faviconDomain: 'leica-camera.com', href: 'https://leica-camera.com/en-int/photography/cameras/m/m6', category: 'Hardware', preview: 'https://leica-camera.com/sites/default/files/styles/meta_tag_product_image/public/pm-84724-10557_leica_m6_black_front_1.webp?itok=7tdK25g7' },
  { title: 'Literal', desc: 'For a bookworm in you', domain: 'literal.club', faviconDomain: 'literal.club', href: 'https://literal.club/', category: 'Apps', preview: null },
  { title: 'Flighty', desc: 'This app make avgeek within me happy', domain: 'flighty.com', faviconDomain: 'flighty.com', href: 'https://flighty.com/', category: 'Apps', preview: null },
];

/* ══════════════════════════════════════════════
   INITIALIZATION
   ══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initTheme();
  initSkyStars();
  initTabs();
  initEmailCopy();
  initFavorites();
  initPhotography();
  initClickSound();
  initClickSpark();
  initGitHubBar();
  initWixonFooter();
});

/* ── Theme (KokonutUI SwitchButton + Verlet Pull Cord Lamp + Circular View Transition) ── */
function initTheme() {
  const toggleBtn = document.getElementById('themeToggle');
  const iconEl = document.getElementById('themeIcon');
  const labelsEl = document.getElementById('themeLabels');
  const a11yBtn = document.getElementById('pullLampA11yBtn');
  const hintEl = document.getElementById('pullLampHint');
  const root = document.documentElement;

  const EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)';
  const EASE_IN_OUT = 'cubic-bezier(0.65, 0, 0.35, 1)';
  const EASE_REVEAL = 'cubic-bezier(0.4, 0, 0.2, 1)';
  const ANIMATED_PROPS = ['opacity', 'scale', 'translate', 'filter'];

  let revealRunning = false;
  let audioCtx = null;
  let noiseBuf = null;

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function playPullChainClick(toDark) {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      if (!audioCtx) audioCtx = new Ctx();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const now = audioCtx.currentTime;

      if (!noiseBuf) {
        const len = Math.floor(audioCtx.sampleRate * 0.02);
        noiseBuf = audioCtx.createBuffer(1, len, audioCtx.sampleRate);
        const data = noiseBuf.getChannelData(0);
        for (let i = 0; i < len; i++) {
          const env = Math.pow(1 - i / len, 3);
          data[i] = (Math.random() * 2 - 1) * env;
        }
      }

      const master = audioCtx.createGain();
      master.gain.value = 0.12;
      master.connect(audioCtx.destination);

      // Crisp metallic chain click noise
      const noise = audioCtx.createBufferSource();
      noise.buffer = noiseBuf;
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = toDark ? 3400 : 2600;
      filter.Q.value = 1.2;
      noise.connect(filter);
      filter.connect(master);
      noise.start(now);

      // Mechanical switch triangle transient
      const osc = audioCtx.createOscillator();
      const oscGain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(toDark ? 2200 : 1700, now);
      osc.frequency.exponentialRampToValueAtTime(toDark ? 1400 : 1100, now + 0.03);
      oscGain.gain.setValueAtTime(0.0001, now);
      oscGain.gain.linearRampToValueAtTime(0.35, now + 0.002);
      oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);
      osc.connect(oscGain);
      oscGain.connect(master);
      osc.start(now);
      osc.stop(now + 0.046);
    } catch {}
  }

  const syncAria = () => {
    const isDark = root.classList.contains('dark');
    if (toggleBtn) toggleBtn.setAttribute('aria-pressed', String(isDark));
    if (a11yBtn) a11yBtn.setAttribute('aria-checked', String(isDark));
    if (hintEl) {
      if (typeof window.__getTranslatedText === 'function') {
        hintEl.textContent = window.__getTranslatedText(isDark ? 'pullLampMorning' : 'pullLampNight');
      } else {
        hintEl.textContent = isDark ? 'Pull for morning' : 'Pull to call it a night';
      }
    }
    root.style.colorScheme = isDark ? 'dark' : 'light';
  };
  window.__syncLampAria = syncAria;

  if (localStorage.getItem('theme') === 'dark') {
    root.classList.add('dark');
  }
  syncAria();

  function snapshot(elements) {
    const map = new Map();
    for (const el of elements) {
      const style = getComputedStyle(el);
      const frame = { offset: 0 };
      for (const prop of ANIMATED_PROPS) {
        frame[prop] = style.getPropertyValue(prop);
      }
      map.set(el, frame);
      for (const anim of el.getAnimations()) {
        anim.cancel();
      }
    }
    return map;
  }

  function timing(el, toDark) {
    const part = el.dataset.part;
    const i = Number(el.dataset.index || '0');
    switch (part) {
      case 'ray':
        return { delay: toDark ? i * 18 : 140 + i * 22, duration: 260, easing: EASE_OUT };
      case 'bite':
        return { delay: toDark ? 60 : 0, duration: 380, easing: EASE_IN_OUT };
      case 'disc':
        return { delay: toDark ? 40 : 0, duration: 380, easing: EASE_OUT };
      default:
        return { duration: 240, easing: EASE_OUT };
    }
  }

  function morph(from, toDark) {
    if (prefersReducedMotion()) return;
    for (const [el, frame] of from) {
      el.animate([frame, {}], { ...timing(el, toDark), fill: 'backwards' });
    }
  }

  function revealFromPoint(x, y, apply) {
    if (
      typeof document.startViewTransition !== 'function' ||
      prefersReducedMotion() ||
      revealRunning ||
      document.activeViewTransition
    ) {
      apply();
      return;
    }

    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    root.setAttribute('data-theme-reveal', '');
    revealRunning = true;

    let transition;
    try {
      transition = document.startViewTransition(apply);
    } catch {
      root.removeAttribute('data-theme-reveal');
      revealRunning = false;
      apply();
      return;
    }

    transition.ready
      .then(() => {
        root.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 540,
            easing: EASE_REVEAL,
            pseudoElement: '::view-transition-new(root)',
          }
        );
      })
      .catch(() => {});

    transition.finished
      .catch(() => {})
      .finally(() => {
        root.removeAttribute('data-theme-reveal');
        revealRunning = false;
      });
  }

  function triggerThemeToggle(originEl, playChainSound = false) {
    const nextDark = !root.classList.contains('dark');
    if (playChainSound) {
      playPullChainClick(nextDark);
    }
    const apply = () => {
      const parts = [
        ...(iconEl ? iconEl.querySelectorAll('[data-part]') : []),
        ...(labelsEl ? labelsEl.querySelectorAll('[data-part]') : []),
      ];
      const before = snapshot(parts);
      root.classList.toggle('dark', nextDark);
      localStorage.setItem('theme', nextDark ? 'dark' : 'light');
      syncAria();
      morph(before, nextDark);
    };

    if (originEl) {
      const target =
        originEl.querySelector && originEl.querySelector('.pull-bead-body')
          ? originEl.querySelector('.pull-bead-body')
          : originEl;
      const rect = target.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      revealFromPoint(x, y, apply);
    } else {
      apply();
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      triggerThemeToggle(toggleBtn, false);
    });
  }

  // Initialize KokonutUI Verlet physics pull cord on the top-right lamp
  initVerletPullCord({
    onToggle: (beadEl) => triggerThemeToggle(beadEl, true),
    prefersReducedMotion,
  });
}

/* ── KokonutUI Verlet Pull Cord Simulation (@dorianbaffier) ── */
function initVerletPullCord({ onToggle, prefersReducedMotion }) {
  const aside = document.querySelector('.pull-lamp-aside');
  const svg = document.getElementById('pullLampSvg');
  const cordEl = document.getElementById('pullCordPath');
  const hitEl = document.getElementById('pullCordHit');
  const beadEl = document.getElementById('pullCordBead');
  const hintEl = document.getElementById('pullLampHint');
  const a11yBtn = document.getElementById('pullLampA11yBtn');

  if (!aside || !svg || !cordEl || !hitEl || !beadEl) return;

  const WIDTH = 140;
  const HEIGHT = 220;
  const ANCHOR = { x: 85, y: 49.5 };
  const LINKS = 12;
  const LINK = 5.65;
  const STEP = 1 / 120;
  const GRAVITY = 1400;
  const DAMPING = 0.991;
  const MAX_SPEED = 4;
  const BEND_MIN = LINK * 1.9;
  const BEND_STIFFNESS = 0.8;
  const ITERATIONS = 14;
  const CLICK_PULL = 18;
  const MAX_STRETCH = 32;
  const REST_EPSILON = 0.015;
  const REST_STEPS = 24;

  function damp(distance, max) {
    return max * (1 - Math.exp(-distance / max));
  }

  function haptic() {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(8);
      } catch {}
    }
  }

  function restingChain() {
    const xs = new Float64Array(LINKS + 1);
    const ys = new Float64Array(LINKS + 1);
    for (let i = 0; i <= LINKS; i++) {
      xs[i] = ANCHOR.x;
      ys[i] = ANCHOR.y + i * LINK;
    }
    return { xs, ys };
  }

  const REST = restingChain();

  function cordPath(xs, ys) {
    let d = `M${xs[0].toFixed(2)} ${ys[0].toFixed(2)}`;
    for (let i = 1; i < xs.length - 1; i++) {
      const mx = (xs[i] + xs[i + 1]) / 2;
      const my = (ys[i] + ys[i + 1]) / 2;
      d += ` Q${xs[i].toFixed(2)} ${ys[i].toFixed(2)} ${mx.toFixed(2)} ${my.toFixed(2)}`;
    }
    const n = xs.length - 1;
    d += ` L${xs[n].toFixed(2)} ${ys[n].toFixed(2)}`;
    return d;
  }

  const sim = {
    xs: Float64Array.from(REST.xs),
    ys: Float64Array.from(REST.ys),
    pxs: Float64Array.from(REST.xs),
    pys: Float64Array.from(REST.ys),
    raf: 0,
    last: 0,
    carry: 0,
    still: 0,
    held: -1,
    targetX: 0,
    targetY: 0,
    downX: 0,
    downY: 0,
    maxDragDist: 0,
    toggledOnThisPull: false,
    armed: true,
  };

  function relax(a, b, length, bend) {
    const { xs, ys, held } = sim;
    const aFixed = a === 0 || a === held;
    const bFixed = b === held;
    if (aFixed && bFixed) return;
    const dx = xs[b] - xs[a];
    const dy = ys[b] - ys[a];
    const dist = Math.hypot(dx, dy) || 0.0001;
    if (bend && dist >= length) return;
    const diff = ((dist - length) / dist) * (bend ? BEND_STIFFNESS : 1);
    let wa = 0.5;
    if (aFixed) wa = 0;
    else if (bFixed) wa = 1;
    xs[a] += dx * diff * wa;
    ys[a] += dy * diff * wa;
    xs[b] -= dx * diff * (1 - wa);
    ys[b] -= dy * diff * (1 - wa);
  }

  function draw() {
    const { xs, ys } = sim;
    const d = cordPath(xs, ys);
    cordEl.setAttribute('d', d);
    hitEl.setAttribute('d', d);
    const n = LINKS;
    const angle = (Math.atan2(xs[n] - xs[n - 1], ys[n] - ys[n - 1]) * 180) / Math.PI;
    beadEl.setAttribute(
      'transform',
      `translate(${xs[n].toFixed(2)} ${ys[n].toFixed(2)}) rotate(${(-angle).toFixed(2)})`
    );
    if (hintEl) {
      hintEl.style.top = `${(ys[n] + 6).toFixed(1)}px`;
    }
  }

  function integrate() {
    const { xs, ys, pxs, pys } = sim;
    let moved = 0;
    for (let i = 1; i <= LINKS; i++) {
      if (i === sim.held) continue;
      let vx = (xs[i] - pxs[i]) * DAMPING;
      let vy = (ys[i] - pys[i]) * DAMPING;
      const speed = Math.hypot(vx, vy);
      if (speed > MAX_SPEED) {
        vx *= MAX_SPEED / speed;
        vy *= MAX_SPEED / speed;
      }
      pxs[i] = xs[i];
      pys[i] = ys[i];
      xs[i] += vx;
      ys[i] += vy + GRAVITY * STEP * STEP;
      moved = Math.max(moved, Math.abs(vx) + Math.abs(vy));
    }
    if (sim.held > 0) {
      const i = sim.held;
      moved = Math.max(
        moved,
        Math.abs(sim.targetX - xs[i]) + Math.abs(sim.targetY - ys[i])
      );
      pxs[i] = xs[i];
      pys[i] = ys[i];
      xs[i] = sim.targetX;
      ys[i] = sim.targetY;
    }
    return moved;
  }

  function constrain() {
    for (let k = 0; k < ITERATIONS; k++) {
      for (let i = 0; i < LINKS; i++) {
        relax(i, i + 1, LINK, false);
      }
      for (let i = 0; i + 2 <= LINKS; i++) {
        relax(i, i + 2, BEND_MIN, true);
      }
    }
  }

  function step() {
    const moved = integrate();
    constrain();
    return moved;
  }

  function tick(now) {
    sim.raf = 0;
    const elapsed = sim.last ? Math.min((now - sim.last) / 1000, 0.05) : STEP;
    sim.last = now;
    sim.carry += elapsed;
    let moved = 0;
    while (sim.carry >= STEP) {
      moved = Math.max(moved, step());
      sim.carry -= STEP;
    }
    draw();
    sim.still = moved < REST_EPSILON ? sim.still + 1 : 0;
    if (sim.held > 0 || sim.still < REST_STEPS) {
      sim.raf = requestAnimationFrame(tick);
    } else {
      sim.last = 0;
    }
  }

  function wake() {
    sim.still = 0;
    if (!sim.raf) {
      sim.raf = requestAnimationFrame(tick);
    }
  }

  function localPoint(event) {
    const rect = svg.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * WIDTH,
      y: ((event.clientY - rect.top) / rect.height) * HEIGHT,
    };
  }

  function reach(index, x, y) {
    const dx = x - ANCHOR.x;
    const dy = y - ANCHOR.y;
    const dist = Math.hypot(dx, dy) || 0.0001;
    const length = index * LINK;
    if (dist <= length) {
      return { x, y, pull: 0 };
    }
    const allowed = length + damp(dist - length, MAX_STRETCH);
    return {
      x: ANCHOR.x + (dx / dist) * allowed,
      y: ANCHOR.y + (dy / dist) * allowed,
      pull: dy > 0 ? (allowed - length) * (dy / dist) : 0,
    };
  }

  function handlePointerDown(event) {
    if (sim.held > 0) return;
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    event.preventDefault();
    const point = localPoint(event);
    let nearest = LINKS;
    let best = Number.POSITIVE_INFINITY;
    for (let i = 1; i <= LINKS; i++) {
      const d = Math.hypot(sim.xs[i] - point.x, sim.ys[i] - point.y);
      if (d < best) {
        best = d;
        nearest = i;
      }
    }
    try {
      svg.setPointerCapture(event.pointerId);
    } catch {}
    sim.held = nearest;
    sim.targetX = sim.xs[nearest];
    sim.targetY = sim.ys[nearest];
    sim.downX = point.x;
    sim.downY = point.y;
    sim.maxDragDist = 0;
    sim.toggledOnThisPull = false;
    sim.armed = true;
    aside.classList.add('is-grabbing');
    wake();
  }

  function handlePointerMove(event) {
    if (sim.held < 0) return;
    const point = localPoint(event);
    const dragDist = Math.hypot(point.x - sim.downX, point.y - sim.downY);
    if (dragDist > sim.maxDragDist) {
      sim.maxDragDist = dragDist;
    }
    const target = reach(sim.held, point.x, point.y);
    sim.targetX = target.x;
    sim.targetY = target.y;

    aside.classList.toggle('is-armed', sim.armed && target.pull > CLICK_PULL * 0.65);

    if (sim.armed && target.pull > CLICK_PULL) {
      sim.armed = false;
      sim.toggledOnThisPull = true;
      aside.classList.remove('is-armed');
      haptic();
      onToggle(beadEl);
    } else if (!sim.armed && target.pull < CLICK_PULL * 0.4) {
      sim.armed = true;
    }
    wake();
  }

  function handlePointerUp() {
    if (sim.held < 0) return;
    const wasQuickClick = !sim.toggledOnThisPull && sim.maxDragDist < 5;
    sim.held = -1;
    aside.classList.remove('is-grabbing', 'is-armed');

    if (wasQuickClick) {
      haptic();
      onToggle(beadEl);
      if (!prefersReducedMotion()) {
        // Give the cord a crisp downward tug & swing on click
        sim.pys[LINKS] = sim.ys[LINKS] - 4.2;
        sim.pxs[LINKS] = sim.xs[LINKS] - 1.4;
      }
    }

    if (prefersReducedMotion()) {
      sim.xs.set(REST.xs);
      sim.ys.set(REST.ys);
      sim.pxs.set(REST.xs);
      sim.pys.set(REST.ys);
      draw();
      return;
    }
    wake();
  }

  hitEl.addEventListener('pointerdown', handlePointerDown);
  beadEl.addEventListener('pointerdown', handlePointerDown);
  svg.addEventListener('pointermove', handlePointerMove);
  svg.addEventListener('pointerup', handlePointerUp);
  svg.addEventListener('pointercancel', handlePointerUp);
  svg.addEventListener('lostpointercapture', handlePointerUp);

  // Subtle hover sway & tooltip visibility when cursor brushes the bead/cord
  function onHoverEnter(event) {
    aside.classList.add('is-hovered');
    if (event.pointerType === 'mouse' && sim.held < 0 && !prefersReducedMotion()) {
      const nudge = Math.max(-1.6, Math.min(1.6, (event.movementX || 6) * 0.08));
      sim.pxs[LINKS] = sim.xs[LINKS] - nudge;
      wake();
    }
  }

  function onHoverLeave() {
    aside.classList.remove('is-hovered');
  }

  hitEl.addEventListener('pointerenter', onHoverEnter);
  beadEl.addEventListener('pointerenter', onHoverEnter);
  hitEl.addEventListener('pointerleave', onHoverLeave);
  beadEl.addEventListener('pointerleave', onHoverLeave);

  if (a11yBtn) {
    a11yBtn.addEventListener('focus', () => {
      aside.classList.add('is-focused');
    });
    a11yBtn.addEventListener('blur', () => {
      aside.classList.remove('is-focused');
    });
    a11yBtn.addEventListener('click', () => {
      onToggle(beadEl);
      if (!prefersReducedMotion()) {
        sim.pys[LINKS] = sim.ys[LINKS] - 4.5;
        wake();
      }
    });
  }

  draw();

  // Gentle initial sway 700ms after page load so the cord feels alive
  if (!prefersReducedMotion()) {
    setTimeout(() => {
      if (sim.held < 0) {
        sim.pxs[LINKS] = sim.xs[LINKS] - 1.3;
        wake();
      }
    }, 700);
  }
}

/* ── Twilight & Night Sky Stars Canvas + Shooting Stars ── */
function initSkyStars() {
  const canvas = document.getElementById('skyStarsCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const STAR_COLORS = [
    '255,255,255',
    '255,255,255',
    '255,250,240',
    '248,248,246',
    '255,244,228',
  ];
  const rand = (min, max) => min + Math.random() * (max - min);

  let width = 0;
  let height = 0;
  let stars = [];
  let meteors = [];
  let nextAutoMeteorAt = performance.now() + rand(6000, 12000);

  function buildStars() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.round(Math.min(200, Math.max(110, (width * height) / 4800)));
    stars = Array.from({ length: count }, () => {
      const bright = Math.random() < 0.085;
      return {
        x: Math.random(),
        y: Math.pow(Math.random(), 1.45) * 0.86,
        r: bright ? rand(1.1, 1.55) : rand(0.38, 0.98),
        alpha: bright ? rand(0.82, 1) : rand(0.35, 0.88),
        depth: rand(0.16, 0.58),
        speed: (Math.PI * 2) / rand(3200, 8800),
        offset: rand(0, Math.PI * 2),
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      };
    });
  }

  function spawnMeteor(now, originX, originY) {
    if (!width || !height) return;
    const hasOrigin = typeof originX === 'number' && typeof originY === 'number';
    const goRight = hasOrigin
      ? originX < width * 0.52
        ? true
        : originX > width * 0.68
          ? false
          : Math.random() < 0.5
      : Math.random() < 0.5;

    const angle = rand(0.25, 0.52);
    const dist = width * rand(0.22, 0.34);
    const startX = hasOrigin
      ? Math.max(24, Math.min(width - 24, originX))
      : width * (goRight ? rand(0.1, 0.45) : rand(0.55, 0.9));
    const startY = hasOrigin
      ? Math.max(12, Math.min(height * 0.52, originY))
      : height * rand(0.06, 0.3);

    meteors.push({
      x: startX,
      y: startY,
      dx: Math.cos(angle) * dist * (goRight ? 1 : -1),
      dy: Math.sin(angle) * dist,
      start: now,
      duration: rand(750, 980),
      length: rand(74, 122),
    });
  }

  function drawMeteors(now) {
    for (let i = meteors.length - 1; i >= 0; i--) {
      const m = meteors[i];
      const t = (now - m.start) / m.duration;
      if (t >= 1) {
        meteors.splice(i, 1);
        continue;
      }
      if (t < 0) continue;

      const ease = 1 - Math.pow(1 - t, 2);
      const hx = m.x + m.dx * ease;
      const hy = m.y + m.dy * ease;
      const dist = Math.hypot(m.dx, m.dy) || 1;
      const tailLen = m.length * (1 - t * 0.4);
      const tx = hx - (m.dx / dist) * tailLen;
      const ty = hy - (m.dy / dist) * tailLen;
      const fade = Math.sin(Math.PI * t);

      const grad = ctx.createLinearGradient(hx, hy, tx, ty);
      grad.addColorStop(0, `rgba(255, 255, 255, ${(0.95 * fade).toFixed(3)})`);
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.45;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(hx, hy);
      ctx.lineTo(tx, ty);
      ctx.stroke();

      // Subtle glowing head on the shooting star
      ctx.fillStyle = `rgba(255, 255, 255, ${(0.9 * fade).toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(hx, hy, 1.3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function render(now) {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      const twinkle = 1 - s.depth * (0.5 + 0.5 * Math.sin(now * s.speed + s.offset));
      const a = s.alpha * twinkle;
      const sx = s.x * width;
      const sy = s.y * height;

      if (s.r > 1.05) {
        ctx.fillStyle = `rgba(${s.color}, ${(a * 0.18).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(sx, sy, s.r * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(${s.color}, ${a.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(sx, sy, s.r, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = `rgba(${s.color}, ${a.toFixed(3)})`;
        const size = s.r * 2;
        ctx.fillRect(sx - s.r, sy - s.r, size, size);
      }
    }

    const isDark = document.documentElement.classList.contains('dark');
    if (isDark && meteors.length === 0 && now > nextAutoMeteorAt) {
      spawnMeteor(now);
      nextAutoMeteorAt = now + rand(12000, 22000);
    }

    if (meteors.length > 0) {
      drawMeteors(now);
    }

    requestAnimationFrame(render);
  }

  // Clicking anywhere in the top sky banner or header menu in dark mode spawns a shooting star
  window.addEventListener('pointerdown', (e) => {
    if (!document.documentElement.classList.contains('dark')) return;
    if (e.target && e.target.closest && e.target.closest('.pull-lamp-aside')) return;

    const headerEl = document.querySelector('.site-header');
    const headerBottom = headerEl ? headerEl.getBoundingClientRect().bottom : height;
    const skyRect = canvas.getBoundingClientRect();
    const maxClickY = Math.max(skyRect.bottom, headerBottom);

    if (e.clientY <= maxClickY) {
      const clickX = e.clientX - skyRect.left;
      const clickY = e.clientY - skyRect.top;
      const spawnY = clickY <= height * 0.48 ? clickY : rand(height * 0.08, height * 0.28);
      spawnMeteor(performance.now(), clickX, spawnY);
      nextAutoMeteorAt = performance.now() + rand(12000, 22000);
    }
  });

  buildStars();
  window.addEventListener('resize', buildStars, { passive: true });
  requestAnimationFrame(render);
}

/* ── Section Tabs (Home / Favorites / Photography) ── */
function initTabs() {
  const navTabs = document.querySelectorAll('.nav-tab');
  const panels = document.querySelectorAll('.tab-panel');
  const headerEl = document.querySelector('.site-header');
  let currentActiveTab = null;

  function replayStaggerReveal(panel, includeHeader = false) {
    const items = [
      ...(includeHeader && headerEl ? [headerEl] : []),
      ...panel.querySelectorAll('.animate-in'),
    ];
    items.forEach((el) => {
      el.style.animation = 'none';
    });
    void document.body.offsetWidth;
    items.forEach((el) => {
      el.style.animation = '';
    });
  }

  function activateTab(name, replay = false, includeHeader = false) {
    if (name === currentActiveTab) return;
    currentActiveTab = name;

    navTabs.forEach((t) => {
      const active = t.dataset.tab === name;
      t.classList.toggle('active', active);
      t.setAttribute('aria-current', active ? 'page' : 'false');
    });
    panels.forEach((p) => {
      const isTarget = p.id === `panel-${name}`;
      p.classList.toggle('active', isTarget);
      if (isTarget && replay) {
        replayStaggerReveal(p, includeHeader);
      }
    });
  }

  const hash = window.location.hash.replace('#', '');
  const initialTab = ['home', 'favorites', 'photography'].includes(hash) ? hash : 'home';
  activateTab(initialTab, true, true);

  window.addEventListener('pageshow', (e) => {
    if (!e.persisted) return;
    const activePanel = document.querySelector('.tab-panel.active');
    if (activePanel) replayStaggerReveal(activePanel, true);
  });

  navTabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const target = tab.dataset.tab;
      if (target === currentActiveTab) return;
      activateTab(target, true, false);
      history.replaceState(null, '', target === 'home' ? '#' : `#${target}`);
    });
  });

  window.addEventListener('hashchange', () => {
    const h = window.location.hash.replace('#', '') || 'home';
    if (['home', 'favorites', 'photography'].includes(h) && h !== currentActiveTab) {
      activateTab(h, true, false);
    }
  });
}

/* ── Copy Email Toast ── */
function initEmailCopy() {
  const emailEl = document.getElementById('copyEmail');
  const toast = document.getElementById('copyToast');
  const dotBtn = document.getElementById('dotBtn');

  if (emailEl && toast) {
    emailEl.addEventListener('click', () => {
      navigator.clipboard.writeText('abhishekkanani10@gmail.com').then(() => {
        toast.textContent = 'Copied abhishekkanani10@gmail.com';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
      });
    });
  }

  if (dotBtn) {
    const stateKeys = ['signoff', 'signoffQuerying', 'signoffBuilding', 'signoffCaffeinated'];
    const fallbackStates = ['~ shipping...', '~ querying...', '~ building...', '~ caffeinated...'];
    let idx = 0;
    dotBtn.addEventListener('click', () => {
      idx = (idx + 1) % stateKeys.length;
      const signoffText = document.getElementById('signoffText');
      if (signoffText) {
        signoffText.dataset.i18n = stateKeys[idx];
        signoffText.textContent =
          typeof window.__getTranslatedText === 'function'
            ? window.__getTranslatedText(stateKeys[idx])
            : fallbackStates[idx];
      }
    });
  }
}

/* ── Favorites Search, Sort, Filter & Floating Preview Hover Animation ── */
function initFavorites() {
  const listEl = document.getElementById('favList');
  const previewEl = document.getElementById('favPreview');
  const previewCard = document.getElementById('favPreviewCard');
  const previewInner = document.getElementById('favPreviewInner');
  const searchInput = document.getElementById('favSearch');
  const sortBtn = document.getElementById('sortBtn');
  const sortMenu = document.getElementById('sortMenu');
  const sortLabel = document.getElementById('sortLabel');
  const catBtn = document.getElementById('catBtn');
  const catMenu = document.getElementById('catMenu');
  const catLabel = document.getElementById('catLabel');

  let currentSearch = '';
  let currentSort = 'Latest';
  let currentCat = 'All';

  const SORT_I18N_KEYS = {
    Latest: 'sortLatest',
    Oldest: 'sortOldest',
    'A–Z': 'sortAZ',
  };
  const CAT_I18N_KEYS = {
    All: 'catAll',
    Design: 'catDesign',
    Apps: 'catApps',
    Movies: 'catMovies',
    Typography: 'catTypography',
    People: 'catPeople',
    Blogs: 'catBlogs',
    Hardware: 'catHardware',
  };

  // Pre-build preview image nodes for instant crossfade on hover
  const imgNodes = new Map();
  FAVORITES.forEach((item) => {
    if (!item.preview) return;
    const img = document.createElement('img');
    img.src = item.preview;
    img.alt = '';
    img.referrerPolicy = 'no-referrer';
    img.decoding = 'async';
    img.style.opacity = '0';
    img.addEventListener('error', () => {
      img.dataset.broken = '1';
    });
    previewInner.appendChild(img);
    imgNodes.set(item.title, img);
  });

  function showPreviewForRow(row) {
    const title = row.dataset.title;
    const img = imgNodes.get(title);
    if (!img || img.dataset.broken === '1') {
      previewEl.classList.remove('is-visible');
      return;
    }

    // Crossfade active image
    imgNodes.forEach((node) => {
      node.style.opacity = node === img ? '1' : '0';
    });

    // Compute height: uniform 16:9 wide aspect ratio for Movies, natural aspect for others
    let targetHeight = 138;
    if (row.dataset.category !== 'Movies' && img.naturalWidth && img.naturalHeight) {
      const ratio = img.naturalHeight / img.naturalWidth;
      targetHeight = Math.round(Math.min(240, Math.max(126, 232 * ratio + 8)));
    }
    previewCard.style.height = `${targetHeight}px`;

    // Align vertically centered with the hovered row
    const y = row.offsetTop + row.offsetHeight / 2 - targetHeight / 2;
    previewEl.style.transform = `translate3d(0px, ${y}px, 0px)`;
    previewEl.classList.add('is-visible');
  }

  function render() {
    let items = FAVORITES.map((item, idx) => {
      const displayTitle =
        typeof window.__translateFavoriteTitle === 'function'
          ? window.__translateFavoriteTitle(item.title)
          : item.title;
      const displayDesc =
        typeof window.__translateFavoriteDesc === 'function'
          ? window.__translateFavoriteDesc(item.desc)
          : item.desc;
      return { ...item, idx, displayTitle, displayDesc };
    });

    if (currentCat !== 'All') {
      items = items.filter((item) => item.category === currentCat);
    }

    if (currentSearch.trim()) {
      const q = currentSearch.toLowerCase();
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.displayTitle.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q) ||
          (item.displayDesc && item.displayDesc.toLowerCase().includes(q)) ||
          item.domain.toLowerCase().includes(q)
      );
    }

    if (currentSort === 'Oldest') {
      items.reverse();
    } else if (currentSort === 'A–Z') {
      items.sort((a, b) => a.displayTitle.localeCompare(b.displayTitle));
    }

    if (items.length === 0) {
      const emptyMsg =
        typeof window.__getTranslatedText === 'function'
          ? window.__getTranslatedText('favEmpty')
          : 'No matching favorites found.';
      listEl.innerHTML = `<div class="fav-empty">${emptyMsg}</div>`;
      previewEl.classList.remove('is-visible');
      return;
    }

    listEl.innerHTML = items
      .map(
        (item) => `
      <a href="${item.href}" target="_blank" rel="noopener noreferrer nofollow" data-title="${item.title.replace(/"/g, '&quot;')}" data-category="${item.category}" class="fav-row">
        <div class="fav-row-left">
          <div class="fav-icon-wrap">
            <img src="${item.icon || `https://www.google.com/s2/favicons?domain=${item.faviconDomain}&sz=32`}" alt="${item.displayTitle.replace(/"/g, '&quot;')} favicon" width="20" height="20" loading="lazy">
          </div>
          <div class="fav-text-wrap">
            <span class="fav-title">${item.displayTitle}</span>${item.displayDesc ? `
            <span class="fav-sep">/</span>
            <span class="fav-desc">${item.displayDesc}</span>` : ''}
          </div>
        </div>
        <span class="fav-domain">${item.domain}</span>
      </a>`
      )
      .join('');
  }

  window.__renderFavorites = render;

  // Hover-dimming + floating preview card tracking
  listEl.addEventListener('mouseover', (e) => {
    const row = e.target.closest('.fav-row');
    if (row) {
      listEl.classList.add('is-hovering');
      showPreviewForRow(row);
    }
  });

  listEl.addEventListener('mouseleave', () => {
    listEl.classList.remove('is-hovering');
    previewEl.classList.remove('is-visible');
  });

  // Search
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    render();
  });

  // Dropdown helpers
  function toggleMenu(menu, otherMenu) {
    otherMenu.classList.remove('open');
    menu.classList.toggle('open');
  }

  sortBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu(sortMenu, catMenu);
  });

  catBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu(catMenu, sortMenu);
  });

  sortMenu.addEventListener('click', (e) => {
    const btn = e.target.closest('.fav-dropdown-item');
    if (!btn) return;
    currentSort = btn.dataset.val;
    const i18nKey = SORT_I18N_KEYS[currentSort] || 'sortLatest';
    sortLabel.dataset.i18n = i18nKey;
    sortLabel.textContent =
      typeof window.__getTranslatedText === 'function'
        ? window.__getTranslatedText(i18nKey)
        : currentSort;
    sortMenu.querySelectorAll('.fav-dropdown-item').forEach((b) => b.classList.toggle('selected', b === btn));
    sortMenu.classList.remove('open');
    render();
  });

  catMenu.addEventListener('click', (e) => {
    const btn = e.target.closest('.fav-dropdown-item');
    if (!btn) return;
    currentCat = btn.dataset.val;
    const i18nKey = CAT_I18N_KEYS[currentCat] || 'catAll';
    catLabel.dataset.i18n = i18nKey;
    catLabel.textContent =
      typeof window.__getTranslatedText === 'function'
        ? window.__getTranslatedText(i18nKey)
        : currentCat;
    catMenu.querySelectorAll('.fav-dropdown-item').forEach((b) => b.classList.toggle('selected', b === btn));
    catMenu.classList.remove('open');
    render();
  });

  document.addEventListener('click', () => {
    sortMenu.classList.remove('open');
    catMenu.classList.remove('open');
  });

  render();
}

/* ══════════════════════════════════════════════
   CLICK SOUND (Ludlow / Cuelume Web Audio)
   ══════════════════════════════════════════════ */
function initClickSound() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;

  let ctx = null;
  function getContext() {
    if (!ctx) ctx = new AudioCtx();
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    return ctx;
  }

  // Pre-warm and unlock AudioContext on page load and on the earliest user activity
  // (wheel, scroll, pointermove, keydown, touchstart, pointerdown) so hover sounds
  // play immediately after a refresh without requiring a random click first.
  function unlockAudio() {
    try {
      if (navigator.userActivation && !navigator.userActivation.hasBeenActive) {
        return;
      }
      const context = getContext();
      if (context.state === 'suspended') {
        context.resume().catch(() => {});
      }
      if (context.state === 'running') {
        ['pointerdown', 'keydown', 'touchstart'].forEach((evt) =>
          window.removeEventListener(evt, unlockAudio, true)
        );
      }
    } catch {}
  }

  unlockAudio();
  ['pointerdown', 'keydown', 'touchstart'].forEach((evt) =>
    window.addEventListener(evt, unlockAudio, { capture: true, passive: true })
  );

  function playNoise(context, dest, freq, q, attack, decay, peak, startTime) {
    const duration = attack + decay + 0.05;
    const length = Math.max(1, Math.floor(duration * context.sampleRate));
    const buffer = context.createBuffer(1, length, context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) data[i] = 2 * Math.random() - 1;

    const src = context.createBufferSource();
    src.buffer = buffer;

    const filter = context.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = freq;
    filter.Q.value = q;

    const gain = context.createGain();
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(peak, startTime + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + attack + decay);

    src.connect(filter).connect(gain).connect(dest);
    src.start(startTime);
    src.stop(startTime + duration);
  }

  function playTone(context, dest, freq, attack, decay, peak, startTime) {
    const osc = context.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    const gain = context.createGain();
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(peak, startTime + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + attack + decay);

    osc.connect(gain).connect(dest);
    osc.start(startTime);
    osc.stop(startTime + attack + decay + 0.05);
  }

  function scheduleCue(context, type) {
    const now = context.currentTime;
    const master = context.createGain();
    master.gain.value = 0.4;
    master.connect(context.destination);

    if (type === 'press') {
      playNoise(context, master, 1700, 1.4, 0.001, 0.02, 0.13, now);
    } else {
      playNoise(context, master, 5400, 1.8, 0.001, 0.018, 0.14, now);
      playTone(context, master, 2600, 0.001, 0.012, 0.018, now);
    }
  }

  function playCue(type) {
    try {
      const context = getContext();
      if (context.state === 'running') {
        scheduleCue(context, type);
        return;
      }
      // Only call resume() when the browser has recorded user activation,
      // or let the unlockAudio gesture listener resume it cleanly.
      if (!navigator.userActivation || navigator.userActivation.hasBeenActive) {
        context
          .resume()
          .then(() => {
            if (context.state === 'running') {
              scheduleCue(context, type);
            }
          })
          .catch(() => {});
      }
    } catch {
      // Ignore Web Audio autoplay blocks if any
    }
  }

  const INTERACTIVE_SELECTOR = 'a, button, .ruru-row, .fav-row, [role="button"]';
  let lastHoveredTarget = null;
  let lastHoverSoundAt = 0;

  document.addEventListener('click', (event) => {
    const target = event.target.closest(INTERACTIVE_SELECTOR);
    playCue(target?.matches('[data-sound="press"]') ? 'press' : 'tick');
  }, true);

  document.addEventListener('pointerover', (event) => {
    if (event.pointerType === 'touch') return;
    const target = event.target.closest(INTERACTIVE_SELECTOR);
    if (!target) {
      lastHoveredTarget = null;
      return;
    }
    if (target === lastHoveredTarget || (event.relatedTarget && target.contains(event.relatedTarget))) {
      return;
    }
    lastHoveredTarget = target;
    const now = performance.now();
    if (now - lastHoverSoundAt < 45) return;
    lastHoverSoundAt = now;
    playCue(target.matches('[data-sound="press"]') ? 'press' : 'tick');
  }, true);

  document.addEventListener('pointerout', (event) => {
    if (!lastHoveredTarget) return;
    if (!event.relatedTarget || !lastHoveredTarget.contains(event.relatedTarget)) {
      lastHoveredTarget = null;
    }
  }, true);
}

/* ══════════════════════════════════════════════
   LANGUAGE SWITCHER + MODAL (Ludlow style)
   ══════════════════════════════════════════════ */
function initLanguageSwitcher() {
  const languageButtons = document.querySelectorAll('[data-lang]');
  const languageMoreButton = document.querySelector('[data-language-open]');
  const languageModal = document.querySelector('[data-language-modal]');
  const languageCloseButton = document.querySelector('[data-language-close]');
  const languageSearch = document.querySelector('[data-language-search]');
  const languageList = document.querySelector('[data-language-list]');
  if (!languageButtons.length || !languageModal) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const BUILT_IN_CODES = new Set(['en', 'de']);

  const LANGUAGES = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'de', name: 'German', native: 'Deutsch' },
    { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
    { code: 'fr', name: 'French', native: 'Français' },
    { code: 'es', name: 'Spanish', native: 'Español' },
    { code: 'zh', name: 'Chinese', native: '中文' },
    { code: 'ja', name: 'Japanese', native: '日本語' },
    { code: 'ko', name: 'Korean', native: '한국어' },
    { code: 'it', name: 'Italian', native: 'Italiano' },
    { code: 'pt', name: 'Portuguese', native: 'Português' },
    { code: 'nl', name: 'Dutch', native: 'Nederlands' },
    { code: 'ar', name: 'Arabic', native: 'العربية' }
  ];

  const TRANSLATIONS = {
    en: {
      navHome: 'Home',
      navFavorites: 'Favorites',
      navPhotography: 'Photography',
      headerAka: 'aka',
      pullLampMorning: 'Pull for morning',
      pullLampNight: 'Pull to call it a night',
      introTitle: "I'm Abhishek",
      introGreeting: 'Hi, Guten Tag, नमस्ते',
      introLead: "I'm a",
      introRole: 'Data Analyst & ML Engineer',
      introLove: 'I love',
      introDataAuto: 'Data, Automation',
      introAndWord: 'and',
      introOpenSource: 'Open Source',
      introMsc: 'As well as holding an M.Sc. from',
      introGermany: 'Germany.',
      introBuilding: 'While building',
      introAndWord2: 'and',
      introSystems: "I build data systems that don't break",
      introMostDays: '(most days)',
      introBackend: 'mostly in data & backend with',
      introAndWord3: 'and',
      introInfra: 'For BI & infra, I use',
      introAndWord4: 'and',
      introTooling: "Lately, I've been heavily focused on macOS developer tooling and open source with",
      introAndWord5: 'and',
      introBesides: 'Besides, I love',
      introInterests: 'Photography, Minimal Design',
      introAndWord6: 'and',
      introEngineering: 'Engineering',
      introAlways: "I'm always looking for new things to learn and new people to meet.",
      introOpen: 'Open to work on data, AI, or engineering roles — connect on',
      introOrMail: 'or drop a mail',
      signoff: '~ shipping...',
      signoffQuerying: '~ querying...',
      signoffBuilding: '~ building...',
      signoffCaffeinated: '~ caffeinated...',
      githubActivity30d: '30d activity',
      githubContributionsYear: '{count} contributions in the last year',
      githubNoContributions: 'No contributions',
      githubContributionOne: '1 contribution',
      githubContributionMany: '{count} contributions',
      sectionWork: 'Experience',
      workRaycastDesc: '~ Open Source Contributor',
      workRaycastType: 'open source -',
      workRaycastDate: 'Mar 2026–Present',
      workInfineonDesc: '~ Data Analyst',
      workInfineonType: 'working student -',
      workInfineonDate: '24 mo',
      workTeisnachDesc: '~ Graduate Research Assistant',
      workTeisnachType: 'research -',
      workTeisnachDate: '7 mo',
      workRosenbergerDesc: '~ Python Developer Intern & Analyst',
      workRosenbergerType: 'internship -',
      workRosenbergerDate: '7 mo',
      sectionProducts: 'Products',
      prodWosDesc: '~ Minimalist Bhagavad Gītā iOS app',
      prodRenameMailDesc: '~ Turn your Gmail into a visual tracker & pipeline.',
      sectionProjects: 'Projects',
      projRemindersTitle: 'Apple Reminders (Raycast)',
      projRemindersDesc: '~ Recurrence, calendar events, priorities & tags PRs.',
      projRagTitle: 'Manufacturing Quality RAG',
      projRagDesc: '~ Sub-second semantic doc search with ChromaDB.',
      projSalesTitle: 'ML Vehicle Sales',
      projSalesDesc: '~ Gradient-boosted regression at 92% R² accuracy.',
      projDnnTitle: 'Object Detection DNN',
      projDnnDesc: '~ Real-time 30+ FPS CPU object detection via ONNX.',
      projSentimentTitle: 'Reddit Stock Sentiment',
      projSentimentDesc: '~ Real-time NLP ticker sentiment streaming pipeline.',
      followMe: 'Follow Me',
      footerRights: 'All rights reserved',
      modalTranslate: 'Translate',
      modalSearchPlaceholder: 'Search languages',
      modalNoLanguages: 'No languages found',
      favIntro: "I love discovering great things, whether it's a beautifully designed product, an inspiring person, or a website I keep coming back to. This is my collection of those gems I find on the internet and in the real world. Everything here has caught my attention and stuck with me for one reason or another.",
      favSearchPlaceholder: 'Search links',
      favEmpty: 'No matching favorites found.',
      sortLatest: 'Latest',
      sortOldest: 'Oldest',
      sortAZ: 'A–Z',
      catAll: 'All',
      catDesign: 'Design',
      catApps: 'Apps',
      catMovies: 'Movies',
      catTypography: 'Typography',
      catPeople: 'People',
      catBlogs: 'Blogs',
      catHardware: 'Hardware',
      photoIntro1: "There's something about shooting film that forces you to slow down. With my different Phone's camera throughout my life, there's no chimping at the back of the screen to check if I nailed it. That constraint is the whole point. I've found that limitations make me a better photographer.",
      photoIntro2: "Most of what you'll see here is street photography, candid moments and quiet scenes I stumbled into while walking around with no particular agenda. It has a texture and honesty to it. These photos aren't perfect, but they're real."
    },
    de: {
      navHome: 'Start',
      navFavorites: 'Favoriten',
      navPhotography: 'Fotografie',
      headerAka: 'alias',
      pullLampMorning: 'Ziehen für den Morgen',
      pullLampNight: 'Ziehen für die Nacht',
      introTitle: 'Ich bin Abhishek',
      introGreeting: 'Hi, Guten Tag, नमस्ते',
      introLead: 'Ich bin',
      introRole: 'Data Analyst & ML Engineer',
      introLove: 'Ich liebe',
      introDataAuto: 'Daten, Automatisierung',
      introAndWord: 'und',
      introOpenSource: 'Open Source',
      introMsc: 'Außerdem habe ich einen M.Sc. der',
      introGermany: 'Deutschland.',
      introBuilding: 'Und entwickle',
      introAndWord2: 'und',
      introSystems: 'Ich baue Datensysteme, die stabil laufen',
      introMostDays: '(meistens)',
      introBackend: 'vor allem in Data & Backend mit',
      introAndWord3: 'und',
      introInfra: 'Für BI & Infrastruktur nutze ich',
      introAndWord4: 'und',
      introTooling: 'Zuletzt habe ich mich stark auf macOS-Developer-Tooling und Open Source konzentriert mit',
      introAndWord5: 'und',
      introBesides: 'Außerdem liebe ich',
      introInterests: 'Fotografie, Minimal Design',
      introAndWord6: 'und',
      introEngineering: 'Engineering',
      introAlways: 'und freue mich immer darauf, Neues zu lernen und spannende Menschen kennenzulernen.',
      introOpen: 'Offen für Rollen in Data, KI oder Engineering — schreib mir auf',
      introOrMail: 'oder per E-Mail',
      signoff: '~ am Bauen...',
      signoffQuerying: '~ am Abfragen...',
      signoffBuilding: '~ am Entwickeln...',
      signoffCaffeinated: '~ voller Koffein...',
      githubActivity30d: '30T Aktivität',
      githubContributionsYear: '{count} Beiträge im letzten Jahr',
      githubNoContributions: 'Keine Beiträge',
      githubContributionOne: '1 Beitrag',
      githubContributionMany: '{count} Beiträge',
      sectionWork: 'Berufserfahrung',
      workRaycastDesc: '~ Open-Source-Mitwirkender',
      workRaycastType: 'Open Source -',
      workRaycastDate: 'März 2026–Heute',
      workInfineonDesc: '~ Datenanalyst',
      workInfineonType: 'Werkstudent -',
      workInfineonDate: '24 Mon.',
      workTeisnachDesc: '~ Wissenschaftlicher Mitarbeiter',
      workTeisnachType: 'Forschung -',
      workTeisnachDate: '7 Mon.',
      workRosenbergerDesc: '~ Python-Entwickler-Praktikant & Analyst',
      workRosenbergerType: 'Praktikum -',
      workRosenbergerDate: '7 Mon.',
      sectionProducts: 'Produkte',
      prodWosDesc: '~ Minimalistische Bhagavad-Gītā iOS-App',
      prodRenameMailDesc: '~ Verwandelt Gmail in einen visuellen Tracker & eine Pipeline.',
      sectionProjects: 'Projekte',
      projRemindersTitle: 'Apple Erinnerungen (Raycast)',
      projRemindersDesc: '~ PRs für Wiederholungen, Kalendertermine, Prioritäten & Tags.',
      projRagTitle: 'Fertigungsqualität RAG',
      projRagDesc: '~ Semantische Dokumentensuche in unter einer Sekunde mit ChromaDB.',
      projSalesTitle: 'ML Fahrzeugverkäufe',
      projSalesDesc: '~ Gradient-Boosted-Regression mit 92 % R²-Genauigkeit.',
      projDnnTitle: 'Objekterkennung DNN',
      projDnnDesc: '~ Echtzeit-CPU-Objekterkennung mit 30+ FPS über ONNX.',
      projSentimentTitle: 'Reddit Aktien-Sentiment',
      projSentimentDesc: '~ Echtzeit-NLP-Streaming-Pipeline für Ticker-Stimmungen.',
      followMe: 'Folgen',
      footerRights: 'Alle Rechte vorbehalten',
      modalTranslate: 'Übersetzen',
      modalSearchPlaceholder: 'Sprachen suchen',
      modalNoLanguages: 'Keine Sprachen gefunden',
      favIntro: 'Ich liebe es, großartige Dinge zu entdecken — ob ein durchdachtes Produkt, eine inspirierende Person oder eine Website, zu der ich immer wieder zurückkehre. Hier sammle ich diese Fundstücke aus dem Netz und der echten Welt.',
      favSearchPlaceholder: 'Links durchsuchen',
      favEmpty: 'Keine passenden Favoriten gefunden.',
      sortLatest: 'Neueste',
      sortOldest: 'Älteste',
      sortAZ: 'A–Z',
      catAll: 'Alle',
      catDesign: 'Design',
      catApps: 'Apps',
      catMovies: 'Filme',
      catTypography: 'Typografie',
      catPeople: 'Menschen',
      catBlogs: 'Blogs',
      catHardware: 'Hardware',
      photoIntro1: 'Auf Film zu fotografieren zwingt einen dazu, langsamer zu werden. Mit den verschiedenen Handykameras meines Lebens schaut man nicht ständig auf den Bildschirm, um zu prüfen, ob das Bild sitzt. Genau diese Einschränkung macht mich zu einem besseren Fotografen.',
      photoIntro2: 'Das meiste hier ist Straßenfotografie — spontane Momente und stille Szenen, über die ich beim ziellosen Spazierengehen gestolpert bin. Sie hat eine eigene Textur und Ehrlichkeit. Diese Fotos sind nicht perfekt, aber sie sind echt.'
    },
    hi: {
      navHome: 'होम',
      navFavorites: 'पसंदीदा',
      navPhotography: 'फ़ोटोग्राफ़ी',
      headerAka: 'उर्फ़',
      pullLampMorning: 'सुबह के लिए खींचें',
      pullLampNight: 'रात के लिए खींचें',
      introTitle: 'मैं अभिषेक हूँ',
      introGreeting: 'Hi, Guten Tag, नमस्ते',
      introLead: 'मैं एक',
      introRole: 'डेटा एनालिस्ट और ML इंजीनियर',
      introLove: 'हूँ। मुझे पसंद है',
      introDataAuto: 'डेटा, ऑटोमेशन',
      introAndWord: 'और',
      introOpenSource: 'ओपन सोर्स',
      introMsc: 'साथ ही मैंने M.Sc. किया है',
      introGermany: 'जर्मनी से।',
      introBuilding: 'और बना रहा हूँ',
      introAndWord2: 'और',
      introSystems: 'मैं ऐसे डेटा सिस्टम बनाता हूँ जो टूटते नहीं',
      introMostDays: '(अधिकतर दिनों में)',
      introBackend: 'खासकर डेटा और बैकएंड में',
      introAndWord3: 'और',
      introInfra: 'BI और इंफ्रा के लिए मैं उपयोग करता हूँ',
      introAndWord4: 'और',
      introTooling: 'हाल ही में मेरा पूरा ध्यान macOS डेवलपर टूलिंग और ओपन सोर्स पर रहा है',
      introAndWord5: 'और',
      introBesides: 'इसके अलावा, मुझे पसंद है',
      introInterests: 'फ़ोटोग्राफ़ी, मिनिमल डिज़ाइन',
      introAndWord6: 'और',
      introEngineering: 'इंजीनियरिंग',
      introAlways: 'और मैं हमेशा नई चीज़ें सीखने व नए लोगों से जुड़ने के लिए उत्सुक रहता हूँ।',
      introOpen: 'डेटा, AI या इंजीनियरिंग भूमिकाओं के लिए खुला हूँ — जुड़ें',
      introOrMail: 'या ईमेल करें',
      signoff: '~ बना रहे हैं...',
      signoffQuerying: '~ डेटा खोज रहे हैं...',
      signoffBuilding: '~ निर्माण जारी है...',
      signoffCaffeinated: '~ कॉफ़ी के साथ...',
      githubActivity30d: '30 दिन की गतिविधि',
      githubContributionsYear: 'पिछले वर्ष में {count} योगदान',
      githubNoContributions: 'कोई योगदान नहीं',
      githubContributionOne: '1 योगदान',
      githubContributionMany: '{count} योगदान',
      sectionWork: 'कार्य अनुभव',
      workRaycastDesc: '~ ओपन सोर्स योगदानकर्ता',
      workRaycastType: 'ओपन सोर्स -',
      workRaycastDate: 'मार्च 2026–वर्तमान',
      workInfineonDesc: '~ डेटा एनालिस्ट',
      workInfineonType: 'वर्किंग स्टूडेंट -',
      workInfineonDate: '24 महीने',
      workTeisnachDesc: '~ ग्रेजुएट रिसर्च असिस्टेंट',
      workTeisnachType: 'शोध -',
      workTeisnachDate: '7 महीने',
      workRosenbergerDesc: '~ पायथन डेवलपर इंटर्न और एनालिस्ट',
      workRosenbergerType: 'इंटर्नशिप -',
      workRosenbergerDate: '7 महीने',
      sectionProducts: 'प्रोडक्ट्स',
      prodWosDesc: '~ मिनिमलिस्ट भगवद गीता iOS ऐप',
      prodRenameMailDesc: '~ अपने Gmail को विज़ुअल ट्रैकर और पाइपलाइन में बदलें।',
      sectionProjects: 'प्रोजेक्ट्स',
      projRemindersTitle: 'Apple रिमाइंडर्स (Raycast)',
      projRemindersDesc: '~ पुनरावृत्ति, कैलेंडर ईवेंट, प्राथमिकताएं और टैग PRs।',
      projRagTitle: 'मैन्युफैक्चरिंग क्वालिटी RAG',
      projRagDesc: '~ ChromaDB के साथ सब-सेकंड सिमेंटिक डॉक सर्च।',
      projSalesTitle: 'ML वाहन बिक्री पूर्वानुमान',
      projSalesDesc: '~ 92% R² सटीकता के साथ ग्रेडिएंट-बूस्टेड रिग्रेशन।',
      projDnnTitle: 'ऑब्जेक्ट डिटेक्शन DNN',
      projDnnDesc: '~ ONNX के माध्यम से रियल-टाइम 30+ FPS CPU ऑब्जेक्ट डिटेक्शन।',
      projSentimentTitle: 'Reddit स्टॉक सेंटीमेंट',
      projSentimentDesc: '~ रियल-टाइम NLP टिकर सेंटीमेंट स्ट्रीमिंग पाइपलाइन।',
      followMe: 'फ़ॉलो करें',
      footerRights: 'सर्वाधिकार सुरक्षित',
      modalTranslate: 'अनुवाद करें',
      modalSearchPlaceholder: 'भाषाएँ खोजें',
      modalNoLanguages: 'कोई भाषा नहीं मिली',
      favIntro: 'मुझे बेहतरीन चीज़ें खोजना पसंद है — चाहे वह कोई सुंदर डिज़ाइन वाला प्रोडक्ट हो, कोई प्रेरणादायक व्यक्ति हो, या कोई वेबसाइट जिस पर मैं बार-बार लौटता हूँ। यह इंटरनेट और वास्तविक दुनिया से चुने गए उन्हीं रत्नों का मेरा संग्रह है।',
      favSearchPlaceholder: 'लिंक खोजें',
      favEmpty: 'कोई पसंदीदा लिंक नहीं मिला।',
      sortLatest: 'नवीनतम',
      sortOldest: 'पुराने',
      sortAZ: 'A–Z',
      catAll: 'सभी',
      catDesign: 'डिज़ाइन',
      catApps: 'ऐप्स',
      catMovies: 'फ़िल्में',
      catTypography: 'टाइपोग्राफ़ी',
      catPeople: 'लोग',
      catBlogs: 'ब्लॉग्स',
      catHardware: 'हार्डवेयर',
      photoIntro1: 'फ़िल्म पर फ़ोटो खींचने में कुछ ऐसा है जो आपको धीमा होने पर मजबूर करता है। अपने जीवन भर अलग-अलग फ़ोन कैमरों के साथ, हर शॉट के बाद स्क्रीन देखने की आदत नहीं रही। यही सीमा मुझे एक बेहतर फ़ोटोग्राफ़र बनाती है।',
      photoIntro2: 'यहाँ आप जो कुछ भी देखेंगे वह स्ट्रीट फ़ोटोग्राफ़ी है — सहज पल और शांत दृश्य जो मुझे बिना किसी योजना के टहलते हुए मिले। इसमें एक बनावट और ईमानदारी है। ये तस्वीरें परफ़ेक्ट नहीं हैं, लेकिन असली हैं।'
    },
    fr: {
      navHome: 'Accueil',
      navFavorites: 'Favoris',
      navPhotography: 'Photographie',
      headerAka: 'alias',
      pullLampMorning: 'Tirer pour le matin',
      pullLampNight: 'Tirer pour la nuit',
      introTitle: 'Je suis Abhishek',
      introGreeting: 'Hi, Guten Tag, नमस्ते',
      introLead: 'Je suis',
      introRole: 'Data Analyst & Ingénieur ML',
      introLove: "J'aime",
      introDataAuto: 'Données, Automatisation',
      introAndWord: 'et',
      introOpenSource: 'Open Source',
      introMsc: "Titulaire d'un M.Sc. de",
      introGermany: 'Allemagne.',
      introBuilding: 'Tout en développant',
      introAndWord2: 'et',
      introSystems: 'Je conçois des systèmes de données fiables',
      introMostDays: '(la plupart du temps)',
      introBackend: 'principalement en data & backend avec',
      introAndWord3: 'et',
      introInfra: "Pour la BI et l'infra, j'utilise",
      introAndWord4: 'et',
      introTooling: 'Récemment, je me concentre sur les outils macOS et open source avec',
      introAndWord5: 'et',
      introBesides: "Par ailleurs, j'aime",
      introInterests: 'Photographie, Design Minimal',
      introAndWord6: 'et',
      introEngineering: 'Ingénierie',
      introAlways: "et je cherche toujours à apprendre et à rencontrer de nouvelles personnes.",
      introOpen: 'Ouvert aux opportunités en data, IA ou ingénierie — échangeons sur',
      introOrMail: 'ou par e-mail',
      signoff: '~ en production...',
      signoffQuerying: '~ en requête...',
      signoffBuilding: '~ en construction...',
      signoffCaffeinated: '~ caféiné...',
      githubActivity30d: 'Activité 30j',
      githubContributionsYear: '{count} contributions cette dernière année',
      githubNoContributions: 'Aucune contribution',
      githubContributionOne: '1 contribution',
      githubContributionMany: '{count} contributions',
      sectionWork: 'Expérience',
      workRaycastDesc: '~ Contributeur Open Source',
      workRaycastType: 'open source -',
      workRaycastDate: 'Mars 2026–Présent',
      workInfineonDesc: '~ Data Analyst',
      workInfineonType: 'étudiant salarié -',
      workInfineonDate: '24 mois',
      workTeisnachDesc: '~ Assistant de recherche diplômé',
      workTeisnachType: 'recherche -',
      workTeisnachDate: '7 mois',
      workRosenbergerDesc: '~ Stagiaire Développeur Python & Analyste',
      workRosenbergerType: 'stage -',
      workRosenbergerDate: '7 mois',
      sectionProducts: 'Produits',
      prodWosDesc: '~ Application iOS minimaliste de la Bhagavad Gītā',
      prodRenameMailDesc: '~ Transformez Gmail en un outil de suivi visuel & pipeline.',
      sectionProjects: 'Projets',
      projRemindersTitle: 'Rappels Apple (Raycast)',
      projRemindersDesc: '~ PRs pour récurrence, événements calendrier, priorités & tags.',
      projRagTitle: 'RAG Qualité Industrielle',
      projRagDesc: '~ Recherche documentaire sémantique sub-seconde avec ChromaDB.',
      projSalesTitle: 'Prédiction ML des Ventes Automobiles',
      projSalesDesc: '~ Régression par gradient boosting avec 92 % de précision R².',
      projDnnTitle: "Détection d'Objets DNN",
      projDnnDesc: "~ Détection d'objets CPU temps réel à 30+ FPS via ONNX.",
      projSentimentTitle: 'Sentiment Boursier Reddit',
      projSentimentDesc: '~ Pipeline NLP en temps réel des sentiments boursiers.',
      followMe: 'Suivre',
      footerRights: 'Tous droits réservés',
      modalTranslate: 'Traduire',
      modalSearchPlaceholder: 'Rechercher une langue',
      modalNoLanguages: 'Aucune langue trouvée',
      favIntro: "J'aime découvrir de belles choses — un produit bien conçu, une personne inspirante ou un site auquel je reviens toujours. Voici ma collection de ces pépites trouvées en ligne et dans la vraie vie.",
      favSearchPlaceholder: 'Rechercher des liens',
      favEmpty: 'Aucun favori correspondant trouvé.',
      sortLatest: 'Récents',
      sortOldest: 'Anciens',
      sortAZ: 'A–Z',
      catAll: 'Tout',
      catDesign: 'Design',
      catApps: 'Applications',
      catMovies: 'Films',
      catTypography: 'Typographie',
      catPeople: 'Personnes',
      catBlogs: 'Blogs',
      catHardware: 'Matériel',
      photoIntro1: "Photographier sur pellicule oblige à ralentir. Avec les différents appareils photo de téléphone de ma vie, inutile de vérifier l'écran après chaque prise. Cette contrainte fait de moi un meilleur photographe.",
      photoIntro2: "La plupart de ces clichés sont de la photographie de rue, des instants pris sur le vif et des scènes calmes croisées en marchant sans but précis. Il y a une texture et une sincérité. Ces photos ne sont pas parfaites, mais elles sont vraies."
    },
    es: {
      navHome: 'Inicio',
      navFavorites: 'Favoritos',
      navPhotography: 'Fotografía',
      headerAka: 'alias',
      pullLampMorning: 'Tira para la mañana',
      pullLampNight: 'Tira para la noche',
      introTitle: 'Soy Abhishek',
      introGreeting: 'Hi, Guten Tag, नमस्ते',
      introLead: 'Soy',
      introRole: 'Analista de Datos e Ingeniero ML',
      introLove: 'Me encanta',
      introDataAuto: 'Datos, Automatización',
      introAndWord: 'y',
      introOpenSource: 'Código Abierto',
      introMsc: 'Además cuento con un M.Sc. de',
      introGermany: 'Alemania.',
      introBuilding: 'Mientras construyo',
      introAndWord2: 'y',
      introSystems: 'Construyo sistemas de datos que no fallan',
      introMostDays: '(casi siempre)',
      introBackend: 'principalmente en datos y backend con',
      introAndWord3: 'y',
      introInfra: 'Para BI e infraestructura uso',
      introAndWord4: 'y',
      introTooling: 'Últimamente me he centrado en herramientas para macOS y código abierto con',
      introAndWord5: 'y',
      introBesides: 'Además, me apasiona',
      introInterests: 'Fotografía, Diseño Minimal',
      introAndWord6: 'e',
      introEngineering: 'Ingeniería',
      introAlways: 'y siempre busco aprender cosas nuevas y conocer gente interesante.',
      introOpen: 'Disponible para roles de datos, IA o ingeniería — conecta en',
      introOrMail: 'o envía un correo',
      signoff: '~ construyendo...',
      signoffQuerying: '~ consultando...',
      signoffBuilding: '~ programando...',
      signoffCaffeinated: '~ con cafeína...',
      githubActivity30d: 'Actividad 30d',
      githubContributionsYear: '{count} contribuciones en el último año',
      githubNoContributions: 'Sin contribuciones',
      githubContributionOne: '1 contribución',
      githubContributionMany: '{count} contribuciones',
      sectionWork: 'Experiencia',
      workRaycastDesc: '~ Colaborador de Código Abierto',
      workRaycastType: 'código abierto -',
      workRaycastDate: 'Mar 2026–Presente',
      workInfineonDesc: '~ Analista de Datos',
      workInfineonType: 'estudiante en prácticas -',
      workInfineonDate: '24 meses',
      workTeisnachDesc: '~ Asistente de Investigación de Posgrado',
      workTeisnachType: 'investigación -',
      workTeisnachDate: '7 meses',
      workRosenbergerDesc: '~ Pasante Desarrollador Python y Analista',
      workRosenbergerType: 'pasantía -',
      workRosenbergerDate: '7 meses',
      sectionProducts: 'Productos',
      prodWosDesc: '~ App minimalista del Bhagavad Gītā para iOS',
      prodRenameMailDesc: '~ Convierte tu Gmail en un rastreador visual y pipeline.',
      sectionProjects: 'Proyectos',
      projRemindersTitle: 'Recordatorios de Apple (Raycast)',
      projRemindersDesc: '~ PRs de recurrencia, eventos de calendario, prioridades y etiquetas.',
      projRagTitle: 'RAG de Calidad de Manufactura',
      projRagDesc: '~ Búsqueda semántica de documentos en menos de un segundo con ChromaDB.',
      projSalesTitle: 'Predicción ML de Ventas de Vehículos',
      projSalesDesc: '~ Regresión con gradient boosting al 92 % de precisión R².',
      projDnnTitle: 'Detección de Objetos DNN',
      projDnnDesc: '~ Detección de objetos en CPU en tiempo real a 30+ FPS vía ONNX.',
      projSentimentTitle: 'Sentimiento Bursátil en Reddit',
      projSentimentDesc: '~ Pipeline NLP en tiempo real para sentimiento de acciones.',
      followMe: 'Seguir',
      footerRights: 'Todos los derechos reservados',
      modalTranslate: 'Traducir',
      modalSearchPlaceholder: 'Buscar idiomas',
      modalNoLanguages: 'No se encontraron idiomas',
      favIntro: 'Me encanta descubrir grandes cosas, ya sea un producto bien diseñado, una persona inspiradora o una web a la que siempre vuelvo. Esta es mi colección de esas joyas que encuentro en internet y en el mundo real.',
      favSearchPlaceholder: 'Buscar enlaces',
      favEmpty: 'No se encontraron favoritos.',
      sortLatest: 'Recientes',
      sortOldest: 'Antiguos',
      sortAZ: 'A–Z',
      catAll: 'Todo',
      catDesign: 'Diseño',
      catApps: 'Apps',
      catMovies: 'Películas',
      catTypography: 'Tipografía',
      catPeople: 'Personas',
      catBlogs: 'Blogs',
      catHardware: 'Hardware',
      photoIntro1: 'Disparar en película te obliga a ir más despacio. Con las distintas cámaras de teléfono a lo largo de mi vida, no hay que mirar la pantalla tras cada foto. Esa limitación me hace un mejor fotógrafo.',
      photoIntro2: 'La mayoría de lo que verás aquí es fotografía callejera, momentos espontáneos y escenas tranquilas que encontré caminando sin rumbo fijo. Tiene una textura y honestidad propias. Estas fotos no son perfectas, pero son reales.'
    },
    zh: {
      navHome: '首页',
      navFavorites: '收藏',
      navPhotography: '摄影',
      headerAka: '又名',
      pullLampMorning: '拉动切换至清晨',
      pullLampNight: '拉动切换至夜晚',
      introTitle: '我是 Abhishek',
      introGreeting: 'Hi, Guten Tag, नमस्ते',
      introLead: '我是一名',
      introRole: '数据分析师与机器学习工程师',
      introLove: '我热爱',
      introDataAuto: '数据、自动化',
      introAndWord: '和',
      introOpenSource: '开源',
      introMsc: '毕业于德国',
      introGermany: '硕士学位。',
      introBuilding: '同时正在打造',
      introAndWord2: '和',
      introSystems: '我构建稳定可靠的数据系统',
      introMostDays: '（大多数时候）',
      introBackend: '主要使用数据与后端技术',
      introAndWord3: '和',
      introInfra: '在商业智能与基础设施方面，我使用',
      introAndWord4: '和',
      introTooling: '最近，我专注于 macOS 开发者工具与开源项目，主要使用',
      introAndWord5: '和',
      introBesides: '除此之外，我热爱',
      introInterests: '摄影、极简设计',
      introAndWord6: '和',
      introEngineering: '工程实践',
      introAlways: '并始终乐于学习新事物、结识新朋友。',
      introOpen: '开放寻找数据、AI 或工程相关机会 — 欢迎联系',
      introOrMail: '或发送邮件',
      signoff: '~ 持续构建中...',
      signoffQuerying: '~ 数据查询中...',
      signoffBuilding: '~ 开发中...',
      signoffCaffeinated: '~ 咖啡加持中...',
      githubActivity30d: '30天动态',
      githubContributionsYear: '过去一年共 {count} 次贡献',
      githubNoContributions: '无贡献',
      githubContributionOne: '1 次贡献',
      githubContributionMany: '{count} 次贡献',
      sectionWork: '工作经历',
      workRaycastDesc: '~ 开源贡献者',
      workRaycastType: '开源 -',
      workRaycastDate: '2026年3月–至今',
      workInfineonDesc: '~ 数据分析师',
      workInfineonType: '工作学生 -',
      workInfineonDate: '24 个月',
      workTeisnachDesc: '~ 研究生科研助理',
      workTeisnachType: '科研 -',
      workTeisnachDate: '7 个月',
      workRosenbergerDesc: '~ Python 开发实习生兼分析师',
      workRosenbergerType: '实习 -',
      workRosenbergerDate: '7 个月',
      sectionProducts: '产品',
      prodWosDesc: '~ 极简《薄伽梵歌》iOS 应用',
      prodRenameMailDesc: '~ 将 Gmail 转化为可视化追踪器与工作流管道。',
      sectionProjects: '项目',
      projRemindersTitle: 'Apple 提醒事项 (Raycast)',
      projRemindersDesc: '~ 重复提醒、日历事件、优先级与标签 PR 贡献。',
      projRagTitle: '制造质量 RAG 系统',
      projRagDesc: '~ 基于 ChromaDB 的亚秒级语义文档检索。',
      projSalesTitle: 'ML 汽车销量预测',
      projSalesDesc: '~ R² 准确率达 92% 的梯度提升回归模型。',
      projDnnTitle: 'DNN 目标检测',
      projDnnDesc: '~ 基于 ONNX 的实时 30+ FPS CPU 目标检测。',
      projSentimentTitle: 'Reddit 股票情绪分析',
      projSentimentDesc: '~ 实时 NLP 股票代码情绪流处理管道。',
      followMe: '关注我',
      footerRights: '保留所有权利',
      modalTranslate: '翻译',
      modalSearchPlaceholder: '搜索语言',
      modalNoLanguages: '未找到匹配的语言',
      favIntro: '我喜欢发掘美好的事物——无论是设计精良的产品、富有启发的人，还是令人流连忘返的网站。这里收藏了我在网络与现实生活中发现的宝藏。',
      favSearchPlaceholder: '搜索链接',
      favEmpty: '未找到匹配的收藏。',
      sortLatest: '最新',
      sortOldest: '最早',
      sortAZ: 'A–Z',
      catAll: '全部',
      catDesign: '设计',
      catApps: '应用',
      catMovies: '影视',
      catTypography: '字体排版',
      catPeople: '人物',
      catBlogs: '博客',
      catHardware: '硬件',
      photoIntro1: '胶片摄影总能让人慢下来。在我用过的各代手机相机里，不必每次按下快门后都盯着屏幕确认。这种克制与限制反而让我成为更好的摄影师。',
      photoIntro2: '这里的大部分作品都是街头摄影——那些我在漫无目的散步时偶遇的真实瞬间与静谧场景。它们有独特的质感与真诚。这些照片并不完美，但足够真实。'
    },
    ja: {
      navHome: 'ホーム',
      navFavorites: 'お気に入り',
      navPhotography: '写真',
      headerAka: '別名',
      pullLampMorning: '引いて朝にする',
      pullLampNight: '引いて夜にする',
      introTitle: 'Abhishek です',
      introGreeting: 'Hi, Guten Tag, नमस्ते',
      introLead: '私は',
      introRole: 'データアナリスト & MLエンジニア',
      introLove: 'です。好きなものは',
      introDataAuto: 'データ、自動化',
      introAndWord: 'そして',
      introOpenSource: 'オープンソース',
      introMsc: '修士号（M.Sc.）は',
      introGermany: 'ドイツにて取得。',
      introBuilding: '現在は開発中：',
      introAndWord2: 'と',
      introSystems: '壊れにくいデータシステムを作っています',
      introMostDays: '（たいていの日は）',
      introBackend: '主にデータとバックエンドで',
      introAndWord3: 'や',
      introInfra: 'BI・インフラには以下を使用：',
      introAndWord4: 'と',
      introTooling: '最近は macOS 開発ツールとオープンソースに注力しています：',
      introAndWord5: 'と',
      introBesides: 'そのほかにも',
      introInterests: '写真、ミニマルデザイン',
      introAndWord6: 'と',
      introEngineering: 'エンジニアリング',
      introAlways: 'が大好きで、新しい学びと出会いをいつも探しています。',
      introOpen: 'データ・AI・エンジニアリングの機会を探しています —',
      introOrMail: 'またはメールで',
      signoff: '~ 開発中...',
      signoffQuerying: '~ クエリ実行中...',
      signoffBuilding: '~ 構築中...',
      signoffCaffeinated: '~ カフェイン補給済み...',
      githubActivity30d: '30日間のアクティビティ',
      githubContributionsYear: '過去1年間で {count} 件のコントリビューション',
      githubNoContributions: 'コントリビューションなし',
      githubContributionOne: '1 件のコントリビューション',
      githubContributionMany: '{count} 件のコントリビューション',
      sectionWork: '職歴',
      workRaycastDesc: '~ オープンソースコントリビューター',
      workRaycastType: 'オープンソース -',
      workRaycastDate: '2026年3月–現在',
      workInfineonDesc: '~ データアナリスト',
      workInfineonType: 'ワーキングスチューデント -',
      workInfineonDate: '24ヶ月',
      workTeisnachDesc: '~ 大学院研究助手',
      workTeisnachType: '研究 -',
      workTeisnachDate: '7ヶ月',
      workRosenbergerDesc: '~ Python開発インターン & アナリスト',
      workRosenbergerType: 'インターンシップ -',
      workRosenbergerDate: '7ヶ月',
      sectionProducts: 'プロダクト',
      prodWosDesc: '~ ミニマルなバガヴァッド・ギーター iOSアプリ',
      prodRenameMailDesc: '~ Gmailをビジュアルトラッカー＆パイプラインに変換。',
      sectionProjects: 'プロジェクト',
      projRemindersTitle: 'Apple リマインダー (Raycast)',
      projRemindersDesc: '~ 繰り返し、カレンダー連携、優先度、タグ機能のPR。',
      projRagTitle: '製造品質 RAG',
      projRagDesc: '~ ChromaDBによるサブ秒セマンティック文書検索。',
      projSalesTitle: 'ML 自動車販売予測',
      projSalesDesc: '~ R²精度92%の勾配ブースティング回帰モデル。',
      projDnnTitle: '物体検出 DNN',
      projDnnDesc: '~ ONNXによるリアルタイム30+ FPS CPU物体検出。',
      projSentimentTitle: 'Reddit 株価センチメント分析',
      projSentimentDesc: '~ リアルタイムNLP銘柄センチメント配信パイプライン。',
      followMe: 'フォロー',
      footerRights: '無断複写・転載を禁じます',
      modalTranslate: '翻訳',
      modalSearchPlaceholder: '言語を検索',
      modalNoLanguages: '言語が見つかりません',
      favIntro: '美しくデザインされたプロダクト、刺激をくれる人、つい何度も訪れてしまうウェブサイトなど、素晴らしいものを見つけるのが好きです。ここはインターネットや現実世界で見つけた宝物のコレクションです。',
      favSearchPlaceholder: 'リンクを検索',
      favEmpty: '一致するお気に入りが見つかりません。',
      sortLatest: '最新順',
      sortOldest: '古い順',
      sortAZ: 'A–Z',
      catAll: 'すべて',
      catDesign: 'デザイン',
      catApps: 'アプリ',
      catMovies: '映画・番組',
      catTypography: 'タイポグラフィ',
      catPeople: '人物',
      catBlogs: 'ブログ',
      catHardware: 'ハードウェア',
      photoIntro1: 'フィルムでの撮影には、歩みをゆっくりにさせる何かがあります。これまでの様々なスマートフォンのカメラでも、撮った直後に画面を確認しない制約そのものが、私をより良い写真家にしてくれました。',
      photoIntro2: 'ここに並んでいるのは主にストリートスナップで、あてもなく歩いているときに出会った何気ない瞬間や静かな風景です。独特の質感と誠実さがあります。完璧ではありませんが、本物の記録です。'
    },
    ko: {
      navHome: '홈',
      navFavorites: '즐겨찾기',
      navPhotography: '사진',
      headerAka: '일명',
      pullLampMorning: '당겨서 아침으로',
      pullLampNight: '당겨서 밤으로',
      introTitle: 'Abhishek입니다',
      introGreeting: 'Hi, Guten Tag, नमस्ते',
      introLead: '저는',
      introRole: '데이터 애널리스트 & ML 엔지니어',
      introLove: '입니다. 좋아하는 분야는',
      introDataAuto: '데이터, 자동화',
      introAndWord: '그리고',
      introOpenSource: '오픈소스',
      introMsc: '석사 학위는',
      introGermany: '독일에서 취득했습니다.',
      introBuilding: '현재 만드는 제품:',
      introAndWord2: '및',
      introSystems: '쉽게 무너지지 않는 데이터 시스템을 만듭니다',
      introMostDays: '(대부분의 날엔)',
      introBackend: '주로 데이터와 백엔드에서',
      introAndWord3: '및',
      introInfra: 'BI와 인프라에는 다음을 사용합니다:',
      introAndWord4: '및',
      introTooling: '최근에는 macOS 개발자 도구와 오픈소스에 집중하고 있습니다:',
      introAndWord5: '및',
      introBesides: '또한',
      introInterests: '사진, 미니멀 디자인',
      introAndWord6: '과',
      introEngineering: '엔지니어링',
      introAlways: '을 사랑하며 항상 새로운 배움과 만남을 기대합니다.',
      introOpen: '데이터, AI, 엔지니어링 역할을 찾고 있습니다 —',
      introOrMail: '또는 이메일로 연락주세요',
      signoff: '~ 개발 중...',
      signoffQuerying: '~ 쿼리 중...',
      signoffBuilding: '~ 구축 중...',
      signoffCaffeinated: '~ 카페인 충전 완료...',
      githubActivity30d: '30일 활동',
      githubContributionsYear: '지난 1년간 {count}개의 기여',
      githubNoContributions: '기여 없음',
      githubContributionOne: '1개의 기여',
      githubContributionMany: '{count}개의 기여',
      sectionWork: '경력',
      workRaycastDesc: '~ 오픈소스 기여자',
      workRaycastType: '오픈소스 -',
      workRaycastDate: '2026년 3월–현재',
      workInfineonDesc: '~ 데이터 애널리스트',
      workInfineonType: '워킹 스튜던트 -',
      workInfineonDate: '24개월',
      workTeisnachDesc: '~ 대학원 연구 조교',
      workTeisnachType: '연구 -',
      workTeisnachDate: '7개월',
      workRosenbergerDesc: '~ Python 개발 인턴 & 애널리스트',
      workRosenbergerType: '인턴십 -',
      workRosenbergerDate: '7개월',
      sectionProducts: '제품',
      prodWosDesc: '~ 미니멀 바가바드 기타 iOS 앱',
      prodRenameMailDesc: '~ Gmail을 비주얼 트래커 및 파이프라인으로 전환하세요.',
      sectionProjects: '프로젝트',
      projRemindersTitle: 'Apple 미리 알림 (Raycast)',
      projRemindersDesc: '~ 반복 일정, 캘린더 이벤트, 우선순위 및 태그 PR 기여.',
      projRagTitle: '제조 품질 RAG',
      projRagDesc: '~ ChromaDB 기반 초고속 시맨틱 문서 검색.',
      projSalesTitle: 'ML 차량 판매 예측',
      projSalesDesc: '~ 92% R² 정확도의 그래디언트 부스팅 회귀 모델.',
      projDnnTitle: '객체 탐지 DNN',
      projDnnDesc: '~ ONNX를 통한 실시간 30+ FPS CPU 객체 탐지.',
      projSentimentTitle: 'Reddit 주식 감성 분석',
      projSentimentDesc: '~ 실시간 NLP 티커 감성 스트리밍 파이프라인.',
      followMe: '팔로우',
      footerRights: '모든 권리 보유',
      modalTranslate: '번역',
      modalSearchPlaceholder: '언어 검색',
      modalNoLanguages: '언어를 찾을 수 없습니다',
      favIntro: '잘 설계된 제품, 영감을 주는 사람, 계속 찾게 되는 웹사이트처럼 멋진 것들을 발견하는 것을 좋아합니다. 인터넷과 일상에서 찾은 보석 같은 목록입니다.',
      favSearchPlaceholder: '링크 검색',
      favEmpty: '일치하는 즐겨찾기가 없습니다.',
      sortLatest: '최신순',
      sortOldest: '오래된순',
      sortAZ: 'A–Z',
      catAll: '전체',
      catDesign: '디자인',
      catApps: '앱',
      catMovies: '영화/시리즈',
      catTypography: '타이포그래피',
      catPeople: '인물',
      catBlogs: '블로그',
      catHardware: '하드웨어',
      photoIntro1: '필름 촬영에는 속도를 늦추게 만드는 매력이 있습니다. 그동안 사용한 여러 휴대폰 카메라로도 촬영 직후 화면을 확인하지 않는 제약 덕분에 더 나은 사진가가 될 수 있었습니다.',
      photoIntro2: '이곳의 사진들은 대부분 거리 사진으로, 특별한 목적 없이 걷다가 마주친 솔직한 순간과 고요한 풍경들입니다. 질감과 진솔함이 담겨 있습니다. 완벽하진 않지만 진짜입니다.'
    },
    it: {
      navHome: 'Home',
      navFavorites: 'Preferiti',
      navPhotography: 'Fotografia',
      headerAka: 'alias',
      pullLampMorning: 'Tira per il mattino',
      pullLampNight: 'Tira per la notte',
      introTitle: 'Sono Abhishek',
      introGreeting: 'Hi, Guten Tag, नमस्ते',
      introLead: 'Sono un',
      introRole: 'Data Analyst & ML Engineer',
      introLove: 'Amo',
      introDataAuto: 'Dati, Automazione',
      introAndWord: 'e',
      introOpenSource: 'Open Source',
      introMsc: 'Ho conseguito un M.Sc. presso',
      introGermany: 'Germania.',
      introBuilding: 'Mentre costruisco',
      introAndWord2: 'e',
      introSystems: 'Costruisco sistemi di dati affidabili',
      introMostDays: '(quasi sempre)',
      introBackend: 'soprattutto in data & backend con',
      introAndWord3: 'e',
      introInfra: 'Per BI e infrastruttura uso',
      introAndWord4: 'e',
      introTooling: 'Ultimamente mi sono concentrato su strumenti macOS e open source con',
      introAndWord5: 'e',
      introBesides: 'Inoltre amo',
      introInterests: 'Fotografia, Design Minimal',
      introAndWord6: 'e',
      introEngineering: 'Ingegneria',
      introAlways: 'e cerco sempre cose nuove da imparare e persone da conoscere.',
      introOpen: 'Aperto a ruoli in dati, AI o ingegneria — scrivimi su',
      introOrMail: 'o invia una mail',
      signoff: '~ in sviluppo...',
      signoffQuerying: '~ interrogando i dati...',
      signoffBuilding: '~ costruendo...',
      signoffCaffeinated: '~ caffeinato...',
      githubActivity30d: 'Attività 30g',
      githubContributionsYear: "{count} contributi nell'ultimo anno",
      githubNoContributions: 'Nessun contributo',
      githubContributionOne: '1 contributo',
      githubContributionMany: '{count} contributi',
      sectionWork: 'Esperienza',
      workRaycastDesc: '~ Contributore Open Source',
      workRaycastType: 'open source -',
      workRaycastDate: 'Mar 2026–Presente',
      workInfineonDesc: '~ Data Analyst',
      workInfineonType: 'studente lavoratore -',
      workInfineonDate: '24 mesi',
      workTeisnachDesc: '~ Assistente di Ricerca Laureato',
      workTeisnachType: 'ricerca -',
      workTeisnachDate: '7 mesi',
      workRosenbergerDesc: '~ Stagista Sviluppatore Python & Analista',
      workRosenbergerType: 'stage -',
      workRosenbergerDate: '7 mesi',
      sectionProducts: 'Prodotti',
      prodWosDesc: '~ App iOS minimalista della Bhagavad Gītā',
      prodRenameMailDesc: '~ Trasforma Gmail in un tracker visivo e una pipeline.',
      sectionProjects: 'Progetti',
      projRemindersTitle: 'Promemoria Apple (Raycast)',
      projRemindersDesc: '~ PR per ricorrenze, eventi calendario, priorità e tag.',
      projRagTitle: 'RAG Qualità Manifatturiera',
      projRagDesc: '~ Ricerca semantica di documenti sub-secondo con ChromaDB.',
      projSalesTitle: 'Predizione ML Vendite Veicoli',
      projSalesDesc: '~ Regressione gradient-boosted con precisione R² del 92%.',
      projDnnTitle: 'Rilevamento Oggetti DNN',
      projDnnDesc: '~ Rilevamento oggetti CPU in tempo reale a 30+ FPS tramite ONNX.',
      projSentimentTitle: 'Sentiment Azionario Reddit',
      projSentimentDesc: '~ Pipeline NLP in tempo reale per il sentiment dei titoli.',
      followMe: 'Seguimi',
      footerRights: 'Tutti i diritti riservati',
      modalTranslate: 'Traduci',
      modalSearchPlaceholder: 'Cerca lingue',
      modalNoLanguages: 'Nessuna lingua trovata',
      favIntro: 'Amo scoprire cose belle: un prodotto ben progettato, una persona stimolante o un sito su cui torno sempre. Questa è la mia raccolta di queste perle trovate online e nel mondo reale.',
      favSearchPlaceholder: 'Cerca link',
      favEmpty: 'Nessun preferito corrispondente trovato.',
      sortLatest: 'Più recenti',
      sortOldest: 'Più vecchi',
      sortAZ: 'A–Z',
      catAll: 'Tutti',
      catDesign: 'Design',
      catApps: 'App',
      catMovies: 'Film',
      catTypography: 'Tipografia',
      catPeople: 'Persone',
      catBlogs: 'Blog',
      catHardware: 'Hardware',
      photoIntro1: 'Scattare su pellicola ti costringe a rallentare. Con le diverse fotocamere dei telefoni della mia vita, non serve controllare lo schermo dopo ogni scatto. Questo limite mi rende un fotografo migliore.',
      photoIntro2: 'Quasi tutto ciò che vedrai qui è street photography: momenti spontanei e scene silenziose incontrati camminando senza meta. Ha una consistenza e una sincerità proprie. Queste foto non sono perfette, ma sono vere.'
    },
    pt: {
      navHome: 'Início',
      navFavorites: 'Favoritos',
      navPhotography: 'Fotografia',
      headerAka: 'vulgo',
      pullLampMorning: 'Puxe para a manhã',
      pullLampNight: 'Puxe para a noite',
      introTitle: 'Sou o Abhishek',
      introGreeting: 'Hi, Guten Tag, नमस्ते',
      introLead: 'Sou',
      introRole: 'Analista de Dados e Engenheiro de ML',
      introLove: 'Adoro',
      introDataAuto: 'Dados, Automação',
      introAndWord: 'e',
      introOpenSource: 'Código Aberto',
      introMsc: 'Tenho mestrado (M.Sc.) pela',
      introGermany: 'Alemanha.',
      introBuilding: 'Enquanto construo',
      introAndWord2: 'e',
      introSystems: 'Construo sistemas de dados que não quebram',
      introMostDays: '(na maioria dos dias)',
      introBackend: 'principalmente em dados e backend com',
      introAndWord3: 'e',
      introInfra: 'Para BI e infraestrutura uso',
      introAndWord4: 'e',
      introTooling: 'Ultimamente tenho focado em ferramentas para macOS e open source com',
      introAndWord5: 'e',
      introBesides: 'Além disso, amo',
      introInterests: 'Fotografia, Design Minimalista',
      introAndWord6: 'e',
      introEngineering: 'Engenharia',
      introAlways: 'e estou sempre buscando aprender coisas novas e conhecer pessoas.',
      introOpen: 'Aberto a vagas em dados, IA ou engenharia — conecte-se no',
      introOrMail: 'ou envie um e-mail',
      signoff: '~ construindo...',
      signoffQuerying: '~ consultando...',
      signoffBuilding: '~ desenvolvendo...',
      signoffCaffeinated: '~ cafeinado...',
      githubActivity30d: 'Atividade 30d',
      githubContributionsYear: '{count} contribuições no último ano',
      githubNoContributions: 'Sem contribuições',
      githubContributionOne: '1 contribuição',
      githubContributionMany: '{count} contribuições',
      sectionWork: 'Experiência',
      workRaycastDesc: '~ Contribuidor de Código Aberto',
      workRaycastType: 'código aberto -',
      workRaycastDate: 'Mar 2026–Presente',
      workInfineonDesc: '~ Analista de Dados',
      workInfineonType: 'estudante trabalhador -',
      workInfineonDate: '24 meses',
      workTeisnachDesc: '~ Assistente de Pesquisa de Pós-Graduação',
      workTeisnachType: 'pesquisa -',
      workTeisnachDate: '7 meses',
      workRosenbergerDesc: '~ Estagiário Desenvolvedor Python e Analista',
      workRosenbergerType: 'estágio -',
      workRosenbergerDate: '7 meses',
      sectionProducts: 'Produtos',
      prodWosDesc: '~ App iOS minimalista do Bhagavad Gītā',
      prodRenameMailDesc: '~ Transforme seu Gmail em um rastreador visual e pipeline.',
      sectionProjects: 'Projetos',
      projRemindersTitle: 'Lembretes da Apple (Raycast)',
      projRemindersDesc: '~ PRs de recorrência, eventos de calendário, prioridades e tags.',
      projRagTitle: 'RAG de Qualidade Industrial',
      projRagDesc: '~ Busca semântica de documentos em menos de um segundo com ChromaDB.',
      projSalesTitle: 'Previsão ML de Vendas de Veículos',
      projSalesDesc: '~ Regressão gradient-boosted com 92% de precisão R².',
      projDnnTitle: 'Detecção de Objetos DNN',
      projDnnDesc: '~ Detecção de objetos em CPU em tempo real a 30+ FPS via ONNX.',
      projSentimentTitle: 'Sentimento de Ações no Reddit',
      projSentimentDesc: '~ Pipeline NLP em tempo real para sentimento de ações.',
      followMe: 'Seguir',
      footerRights: 'Todos os direitos reservados',
      modalTranslate: 'Traduzir',
      modalSearchPlaceholder: 'Pesquisar idiomas',
      modalNoLanguages: 'Nenhum idioma encontrado',
      favIntro: 'Adoro descobrir coisas incríveis — seja um produto bem projetado, uma pessoa inspiradora ou um site ao qual sempre volto. Esta é a minha coleção dessas joias da internet e do mundo real.',
      favSearchPlaceholder: 'Pesquisar links',
      favEmpty: 'Nenhum favorito correspondente encontrado.',
      sortLatest: 'Mais recentes',
      sortOldest: 'Mais antigos',
      sortAZ: 'A–Z',
      catAll: 'Todos',
      catDesign: 'Design',
      catApps: 'Apps',
      catMovies: 'Filmes',
      catTypography: 'Tipografia',
      catPeople: 'Pessoas',
      catBlogs: 'Blogs',
      catHardware: 'Hardware',
      photoIntro1: 'Fotografar em filme força você a desacelerar. Com as diferentes câmeras de celular ao longo da minha vida, não fico olhando para a tela para checar cada foto. Essa limitação me torna um fotógrafo melhor.',
      photoIntro2: 'A maior parte do que você verá aqui é fotografia de rua, momentos espontâneos e cenas silenciosas que encontrei caminhando sem rumo. Tem textura e honestidade. Essas fotos não são perfeitas, mas são reais.'
    },
    nl: {
      navHome: 'Home',
      navFavorites: 'Favorieten',
      navPhotography: 'Fotografie',
      headerAka: 'alias',
      pullLampMorning: 'Trek voor de ochtend',
      pullLampNight: 'Trek voor de nacht',
      introTitle: 'Ik ben Abhishek',
      introGreeting: 'Hi, Guten Tag, नमस्ते',
      introLead: 'Ik ben een',
      introRole: 'Data Analyst & ML Engineer',
      introLove: 'Ik houd van',
      introDataAuto: 'Data, Automatisering',
      introAndWord: 'en',
      introOpenSource: 'Open Source',
      introMsc: 'Daarnaast heb ik een M.Sc. behaald aan',
      introGermany: 'Duitsland.',
      introBuilding: 'Terwijl ik bouw aan',
      introAndWord2: 'en',
      introSystems: 'Ik bouw datasystemen die niet breken',
      introMostDays: '(meestal dan)',
      introBackend: 'vooral in data & backend met',
      introAndWord3: 'en',
      introInfra: 'Voor BI & infra gebruik ik',
      introAndWord4: 'en',
      introTooling: 'De laatste tijd focus ik sterk op macOS-developertools en open source met',
      introAndWord5: 'en',
      introBesides: 'Verder houd ik van',
      introInterests: 'Fotografie, Minimal Design',
      introAndWord6: 'en',
      introEngineering: 'Engineering',
      introAlways: 'en leer ik graag nieuwe dingen en ontmoet ik graag nieuwe mensen.',
      introOpen: 'Beschikbaar voor data-, AI- of engineeringrollen — verbind via',
      introOrMail: 'of stuur een mail',
      signoff: '~ aan het bouwen...',
      signoffQuerying: '~ aan het queryen...',
      signoffBuilding: '~ aan het ontwikkelen...',
      signoffCaffeinated: '~ vol cafeïne...',
      githubActivity30d: '30d activiteit',
      githubContributionsYear: '{count} bijdragen in het afgelopen jaar',
      githubNoContributions: 'Geen bijdragen',
      githubContributionOne: '1 bijdrage',
      githubContributionMany: '{count} bijdragen',
      sectionWork: 'Ervaring',
      workRaycastDesc: '~ Open-source bijdrager',
      workRaycastType: 'open source -',
      workRaycastDate: 'Mrt 2026–Heden',
      workInfineonDesc: '~ Data Analist',
      workInfineonType: 'werkstudent -',
      workInfineonDate: '24 mnd',
      workTeisnachDesc: '~ Onderzoeksassistent',
      workTeisnachType: 'onderzoek -',
      workTeisnachDate: '7 mnd',
      workRosenbergerDesc: '~ Python Developer Stagiair & Analist',
      workRosenbergerType: 'stage -',
      workRosenbergerDate: '7 mnd',
      sectionProducts: 'Producten',
      prodWosDesc: '~ Minimalistische Bhagavad Gītā iOS-app',
      prodRenameMailDesc: '~ Verander je Gmail in een visuele tracker & pijplijn.',
      sectionProjects: 'Projecten',
      projRemindersTitle: 'Apple Herinneringen (Raycast)',
      projRemindersDesc: '~ PRs voor herhalingen, agenda-items, prioriteiten & tags.',
      projRagTitle: 'Productiekwaliteit RAG',
      projRagDesc: '~ Semantisch zoeken in documenten binnen een seconde met ChromaDB.',
      projSalesTitle: 'ML Voertuigverkoop',
      projSalesDesc: '~ Gradient-boosted regressie met 92% R²-nauwkeurigheid.',
      projDnnTitle: 'Objectdetectie DNN',
      projDnnDesc: '~ Realtime 30+ FPS CPU-objectdetectie via ONNX.',
      projSentimentTitle: 'Reddit Aandelensentiment',
      projSentimentDesc: '~ Realtime NLP-streamingpijplijn voor aandelensentiment.',
      followMe: 'Volg mij',
      footerRights: 'Alle rechten voorbehouden',
      modalTranslate: 'Vertalen',
      modalSearchPlaceholder: 'Zoek talen',
      modalNoLanguages: 'Geen talen gevonden',
      favIntro: 'Ik ontdek graag mooie dingen, of het nu een goed ontworpen product is, een inspirerend persoon of een website waar ik steeds naar terugkeer. Dit is mijn verzameling van die pareltjes.',
      favSearchPlaceholder: 'Zoek links',
      favEmpty: 'Geen overeenkomende favorieten gevonden.',
      sortLatest: 'Nieuwste',
      sortOldest: 'Oudste',
      sortAZ: 'A–Z',
      catAll: 'Alles',
      catDesign: 'Design',
      catApps: 'Apps',
      catMovies: 'Films',
      catTypography: 'Typografie',
      catPeople: 'Mensen',
      catBlogs: 'Blogs',
      catHardware: 'Hardware',
      photoIntro1: 'Fotograferen op film dwingt je om te vertragen. Met de verschillende telefooncamera’s in mijn leven kijk ik niet na elke foto op het scherm. Juist die beperking maakt mij een betere fotograaf.',
      photoIntro2: 'Het meeste dat je hier ziet is straatfotografie: spontane momenten en stille scènes waar ik zonder plan tegenaan liep. Het heeft textuur en eerlijkheid. Deze foto’s zijn niet perfect, maar wel echt.'
    },
    ar: {
      navHome: 'الرئيسية',
      navFavorites: 'المفضلة',
      navPhotography: 'التصوير',
      headerAka: 'المعروف بـ',
      pullLampMorning: 'اسحب للصباح',
      pullLampNight: 'اسحب للمساء',
      introTitle: 'أنا أبهيشيك',
      introGreeting: 'Hi, Guten Tag, नमस्ते',
      introLead: 'أنا',
      introRole: 'محلل بيانات ومهندس تعلم آلي',
      introLove: 'أحب',
      introDataAuto: 'البيانات والأتمتة',
      introAndWord: 'و',
      introOpenSource: 'المصادر المفتوحة',
      introMsc: 'كما أحمل درجة الماجستير من',
      introGermany: 'ألمانيا.',
      introBuilding: 'وأعمل على بناء',
      introAndWord2: 'و',
      introSystems: 'أبني أنظمة بيانات موثوقة لا تتعطل',
      introMostDays: '(في معظم الأيام)',
      introBackend: 'غالباً في البيانات والخلفية باستخدام',
      introAndWord3: 'و',
      introInfra: 'ولتحليل الأعمال والبنية التحتية أستخدم',
      introAndWord4: 'و',
      introTooling: 'مؤخراً أركز على أدوات مطوري macOS والمصادر المفتوحة مع',
      introAndWord5: 'و',
      introBesides: 'إلى جانب ذلك، أحب',
      introInterests: 'التصوير، التصميم البسيط',
      introAndWord6: 'و',
      introEngineering: 'الهندسة',
      introAlways: 'وأسعى دائماً لتعلم أشياء جديدة والتعرف على أشخاص جدد.',
      introOpen: 'متاح للعمل في مجالات البيانات والذكاء الاصطناعي والهندسة — تواصل عبر',
      introOrMail: 'أو أرسل بريداً',
      signoff: '~ قيد البناء...',
      signoffQuerying: '~ استعلام البيانات...',
      signoffBuilding: '~ قيد التطوير...',
      signoffCaffeinated: '~ مع القهوة...',
      githubActivity30d: 'نشاط 30 يوماً',
      githubContributionsYear: '{count} مساهمة في العام الماضي',
      githubNoContributions: 'لا توجد مساهمات',
      githubContributionOne: 'مساهمة واحدة',
      githubContributionMany: '{count} مساهمات',
      sectionWork: 'الخبرة',
      workRaycastDesc: '~ مساهم في المصادر المفتوحة',
      workRaycastType: 'مصادر مفتوحة -',
      workRaycastDate: 'مارس 2026–الحاضر',
      workInfineonDesc: '~ محلل بيانات',
      workInfineonType: 'طالب عامل -',
      workInfineonDate: '24 شهراً',
      workTeisnachDesc: '~ مساعد باحث دراسات عليا',
      workTeisnachType: 'بحث علمي -',
      workTeisnachDate: '7 أشهر',
      workRosenbergerDesc: '~ متدرب مطور بايثون ومحلل',
      workRosenbergerType: 'تدريب -',
      workRosenbergerDate: '7 أشهر',
      sectionProducts: 'المنتجات',
      prodWosDesc: '~ تطبيق iOS بسيط لكتاب بهاغافاد غيتا',
      prodRenameMailDesc: '~ حوّل Gmail إلى أداة تتبع مرئية ومسار عمل.',
      sectionProjects: 'المشاريع',
      projRemindersTitle: 'تذكيرات Apple (Raycast)',
      projRemindersDesc: '~ مساهمات التكرار وأحداث التقويم والأولويات والوسوم.',
      projRagTitle: 'نظام RAG لجودة التصنيع',
      projRagDesc: '~ بحث دلالي في المستندات بأقل من ثانية باستخدام ChromaDB.',
      projSalesTitle: 'توقع مبيعات المركبات بالتعلم الآلي',
      projSalesDesc: '~ انحدار معزز بالتدرج بدقة 92% R².',
      projDnnTitle: 'كشف الأجسام عبر DNN',
      projDnnDesc: '~ كشف فوري للأجسام على المعالج بسرعة 30+ إطاراً عبر ONNX.',
      projSentimentTitle: 'تحليل مشاعر الأسهم في Reddit',
      projSentimentDesc: '~ مسار معالجة لغة طبيعية فوري لمشاعر الأسهم.',
      followMe: 'تابعني',
      footerRights: 'جميع الحقوق محفوظة',
      modalTranslate: 'ترجمة',
      modalSearchPlaceholder: 'ابحث عن اللغات',
      modalNoLanguages: 'لم يتم العثور على لغات',
      favIntro: 'أحب اكتشاف الأشياء الرائعة، سواء كان منتجاً مصمماً بعناية، أو شخصاً ملهماً، أو موقعاً أعود إليه باستمرار. هذه مجموعتي من تلك الجواهر التي وجدتها على الإنترنت وفي العالم الحقيقي.',
      favSearchPlaceholder: 'البحث في الروابط',
      favEmpty: 'لم يتم العثور على مفضلات مطابقة.',
      sortLatest: 'الأحدث',
      sortOldest: 'الأقدم',
      sortAZ: 'أ–ي',
      catAll: 'الكل',
      catDesign: 'تصميم',
      catApps: 'تطبيقات',
      catMovies: 'أفلام',
      catTypography: 'خطوط',
      catPeople: 'أشخاص',
      catBlogs: 'مدونات',
      catHardware: 'أجهزة',
      photoIntro1: 'التصوير بالفيلم يجبرك على التمهل. مع كاميرات الهواتف المختلفة طوال حياتي، لا داعي للنظر إلى الشاشة بعد كل لقطة. هذا القيد هو ما يجعلني مصوراً أفضل.',
      photoIntro2: 'معظم ما ستراه هنا هو تصوير شوارع، لحظات عفوية ومشاهد هادئة صادفتها أثناء المشي دون خطة مسبقة. فيها ملمس وصدق؛ هذه الصور ليست مثالية لكنها حقيقية.'
    }
  };

  const FAVORITE_DESC_TRANSLATIONS = {
    'AI company I trust': {
      de: 'KI-Unternehmen, dem ich vertraue',
      hi: 'AI कंपनी जिस पर मुझे भरोसा है',
      fr: "L'entreprise d'IA en qui j'ai confiance",
      es: 'La empresa de IA en la que confío',
      zh: '我信赖的 AI 公司',
      ja: '信頼しているAI企業',
      ko: '내가 신뢰하는 AI 기업',
      it: "L'azienda AI di cui mi fido",
      pt: 'A empresa de IA em que confio',
      nl: 'AI-bedrijf dat ik vertrouw',
      ar: 'شركة الذكاء الاصطناعي التي أثق بها'
    },
    'Keeps my Gmail inbox sane': {
      de: 'Hält meinen Gmail-Posteingang übersichtlich',
      hi: 'मेरे Gmail इनबॉक्स को व्यवस्थित रखता है',
      fr: 'Garde ma boîte Gmail bien organisée',
      es: 'Mantiene mi bandeja de Gmail en orden',
      zh: '让我的 Gmail 收件箱保持井然有序',
      ja: 'Gmailの受信トレイをすっきり整理してくれる',
      ko: '내 Gmail 받은편지함을 깔끔하게 유지해 주는 도구',
      it: 'Mantiene in ordine la mia casella Gmail',
      pt: 'Mantém minha caixa de entrada do Gmail organizada',
      nl: 'Houdt mijn Gmail-inbox overzichtelijk',
      ar: 'يبقي بريد Gmail الخاص بي منظماً'
    },
    'My Shortcut to Everything': {
      de: 'Mein Shortcut für alles',
      hi: 'हर चीज़ के लिए मेरा शॉर्टकट',
      fr: 'Mon raccourci vers tout',
      es: 'Mi atajo para todo',
      zh: '我通往一切的快捷方式',
      ja: 'あらゆる操作へのショートカット',
      ko: '모든 것으로 향하는 나만의 단축키',
      it: 'La mia scorciatoia per tutto',
      pt: 'Meu atalho para tudo',
      nl: 'Mijn snelkoppeling naar alles',
      ar: 'اختصاري لكل شيء'
    },
    'favourite coding language': {
      de: 'Lieblings-Programmiersprache',
      hi: 'पसंदीदा प्रोग्रामिंग भाषा',
      fr: 'Langage de programmation préféré',
      es: 'Lenguaje de programación favorito',
      zh: '最喜欢的编程语言',
      ja: 'お気に入りのプログラミング言語',
      ko: '가장 좋아하는 프로그래밍 언어',
      it: 'Linguaggio di programmazione preferito',
      pt: 'Linguagem de programação favorita',
      nl: 'Favoriete programmeertaal',
      ar: 'لغة البرمجة المفضلة'
    },
    'Based on Incredible true event': {
      de: 'Basierend auf einer unglaublichen wahren Begebenheit',
      hi: 'एक अविश्वसनीय सच्ची घटना पर आधारित',
      fr: 'Inspiré d’une incroyable histoire vraie',
      es: 'Basada en un increíble hecho real',
      zh: '改编自令人难以置信的真实事件',
      ja: '信じられないほどの実話に基づく作品',
      ko: '믿기 힘든 실화를 바탕으로 한 작품',
      it: 'Basato su un incredibile evento realmente accaduto',
      pt: 'Baseado em um incrível evento real',
      nl: 'Gebaseerd op een ongelooflijke waargebeurde geschiedenis',
      ar: 'مبني على قصة حقيقية مذهلة'
    },
    'illustrated tech manual': {
      de: 'Illustriertes Technik-Handbuch',
      hi: 'सचित्र टेक मैनुअल',
      fr: 'Manuel technique illustré',
      es: 'Manual técnico ilustrado',
      zh: '插画式技术手册',
      ja: '図解テックマニュアル',
      ko: '일러스트로 풀어낸 기술 매뉴얼',
      it: 'Manuale tecnico illustrato',
      pt: 'Manual técnico ilustrado',
      nl: 'Geïllustreerd technisch handboek',
      ar: 'دليل تقني مصوّر'
    },
    'Loved the landing page. Clear, concise, and direct!': {
      de: 'Tolle Landingpage. Klar, präzise und direkt!',
      hi: 'शानदार लैंडिंग पेज। स्पष्ट, संक्षिप्त और सीधा!',
      fr: "J'adore la landing page. Claire, concise et directe !",
      es: 'Me encantó la página de inicio. ¡Clara, concisa y directa!',
      zh: '非常喜欢这个落地页。清晰、简洁、直接！',
      ja: 'ランディングページが最高。明快で簡潔、ストレート！',
      ko: '랜딩 페이지가 정말 마음에 듭니다. 명확하고 간결하며 직관적!',
      it: 'Ho adorato la landing page. Chiara, concisa e diretta!',
      pt: 'Adorei a landing page. Clara, concisa e direta!',
      nl: 'Geweldige landingspagina. Helder, beknopt en direct!',
      ar: 'أحببت صفحة الهبوط. واضحة وموجزة ومباشرة!'
    },
    'Favourite place to find movies, TV-shows, series': {
      de: 'Lieblingsort, um Filme, TV-Shows und Serien zu entdecken',
      hi: 'फ़िल्में, टीवी शो और सीरीज़ खोजने की पसंदीदा जगह',
      fr: 'Endroit préféré pour trouver films, émissions et séries',
      es: 'Lugar favorito para encontrar películas, programas y series',
      zh: '发现电影、电视节目与剧集的最爱去处',
      ja: '映画やテレビ番組、シリーズを探すお気に入りの場所',
      ko: '영화, TV 쇼, 시리즈를 찾을 때 가장 좋아하는 곳',
      it: 'Posto preferito per trovare film, programmi TV e serie',
      pt: 'Lugar favorito para encontrar filmes, programas de TV e séries',
      nl: 'Favoriete plek om films, tv-shows en series te vinden',
      ar: 'المكان المفضل للعثور على الأفلام والبرامج والمسلسلات'
    },
    'The keyboard that makes me feel like a kid again.': {
      de: 'Die Tastatur, mit der ich mich wieder wie ein Kind fühle.',
      hi: 'वह कीबोर्ड जो मुझे फिर से बचपन की याद दिलाता है।',
      fr: 'Le clavier qui me fait retomber en enfance.',
      es: 'El teclado que me hace sentir como un niño otra vez.',
      zh: '让我重拾童年快乐的机械键盘。',
      ja: '子どもの頃のワクワクを思い出させてくれるキーボード。',
      ko: '다시 어린아이가 된 듯한 기분을 주는 키보드.',
      it: 'La tastiera che mi fa sentire di nuovo un bambino.',
      pt: 'O teclado que me faz sentir criança novamente.',
      nl: 'Het toetsenbord waardoor ik me weer kind voel.',
      ar: 'لوحة المفاتيح التي تجعلني أشعر وكأنني طفل من جديد.'
    },
    'Favourite Anime': {
      de: 'Lieblings-Anime',
      hi: 'पसंदीदा एनीमे',
      fr: 'Anime préféré',
      es: 'Anime favorito',
      zh: '最喜欢的动漫',
      ja: 'お気に入りのアニメ',
      ko: '가장 좋아하는 애니메이션',
      it: 'Anime preferito',
      pt: 'Anime favorito',
      nl: 'Favoriete anime',
      ar: 'الأنمي المفضل'
    },
    'Product font I blindly use': {
      de: 'Produktschrift, die ich blind verwende',
      hi: 'प्रोडक्ट फ़ॉन्ट जिसे मैं आँख बंद करके इस्तेमाल करता हूँ',
      fr: "Police produit que j'utilise les yeux fermés",
      es: 'Tipografía de producto que uso a ciegas',
      zh: '我毫不犹豫使用的产品字体',
      ja: '迷わず愛用しているプロダクトフォント',
      ko: '믿고 쓰는 프로덕트 폰트',
      it: 'Font di prodotto che uso a occhi chiusi',
      pt: 'Fonte de produto que uso de olhos fechados',
      nl: 'Productlettertype dat ik blindelings gebruik',
      ar: 'خط المنتجات الذي أستخدمه دون تردد'
    },
    'Beautiful pixel mono font': {
      de: 'Wunderschöne Pixel-Monospace-Schrift',
      hi: 'खूबसूरत पिक्सेल मोनो फ़ॉन्ट',
      fr: 'Magnifique police pixel monospace',
      es: 'Hermosa fuente monoespaciada de píxeles',
      zh: '精美的像素等宽字体',
      ja: '美しいピクセル等幅フォント',
      ko: '아름다운 픽셀 모노스페이스 폰트',
      it: 'Bellissimo font pixel monospazio',
      pt: 'Linda fonte pixel monoespaçada',
      nl: 'Prachtig pixel-monospace lettertype',
      ar: 'خط بكسل أحادي المسافة جميل'
    },
    "Click only if you've 2 hours to spare.": {
      de: 'Nur klicken, wenn du 2 Stunden Zeit übrig hast.',
      hi: 'तभी क्लिक करें जब आपके पास 2 घंटे खाली हों।',
      fr: 'Ne cliquez que si vous avez 2 heures devant vous.',
      es: 'Haz clic solo si tienes 2 horas libres.',
      zh: '只有当你有两小时空闲时才建议点开。',
      ja: '2時間余裕があるときだけクリックしてください。',
      ko: '2시간의 여유가 있을 때만 클릭하세요.',
      it: 'Clicca solo se hai 2 ore libere.',
      pt: 'Clique apenas se tiver 2 horas livres.',
      nl: 'Klik alleen als je 2 uur over hebt.',
      ar: 'اضغط فقط إذا كان لديك ساعتان من وقت الفراغ.'
    },
    'my iOS design inspiration': {
      de: 'Meine iOS-Design-Inspiration',
      hi: 'मेरी iOS डिज़ाइन प्रेरणा',
      fr: 'Mon inspiration design iOS',
      es: 'Mi inspiración de diseño iOS',
      zh: '我的 iOS 设计灵感来源',
      ja: 'iOSデザインのインスピレーション源',
      ko: '나의 iOS 디자인 영감 원천',
      it: 'La mia ispirazione per il design iOS',
      pt: 'Minha inspiração de design iOS',
      nl: 'Mijn iOS-designinspiratie',
      ar: 'مصدر إلهامي لتصميم iOS'
    },
    'All the things I wish to own someday': {
      de: 'All die Dinge, die ich eines Tages besitzen möchte',
      hi: 'वे सभी चीज़ें जिन्हें मैं एक दिन अपना बनाना चाहता हूँ',
      fr: "Toutes les choses que j'aimerais posséder un jour",
      es: 'Todas las cosas que deseo tener algún día',
      zh: '那些我希望有一天能拥有的好物',
      ja: 'いつか手に入れたいものすべて',
      ko: '언젠가 꼭 소장하고 싶은 모든 것들',
      it: 'Tutte le cose che vorrei possedere un giorno',
      pt: 'Todas as coisas que desejo ter um dia',
      nl: 'Alle dingen die ik ooit hoop te bezitten',
      ar: 'كل الأشياء التي أتمنى امتلاكها يوماً ما'
    },
    'Portfolio of a award winning songwriter': {
      de: 'Portfolio eines preisgekrönten Songwriters',
      hi: 'एक पुरस्कार विजेता गीतकार का पोर्टफ़ोलियो',
      fr: "Portfolio d'un auteur-compositeur primé",
      es: 'Portafolio de un compositor galardonado',
      zh: '获奖词曲作家的作品集网站',
      ja: '受賞歴のあるソングライターのポートフォリオ',
      ko: '수상 경력에 빛나는 작곡가의 포트폴리오',
      it: 'Portfolio di un cantautore pluripremiato',
      pt: 'Portfólio de um compositor premiado',
      nl: 'Portfolio van een bekroonde songwriter',
      ar: 'ملف أعمال كاتب أغانٍ حائز على جوائز'
    },
    'My comfort zone': {
      de: 'Meine Komfortzone',
      hi: 'मेरा कम्फ़र्ट ज़ोन',
      fr: 'Ma zone de réconfort',
      es: 'Mi lugar seguro',
      zh: '我的治愈舒适区',
      ja: '心が安らぐお気に入りの一本',
      ko: '나만의 편안한 안식처 같은 영화',
      it: 'La mia zona di comfort',
      pt: 'Minha zona de conforto',
      nl: 'Mijn comfortzone',
      ar: 'منطقة راحتي النفسية'
    },
    'Top notch product & website design': {
      de: 'Erstklassiges Produkt- & Webdesign',
      hi: 'बेहतरीन प्रोडक्ट और वेबसाइट डिज़ाइन',
      fr: 'Design de produit et de site web exceptionnel',
      es: 'Diseño de producto y sitio web de primer nivel',
      zh: '一流的产品与网站设计',
      ja: '最高峰のプロダクト＆Webサイトデザイン',
      ko: '최고 수준의 프로덕트 및 웹사이트 디자인',
      it: 'Design di prodotto e sito web di altissimo livello',
      pt: 'Design de produto e site de primeira linha',
      nl: 'Product- en websitedesign van topniveau',
      ar: 'تصميم منتجات ومواقع من الطراز الأول'
    },
    'So simple landing page': {
      de: 'So eine schlichte Landingpage',
      hi: 'बेहद सरल लैंडिंग पेज',
      fr: 'Une landing page tellement simple',
      es: 'Una página de inicio tan sencilla',
      zh: '极其简洁纯粹的落地页',
      ja: 'とてもシンプルで美しいランディングページ',
      ko: '감탄이 나올 만큼 심플한 랜딩 페이지',
      it: 'Una landing page così semplice',
      pt: 'Uma landing page tão simples',
      nl: 'Zo’n eenvoudige landingspagina',
      ar: 'صفحة هبوط في غاية البساطة'
    },
    'My favourite TV-show': {
      de: 'Meine Lieblingsserie',
      hi: 'मेरा पसंदीदा टीवी शो',
      fr: 'Ma série TV préférée',
      es: 'Mi serie de TV favorita',
      zh: '我最喜欢的电视剧',
      ja: 'お気に入りのTVドラマ',
      ko: '가장 좋아하는 TV 드라마',
      it: 'La mia serie TV preferita',
      pt: 'Minha série de TV favorita',
      nl: 'Mijn favoriete tv-serie',
      ar: 'مسلسلي التلفزيوني المفضل'
    },
    'Blog websites can be thoughtful': {
      de: 'Blog-Websites können so durchdacht sein',
      hi: 'ब्लॉग वेबसाइटें भी इतनी सोच-समझकर बनाई जा सकती हैं',
      fr: 'Les sites de blog peuvent être si bien pensés',
      es: 'Los sitios de blogs pueden ser muy cuidados',
      zh: '博客网站也可以设计得如此有巧思',
      ja: 'ブログサイトはここまで丁寧に作れる',
      ko: '블로그 웹사이트도 이렇게 사려 깊을 수 있다',
      it: 'I siti blog possono essere così curati',
      pt: 'Sites de blog podem ser muito bem pensados',
      nl: 'Blogwebsites kunnen zo doordacht zijn',
      ar: 'مواقع المدونات يمكن أن تكون مصممة بعناية فائقة'
    },
    'Books I wish to own': {
      de: 'Bücher, die ich besitzen möchte',
      hi: 'किताबें जिन्हें मैं अपना बनाना चाहता हूँ',
      fr: 'Les livres que je rêve de posséder',
      es: 'Libros que deseo tener',
      zh: '我渴望收藏的书籍',
      ja: '手元に置いておきたい本たち',
      ko: '소장하고 싶은 책들',
      it: 'Libri che vorrei possedere',
      pt: 'Livros que desejo ter',
      nl: 'Boeken die ik graag wil bezitten',
      ar: 'كتب أتمنى اقتناءها'
    },
    'Design inspiration for og-images': {
      de: 'Design-Inspiration für OG-Images',
      hi: 'OG-इमेज के लिए डिज़ाइन प्रेरणा',
      fr: 'Inspiration design pour les images Open Graph',
      es: 'Inspiración de diseño para imágenes OG',
      zh: 'OG 社交预览图的设计灵感库',
      ja: 'OG画像のデザインインスピレーション',
      ko: 'OG 이미지 디자인 영감 갤러리',
      it: 'Ispirazione di design per immagini OG',
      pt: 'Inspiração de design para imagens OG',
      nl: 'Designinspiratie voor OG-afbeeldingen',
      ar: 'إلهام تصميمي لصور المعاينة OG'
    },
    'Brilliant design leader': {
      de: 'Brillanter Design-Leader',
      hi: 'शानदार डिज़ाइन लीडर',
      fr: 'Brillant leader du design',
      es: 'Brillante líder de diseño',
      zh: '卓越的设计领袖',
      ja: '素晴らしいデザインリーダー',
      ko: '탁월한 디자인 리더',
      it: 'Brillante design leader',
      pt: 'Brilhante líder de design',
      nl: 'Briljante designleider',
      ar: 'قائد تصميم بارع'
    },
    "Big fan of Darius' illustrations": {
      de: 'Großer Fan von Darius’ Illustrationen',
      hi: 'डैरियस के चित्रों का बड़ा प्रशंसक',
      fr: 'Grand fan des illustrations de Darius',
      es: 'Gran fan de las ilustraciones de Darius',
      zh: 'Darius 插画作品的忠实粉丝',
      ja: 'Dariusのイラストの大ファン',
      ko: '다리우스 일러스트레이션의 열렬한 팬',
      it: 'Grande fan delle illustrazioni di Darius',
      pt: 'Grande fã das ilustrações do Darius',
      nl: 'Grote fan van de illustraties van Darius',
      ar: 'معجب كبير برسومات داريوس التوضيحية'
    },
    'Favourite Rāmāyaṇa': {
      de: 'Lieblings-Rāmāyaṇa',
      hi: 'पसंदीदा रामायण',
      fr: 'Rāmāyaṇa préféré',
      es: 'Rāmāyaṇa favorito',
      zh: '最喜欢的《罗摩衍那》动画',
      ja: 'お気に入りのラーマーヤナ',
      ko: '가장 좋아하는 라마야나',
      it: 'Rāmāyaṇa preferito',
      pt: 'Rāmāyaṇa favorito',
      nl: 'Favoriete Rāmāyaṇa',
      ar: 'الرامايانا المفضلة'
    },
    'Favourite Rāmāyaṇa': {
      de: 'Lieblings-Rāmāyaṇa',
      hi: 'पसंदीदा रामायण',
      fr: 'Rāmāyaṇa préféré',
      es: 'Rāmāyaṇa favorito',
      zh: '最喜欢的《罗摩衍那》动画',
      ja: 'お気に入りのラーマーヤナ',
      ko: '가장 좋아하는 라마야나',
      it: 'Rāmāyaṇa preferito',
      pt: 'Rāmāyaṇa favorito',
      nl: 'Favoriete Rāmāyaṇa',
      ar: 'الرامايانا المفضلة'
    },
    'Designer at Linear': {
      de: 'Designer bei Linear',
      hi: 'Linear में डिज़ाइनर',
      fr: 'Designer chez Linear',
      es: 'Diseñador en Linear',
      zh: 'Linear 设计师',
      ja: 'Linear のデザイナー',
      ko: 'Linear 디자이너',
      it: 'Designer presso Linear',
      pt: 'Designer na Linear',
      nl: 'Designer bij Linear',
      ar: 'مصمم في Linear'
    },
    'My source of inspiration': {
      de: 'Meine Inspirationsquelle',
      hi: 'मेरी प्रेरणा का स्रोत',
      fr: "Ma source d'inspiration",
      es: 'Mi fuente de inspiración',
      zh: '我的设计灵感源泉',
      ja: '私のインスピレーションの源',
      ko: '나의 영감의 원천',
      it: 'La mia fonte di ispirazione',
      pt: 'Minha fonte de inspiração',
      nl: 'Mijn bron van inspiratie',
      ar: 'مصدر إلهامي'
    },
    'A minimal and beautiful clock screensaver for your mac.': {
      de: 'Ein minimalistischer und schöner Uhr-Bildschirmschoner für den Mac.',
      hi: 'आपके मैक के लिए एक मिनिमल और खूबसूरत घड़ी स्क्रीनसेवर।',
      fr: "Un économiseur d'écran horloge minimaliste et élégant pour Mac.",
      es: 'Un salvapantallas de reloj minimalista y hermoso para tu Mac.',
      zh: '为 Mac 打造的极简唯美时钟屏保。',
      ja: 'Mac向けのミニマルで美しい時計スクリーンセーバー。',
      ko: 'Mac을 위한 미니멀하고 아름다운 시계 화면 보호기.',
      it: 'Uno screensaver orologio minimale e bellissimo per il tuo Mac.',
      pt: 'Um protetor de tela de relógio minimalista e lindo para o seu Mac.',
      nl: 'Een minimalistische en prachtige klok-screensaver voor je Mac.',
      ar: 'شاشة توقف ساعة بسيطة وجميلة لجهاز ماك.'
    },
    'Lightweight Intercom alternative': {
      de: 'Leichtgewichtige Intercom-Alternative',
      hi: 'हल्का-फुल्का Intercom विकल्प',
      fr: 'Alternative légère à Intercom',
      es: 'Alternativa ligera a Intercom',
      zh: '轻量级 Intercom 替代方案',
      ja: '軽量な Intercom 代替ツール',
      ko: '가벼운 Intercom 대안',
      it: 'Alternativa leggera a Intercom',
      pt: 'Alternativa leve ao Intercom',
      nl: 'Lichtgewicht alternatief voor Intercom',
      ar: 'بديل خفيف لـ Intercom'
    },
    'My companion in all sales calls': {
      de: 'Mein Begleiter in allen Gesprächen & Calls',
      hi: 'सभी सेल्स कॉल्स में मेरा साथी',
      fr: 'Mon compagnon dans tous les appels',
      es: 'Mi compañero en todas las llamadas',
      zh: '我所有通话与会议的得力助手',
      ja: 'あらゆる通話・ミーティングの相棒',
      ko: '모든 미팅과 통화에서 함께하는 동반자',
      it: 'Il mio compagno in tutte le chiamate',
      pt: 'Meu companheiro em todas as chamadas',
      nl: 'Mijn metgezel bij alle gesprekken',
      ar: 'رفيقي في جميع المكالمات والاجتماعات'
    },
    'A humble little film, maybe, but an enriching one.': {
      de: 'Vielleicht ein bescheidener kleiner Film, aber ein sehr bereichernder.',
      hi: 'शायद एक साधारण-सी छोटी फ़िल्म, लेकिन दिल को समृद्ध करने वाली।',
      fr: 'Un petit film humble, peut-être, mais profondément enrichissant.',
      es: 'Una pequeña película humilde, tal vez, pero muy enriquecedora.',
      zh: '也许是一部朴素的小电影，却能丰盈内心。',
      ja: 'ささやかな映画かもしれないけれど、心を豊かにしてくれる一本。',
      ko: '소박한 작은 영화일지 몰라도 마음을 풍요롭게 해주는 작품.',
      it: 'Un piccolo film umile, forse, ma profondamente arricchente.',
      pt: 'Um pequeno filme humilde, talvez, mas muito enriquecedor.',
      nl: 'Misschien een bescheiden kleine film, maar wel een verrijkende.',
      ar: 'فيلم صغير متواضع ربما، لكنه يُثري الروح.'
    },
    'Using these icons in all of my projects': {
      de: 'Ich nutze diese Icons in all meinen Projekten',
      hi: 'मैं अपने सभी प्रोजेक्ट्स में इन आइकन्स का उपयोग करता हूँ',
      fr: "J'utilise ces icônes dans tous mes projets",
      es: 'Uso estos iconos en todos mis proyectos',
      zh: '我在所有项目中都在使用的图标库',
      ja: 'すべてのプロジェクトで使っているアイコンセット',
      ko: '내 모든 프로젝트에서 사용하는 아이콘',
      it: 'Uso queste icone in tutti i miei progetti',
      pt: 'Uso esses ícones em todos os meus projetos',
      nl: 'Ik gebruik deze iconen in al mijn projecten',
      ar: 'أستخدم هذه الأيقونات في جميع مشاريعي'
    },
    'Love their everyday 3d icons': {
      de: 'Ich liebe ihre alltäglichen 3D-Icons',
      hi: 'इनके रोज़मर्रा के 3D आइकन्स बहुत पसंद हैं',
      fr: "J'adore leurs icônes 3D du quotidien",
      es: 'Me encantan sus iconos 3D cotidianos',
      zh: '非常喜欢他们的日常 3D 图标',
      ja: '日常モチーフの3Dアイコンがお気に入り',
      ko: '일상적인 3D 아이콘들이 정말 매력적인 곳',
      it: 'Adoro le loro icone 3D di tutti i giorni',
      pt: 'Adoro os ícones 3D do dia a dia deles',
      nl: 'Dol op hun alledaagse 3D-iconen',
      ar: 'أحب أيقوناتهم ثلاثية الأبعاد اليومية'
    },
    'Analytics with beauty and brain': {
      de: 'Analytics mit Schönheit und Verstand',
      hi: 'खूबसूरती और समझदारी के साथ एनालिटिक्स',
      fr: "L'analytique alliant beauté et intelligence",
      es: 'Analítica con belleza e inteligencia',
      zh: '兼具颜值与智慧的数据分析工具',
      ja: '美しさと知性を兼ね備えたアナリティクス',
      ko: '아름다움과 똑똑함을 겸비한 애널리틱스',
      it: 'Analytics con bellezza e intelligenza',
      pt: 'Analytics com beleza e inteligência',
      nl: 'Analytics met schoonheid en verstand',
      ar: 'تحليلات تجمع بين الجمال والذكاء'
    },
    'Only generational wealth I will pass on': {
      de: 'Das einzige Familienerbe, das ich weitergeben werde',
      hi: 'एकमात्र पीढ़ीगत धरोहर जो मैं आगे सौंपूंगा',
      fr: 'Le seul patrimoine que je transmettrai',
      es: 'La única herencia generacional que dejaré',
      zh: '我唯一会代代相传的传家宝',
      ja: '次の世代に受け継ぎたい唯一の財産',
      ko: '다음 세대에 물려줄 유일한 유산',
      it: "L'unica eredità generazionale che tramanderò",
      pt: 'A única herança geracional que vou deixar',
      nl: 'Het enige familiestuk dat ik zal doorgeven',
      ar: 'الإرث الوحيد الذي سأورثه للأجيال القادمة'
    },
    'For a bookworm in you': {
      de: 'Für den Bücherwurm in dir',
      hi: 'आपके भीतर के किताबी कीड़े के लिए',
      fr: 'Pour le rat de bibliothèque en vous',
      es: 'Para el lector voraz que llevas dentro',
      zh: '献给热爱阅读的你',
      ja: '本好きのための場所',
      ko: '당신 안의 독서광을 위한 서비스',
      it: 'Per il topo di biblioteca che è in te',
      pt: 'Para o amante de livros em você',
      nl: 'Voor de boekenwurm in jou',
      ar: 'لعشاق القراءة والكتب'
    },
    'This app make avgeek within me happy': {
      de: 'Diese App macht den Luftfahrt-Nerd in mir glücklich',
      hi: 'यह ऐप मेरे भीतर के एविएशन प्रेमी को खुश कर देता है',
      fr: "Cette application ravit le passionné d'aviation en moi",
      es: 'Esta app hace feliz al entusiasta de la aviación en mí',
      zh: '让身为航空迷的我幸福感满满的应用',
      ja: '飛行機好きの心を満たしてくれるアプリ',
      ko: '내 안의 항공 덕후를 행복하게 해주는 앱',
      it: "Questa app rende felice l'appassionato di aviazione che è in me",
      pt: 'Este app deixa o entusiasta de aviação em mim feliz',
      nl: 'Deze app maakt de luchtvaartliefhebber in mij blij',
      ar: 'هذا التطبيق يسعد شغفي بالطيران'
    }
  };

  const FAVORITE_TITLE_TRANSLATIONS = {
    'What Human Memory Teaches Us About Building AI Memory': {
      de: 'Was das menschliche Gedächtnis uns über KI-Gedächtnis lehrt',
      hi: 'मानव स्मृति हमें AI मेमोरी बनाने के बारे में क्या सिखाती है',
      fr: 'Ce que la mémoire humaine nous apprend sur la mémoire IA',
      es: 'Lo que la memoria humana nos enseña sobre construir memoria en IA',
      zh: '人类记忆对构建 AI 记忆系统的启示',
      ja: '人間の記憶から学ぶAIメモリの構築',
      ko: '인간의 기억이 AI 메모리 구축에 주는 교훈',
      it: "Cosa ci insegna la memoria umana sulla memoria dell'IA",
      pt: 'O que a memória humana nos ensina sobre construir memória de IA',
      nl: 'Wat het menselijk geheugen ons leert over AI-geheugen',
      ar: 'ما تعلمنا إياه الذاكرة البشرية حول بناء ذاكرة الذكاء الاصطناعي'
    },
    'Developing Taste': {
      de: 'Geschmack entwickeln',
      hi: 'अपनी कला और परख विकसित करना',
      fr: 'Développer son goût',
      es: 'Desarrollar el buen gusto',
      zh: '培养设计品味',
      ja: 'センスを磨くということ',
      ko: '안목을 기른다는 것',
      it: 'Sviluppare il gusto',
      pt: 'Desenvolvendo o bom gosto',
      nl: 'Smaak ontwikkelen',
      ar: 'تطوير الذائقة الفنية'
    },
    'The physics of doing hard things': {
      de: 'Die Physik schwieriger Dinge',
      hi: 'कठिन काम करने का भौतिक विज्ञान',
      fr: 'La physique des choses difficiles',
      es: 'La física de hacer cosas difíciles',
      zh: '做难事的物理学',
      ja: '困難なことに挑む物理学',
      ko: '어려운 일을 해내는 물리학',
      it: 'La fisica del fare cose difficili',
      pt: 'A física de fazer coisas difíceis',
      nl: 'De fysica van moeilijke dingen doen',
      ar: 'فيزياء إنجاز المهام الصعبة'
    },
    'Gmail: Designed to be joyfully simple': {
      de: 'Gmail: Entworfen für freudige Einfachheit',
      hi: 'Gmail: आनंददायक सरलता के लिए डिज़ाइन किया गया',
      fr: "Gmail : Conçu pour être joyeusement simple",
      es: 'Gmail: Diseñado para ser alegremente simple',
      zh: 'Gmail：为愉悦的简洁而设计',
      ja: 'Gmail：心地よいシンプルさのためのデザイン',
      ko: 'Gmail: 즐거운 단순함을 위해 디자인되다',
      it: 'Gmail: Progettato per essere gioiosamente semplice',
      pt: 'Gmail: Projetado para ser alegremente simples',
      nl: 'Gmail: Ontworpen om vreugdevol eenvoudig te zijn',
      ar: 'Gmail: صُمم ليكون بسيطاً ومبهجاً'
    },
    'People are portals': {
      de: 'Menschen sind Portale',
      hi: 'लोग नए संसार के द्वार हैं',
      fr: 'Les gens sont des portails',
      es: 'Las personas son portales',
      zh: '每个人都是通往新世界的传送门',
      ja: '人は新しい世界へのポータルである',
      ko: '사람은 새로운 세계로 향하는 포털이다',
      it: 'Le persone sono portali',
      pt: 'Pessoas são portais',
      nl: 'Mensen zijn portalen',
      ar: 'الناس بوابات لعوالم جديدة'
    },
    'what should a machine see in human behaviour': {
      de: 'Was sollte eine Maschine im menschlichen Verhalten sehen?',
      hi: 'मशीन को मानवीय व्यवहार में क्या देखना चाहिए',
      fr: 'Que devrait voir une machine dans le comportement humain ?',
      es: 'Qué debería ver una máquina en el comportamiento humano',
      zh: '机器在人类行为中应当看到什么',
      ja: '機械は人間の行動の中に何を見るべきか',
      ko: '기계는 인간의 행동에서 무엇을 보아야 하는가',
      it: 'Cosa dovrebbe vedere una macchina nel comportamento umano',
      pt: 'O que uma máquina deve ver no comportamento humano',
      nl: 'Wat zou een machine moeten zien in menselijk gedrag',
      ar: 'ماذا يجب أن ترى الآلة في السلوك البشري'
    },
    'Principles': {
      de: 'Prinzipien',
      hi: 'सिद्धांत',
      fr: 'Principes',
      es: 'Principios',
      zh: '原则',
      ja: 'プリンシプル（原則）',
      ko: '원칙들',
      it: 'Principi',
      pt: 'Princípios',
      nl: 'Principes',
      ar: 'المبادئ'
    },
    'Thoughts on ownership': {
      de: 'Gedanken über Eigenverantwortung',
      hi: 'ओनरशिप (स्वामित्व) पर विचार',
      fr: 'Réflexions sur la responsabilité',
      es: 'Reflexiones sobre la responsabilidad',
      zh: '关于主人翁精神的思考',
      ja: 'オーナーシップについての考察',
      ko: '오너십에 대한 생각',
      it: 'Riflessioni sulla responsabilità',
      pt: 'Reflexões sobre senso de dono',
      nl: 'Gedachten over eigenaarschap',
      ar: 'تأملات حول روح المسؤولية والملكية'
    },
    'Breadcrumbs': {
      de: 'Brotkrumen',
      hi: 'ब्रेडक्रम्ब्स (रास्ते के निशान)',
      fr: 'Traces et repères',
      es: 'Migas de pan',
      zh: '思想的足迹',
      ja: '思考の道しるべ',
      ko: '생각의 흔적들',
      it: 'Briciole di pane',
      pt: 'Migalhas de pão',
      nl: 'Broodkruimels',
      ar: 'آثار على الطريق'
    },
    'the power of knowing what you like': {
      de: 'Die Kraft zu wissen, was man mag',
      hi: 'यह जानने की शक्ति कि आपको क्या पसंद है',
      fr: "Le pouvoir de savoir ce que l'on aime",
      es: 'El poder de saber lo que te gusta',
      zh: '明确自己所爱之事的力量',
      ja: '自分が好きなものを知ることの力',
      ko: '자신이 좋아하는 것을 아는 힘',
      it: 'Il potere di sapere ciò che ti piace',
      pt: 'O poder de saber o que você gosta',
      nl: 'De kracht van weten wat je leuk vindt',
      ar: 'قوة أن تعرف ما تحب'
    },
    'Becoming yourself is a social project': {
      de: 'Man selbst zu werden ist ein soziales Projekt',
      hi: 'स्वयं बनना एक सामाजिक प्रक्रिया है',
      fr: 'Devenir soi-même est un projet social',
      es: 'Convertirse en uno mismo es un proyecto social',
      zh: '成为自己是一项社会性工程',
      ja: '自分自身になることは社会的なプロジェクトである',
      ko: '나다워지는 것은 사회적 프로젝트다',
      it: 'Diventare se stessi è un progetto sociale',
      pt: 'Tornar-se você mesmo é um projeto social',
      nl: 'Jezelf worden is een sociaal project',
      ar: 'أن تصبح نفسك هو مشروع اجتماعي'
    },
    'The power of side projects': {
      de: 'Die Kraft von Nebenprojekten',
      hi: 'साइड प्रोजेक्ट्स की ताकत',
      fr: 'Le pouvoir des projets personnels',
      es: 'El poder de los proyectos paralelos',
      zh: '副业与个人项目的力量',
      ja: 'サイドプロジェクトの力',
      ko: '사이드 프로젝트의 힘',
      it: 'Il potere dei progetti personali',
      pt: 'O poder dos projetos paralelos',
      nl: 'De kracht van zijprojecten',
      ar: 'قوة المشاريع الجانبية'
    },
    'how to enter side doors': {
      de: 'Wie man durch Seitentüren geht',
      hi: 'साइड डोर्स से प्रवेश कैसे करें',
      fr: 'Comment emprunter les portes dérobées',
      es: 'Cómo entrar por puertas laterales',
      zh: '如何推开人生的侧门',
      ja: '裏口から入る方法',
      ko: '옆문으로 들어가는 법',
      it: 'Come entrare dalle porte laterali',
      pt: 'Como entrar pelas portas laterais',
      nl: 'Hoe je via zijdeuren binnenkomt',
      ar: 'كيف تدخل من الأبواب الجانبية'
    },
    "Brian's wiritng section": {
      de: 'Brians Texte & Essays',
      hi: 'ब्रायन का लेखन अनुभाग',
      fr: 'Les écrits de Brian',
      es: 'La sección de escritos de Brian',
      zh: 'Brian 的写作专栏',
      ja: 'Brian のエッセイ欄',
      ko: '브라이언의 글 모음',
      it: 'La sezione di scrittura di Brian',
      pt: 'A seção de textos do Brian',
      nl: 'Brians schrijfsectie',
      ar: 'قسم كتابات براين'
    }
  };

  const PHOTO_CAPTION_TRANSLATIONS = {
    'Beyond Time': {
      de: 'Jenseits der Zeit', hi: 'समय से परे', fr: 'Au-delà du temps', es: 'Más allá del tiempo',
      zh: '超越时间', ja: '時を超えて', ko: '시간을 넘어', it: 'Oltre il tempo', pt: 'Além do tempo', nl: 'Voorbij de tijd', ar: 'ما وراء الزمن'
    },
    'Aged Well': {
      de: 'Gut gereift', hi: 'वक्त के साथ निखरा हुआ', fr: 'Bien vieilli', es: 'Bien envejecido',
      zh: '岁月沉淀', ja: ' 멋지게歳を重ねて', ko: '세월의 멋', it: 'Invecchiato bene', pt: 'Envelheceu bem', nl: 'Mooi verouderd', ar: 'تعتّق بجمال'
    },
    'Jai Hanuman': {
      de: 'Jai Hanuman', hi: 'जय हनुमान', fr: 'Jai Hanuman', es: 'Jai Hanuman',
      zh: '哈努曼神像', ja: 'ジャイ・ハヌマーン', ko: '자이 하누만', it: 'Jai Hanuman', pt: 'Jai Hanuman', nl: 'Jai Hanuman', ar: 'جاي هانومان'
    },
    'Aged Innocence': {
      de: 'Gealterte Unschuld', hi: 'उम्रदराज़ मासूमियत', fr: 'Innocence âgée', es: 'Inocencia envejecida',
      zh: '苍老的纯真', ja: '歳月を経た無垢', ko: '세월 속의 순수함', it: 'Innocenza antica', pt: 'Inocência envelhecida', nl: 'Verouderde onschuld', ar: 'براءة المسنين'
    },
    'Bargain': {
      de: 'Feilschen', hi: 'मोल-भाव', fr: 'Marchandage', es: 'Regateo',
      zh: '讨价还价', ja: '値切り交渉', ko: '흥정', it: 'Contrattazione', pt: 'Pechincha', nl: 'Afdingen', ar: 'مساومة'
    },
    'The hard Work': {
      de: 'Harte Arbeit', hi: 'कड़ी मेहनत', fr: 'Le dur labeur', es: 'El trabajo duro',
      zh: '辛勤劳作', ja: '懸命な労働', ko: '고된 노동', it: 'Il duro lavoro', pt: 'O trabalho duro', nl: 'Het harde werk', ar: 'العمل الشاق'
    },
    'The Hard Work': {
      de: 'Harte Arbeit', hi: 'कड़ी मेहनत', fr: 'Le dur labeur', es: 'El trabajo duro',
      zh: '辛勤劳作', ja: '懸命な労働', ko: '고된 노동', it: 'Il duro lavoro', pt: 'O trabalho duro', nl: 'Het harde werk', ar: 'العمل الشاق'
    },
    'Flower Market, Pune': {
      de: 'Blumenmarkt, Pune', hi: 'फूल बाज़ार, पुणे', fr: 'Marché aux fleurs, Pune', es: 'Mercado de flores, Pune',
      zh: '浦那鲜花市场', ja: 'プネーの花市場', ko: '푸네 꽃 시장', it: 'Mercato dei fiori, Pune', pt: 'Mercado de Flores, Pune', nl: 'Bloemenmarkt, Pune', ar: 'سوق الزهور، بونه'
    },
    'The Flower Market, Pune': {
      de: 'Der Blumenmarkt, Pune', hi: 'फूल बाज़ार, पुणे', fr: 'Le marché aux fleurs, Pune', es: 'El mercado de flores, Pune',
      zh: '浦那鲜花市场', ja: 'プネーの花市場', ko: '푸네 꽃 시장', it: 'Il mercato dei fiori, Pune', pt: 'O Mercado de Flores, Pune', nl: 'De bloemenmarkt, Pune', ar: 'سوق الزهور، بونه'
    },
    'Copper Smiths': {
      de: 'Kupferschmiede', hi: 'तांबे के कारीगर', fr: 'Chaudronniers sur cuivre', es: 'Artesanos del cobre',
      zh: '铜匠艺人', ja: '銅細工職人', ko: '구리 세공 장인', it: 'Artigiani del rame', pt: 'Artesãos de cobre', nl: 'Kopersmeden', ar: 'حرفيو النحاس'
    },
    'Dilip Kaka - Copper Smith': {
      de: 'Dilip Kaka – Kupferschmied', hi: 'दिलीप काका - तांबे के कारीगर', fr: 'Dilip Kaka — Chaudronnier', es: 'Dilip Kaka - Artesano del cobre',
      zh: 'Dilip 叔叔 — 老铜匠', ja: 'ディリップ・カカ ― 銅細工職人', ko: '딜립 카카 - 구리 세공 장인', it: 'Dilip Kaka - Artigiano del rame', pt: 'Dilip Kaka - Artesão de cobre', nl: 'Dilip Kaka - Kopersmid', ar: 'ديليب كاكا - حرفي نحاس'
    },
    'Symmetry': {
      de: 'Symmetrie', hi: 'सममिति (सिमेट्री)', fr: 'Symétrie', es: 'Simetría',
      zh: '对称之美', ja: 'シンメトリー（対称）', ko: '대칭', it: 'Simmetria', pt: 'Simetria', nl: 'Symmetrie', ar: 'تناظر'
    },
    'The Hawa Mahal': {
      de: 'Der Hawa Mahal', hi: 'हवा महल', fr: 'Le Hawa Mahal', es: 'El Hawa Mahal',
      zh: '风之宫殿', ja: 'ハワー・マハル（風の宮殿）', ko: '하와 마할', it: 'L’Hawa Mahal', pt: 'O Hawa Mahal', nl: 'De Hawa Mahal', ar: 'هاوا محل'
    },
    'Hawa Mahal, Jaipur': {
      de: 'Hawa Mahal, Jaipur', hi: 'हवा महल, जयपुर', fr: 'Hawa Mahal, Jaipur', es: 'Hawa Mahal, Jaipur',
      zh: '斋浦尔风之宫殿', ja: 'ジャイプールのハワー・マハル', ko: '자이푸르 하와 마할', it: 'Hawa Mahal, Jaipur', pt: 'Hawa Mahal, Jaipur', nl: 'Hawa Mahal, Jaipur', ar: 'هاوا محل، جايبور'
    },
    'Streets of Jaipur, India': {
      de: 'Straßen von Jaipur, Indien', hi: 'जयपुर की गलियाँ, भारत', fr: 'Rues de Jaipur, Inde', es: 'Calles de Jaipur, India',
      zh: '印度斋浦尔街头', ja: 'インド・ジャイプールの街角', ko: '인도 자이푸르의 거리', it: 'Strade di Jaipur, India', pt: 'Ruas de Jaipur, Índia', nl: 'Straten van Jaipur, India', ar: 'شوارع جايبور، الهند'
    },
    'Streets of Jaipur, Rajasthan': {
      de: 'Straßen von Jaipur, Rajasthan', hi: 'जयपुर की गलियाँ, राजस्थान', fr: 'Rues de Jaipur, Rajasthan', es: 'Calles de Jaipur, Rajastán',
      zh: '拉贾斯坦邦斋浦尔街头', ja: 'ラージャスターン州ジャイプールの街角', ko: '라자스탄 자이푸르의 거리', it: 'Strade di Jaipur, Rajasthan', pt: 'Ruas de Jaipur, Rajastão', nl: 'Straten van Jaipur, Rajasthan', ar: 'شوارع جايبور، راجستان'
    },
    'Jaipur, Rajasthan, India': {
      de: 'Jaipur, Rajasthan, Indien', hi: 'जयपुर, राजस्थान, भारत', fr: 'Jaipur, Rajasthan, Inde', es: 'Jaipur, Rajastán, India',
      zh: '印度拉贾斯坦邦斋浦尔', ja: 'インド・ラージャスターン州ジャイプール', ko: '인도 라자스탄 자이푸르', it: 'Jaipur, Rajasthan, India', pt: 'Jaipur, Rajastão, Índia', nl: 'Jaipur, Rajasthan, India', ar: 'جايبور، راجستان، الهند'
    },
    'The Royal Entrance': {
      de: 'Der königliche Eingang', hi: 'शाही प्रवेश द्वार', fr: "L'entrée royale", es: 'La entrada real',
      zh: '皇家门廊', ja: '王宮の入り口', ko: '왕실의 입구', it: "L'ingresso reale", pt: 'A entrada real', nl: 'De koninklijke ingang', ar: 'المدخل الملكي'
    },
    'Roadside Shop': {
      de: 'Straßenladen', hi: 'सड़क किनारे की दुकान', fr: 'Boutique au bord de la route', es: 'Tienda junto al camino',
      zh: '路边小店', ja: '道端の店', ko: '길가 상점', it: 'Negozio sul ciglio della strada', pt: 'Loja de beira de estrada', nl: 'Winkeltje langs de weg', ar: 'متجر على جانب الطريق'
    },
    'The Shopkeeper': {
      de: 'Der Ladenbesitzer', hi: 'दुकानदार', fr: 'Le commerçant', es: 'El tendero',
      zh: '店主', ja: '店主', ko: '상점 주인', it: 'Il negoziante', pt: 'O lojista', nl: 'De winkelier', ar: 'صاحب المتجر'
    },
    'Miniature Painting': {
      de: 'Miniaturmalerei', hi: 'लघु चित्रकला (मिनिएचर पेंटिंग)', fr: 'Peinture miniature', es: 'Pintura en miniatura',
      zh: '细密画艺术', ja: '細密画', ko: '세밀화', it: 'Pittura in miniatura', pt: 'Pintura em miniatura', nl: 'Miniatuurschildering', ar: 'رسم المنمنمات'
    },
    'The Jaigarh Fort, Jaipur': {
      de: 'Das Jaigarh-Fort, Jaipur', hi: 'जयगढ़ किला, जयपुर', fr: 'Le fort de Jaigarh, Jaipur', es: 'El fuerte Jaigarh, Jaipur',
      zh: '斋浦尔杰伊加尔堡', ja: 'ジャイプールのジャイガル城', ko: '자이푸르 자이가르 요새', it: 'Il forte di Jaigarh, Jaipur', pt: 'O Forte Jaigarh, Jaipur', nl: 'Het Jaigarh-fort, Jaipur', ar: 'حصن جايغار، جايبور'
    },
    'Abandoned': {
      de: 'Verlassen', hi: 'वीरान', fr: 'Abandonné', es: 'Abandonado',
      zh: '遗落之地', ja: '廃墟の静寂', ko: '버려진 공간', it: 'Abbandonato', pt: 'Abandonado', nl: 'Verlaten', ar: 'مهجور'
    },
    'Mandai': {
      de: 'Mandai-Markt', hi: 'मंडई बाज़ार', fr: 'Marché de Mandai', es: 'Mercado Mandai',
      zh: '曼代集市', ja: 'マンダイ市場', ko: '만다이 시장', it: 'Mercato di Mandai', pt: 'Mercado Mandai', nl: 'Mandai-markt', ar: 'سوق منداي'
    },
    'Sunflowers Missing The Sun': {
      de: 'Sonnenblumen, die die Sonne vermissen', hi: 'सूरज को तरसते सूरजमुखी', fr: 'Tournesols en manque de soleil', es: 'Girasoles extrañando el sol',
      zh: '思念阳光的向日葵', ja: '太陽を恋しがるひまわり', ko: '태양을 그리워하는 해바라기', it: 'Girasoli in cerca del sole', pt: 'Girassóis com saudade do sol', nl: 'Zonnebloemen die de zon missen', ar: 'عباد الشمس يشتاق للشمس'
    },
    'Busy': {
      de: 'Geschäftig', hi: 'व्यस्त', fr: 'Affairé', es: 'Ocupado',
      zh: '忙碌', ja: '賑わい', ko: '분주한 일상', it: 'Indaffarato', pt: 'Ocupado', nl: 'Druk bezig', ar: 'منهمك'
    },
    'Most Trusted Shoulders': {
      de: 'Die verlässlichsten Schultern', hi: 'सबसे भरोसेमंद कंधे', fr: 'Les épaules les plus sûres', es: 'Los hombros más confiables',
      zh: '最值得信赖的肩膀', ja: '一番頼れる肩', ko: '가장 든든한 어깨', it: 'Le spalle più fidate', pt: 'Os ombros mais confiáveis', nl: 'De meest vertrouwde schouders', ar: 'الأكتاف الأكثر أماناً'
    },
    'Soaking Sun': {
      de: 'Sonne tanken', hi: 'धूप सेकते हुए', fr: 'Bain de soleil', es: 'Tomando el sol',
      zh: '沐浴阳光', ja: '日向ぼっこ', ko: '햇살을 머금고', it: 'Bagnati dal sole', pt: 'Tomando sol', nl: 'Zonnestralen vangen', ar: 'تحت أشعة الشمس'
    },
    'Shadows on The Streets of Jaipur': {
      de: 'Schatten auf den Straßen von Jaipur', hi: 'जयपुर की गलियों में परछाइयाँ', fr: 'Ombres dans les rues de Jaipur', es: 'Sombras en las calles de Jaipur',
      zh: '斋浦尔街头的树影', ja: 'ジャイプールの街路の影', ko: '자이푸르 거리의 그림자', it: 'Ombre sulle strade di Jaipur', pt: 'Sombras nas ruas de Jaipur', nl: 'Schaduwen in de straten van Jaipur', ar: 'ظلال في شوارع جايبور'
    },
    'The Puppet Show': {
      de: 'Das Puppenspiel', hi: 'कठपुतली का खेल', fr: 'Le spectacle de marionnettes', es: 'El espectáculo de marionetas',
      zh: '木偶戏', ja: '人形劇', ko: '인형극', it: 'Lo spettacolo dei burattini', pt: 'O show de marionetes', nl: 'Het poppenspel', ar: 'عرض الدمى'
    },
    'The Lehenga Shop': {
      de: 'Das Lehenga-Geschäft', hi: 'लहंगे की दुकान', fr: 'La boutique de lehengas', es: 'La tienda de lehengas',
      zh: '传统礼服店', ja: 'レヘンガの衣装店', ko: '레헹가 의상실', it: 'Il negozio di lehenga', pt: 'A loja de lehengas', nl: 'De lehenga-winkel', ar: 'متجر الأزياء التقليدية'
    },
    'Old and Rusty Scooter': {
      de: 'Alter, rostiger Roller', hi: 'पुराना और जंग लगा स्कूटर', fr: 'Vieux scooter rouillé', es: 'Vieja moto oxidada',
      zh: '锈迹斑斑的老踏板车', ja: '古びて錆びたスクーター', ko: '오래되고 녹슨 스쿠터', it: 'Vecchio scooter arrugginito', pt: 'Lambreta velha e enferrujada', nl: 'Oude en roestige scooter', ar: 'دراجة قديمة صدئة'
    },
    'The Selfie': {
      de: 'Das Selfie', hi: 'सेल्फ़ी', fr: 'Le selfie', es: 'El selfie',
      zh: '自拍时刻', ja: 'セルフィー', ko: '셀피', it: 'Il selfie', pt: 'A selfie', nl: 'De selfie', ar: 'السيلفي'
    },
    'Can you smell this picture?': {
      de: 'Kannst du dieses Bild riechen?', hi: 'क्या आप इस तस्वीर की खुशबू महसूस कर सकते हैं?', fr: 'Pouvez-vous sentir cette photo ?', es: '¿Puedes oler esta foto?',
      zh: '你能闻到这张照片里的花香吗？', ja: 'この写真の香りが届きますか？', ko: '이 사진의 향기가 느껴지나요?', it: 'Riesci a sentire il profumo di questa foto?', pt: 'Você consegue sentir o aroma desta foto?', nl: 'Kun je deze foto ruiken?', ar: 'هل يمكنك شم عبير هذه الصورة؟'
    },
    'Still Together. Forever?!': {
      de: 'Immer noch zusammen. Für immer?!', hi: 'आज भी साथ। हमेशा के लिए?!', fr: 'Toujours ensemble. Pour toujours ?!', es: 'Aún juntos. ¡¿Para siempre?!',
      zh: '依然相伴，直到永远？！', ja: 'ずっと一緒。永遠に？！', ko: '여전히 함께. 영원히?!', it: 'Ancora insieme. Per sempre?!', pt: 'Ainda juntos. Para sempre?!', nl: 'Nog steeds samen. Voor altijd?!', ar: 'معاً حتى الآن. إلى الأبد؟!'
    },
    'The Glow of Childhood': {
      de: 'Das Leuchten der Kindheit', hi: 'बचपन की चमक', fr: "L'éclat de l'enfance", es: 'El brillo de la infancia',
      zh: '童年的光芒', ja: '幼き日の輝き', ko: '어린 시절의 반짝임', it: "Lo splendore dell'infanzia", pt: 'O brilho da infância', nl: 'De gloed van de kindertijd', ar: 'وهج الطفولة'
    },
    'Royalty': {
      de: 'Königlich', hi: 'राजसी ठाठ', fr: 'Royauté', es: 'Realeza',
      zh: '皇室气度', ja: '王者の風格', ko: '왕실의 품격', it: 'Regalità', pt: 'Realeza', nl: 'Koninklijk', ar: 'هيبة ملكية'
    },
    'The Vintage Camera': {
      de: 'Die Vintage-Kamera', hi: 'विंटेज कैमरा', fr: "L'appareil photo vintage", es: 'La cámara vintage',
      zh: '复古相机', ja: 'ヴィンテージカメラ', ko: '빈티지 카메라', it: 'La fotocamera vintage', pt: 'A câmera vintage', nl: 'De vintage camera', ar: 'الكاميرا الكلاسيكية'
    },
    'Looking Far Beyond': {
      de: 'Blick in die Ferne', hi: 'दूर क्षितिज की ओर देखते हुए', fr: 'Le regard tourné au loin', es: 'Mirando mucho más allá',
      zh: '远眺远方', ja: '遥か彼方を見つめて', ko: '먼 곳을 바라보며', it: 'Guardando lontano', pt: 'Olhando muito além', nl: 'Ver vooruit kijkend', ar: 'نظرة إلى البعيد'
    },
    'The Artist': {
      de: 'Der Künstler', hi: 'कलाकार', fr: "L'artiste", es: 'El artista',
      zh: '手艺人', ja: '職人・アーティスト', ko: '예술가', it: "L'artista", pt: 'O artista', nl: 'De kunstenaar', ar: 'الفنان'
    },
    'Childhood': {
      de: 'Kindheit', hi: 'बचपन', fr: 'Enfance', es: 'Infancia',
      zh: '童年', ja: '子ども時代', ko: '유년 시절', it: 'Infanzia', pt: 'Infância', nl: 'Kindertijd', ar: 'الطفولة'
    },
    'Retirement': {
      de: 'Ruhestand', hi: 'विश्राम के पल', fr: 'La retraite', es: 'Jubilación',
      zh: '悠闲晚年', ja: '穏やかな余生', ko: '은퇴 후의 여유', it: 'Pensionamento', pt: 'Aposentadoria', nl: 'Pensioen', ar: 'التقاعد'
    },
    'Marigold': {
      de: 'Ringelblumen', hi: 'गेंदे के फूल', fr: "Œillets d'Inde", es: 'Caléndulas',
      zh: '万寿菊', ja: 'マリーゴールド', ko: '메리골드', it: 'Calendule', pt: 'Cravos-de-defunto', nl: 'Afrikaantjes', ar: 'زهور القطيفة'
    },
    'Through The Broken Window': {
      de: 'Durch das zerbrochene Fenster', hi: 'टूटी खिड़की के पार', fr: 'À travers la fenêtre brisée', es: 'A través de la ventana rota',
      zh: '透过破损的窗', ja: '壊れた窓の向こうに', ko: '깨진 창문 너머로', it: 'Attraverso la finestra rotta', pt: 'Através da janela quebrada', nl: 'Door het gebroken raam', ar: 'عبر النافذة المكسورة'
    },
    'The Blue Sky': {
      de: 'Der blaue Himmel', hi: 'नीला आसमान', fr: 'Le ciel bleu', es: 'El cielo azul',
      zh: '蔚蓝天空', ja: '青い空', ko: '푸른 하늘', it: 'Il cielo azzurro', pt: 'O céu azul', nl: 'De blauwe lucht', ar: 'السماء الزرقاء'
    },
    'Darbaan': {
      de: 'Der Torwächter (Darbaan)', hi: 'दरबान', fr: 'Le gardien (Darbaan)', es: 'El guardián (Darbaan)',
      zh: '守门人', ja: '門番（ダルバーン）', ko: '문지기 (다르반)', it: 'Il guardiano (Darbaan)', pt: 'O guardião (Darbaan)', nl: 'De poortwachter (Darbaan)', ar: 'حارس البوابة'
    },
    'Muffin': {
      de: 'Muffin', hi: 'मफ़िन', fr: 'Muffin', es: 'Muffin',
      zh: '小狗 Muffin', ja: 'マフィン', ko: '머핀', it: 'Muffin', pt: 'Muffin', nl: 'Muffin', ar: 'مافن'
    }
  };

  let currentLanguage = localStorage.getItem('lang') || 'en';
  if (!TRANSLATIONS[currentLanguage]) currentLanguage = 'en';
  let blurTimer = null;
  let applyTimer = null;

  window.__getCurrentLang = () => currentLanguage;
  window.__getTranslatedText = (key) => {
    const dict = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
    return dict[key] || TRANSLATIONS.en[key] || '';
  };
  window.__translateFavoriteTitle = (title) => {
    if (currentLanguage === 'en') return title;
    return FAVORITE_TITLE_TRANSLATIONS[title]?.[currentLanguage] || title;
  };
  window.__translateFavoriteDesc = (desc) => {
    if (!desc || currentLanguage === 'en') return desc;
    return FAVORITE_DESC_TRANSLATIONS[desc]?.[currentLanguage] || desc;
  };
  window.__translatePhotoCaption = (caption) => {
    if (!caption || currentLanguage === 'en') return caption;
    return PHOTO_CAPTION_TRANSLATIONS[caption]?.[currentLanguage] || caption;
  };

  function glyphIndexesForText(text) {
    const characters = [...text];
    const candidates = characters
      .map((character, index) => ({ character, index }))
      .filter(({ character }) => character.trim() && !/[.,:;!?()[\]{}'"’]/.test(character));
    if (!candidates.length) return new Set();

    const count = Math.min(8, Math.max(2, Math.ceil(candidates.length / 18)));
    const step = Math.max(1, Math.floor(candidates.length / count));
    const indexes = new Set();

    for (let i = 0; i < candidates.length && indexes.size < count; i += step) {
      const offset = (i * 3 + text.length) % candidates.length;
      indexes.add(candidates[offset].index);
    }
    return indexes;
  }

  function updateTranslatedText(element, text, animateGlyphs) {
    if (!element || element.textContent === text) return;

    if (animateGlyphs && !prefersReducedMotion.matches) {
      const characters = [...text];
      const glyphIndexes = glyphIndexesForText(text);
      const fragment = document.createDocumentFragment();

      characters.forEach((character, index) => {
        if (!glyphIndexes.has(index)) {
          fragment.appendChild(document.createTextNode(character));
          return;
        }
        const span = document.createElement('span');
        span.className = 'language-glyph';
        span.style.setProperty('--glyph-delay', `${Math.min(90, index * 2)}ms`);
        span.textContent = character;
        fragment.appendChild(span);
      });
      element.replaceChildren(fragment);
    } else {
      element.textContent = text;
    }
  }

  function applyLanguage(code, animateGlyphs = false) {
    const nextCode = TRANSLATIONS[code] ? code : 'en';
    const copy = TRANSLATIONS[nextCode];
    currentLanguage = nextCode;
    localStorage.setItem('lang', nextCode);
    document.documentElement.lang = nextCode;
    document.documentElement.dir = nextCode === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (!copy[key]) return;
      updateTranslatedText(el, copy[key], animateGlyphs);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (!copy[key]) return;
      el.setAttribute('placeholder', copy[key]);
    });

    const isBuiltIn = BUILT_IN_CODES.has(nextCode);
    languageButtons.forEach((btn) => {
      const active = btn.dataset.lang === nextCode;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    languageMoreButton?.classList.toggle('is-active', !isBuiltIn);

    if (typeof window.__syncLampAria === 'function') window.__syncLampAria();
    if (typeof window.__renderFavorites === 'function') window.__renderFavorites();
    if (typeof window.__renderPhotography === 'function') window.__renderPhotography();
    if (typeof window.__refreshGitHubLabels === 'function') window.__refreshGitHubLabels();
  }

  function translatePage(code, force = false) {
    if (!TRANSLATIONS[code] || (!force && code === currentLanguage)) return;

    if (blurTimer) window.clearTimeout(blurTimer);
    if (applyTimer) window.clearTimeout(applyTimer);
    document.body.classList.remove('is-language-blurring', 'language-settled');

    const delay = prefersReducedMotion.matches ? 0 : 110;
    document.body.classList.add('is-language-blurring');

    applyTimer = window.setTimeout(() => {
      applyLanguage(code, true);
      applyTimer = null;
      requestAnimationFrame(() => {
        document.body.classList.remove('is-language-blurring');
        document.body.classList.add('language-settled');
        window.setTimeout(() => {
          document.body.classList.remove('language-settled');
        }, 260);
      });
    }, delay);

    blurTimer = window.setTimeout(() => {
      document.body.classList.remove('is-language-blurring');
      blurTimer = null;
    }, prefersReducedMotion.matches ? 0 : 260);
  }

  function renderLanguageOptions() {
    if (!languageList) return;
    const query = languageSearch?.value.trim().toLowerCase() || '';
    const matches = LANGUAGES.filter((lang) => {
      const haystack = `${lang.name} ${lang.native} ${lang.code}`.toLowerCase();
      return haystack.includes(query);
    });

    languageList.replaceChildren();
    if (!matches.length) {
      const empty = document.createElement('p');
      empty.className = 'language-choice-empty';
      empty.textContent =
        (TRANSLATIONS[currentLanguage] && TRANSLATIONS[currentLanguage].modalNoLanguages) ||
        'No languages found';
      languageList.appendChild(empty);
      return;
    }

    matches.forEach((lang) => {
      const isActive = currentLanguage === lang.code;
      const btn = document.createElement('button');
      btn.className = `language-choice${isActive ? ' is-active' : ''}`;
      btn.type = 'button';
      btn.dataset.languageChoice = lang.code;
      btn.dataset.sound = 'press';
      btn.setAttribute('role', 'option');
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
      btn.innerHTML = `
        <span>
          <span class="language-choice-name">${lang.name}</span>
          <span class="language-choice-native">${lang.native}</span>
        </span>
        <span class="language-choice-code">${isActive ? 'on' : lang.code}</span>
      `;
      btn.addEventListener('click', () => {
        closeLanguageModal();
        translatePage(lang.code);
      });
      languageList.appendChild(btn);
    });
  }

  function openLanguageModal() {
    renderLanguageOptions();
    languageModal.classList.add('is-open');
    languageModal.setAttribute('aria-hidden', 'false');
    languageMoreButton?.setAttribute('aria-expanded', 'true');
    window.setTimeout(() => languageSearch?.focus(), 60);
  }

  function closeLanguageModal() {
    if (!languageModal.classList.contains('is-open')) return;
    languageModal.classList.remove('is-open');
    languageModal.setAttribute('aria-hidden', 'true');
    languageMoreButton?.setAttribute('aria-expanded', 'false');
    if (languageSearch) languageSearch.value = '';
    renderLanguageOptions();
    languageMoreButton?.focus();
  }

  languageButtons.forEach((btn) => {
    btn.addEventListener('click', () => translatePage(btn.dataset.lang));
  });

  languageMoreButton?.addEventListener('click', openLanguageModal);
  languageCloseButton?.addEventListener('click', closeLanguageModal);
  languageSearch?.addEventListener('input', renderLanguageOptions);

  languageModal.addEventListener('click', (e) => {
    if (e.target === languageModal) closeLanguageModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && languageModal.classList.contains('is-open')) {
      closeLanguageModal();
    }
  });

  applyLanguage(currentLanguage, false);
}

/* ══════════════════════════════════════════════
   PHOTOGRAPHY GRID & LIGHTBOX (DesignerDada)
   ══════════════════════════════════════════════ */
const PHOTOS = [
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/c7f07674-583e-48a5-8d49-6a5b996fd800/thumbnail",
    "alt": "Beyond Time"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/ca1dbef2-ffa7-4b03-1eae-36adff606400/thumbnail",
    "alt": "Aged Well"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/83268f6f-194c-45b7-8f42-93cdeb862300/thumbnail",
    "alt": "Jai Hanuman"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/58922f3b-bcbf-419c-3917-04bbdaecdf00/thumbnail",
    "alt": "Aged Innocence"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/1fb6f443-dc3b-4bda-b30b-41b0fc1b7c00/thumbnail",
    "alt": "Bargain"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/71430f2d-9721-4005-c06b-656f8629b100/thumbnail",
    "alt": "The hard Work"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/a35db662-6d83-4f6b-2145-cfd1c8114700/thumbnail",
    "alt": "Flower Market, Pune"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/f276e5f0-e2ce-408f-9e06-e0f67c122600/thumbnail",
    "alt": "Copper Smiths"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/38061dc0-9226-4baf-1503-65cb77b05000/thumbnail",
    "alt": "Copper Smiths"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/87b8fdfd-8312-4933-d8bf-faa21cf01900/thumbnail",
    "alt": "Symmetry"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/0998588d-6afb-457d-deed-b2dbddfd3d00/thumbnail",
    "alt": "Copper Smiths"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/9fc9c443-ee93-4761-dd9e-c110bd37c300/thumbnail",
    "alt": "The Hawa Mahal"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/2d264087-93ff-4224-de91-83c442572800/thumbnail",
    "alt": "Streets of Jaipur, India"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/91448b74-d4a5-4e6e-9318-957d40ebf800/thumbnail",
    "alt": "The Royal Entrance"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/9672376c-9d7e-4763-b126-7c4994202400/thumbnail",
    "alt": "Roadside Shop"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/91733c59-a456-4813-3f1f-6c494ee2e600/thumbnail",
    "alt": "The Shopkeeper"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/3ce47a03-f35d-4fb5-e123-c0b9570a4100/thumbnail",
    "alt": "Streets of Jaipur, Rajasthan"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/d826d23b-303d-4e1c-4b11-5635eac6d900/thumbnail",
    "alt": "Miniature Painting"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/902eb0e4-1973-4311-cddb-2b10231d6600/thumbnail",
    "alt": "Streets of Jaipur, Rajasthan"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/663973cd-5dcf-4ef9-2ce2-388bb2d39600/thumbnail",
    "alt": "Streets of Jaipur, Rajasthan"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/f0ecd0fb-f03d-470f-e1a7-fcec9a9d6d00/thumbnail",
    "alt": "Streets of Jaipur, Rajasthan"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/13292607-befe-455b-06a2-aa87bdb6a100/thumbnail",
    "alt": "~721"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/32fc94e3-d33e-46f6-1dc6-2c67177e8500/thumbnail",
    "alt": "The Jaigarh Fort, Jaipur"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/42457422-49c0-426d-aaa8-73fae1336d00/thumbnail",
    "alt": "Hawa Mahal, Jaipur"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/5872939e-2b25-4e85-6ed0-7483143dae00/thumbnail",
    "alt": "Abandoned"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/16855ea9-0f3c-4601-43a1-079d9f3ef000/thumbnail",
    "alt": "Mandai"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/ff665503-aaca-4a10-432f-1af02aa22700/thumbnail",
    "alt": "Sunflowers Missing The Sun"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/9b88c86e-f00a-4043-251f-5b75a1c1f800/thumbnail",
    "alt": "The Flower Market, Pune"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/75c17d7d-2855-4f51-516b-4e0d74e1a800/thumbnail",
    "alt": "The Flower Market, Pune"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/e06cee2e-6452-4670-fd02-4fcf8d085c00/thumbnail",
    "alt": "Busy"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/61b07eeb-e6d3-44ff-1273-108e3f118200/thumbnail",
    "alt": "The Flower Market, Pune"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/406b3fdc-29b3-43b6-611d-f8f04bf25d00/thumbnail",
    "alt": "Copper Smiths"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/1c0da827-f178-4e24-23c6-06eac214e800/thumbnail",
    "alt": "Copper Smiths"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/a50311b6-a53a-414f-0cdf-1ec06706c800/thumbnail",
    "alt": "Most Trusted Shoulders"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/2b87306c-b264-4d68-f976-4ad38b6f4200/thumbnail",
    "alt": "Copper Smiths"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/227c49bf-29b6-4f26-b32b-7dcedbb0fc00/thumbnail",
    "alt": "Soaking Sun"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/5e8b00ae-4ea2-4a8c-352f-b5d4c82f2100/thumbnail",
    "alt": "Streets of Jaipur, India"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/76632a51-13d3-483a-1672-32782b82f100/thumbnail",
    "alt": "Shadows on The Streets of Jaipur"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/c2b985c0-80e9-4664-86d8-3aef61104b00/thumbnail",
    "alt": "The Puppet Show"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/629f5463-3c37-4465-c0f7-b302c1fa3e00/thumbnail",
    "alt": "The Lehenga Shop"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/a4c5518f-34bd-48a8-90b0-066425adbf00/thumbnail",
    "alt": "Old and Rusty Scooter"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/0d200cc6-9eba-4677-9e5b-73fa06576900/thumbnail",
    "alt": "The Selfie"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/7265a30f-1b65-43a5-c6e2-802e8f939b00/thumbnail",
    "alt": "Streets of Jaipur, Rajasthan"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/2e503381-5730-4888-e620-4d0f52bf6800/thumbnail",
    "alt": "Streets of Jaipur, Rajasthan"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/9c8501f9-c2f7-4254-3179-4c9391a1ca00/thumbnail",
    "alt": "The Puppet Show"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/57423c59-7f02-47b0-5e0d-6ea22910e000/thumbnail",
    "alt": "Jaipur, Rajasthan, India"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/5649dff2-307e-4da3-8b5d-b972f57adc00/thumbnail",
    "alt": "The Jaigarh Fort, Jaipur"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/151f1cbc-7802-4203-baf1-113099e28800/thumbnail",
    "alt": "Hawa Mahal, Jaipur"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/8691dce3-4fc2-422b-4fd0-2c8e9e34a900/thumbnail",
    "alt": "Soaking Sun"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/e0773650-e36f-4e10-0365-3a20641ec500/thumbnail",
    "alt": "Can you smell this picture?"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/1c040465-85fe-4331-cc5e-287bd9912400/thumbnail",
    "alt": "The Flower Market, Pune"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/93739bc2-97e4-4f0a-ebe7-5ad59ae3c700/thumbnail",
    "alt": "The Flower Market, Pune"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/763ae818-46f0-4af6-87f7-ad268192cc00/thumbnail",
    "alt": "The Flower Market, Pune"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/c954d53c-2cc1-41ae-f85c-ad1dadc8c200/thumbnail",
    "alt": "The hard Work"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/3d17619e-e51c-4205-7d24-245509da2900/thumbnail",
    "alt": "Copper Smiths"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/3c3a95dd-0524-4556-db17-190007122500/thumbnail",
    "alt": "Dilip Kaka - Copper Smith"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/897b184b-2b64-43e1-b127-8b182253ac00/thumbnail",
    "alt": "Copper Smiths"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/1151f06a-60c5-4c3e-e10c-6f8c295a3900/thumbnail",
    "alt": "~349"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/236284ca-3486-4a0a-64f1-4e896b792200/thumbnail",
    "alt": "Still Together. Forever?!"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/1b1b84aa-2e5f-4d34-0b1a-e6b1c1f3a400/thumbnail",
    "alt": "Streets of Jaipur, India"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/b1ad0a64-f6bb-410e-8447-0e2604e65600/thumbnail",
    "alt": "The Glow of Childhood"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/f78f4dcd-c209-4810-f1c8-33f3350e3700/thumbnail",
    "alt": "Shadows on The Streets of Jaipur"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/ae592153-3672-475c-1a78-56697c262200/thumbnail",
    "alt": "Royalty"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/75db9818-6709-450f-5de3-c558bbe4cc00/thumbnail",
    "alt": "The Lehenga Shop"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/4176e90e-bdf7-4e3d-29ff-03cfbb7aee00/thumbnail",
    "alt": "Streets of Jaipur, Rajasthan"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/935ef8a3-7ff1-4aa1-8ba0-db964bf66b00/thumbnail",
    "alt": "The Vintage Camera"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/913b89ef-67f4-4bb1-b13d-c25834d2ad00/thumbnail",
    "alt": "Streets of Jaipur, Rajasthan"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/d4429232-2172-4bb0-53ca-ce5af6960000/thumbnail",
    "alt": "Streets of Jaipur, Rajasthan"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/3136ea5e-482f-4210-48b4-cf17f53a0200/thumbnail",
    "alt": "Looking Far Beyond"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/94c2fb77-30d7-48ee-5d9a-76d73485b500/thumbnail",
    "alt": "The Jaigarh Fort, Jaipur"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/54d67305-4f2a-41a4-0be1-50c5046cd100/thumbnail",
    "alt": "The Jaigarh Fort, Jaipur"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/91a7f97c-0ee8-4a01-ca5d-14ac3238f000/thumbnail",
    "alt": "The Artist"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/eaaf8307-1ab1-4124-984b-0930d207af00/thumbnail",
    "alt": "The Hawa Mahal"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/da8d302a-6129-4743-43f9-7db32e5e9100/thumbnail",
    "alt": "Childhood"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/b849e547-4605-4e13-f14f-fd3e5f1f3e00/thumbnail",
    "alt": "Retirement"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/e7e751d2-20b2-4b49-dcf6-f4249e970200/thumbnail",
    "alt": "The Flower Market, Pune"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/afc9adc2-28a3-44a2-ab77-b3a50f344900/thumbnail",
    "alt": "Marigold"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/7319621f-b8ea-42bb-e956-bbb034edf100/thumbnail",
    "alt": "The Flower Market, Pune"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/0d09decb-dec7-43a7-c97f-54f15faa9900/thumbnail",
    "alt": "The Hard Work"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/f4fbb5bf-1877-47d9-88fb-b58d04c41a00/thumbnail",
    "alt": "Copper Smiths"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/0a0c4ec9-a100-4799-7d69-98ac0a165200/thumbnail",
    "alt": "Copper Smiths"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/1a3f3e5d-14e3-43e6-3834-350c35823c00/thumbnail",
    "alt": "Abandoned"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/2fac65fc-6bcc-4875-3780-f5a1b355f800/thumbnail",
    "alt": "Copper Smiths"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/a3b78aa0-107a-45c6-c764-551813844a00/thumbnail",
    "alt": "Copper Smiths"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/f4ac10e9-71c9-477b-03da-38cd3af40b00/thumbnail",
    "alt": "Streets of Jaipur, India"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/a114aa43-11fa-487c-1dd7-1fbd5bab2700/thumbnail",
    "alt": "Symmetry"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/f639bfc1-c89e-4e38-9ee6-abef63a96100/thumbnail",
    "alt": "Shadows on The Streets of Jaipur"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/c199cc9d-4bff-4e63-3d71-649ec1d82300/thumbnail",
    "alt": "The Shopkeeper"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/6b9521ec-ae61-4590-413f-760bd0067e00/thumbnail",
    "alt": "The Lehenga Shop"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/2cee10e2-4d6d-4284-7502-43e0ba8e3400/thumbnail",
    "alt": "Streets of Jaipur, Rajasthan"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/87d8e349-a215-4612-451e-be899f659a00/thumbnail",
    "alt": "Streets of Jaipur, Rajasthan"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/58d405cf-6ad3-4eec-5af2-43191158ae00/thumbnail",
    "alt": "Streets of Jaipur, Rajasthan"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/29db518f-35a0-4d7a-f02c-cce42cd64000/thumbnail",
    "alt": "Streets of Jaipur, Rajasthan"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/f75be39a-d428-44c0-afa1-0598bb647000/thumbnail",
    "alt": "Through The Broken Window"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/5c1f6e96-89e5-4974-fe2d-8c37311aae00/thumbnail",
    "alt": "The Jaigarh Fort, Jaipur"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/d7fdf3c9-760d-4a2d-3141-277307faa600/thumbnail",
    "alt": "The Blue Sky"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/a9b35d95-b9fb-4ffd-a1b2-249a424c8b00/thumbnail",
    "alt": "Darbaan"
  },
  {
    "src": "https://imagedelivery.net/SwqrinvM3qHSiSLb7f3jXg/2977b2e7-cad7-47f2-0357-e64c697a1b00/thumbnail",
    "alt": "Muffin"
  }
];

function initPhotography() {
  const grid = document.getElementById("photoGrid");
  const lightbox = document.getElementById("photoLightbox");
  const lbImg = document.getElementById("photoLightboxImg");
  const lbCaption = document.getElementById("photoLightboxCaption");
  const lbClose = document.getElementById("photoLightboxClose");
  const lbPrev = document.getElementById("photoLightboxPrev");
  const lbNext = document.getElementById("photoLightboxNext");
  if (!grid) return;

  let activeIdx = 0;

  function getCaption(rawAlt) {
    return typeof window.__translatePhotoCaption === "function"
      ? window.__translatePhotoCaption(rawAlt)
      : rawAlt;
  }

  function renderGrid() {
    grid.innerHTML = PHOTOS.map((p, idx) => {
      const cap = getCaption(p.alt);
      const safeCap = cap.replace(/"/g, "&quot;");
      return `
    <button type="button" class="photo-card" data-photo-idx="${idx}" aria-label="${safeCap}">
      <img src="${p.src}" alt="${safeCap}" loading="lazy" decoding="async">
      <div class="photo-caption"><span>${cap}</span></div>
    </button>
  `;
    }).join("");
    if (lightbox?.classList.contains("is-open")) {
      showPhoto(activeIdx);
    }
  }

  window.__renderPhotography = renderGrid;
  renderGrid();

  function showPhoto(idx) {
    activeIdx = (idx + PHOTOS.length) % PHOTOS.length;
    const item = PHOTOS[activeIdx];
    const cap = getCaption(item.alt);
    lbImg.src = item.src;
    lbImg.alt = cap;
    lbCaption.textContent = cap;
  }

  function openLightbox(idx) {
    showPhoto(idx);
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
  }

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".photo-card");
    if (!card) return;
    openLightbox(Number(card.dataset.photoIdx));
  });

  lbClose?.addEventListener("click", closeLightbox);
  lbPrev?.addEventListener("click", () => showPhoto(activeIdx - 1));
  lbNext?.addEventListener("click", () => showPhoto(activeIdx + 1));

  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox?.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") showPhoto(activeIdx - 1);
    else if (e.key === "ArrowRight") showPhoto(activeIdx + 1);
  });
}

/* ══════════════════════════════════════════════
   CLICK SPARK EFFECT (ch.sh)
   ══════════════════════════════════════════════ */
function initClickSpark() {
  const canvas = document.getElementById('clickSparkCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const SPARK_OPACITY = 0.35;
  const SPARK_SIZE = 6;
  const SPARK_RADIUS = 12;
  const SPARK_COUNT = 6;
  const DURATION = 300;
  let sparks = [];
  let rafId = null;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  resize();
  window.addEventListener('resize', resize);

  function easeOut(t) {
    return t * (2 - t);
  }

  function draw(now) {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    const color = getComputedStyle(document.documentElement).getPropertyValue('--primary-text').trim() || '#171717';

    sparks = sparks.filter((spark) => {
      const elapsed = now - spark.startTime;
      if (elapsed >= DURATION) return false;

      const progress = elapsed / DURATION;
      const eased = easeOut(progress);
      const distance = eased * SPARK_RADIUS;
      const lineLength = SPARK_SIZE * (1 - eased);

      const x1 = spark.x + distance * Math.cos(spark.angle);
      const y1 = spark.y + distance * Math.sin(spark.angle);
      const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
      const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

      ctx.save();
      ctx.globalAlpha = SPARK_OPACITY * (1 - eased);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.restore();
      return true;
    });

    if (sparks.length > 0) {
      rafId = requestAnimationFrame(draw);
    } else {
      rafId = null;
    }
  }

  document.addEventListener('click', (e) => {
    const now = performance.now();
    for (let i = 0; i < SPARK_COUNT; i++) {
      sparks.push({
        x: e.clientX,
        y: e.clientY,
        angle: (2 * Math.PI * i) / SPARK_COUNT,
        startTime: now
      });
    }
    if (!rafId) {
      rafId = requestAnimationFrame(draw);
    }
  });
}

/* ══════════════════════════════════════════════
   GITHUB CONTRIBUTIONS BAR (ch.sh)
   ══════════════════════════════════════════════ */
async function initGitHubBar() {
  const container = document.getElementById('githubBars');
  const totalEl = document.getElementById('githubTotal');
  if (!container) return;

  const DAYS = 30;
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let cachedDays = null;
  let cachedYearTotal = null;

  function formatDate(iso) {
    const [, m, d] = iso.split('-').map(Number);
    try {
      const lang = typeof window.__getCurrentLang === 'function' ? window.__getCurrentLang() : 'en';
      const dt = new Date(Date.UTC(2026, (m || 1) - 1, d || 1));
      return new Intl.DateTimeFormat(lang, { month: 'short', day: 'numeric', timeZone: 'UTC' }).format(dt);
    } catch {
      return `${MONTHS[(m || 1) - 1]} ${d}`;
    }
  }

  function formatContributionCount(count) {
    if (typeof window.__getTranslatedText === 'function') {
      if (count === 0) return window.__getTranslatedText('githubNoContributions');
      if (count === 1) return window.__getTranslatedText('githubContributionOne');
      return window.__getTranslatedText('githubContributionMany').replace('{count}', String(count));
    }
    return count === 0 ? 'No contributions' : `${count} contribution${count === 1 ? '' : 's'}`;
  }

  function renderBars(days, yearTotal) {
    cachedDays = days;
    cachedYearTotal = yearTotal;
    const recent = days.slice(-DAYS);
    if (totalEl) {
      if (typeof yearTotal === 'number') {
        const tpl =
          typeof window.__getTranslatedText === 'function'
            ? window.__getTranslatedText('githubContributionsYear')
            : '{count} contributions in the last year';
        totalEl.textContent = tpl.replace('{count}', String(yearTotal));
      } else {
        totalEl.textContent =
          typeof window.__getTranslatedText === 'function'
            ? window.__getTranslatedText('githubActivity30d')
            : '30d activity';
      }
    }
    container.innerHTML = recent
      .map((day, idx) => {
        const label = formatDate(day.date);
        const countText = formatContributionCount(day.count);
        return `
          <div class="github-bar-slot" data-bar-idx="${idx}">
            <div class="github-bar-fill" data-level="${day.level}"></div>
            <div class="github-bar-tooltip">
              <div>${label}</div>
              <div class="github-bar-tooltip-count">${countText}</div>
            </div>
          </div>
        `;
      })
      .join('');

    const slots = [...container.querySelectorAll('.github-bar-slot')];
    function setHover(activeIdx) {
      slots.forEach((slot, idx) => {
        slot.classList.toggle('is-hovered', idx === activeIdx);
        slot.classList.toggle('is-adjacent', activeIdx !== null && (idx === activeIdx - 1 || idx === activeIdx + 1));
      });
    }
    slots.forEach((slot, idx) => {
      slot.addEventListener('mouseenter', () => setHover(idx));
    });
    container.addEventListener('mouseleave', () => setHover(null));
  }

  window.__refreshGitHubLabels = () => {
    if (cachedDays) {
      renderBars(cachedDays, cachedYearTotal);
    }
  };

  try {
    const res = await fetch('https://github-contributions-api.jogruber.de/v4/isabhiii?y=last');
    if (!res.ok) throw new Error('GitHub API error');
    const data = await res.json();
    if (Array.isArray(data.contributions) && data.contributions.length) {
      renderBars(data.contributions, data.total?.lastYear);
      return;
    }
  } catch {
    // Fallback if offline
  }

  const today = new Date();
  const fallback = Array.from({ length: DAYS }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (DAYS - 1 - i));
    return { date: d.toISOString().slice(0, 10), count: 0, level: 0 };
  });
  renderBars(fallback, null);
}

/* ══════════════════════════════════════════════
   WIXON FOOTER REVEAL & BACK-TO-TOP
   ══════════════════════════════════════════════ */
function initWixonFooter() {
  const footer = document.querySelector('.wixon-footer');
  const wordmarkLink = document.querySelector('.wixon-footer-wordmark-link');
  const lettersWrap = document.querySelector('.wixon-footer-wordmark-letters');
  if (!footer) return;

  if (lettersWrap) {
    const text = lettersWrap.dataset.wordmark || 'ABHISHEK KANANI';
    lettersWrap.replaceChildren(
      ...[...text].map((ch, i) => {
        const span = document.createElement('span');
        span.className = ch === ' ' ? 'wixon-letter wixon-letter-space' : 'wixon-letter';
        span.style.setProperty('--letter-delay', `${i * 28}ms`);
        span.textContent = ch === ' ' ? '\u00A0' : ch;
        return span;
      })
    );
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            footer.classList.add('is-visible');
          } else {
            footer.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(footer);
  } else {
    footer.classList.add('is-visible');
  }

  wordmarkLink?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
