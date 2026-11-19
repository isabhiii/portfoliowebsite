/* ══════════════════════════════════════════════
   DATA: ALL 34 FAVORITES FROM DESIGNERDADA.COM
   ══════════════════════════════════════════════ */
const FAVORITES = [
  { title: 'Anthropic', desc: 'AI company I trust', domain: 'anthropic.com', faviconDomain: 'www.anthropic.com', href: 'https://www.anthropic.com/', category: 'Apps', preview: 'https://cdn.sanity.io/images/599r6htc/regionalized/b08d37520f7d5ad8d6562975b5932dd2d9a862bb-1200x630.gif?w=1200&q=70&fit=max&auto=format' },
  { title: 'Raycast', desc: 'My Shortcut to Everything', domain: 'raycast.com', faviconDomain: 'www.raycast.com', href: 'https://www.raycast.com/', category: 'Apps', preview: 'https://www.raycast.com/opengraph-image-pwu6ef.png?opengraph-image.1f-98etzkaz5s.png' },
  { title: 'What Human Memory Teaches Us About Building AI Memory', desc: '', domain: 'moderndata101.substack.com', faviconDomain: 'moderndata101.substack.com', href: 'https://moderndata101.substack.com/p/memory-blueprint-for-ai', category: 'Blogs', preview: 'https://substackcdn.com/image/fetch/$s_!mqCF!,w_1200,h_675,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6ee6d47e-83a8-41c9-8d3f-2d0623855c68_1565x891.png' },
  { title: 'Python', desc: 'favourite coding language', domain: 'python.org', faviconDomain: 'www.python.org', href: 'https://www.python.org/', category: 'Apps', preview: 'https://www.python.org/static/opengraph-icon-200x200.png' },
  { title: 'Dhurandhar', desc: 'Based on Incredible true event', domain: 'netflix.com', faviconDomain: 'www.netflix.com', href: 'https://www.netflix.com/de-en/title/82156122', category: 'Movies', preview: 'https://occ-0-8336-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQSpyGF5vVvn0CHkaK29kxqUmAZb2nEIYs1uezqtwSnNp7qg7ykmnN0_tt6cr6GY0oXMwEvTJsiTmv3s0Eu5Zom9I-PJI_o8nXvE.jpg?r=db9' },
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
  initTheme();
  initTabs();
  initEmailCopy();
  initFavorites();
  initPhotography();
  initClickSound();
  initClickSpark();
  initGitHubBar();
  initWixonFooter();
  initLanguageSwitcher();
});

/* ── Theme (KokonutUI SwitchButton: Circular View Transition + WAAPI Icon Morph) ── */
function initTheme() {
  const toggleBtn = document.getElementById('themeToggle');
  const iconEl = document.getElementById('themeIcon');
  const labelsEl = document.getElementById('themeLabels');
  const root = document.documentElement;

  const EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)';
  const EASE_IN_OUT = 'cubic-bezier(0.65, 0, 0.35, 1)';
  const EASE_REVEAL = 'cubic-bezier(0.4, 0, 0.2, 1)';
  const ANIMATED_PROPS = ['opacity', 'scale', 'translate', 'filter'];

  let revealRunning = false;

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const syncAria = () => {
    const isDark = root.classList.contains('dark');
    toggleBtn.setAttribute('aria-pressed', String(isDark));
    root.style.colorScheme = isDark ? 'dark' : 'light';
  };

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

  function revealFrom(button, apply) {
    if (
      typeof document.startViewTransition !== 'function' ||
      prefersReducedMotion() ||
      revealRunning ||
      document.activeViewTransition
    ) {
      apply();
      return;
    }

    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
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
            duration: 500,
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

  toggleBtn.addEventListener('click', () => {
    const nextDark = !root.classList.contains('dark');
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

    revealFrom(toggleBtn, apply);
  });
}

/* ── Section Tabs (Home / Favorites / Photography) ── */
function initTabs() {
  const navTabs = document.querySelectorAll('.nav-tab');
  const panels = document.querySelectorAll('.tab-panel');

  function activateTab(name) {
    navTabs.forEach((t) => {
      const active = t.dataset.tab === name;
      t.classList.toggle('active', active);
      t.setAttribute('aria-current', active ? 'page' : 'false');
    });
    panels.forEach((p) => {
      p.classList.toggle('active', p.id === `panel-${name}`);
    });
  }

  const hash = window.location.hash.replace('#', '');
  if (['home', 'favorites', 'photography'].includes(hash)) {
    activateTab(hash);
  }

  navTabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const target = tab.dataset.tab;
      activateTab(target);
      history.replaceState(null, '', target === 'home' ? '#' : `#${target}`);
    });
  });

  window.addEventListener('hashchange', () => {
    const h = window.location.hash.replace('#', '') || 'home';
    if (['home', 'favorites', 'photography'].includes(h)) {
      activateTab(h);
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
    const states = ['~ shipping...', '~ querying...', '~ building...', '~ caffeinated...'];
    let idx = 0;
    dotBtn.addEventListener('click', () => {
      idx = (idx + 1) % states.length;
      const signoffText = document.getElementById('signoffText');
      if (signoffText) signoffText.textContent = states[idx];
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
    let items = FAVORITES.map((item, idx) => ({ ...item, idx }));

    if (currentCat !== 'All') {
      items = items.filter((item) => item.category === currentCat);
    }

    if (currentSearch.trim()) {
      const q = currentSearch.toLowerCase();
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q) ||
          item.domain.toLowerCase().includes(q)
      );
    }

    if (currentSort === 'Oldest') {
      items.reverse();
    } else if (currentSort === 'A–Z') {
      items.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (items.length === 0) {
      listEl.innerHTML = `<div class="fav-empty">No matching favorites found.</div>`;
      previewEl.classList.remove('is-visible');
      return;
    }

    listEl.innerHTML = items
      .map(
        (item) => `
      <a href="${item.href}" target="_blank" rel="noopener noreferrer nofollow" data-title="${item.title.replace(/"/g, '&quot;')}" data-category="${item.category}" class="fav-row">
        <div class="fav-row-left">
          <div class="fav-icon-wrap">
            <img src="https://www.google.com/s2/favicons?domain=${item.faviconDomain}&sz=32" alt="${item.title} favicon" width="20" height="20" loading="lazy">
          </div>
          <div class="fav-text-wrap">
            <span class="fav-title">${item.title}</span>${item.desc ? `
            <span class="fav-sep">/</span>
            <span class="fav-desc">${item.desc}</span>` : ''}
          </div>
        </div>
        <span class="fav-domain">${item.domain}</span>
      </a>`
      )
      .join('');
  }

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
    sortLabel.textContent = currentSort;
    sortMenu.querySelectorAll('.fav-dropdown-item').forEach((b) => b.classList.toggle('selected', b === btn));
    sortMenu.classList.remove('open');
    render();
  });

  catMenu.addEventListener('click', (e) => {
    const btn = e.target.closest('.fav-dropdown-item');
    if (!btn) return;
    currentCat = btn.dataset.val;
    catLabel.textContent = currentCat;
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

  function playCue(type) {
    try {
      const context = getContext();
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
      sectionWork: 'Work',
      sectionProducts: 'Products',
      sectionProjects: 'Projects',
      followMe: 'Follow Me',
      favIntro: "I love discovering great things, whether it's a beautifully designed product, an inspiring person, or a website I keep coming back to. This is my collection of those gems I find on the internet and in the real world. Everything here has caught my attention and stuck with me for one reason or another."
    },
    de: {
      navHome: 'Start',
      navFavorites: 'Favoriten',
      navPhotography: 'Fotografie',
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
      sectionWork: 'Berufserfahrung',
      sectionProducts: 'Produkte',
      sectionProjects: 'Projekte',
      followMe: 'Folgen',
      favIntro: 'Ich liebe es, großartige Dinge zu entdecken — ob ein durchdachtes Produkt, eine inspirierende Person oder eine Website, zu der ich immer wieder zurückkehre. Hier sammle ich diese Fundstücke aus dem Netz und der echten Welt.'
    },
    hi: {
      navHome: 'होम',
      navFavorites: 'पसंदीदा',
      navPhotography: 'फ़ोटोग्राफ़ी',
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
      sectionWork: 'कार्य अनुभव',
      sectionProducts: 'प्रोडक्ट्स',
      sectionProjects: 'प्रोजेक्ट्स',
      followMe: 'फ़ॉलो करें',
      favIntro: 'मुझे बेहतरीन चीज़ें खोजना पसंद है — चाहे वह कोई सुंदर डिज़ाइन वाला प्रोडक्ट हो, कोई प्रेरणादायक व्यक्ति हो, या कोई वेबसाइट जिस पर मैं बार-बार लौटता हूँ। यह इंटरनेट और वास्तविक दुनिया से चुने गए उन्हीं रत्नों का मेरा संग्रह है।'
    },
    fr: {
      navHome: 'Accueil',
      navFavorites: 'Favoris',
      navPhotography: 'Photographie',
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
      sectionWork: 'Expérience',
      sectionProducts: 'Produits',
      sectionProjects: 'Projets',
      followMe: 'Suivre',
      favIntro: "J'aime découvrir de belles choses — un produit bien conçu, une personne inspirante ou un site auquel je reviens toujours. Voici ma collection de ces pépites trouvées en ligne et dans la vraie vie."
    },
    es: {
      navHome: 'Inicio',
      navFavorites: 'Favoritos',
      navPhotography: 'Fotografía',
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
      sectionWork: 'Experiencia',
      sectionProducts: 'Productos',
      sectionProjects: 'Proyectos',
      followMe: 'Seguir',
      favIntro: 'Me encanta descubrir grandes cosas, ya sea un producto bien diseñado, una persona inspiradora o una web a la que siempre vuelvo. Esta es mi colección de esas joyas que encuentro en internet y en el mundo real.'
    },
    zh: {
      navHome: '首页',
      navFavorites: '收藏',
      navPhotography: '摄影',
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
      sectionWork: '工作经历',
      sectionProducts: '产品',
      sectionProjects: '项目',
      followMe: '关注我',
      favIntro: '我喜欢发掘美好的事物——无论是设计精良的产品、富有启发的人，还是令人流连忘返的网站。这里收藏了我在网络与现实生活中发现的宝藏。'
    },
    ja: {
      navHome: 'ホーム',
      navFavorites: 'お気に入り',
      navPhotography: '写真',
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
      sectionWork: '職歴',
      sectionProducts: 'プロダクト',
      sectionProjects: 'プロジェクト',
      followMe: 'フォロー',
      favIntro: '美しくデザインされたプロダクト、刺激をくれる人、つい何度も訪れてしまうウェブサイトなど、素晴らしいものを見つけるのが好きです。'
    },
    ko: {
      navHome: '홈',
      navFavorites: '즐겨찾기',
      navPhotography: '사진',
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
      sectionWork: '경력',
      sectionProducts: '제품',
      sectionProjects: '프로젝트',
      followMe: '팔로우',
      favIntro: '잘 설계된 제품, 영감을 주는 사람, 계속 찾게 되는 웹사이트처럼 멋진 것들을 발견하는 것을 좋아합니다.'
    },
    it: {
      navHome: 'Home',
      navFavorites: 'Preferiti',
      navPhotography: 'Fotografia',
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
      sectionWork: 'Esperienza',
      sectionProducts: 'Prodotti',
      sectionProjects: 'Progetti',
      followMe: 'Seguimi',
      favIntro: 'Amo scoprire cose belle: un prodotto ben progettato, una persona stimolante o un sito su cui torno sempre.'
    },
    pt: {
      navHome: 'Início',
      navFavorites: 'Favoritos',
      navPhotography: 'Fotografia',
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
      sectionWork: 'Experiência',
      sectionProducts: 'Produtos',
      sectionProjects: 'Projetos',
      followMe: 'Seguir',
      favIntro: 'Adoro descobrir coisas incríveis — seja um produto bem projetado, uma pessoa inspiradora ou um site ao qual sempre volto.'
    },
    nl: {
      navHome: 'Home',
      navFavorites: 'Favorieten',
      navPhotography: 'Fotografie',
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
      sectionWork: 'Werk',
      sectionProducts: 'Producten',
      sectionProjects: 'Projecten',
      followMe: 'Volg mij',
      favIntro: 'Ik ontdek graag mooie dingen, of het nu een goed ontworpen product is, een inspirerend persoon of een website waar ik steeds naar terugkeer.'
    },
    ar: {
      navHome: 'الرئيسية',
      navFavorites: 'المفضلة',
      navPhotography: 'التصوير',
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
      sectionWork: 'الخبرة',
      sectionProducts: 'المنتجات',
      sectionProjects: 'المشاريع',
      followMe: 'تابعني',
      favIntro: 'أحب اكتشاف الأشياء الرائعة، سواء كان منتجاً مصمماً بعناية، أو شخصاً ملهماً، أو موقعاً أعود إليه باستمرار.'
    }
  };

  let currentLanguage = localStorage.getItem('lang') || 'en';
  if (!TRANSLATIONS[currentLanguage]) currentLanguage = 'en';
  let blurTimer = null;
  let applyTimer = null;

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

    const isBuiltIn = BUILT_IN_CODES.has(nextCode);
    languageButtons.forEach((btn) => {
      const active = btn.dataset.lang === nextCode;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    languageMoreButton?.classList.toggle('is-active', !isBuiltIn);
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
      empty.textContent = 'No languages found';
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

  if (currentLanguage !== 'en') {
    applyLanguage(currentLanguage, false);
  }
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

  grid.innerHTML = PHOTOS.map((p, idx) => `
    <button type="button" class="photo-card" data-photo-idx="${idx}" aria-label="${p.alt.replace(/"/g, "&quot;")}">
      <img src="${p.src}" alt="${p.alt.replace(/"/g, "&quot;")}" loading="lazy" decoding="async">
      <div class="photo-caption"><span>${p.alt}</span></div>
    </button>
  `).join("");

  function showPhoto(idx) {
    activeIdx = (idx + PHOTOS.length) % PHOTOS.length;
    const item = PHOTOS[activeIdx];
    lbImg.src = item.src;
    lbImg.alt = item.alt;
    lbCaption.textContent = item.alt;
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

  function formatDate(iso) {
    const [, m, d] = iso.split('-').map(Number);
    return `${MONTHS[(m || 1) - 1]} ${d}`;
  }

  function renderBars(days, yearTotal) {
    const recent = days.slice(-DAYS);
    if (totalEl && typeof yearTotal === 'number') {
      totalEl.textContent = `${yearTotal} contributions in the last year`;
    }
    container.innerHTML = recent
      .map((day, idx) => {
        const label = formatDate(day.date);
        const countText =
          day.count === 0
            ? 'No contributions'
            : `${day.count} contribution${day.count === 1 ? '' : 's'}`;
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
