/**
 * Coreografía del sitio con GSAP.
 *
 * Idea: abrir un archivo físico. Las fotos caen y se pegan con cinta, los stickers
 * se "estampan", las carpetas se apilan y las tarjetas se archivan una tras otra.
 * Una sola escena protagonista (el hero); el resto son entradas breves y distintas.
 *
 * - Solo corre con `prefers-reduced-motion: no-preference` (gsap.matchMedia).
 * - El contenido es visible por defecto; un script inline en <head> lo oculta solo
 *   cuando habrá animación, y se libera a los 3 s si este módulo no llegara a correr.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

const EASE_OUT = 'expo.out';
const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  root.querySelector<T>(sel);
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  gsap.utils.toArray<T>(root.querySelectorAll(sel));

/** Rotación pseudoaleatoria estable por índice, para que cada sticker caiga distinto. */
const wobble = (i: number, amp = 8) => ((i * 37) % (amp * 2 + 1)) - amp;

function ready() {
  document.documentElement.classList.add('motion-ready');
}

/* ---------------------------------------------------------------- Hero */
function heroScene() {
  const hero = $('.hero');
  if (!hero) return;

  const tl = gsap.timeline({ defaults: { duration: 0.9, ease: EASE_OUT } });

  tl.addLabel('title', 0.05)
    .from('.hero__title .line__in', { yPercent: 105, duration: 1.1, stagger: 0.12 }, 'title')
    .from('.hero__dot', { scale: 0, transformOrigin: '50% 80%', duration: 0.6, ease: 'back.out(3)' }, 'title+=0.55')

    .addLabel('collage', 'title+=0.35')
    .from(
      '.hero__photo',
      { y: -70, rotation: (i) => (i ? 14 : -14), autoAlpha: 0, duration: 1.1, stagger: 0.16, ease: 'power3.out' },
      'collage',
    )
    .from(
      '.hero .paper-photo__tape',
      { scaleX: 0, transformOrigin: '0% 50%', duration: 0.4, stagger: 0.08, ease: 'power2.out' },
      'collage+=0.55',
    )
    .from('.hero__sticker', { scale: 1.5, rotation: -12, autoAlpha: 0, duration: 0.5, ease: 'back.out(2.2)' }, 'collage+=0.7')
    .from('.hero__smiley path, .hero__star path', { drawSVG: 0, duration: 0.8, stagger: 0.1, ease: 'power2.inOut' }, 'collage+=0.8')

    .addLabel('copy', 'title+=0.5')
    .from('.hero__lede', { y: 18, autoAlpha: 0, duration: 0.8 }, 'copy')
    .from('.hero__actions > *', { y: 14, autoAlpha: 0, duration: 0.7, stagger: 0.08 }, 'copy+=0.12')
    .from('.hero__scroll', { autoAlpha: 0, duration: 0.6 }, 'copy+=0.6');

  return tl;
}

/* ---------------------------------------------------------- Spotlight */
function spotlightScene() {
  const panel = $('.spotlight__panel');
  if (!panel) return;
  const tl = gsap.timeline({
    defaults: { duration: 0.8, ease: EASE_OUT },
    scrollTrigger: { trigger: panel, start: 'top 78%', once: true },
  });
  tl.addLabel('panel')
    .from(panel, { y: 60, autoAlpha: 0, duration: 1 }, 'panel')
    .from('.spotlight__tab', { yPercent: 100, duration: 0.5 }, 'panel+=0.35')
    .addLabel('print', 'panel+=0.3')
    .from('.spotlight__media', { y: -50, rotation: -9, autoAlpha: 0, duration: 1, ease: 'power3.out' }, 'print')
    .from('.spotlight .paper-photo__tape', { scaleX: 0, transformOrigin: '0% 50%', duration: 0.4 }, 'print+=0.55')
    .from('.spotlight__example', { scale: 1.6, rotation: 10, autoAlpha: 0, duration: 0.5, ease: 'back.out(2.2)' }, 'print+=0.7')
    .from('.spotlight__copy > *', { y: 22, autoAlpha: 0, stagger: 0.08 }, 'print+=0.15');
}

/* ------------------------------------------------------------ Folders */
function foldersScene() {
  const stack = $('.folders__stack');
  if (!stack) return;

  gsap.from('.folders__note path', {
    drawSVG: 0,
    duration: 0.9,
    ease: 'power2.inOut',
    stagger: 0.15,
    scrollTrigger: { trigger: '.folders__head', start: 'top 80%', once: true },
  });

  const tl = gsap.timeline({
    defaults: { duration: 1, ease: EASE_OUT },
    scrollTrigger: { trigger: stack, start: 'top 80%', once: true },
  });
  // Las carpetas se deslizan sobre la mesa y se acomodan en su inclinación (definida en CSS).
  tl.addLabel('back')
    .from('.folder--back', { x: -80, y: 30, rotation: -5, autoAlpha: 0 }, 'back')
    .from('.folder--back .folder__program', { x: 24, autoAlpha: 0, duration: 0.6, stagger: 0.06 }, 'back+=0.35')
    .addLabel('front', 'back+=0.3')
    .from('.folder--front', { x: 90, y: 70, rotation: 6, autoAlpha: 0 }, 'front')
    .from('.folder--front .folder__program', { x: 24, autoAlpha: 0, duration: 0.6, stagger: 0.06 }, 'front+=0.4')
    .from('.folder__photo', { y: -30, rotation: (i) => (i ? -12 : 12), autoAlpha: 0, duration: 0.8, stagger: 0.25, ease: 'power3.out' }, 'back+=0.55');
}

/* ------------------------------------------------- Grids (archivado) */
/**
 * Tarjetas que se "archivan": primero asoma la pestaña, luego cae la tarjeta.
 * Se anima el <li> para no pelear con el hover CSS de la tarjeta.
 */
function fileItems(selector: string) {
  const items = $$(selector);
  if (!items.length) return;
  gsap.set(items, { autoAlpha: 0, y: 46, rotation: (i) => wobble(i, 2) * 0.6 });
  ScrollTrigger.batch(items, {
    start: 'top 90%',
    once: true,
    onEnter: (batch) => {
      const tl = gsap.timeline({ defaults: { ease: EASE_OUT } });
      tl.to(batch, {
        autoAlpha: 1,
        y: 0,
        rotation: 0,
        duration: 0.9,
        stagger: 0.09,
        clearProps: 'transform,opacity,visibility',
      }).from(
        batch.flatMap((li) => $$('.card__tab, .program__tab', li)),
        { yPercent: 100, duration: 0.45, stagger: 0.09 },
        0.25,
      );
    },
  });
}

/* ------------------------------------------------------------ Contact */
function contactScene() {
  const contact = $('.contact');
  if (!contact) return;
  const tl = gsap.timeline({
    defaults: { duration: 0.8, ease: EASE_OUT },
    scrollTrigger: { trigger: contact, start: 'top 75%', once: true },
  });
  tl.from('.contact__title', { y: 30, autoAlpha: 0 })
    .from('.contact__spark path', { drawSVG: '50% 50%', duration: 0.6, stagger: 0.04, ease: 'power2.out' }, '<0.2')
    .from('.contact__lede, .contact__actions, .contact__inner > .link-arrow', { y: 16, autoAlpha: 0, stagger: 0.08 }, '<0.1');
}

/* ------------------------------------------------- Detalle de proyecto */
function projectScene() {
  const head = $('.project__head');
  if (!head) return;
  const tl = gsap.timeline({ defaults: { duration: 0.8, ease: EASE_OUT } });
  tl.addLabel('text', 0.05)
    .from('.project__head-text > :not(.project__stickers)', { y: 22, autoAlpha: 0, stagger: 0.07 }, 'text')
    .from(
      '.project__stickers li',
      { scale: 1.4, rotation: (i) => wobble(i, 10), autoAlpha: 0, duration: 0.45, stagger: 0.06, ease: 'back.out(2.4)' },
      'text+=0.45',
    )
    .addLabel('cover', 'text+=0.15')
    .from('.project__cover', { y: -60, rotation: 10, autoAlpha: 0, duration: 1.1, ease: 'power3.out' }, 'cover')
    .from('.project__cover .paper-photo__tape', { scaleX: 0, transformOrigin: '0% 50%', duration: 0.4, stagger: 0.1 }, 'cover+=0.6')
    .from('.sheet', { y: 40, autoAlpha: 0, duration: 0.9 }, 'cover+=0.45')
    .from('.sheet__tab', { yPercent: 100, duration: 0.45 }, '>-0.3');

  // Galería: las copias caen sobre la página como fotos sueltas.
  const prints = $$('.gallery > li');
  if (prints.length) {
    gsap.from(prints, {
      y: -40,
      rotation: (i) => wobble(i, 9),
      autoAlpha: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.gallery', start: 'top 82%', once: true },
    });
  }
}

/* ---------------------------------------------------------- Programas */
function programsScene() {
  $$('.line__panel').forEach((panel) => {
    const tl = gsap.timeline({
      defaults: { duration: 0.9, ease: EASE_OUT },
      scrollTrigger: { trigger: panel, start: 'top 80%', once: true },
    });
    tl.from(panel, { y: 50, autoAlpha: 0 })
      .from($('.line__tab', panel), { yPercent: 100, duration: 0.45 }, '<0.3')
      .from($$('.line__intro > *', panel), { y: 20, autoAlpha: 0, stagger: 0.08 }, '<0.05')
      .from($$('.programs > li', panel), { y: 40, autoAlpha: 0, stagger: 0.08, duration: 0.8 }, '<0.15')
      .from($$('.program__tab', panel), { yPercent: 100, duration: 0.4, stagger: 0.08 }, '<0.25');
  });

  const art = $('.head__art');
  if (art) {
    gsap.timeline({ defaults: { ease: EASE_OUT } })
      .from('.head__copy > *', { y: 22, autoAlpha: 0, duration: 0.8, stagger: 0.07 })
      .from(art, { y: -50, rotation: 12, autoAlpha: 0, duration: 1.1, ease: 'power3.out' }, 0.15)
      .from('.editions-nav__tab', { yPercent: 100, autoAlpha: 0, duration: 0.45, stagger: 0.08 }, 0.4);
  }
}

/* ---------------------------------------------------------------- Run */
const mm = gsap.matchMedia();
mm.add('(prefers-reduced-motion: no-preference)', () => {
  heroScene();
  projectScene();
  programsScene();
  spotlightScene();
  foldersScene();
  contactScene();
  fileItems('.grid-projects > li:not([data-item])');
  // Los estados iniciales ya están puestos en línea: se puede mostrar la página.
  ready();
});
mm.add('(prefers-reduced-motion: reduce)', () => ready());
