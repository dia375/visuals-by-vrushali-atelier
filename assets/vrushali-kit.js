/* Visuals by Vrushali — shared kit used by all three site versions.
   - VRU.character(): Vrushali's illustrated director character (SVG string)
   - VRU.mark(): the four-petal brand mark from her portfolio
   - VRU.initMedia(root): hover-preview / play-pause for video slots, with still-image fallback
   - VRU.initForm(form): project inquiry form -> opens a pre-filled email
   - VRU.initMagnetic(selector): springy magnetic buttons
   To add a real clip: put the MP4 in /assets and set data-video="assets/your-clip.mp4" on the .media element. */
(function () {
  const EMAIL = 'vrushaliwagle2@gmail.com';
  const IG = 'https://www.instagram.com/sheclickssuccessforever';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function character(opts = {}) {
    const top = opts.top || '#E9A7B8';
    const pants = opts.pants || '#3B2622';
    return `
<svg class="vru-svg" viewBox="0 0 200 400" role="img" aria-label="Illustrated Vrushali holding a camera" overflow="visible">
  <ellipse class="vru-shadow" cx="100" cy="392" rx="56" ry="7" fill="#000" opacity=".2"/>
  <g class="vru-bob">
    <path d="M62 64 C50 120 50 192 66 238 C86 250 116 250 136 238 C152 192 150 120 138 64 Z" fill="#1E1412"/>
    <g class="vru-leg vru-leg-b"><path d="M100 244 L104 372 L122 372 L120 244Z" fill="${pants}" opacity=".82"/><path d="M100 368 h26 a5 5 0 0 1 5 5 v7 h-31z" fill="#C9973F"/></g>
    <g class="vru-leg vru-leg-f"><path d="M80 244 L74 372 L92 372 L100 244Z" fill="${pants}"/><path d="M70 368 h26 a5 5 0 0 1 5 5 v7 h-31z" fill="#1E1412"/></g>
    <path d="M64 128 C80 114 120 114 136 128 L148 254 C116 266 84 266 52 254 Z" fill="${top}"/>
    <path d="M58 236 C88 246 112 246 142 236 L148 254 C116 266 84 266 52 254 Z" fill="#000" opacity=".08"/>
    <rect x="92" y="94" width="16" height="30" rx="7" fill="#B97A5C"/>
    <path d="M88 118 L100 148 L112 118Z" fill="#B97A5C"/>
    <ellipse cx="100" cy="70" rx="28" ry="32" fill="#C68B6B"/>
    <path d="M70 74 C66 38 92 28 108 32 C132 36 138 58 131 86 C124 62 110 50 90 52 C80 56 73 64 70 74Z" fill="#1E1412"/>
    <path d="M71 66 C63 110 61 154 69 200 L81 198 C75 152 75 110 79 72Z" fill="#1E1412"/>
    <path d="M129 62 C139 108 140 154 131 202 L119 200 C127 154 126 110 121 68Z" fill="#1E1412"/>
    <g class="vru-eyes"><ellipse cx="89" cy="74" rx="3.2" ry="4" fill="#1E1412"/><ellipse cx="111" cy="74" rx="3.2" ry="4" fill="#1E1412"/></g>
    <path d="M83 64 q6 -4 12 -1 M105 63 q6 -3 12 1" stroke="#1E1412" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <circle cx="82" cy="86" r="6" fill="#E46F86" opacity=".35"/><circle cx="118" cy="86" r="6" fill="#E46F86" opacity=".35"/>
    <path d="M92 90 Q100 97 108 90" stroke="#7E2E3C" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    <circle cx="72" cy="84" r="3.4" fill="#E0A84A"/><circle cx="128" cy="84" r="3.4" fill="#E0A84A"/>
    <path d="M66 132 C52 170 58 198 82 204" stroke="${top}" stroke-width="17" fill="none" stroke-linecap="round"/>
    <path d="M134 132 C148 170 142 198 118 204" stroke="${top}" stroke-width="17" fill="none" stroke-linecap="round"/>
    <g class="vru-cam">
      <rect x="70" y="180" width="60" height="40" rx="7" fill="#2A1C18"/>
      <rect x="78" y="172" width="18" height="10" rx="3" fill="#2A1C18"/>
      <circle cx="100" cy="200" r="13" fill="#C9973F"/><circle cx="100" cy="200" r="8" fill="#123B30"/>
      <circle cx="103" cy="197" r="2.4" fill="#fff" opacity=".75"/>
      <circle class="vru-rec" cx="122" cy="188" r="3.2" fill="#E0465A"/>
    </g>
    <circle cx="72" cy="204" r="7" fill="#C68B6B"/><circle cx="128" cy="204" r="7" fill="#C68B6B"/>
  </g>
</svg>`;
  }

  function mark(color = 'currentColor') {
    return `<svg class="vru-mark" viewBox="0 0 40 40" aria-hidden="true"><g fill="${color}"><circle cx="13" cy="13" r="10"/><circle cx="27" cy="13" r="10"/><circle cx="13" cy="27" r="10"/><circle cx="27" cy="27" r="10"/></g></svg>`;
  }

  const CSS = `
.vru-svg{width:100%;height:100%;display:block;overflow:visible}
.vru-eyes{transform-box:fill-box;transform-origin:center;animation:vru-blink 5s infinite}
.vru-rec{animation:vru-rec 1.2s steps(2,end) infinite}
.vru-leg{transform-box:fill-box;transform-origin:50% 0}
.walking .vru-leg-f{animation:vru-step .5s ease-in-out infinite alternate}
.walking .vru-leg-b{animation:vru-step .5s ease-in-out infinite alternate-reverse}
.walking .vru-bob{animation:vru-bob .25s ease-in-out infinite alternate}
.vru-idle .vru-bob{animation:vru-breathe 3.2s ease-in-out infinite}
@keyframes vru-blink{0%,92%,100%{transform:scaleY(1)}95%{transform:scaleY(.1)}}
@keyframes vru-rec{to{opacity:0}}
@keyframes vru-step{from{transform:rotate(-13deg)}to{transform:rotate(13deg)}}
@keyframes vru-bob{to{transform:translateY(-5px)}}
@keyframes vru-breathe{50%{transform:translateY(-3px)}}
.media{position:relative;overflow:hidden;cursor:pointer;isolation:isolate}
.media img,.media video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:var(--focus,50% 50%);transition:transform 1.2s cubic-bezier(.2,.7,.2,1),opacity .4s}
.media .media-bd{display:none;filter:blur(22px) brightness(.72) saturate(1.1);transform:scale(1.25);z-index:-1}
.media.fit-contain .media-bd{display:block}
.media.fit-contain img.media-main{object-fit:contain}
.media video{opacity:0}
.media.is-playing video{opacity:1}
.media:not([data-video]):hover img.media-main,.media[data-video=""]:hover img.media-main{transform:scale(1.06)}
.media-play{position:absolute;z-index:2;left:14px;bottom:14px;width:46px;height:46px;border-radius:50%;border:0;display:grid;place-items:center;background:rgba(255,248,240,.9);color:#2A1C18;cursor:pointer;transition:transform .35s cubic-bezier(.3,1.6,.5,1),background .2s}
.media-play:hover{transform:scale(1.12)}
.media-play svg{width:16px;height:16px}
.media-badge{position:absolute;z-index:2;right:12px;top:12px;font:600 10px/1 system-ui,sans-serif;letter-spacing:.12em;text-transform:uppercase;padding:7px 9px;border-radius:99px;background:rgba(30,20,18,.55);color:#F7EEE4;backdrop-filter:blur(6px)}
.vru-toast{position:fixed;left:50%;bottom:28px;transform:translate(-50%,140%);z-index:999;background:#2A1C18;color:#F7EEE4;padding:14px 20px;border-radius:99px;font:500 14px/1.3 system-ui,sans-serif;box-shadow:0 12px 40px rgba(0,0,0,.25);transition:transform .5s cubic-bezier(.3,1.4,.5,1);max-width:calc(100vw - 32px)}
.vru-toast.show{transform:translate(-50%,0)}
@media (prefers-reduced-motion: reduce){.vru-eyes,.vru-rec,.walking .vru-leg-f,.walking .vru-leg-b,.walking .vru-bob,.vru-idle .vru-bob{animation:none}.media img{transition:none}}
`;
  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  const PLAY = '<svg viewBox="0 0 16 16"><path d="M4 2.5v11l9-5.5z" fill="currentColor"/></svg>';
  const PAUSE = '<svg viewBox="0 0 16 16"><path d="M4 2h3v12H4zM9 2h3v12H9z" fill="currentColor"/></svg>';

  /* Keep the product visible: if the frame's shape is very different from the photo
     (e.g. a wide necklace shot in a tall 9:16 Reel frame), show the whole photo over a
     soft blurred copy instead of cropping the jewellery off.
     data-focus="72% 50%"  -> where to aim the crop
     data-fit="cover"      -> always crop (use with data-focus)
     data-tolerance="1.25" -> how much shape mismatch is allowed before showing the whole photo (default 1.6) */
  const fitObs = 'ResizeObserver' in window ? new ResizeObserver((es) => es.forEach((e) => evalFit(e.target))) : null;
  function evalFit(m) {
    const img = m.querySelector('img.media-main');
    if (!img || !img.naturalWidth || !m.clientHeight) return;
    if (m.dataset.fit === 'cover') { m.classList.remove('fit-contain'); return; }
    const ir = img.naturalWidth / img.naturalHeight, fr = m.clientWidth / m.clientHeight;
    const mis = Math.max(ir / fr, fr / ir);
    m.classList.toggle('fit-contain', m.dataset.fit === 'contain' || mis > parseFloat(m.dataset.tolerance || 1.6));
  }
  function fitImage(m) {
    const img = m.querySelector('img');
    if (!img) return;
    img.classList.add('media-main');
    if (m.dataset.focus) m.style.setProperty('--focus', m.dataset.focus);
    const bd = img.cloneNode();
    bd.className = 'media-bd'; bd.alt = ''; bd.setAttribute('aria-hidden', 'true');
    m.insertBefore(bd, img);
    const go = () => evalFit(m);
    img.complete ? go() : img.addEventListener('load', go, { once: true });
    if (fitObs) fitObs.observe(m);
  }

  function initMedia(root = document) {
    root.querySelectorAll('.media').forEach((m) => {
      if (m.dataset.ready) return;
      m.dataset.ready = '1';
      fitImage(m);
      const src = (m.dataset.video || '').trim();
      const btn = document.createElement('button');
      btn.className = 'media-play';
      btn.type = 'button';
      btn.innerHTML = PLAY;
      btn.setAttribute('aria-label', src ? 'Play preview' : 'Preview (clip coming soon)');
      m.appendChild(btn);
      if (!src) {
        if (!m.querySelector('.media-badge') && m.dataset.badge !== 'off') {
          const b = document.createElement('span');
          b.className = 'media-badge';
          b.textContent = m.dataset.badge || 'Video coming soon';
          m.appendChild(b);
        }
        btn.addEventListener('click', (e) => { e.stopPropagation(); m.classList.toggle('kb'); });
        return;
      }
      const v = document.createElement('video');
      v.muted = true; v.loop = true; v.playsInline = true; v.preload = 'none';
      v.src = src;
      m.insertBefore(v, btn);
      const play = () => { v.play().then(() => { m.classList.add('is-playing'); btn.innerHTML = PAUSE; }).catch(() => {}); };
      const pause = () => { v.pause(); m.classList.remove('is-playing'); btn.innerHTML = PLAY; };
      if (window.matchMedia('(hover: hover)').matches && !reduce) {
        m.addEventListener('mouseenter', play);
        m.addEventListener('mouseleave', pause);
      }
      btn.addEventListener('click', (e) => { e.stopPropagation(); v.paused ? play() : pause(); });
    });
  }

  function toast(msg) {
    let t = document.querySelector('.vru-toast');
    if (!t) { t = document.createElement('div'); t.className = 'vru-toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg;
    requestAnimationFrame(() => t.classList.add('show'));
    clearTimeout(t._h);
    t._h = setTimeout(() => t.classList.remove('show'), 3800);
  }

  function initForm(form) {
    if (!form) return;
    form.querySelectorAll('[data-chip]').forEach((c) => {
      c.setAttribute('aria-pressed', 'false');
      c.addEventListener('click', () => c.setAttribute('aria-pressed', c.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'));
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const brand = (fd.get('brand') || '').toString().trim();
      if (!brand) { toast('Add your brand name so Vrushali knows who you are.'); form.querySelector('[name=brand]').focus(); return; }
      const formats = [...form.querySelectorAll('[data-chip][aria-pressed=true]')].map((c) => c.dataset.chip).join(', ') || 'Open to ideas';
      const body = [
        `Brand: ${brand}`,
        `Product type: ${fd.get('product') || '-'}`,
        `Video format / style: ${formats}`,
        `Aspect: ${fd.get('aspect') || '-'}`,
        '',
        'Campaign brief:',
        `${fd.get('brief') || '-'}`,
      ].join('\n');
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Collaboration inquiry: ' + brand)}&body=${encodeURIComponent(body)}`;
      toast('Opening your email app with the brief filled in ✦');
    });
  }

  function initMagnetic(sel = '.magnetic') {
    if (reduce || !window.matchMedia('(hover: hover)').matches || !window.gsap) return;
    document.querySelectorAll(sel).forEach((el) => {
      const s = parseFloat(el.dataset.strength || 0.35);
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * s, y: (e.clientY - r.top - r.height / 2) * s, duration: 0.4, ease: 'power3.out' });
      });
      el.addEventListener('pointerleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, .35)' }));
    });
  }

  function initLenis() {
    if (reduce || !window.Lenis || !window.gsap) return null;
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    if (window.ScrollTrigger) lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    document.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      lenis.scrollTo(t, { offset: 0, duration: 1.4 });
    }));
    return lenis;
  }

  function mountCharacters(opts) {
    document.querySelectorAll('[data-vru]').forEach((el) => { el.innerHTML = character(opts); });
    document.querySelectorAll('[data-mark]').forEach((el) => { el.innerHTML = mark(el.dataset.mark || 'currentColor'); });
  }

  window.VRU = { evalFit, EMAIL, IG, reduce, character, mark, initMedia, initForm, initMagnetic, initLenis, mountCharacters, toast };
})();
