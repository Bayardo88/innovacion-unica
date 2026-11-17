/**
 * Ilustraciones de ejemplo (contenido ficticio). Cada motivo se dibuja en una caja de 200×200
 * con trazo de tinta; `A` es el color de acento y `P` el papel.
 */
export type Motif =
  | 'phone' | 'leaf' | 'bulb' | 'gear' | 'book' | 'chart'
  | 'people' | 'box' | 'map' | 'megaphone' | 'palette' | 'seal';

const gearTeeth = Array.from({ length: 8 }, (_, i) =>
  `<rect x="88" y="22" width="24" height="26" rx="3" transform="rotate(${i * 45} 100 100)" fill="A"/>`,
).join('');

const motifs: Record<Motif, string> = {
  phone: `<rect x="58" y="16" width="84" height="168" rx="14" fill="A"/><rect x="69" y="36" width="62" height="112" rx="3" fill="P"/><path d="M80 58h40M80 74h28M80 90h40M80 106h22"/><circle cx="100" cy="166" r="6" fill="P"/><path d="M146 40c14 6 22 18 22 30M156 26c20 10 30 26 30 46"/>`,
  leaf: `<path d="M34 172C30 86 86 28 172 28c4 92-48 146-138 144z" fill="A"/><path d="M34 172 146 56"/><path d="M78 128V90M104 102V66M78 128h40M104 102h36"/>`,
  bulb: `<path d="M100 28c32 0 54 24 54 54 0 22-12 34-22 46-6 7-8 12-8 20H76c0-8-2-13-8-20-10-12-22-24-22-46 0-30 22-54 54-54z" fill="A"/><path d="M78 160h44M84 176h32"/><path d="M86 112l14-26 14 26"/><path d="M100 4v10M26 34l8 8M174 34l-8 8M12 86h12M176 86h12"/>`,
  gear: `${gearTeeth}<circle cx="100" cy="100" r="52" fill="A"/><circle cx="100" cy="100" r="18" fill="P"/><path d="M40 178c24-6 40-6 60 0s38 6 60 0"/>`,
  book: `<path d="M100 54C76 38 46 36 18 46v124c28-10 58-8 82 8z" fill="A"/><path d="M100 54c24-16 54-18 82-8v124c-28-10-58-8-82 8z" fill="P"/><path d="M100 54v124M118 72c14-6 30-8 46-4M118 92c14-6 30-8 46-4M118 112c14-6 30-8 46-4M118 132c14-6 30-8 40-6"/>`,
  chart: `<path d="M24 22v154h160"/><rect x="46" y="112" width="26" height="64" fill="A"/><rect x="88" y="78" width="26" height="98" fill="P"/><rect x="130" y="46" width="26" height="130" fill="A"/><path d="M40 96l44-30 42-20 48-24" stroke-dasharray="2 10"/><path d="M162 18l12 4-4 12"/>`,
  people: `<circle cx="68" cy="66" r="24" fill="A"/><path d="M26 176c0-52 84-52 84 0z" fill="P"/><circle cx="136" cy="78" r="21" fill="P"/><path d="M98 176c0-46 76-46 76 0z" fill="A"/><path d="M92 30c8-8 18-10 26-6"/>`,
  box: `<path d="M100 30l72 36-72 36-72-36z" fill="P"/><path d="M28 66v76l72 36v-76z" fill="A"/><path d="M172 66v76l-72 36v-76z" fill="P"/><path d="M64 48l72 36v28"/>`,
  map: `<path d="M22 52l52-22 52 22 52-22v122l-52 22-52-22-52 22z" fill="P"/><path d="M74 30v122l52 22V52z" fill="A"/><path d="M40 146c22-30 46-12 64-28s14-36 30-44" stroke-dasharray="3 10"/><path d="M140 30c0-18 32-18 32 0 0 18-16 36-16 36s-16-18-16-36z" fill="A"/><circle cx="156" cy="30" r="5" fill="P"/>`,
  megaphone: `<path d="M44 82l84-44v124l-84-44z" fill="A"/><rect x="18" y="80" width="28" height="40" rx="3" fill="P"/><path d="M58 122l12 48h18l-8-44"/><path d="M150 70c12 16 12 44 0 60M166 52c22 26 22 70 0 96"/>`,
  palette: `<path d="M100 24c48 0 80 32 80 72 0 30-24 36-40 32-20-4-26 14-16 28 8 12-6 22-24 22-50 0-80-32-80-76s34-78 80-78z" fill="P"/><circle cx="62" cy="80" r="13" fill="A"/><circle cx="100" cy="56" r="13" fill="#181818"/><circle cx="142" cy="72" r="13" fill="A"/><circle cx="60" cy="124" r="13" fill="#F5CD51"/><path d="M128 178l58-74"/>`,
  seal: `<rect x="36" y="18" width="112" height="150" rx="2" fill="P"/><path d="M58 48h68M58 68h68M58 88h48M58 108h56"/><circle cx="132" cy="140" r="30" fill="A"/><circle cx="132" cy="140" r="16"/><path d="M116 166l-8 26 14-8 10 12 4-26M148 166l6 24"/>`,
};

export const tonePalette = {
  blue: { bg: '#C9D6FB', accent: '#6489EB' },
  pink: { bg: '#FAD0DF', accent: '#F477A5' },
  green: { bg: '#C7EBDD', accent: '#60C7A0' },
  sand: { bg: '#F1E5C9', accent: '#F5CD51' },
  yellow: { bg: '#F5CD51', accent: '#FFFDF7' },
} as const;
export type Tone = keyof typeof tonePalette;

function hash(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** SVG completo 400×300 (4:3) de una ilustración de ejemplo. */
export function motifSvg(motif: Motif, tone: Tone, seed: string, ratio: '4:3' | '16:9' = '4:3') {
  const { bg, accent } = tonePalette[tone];
  const w = 400;
  const h = ratio === '16:9' ? 225 : 300;
  const r = hash(seed);
  const rot = ((r % 13) - 6);
  const size = h * (ratio === '16:9' ? 0.62 : 0.66);
  const scale = size / 200;
  // Centrado con un leve desplazamiento; la caja del motivo nunca sale de [0.08w, 0.92w].
  const cx = Math.min(Math.max(w * (0.44 + ((r >> 4) % 13) / 100), size / 2 + w * 0.08), w * 0.92 - size / 2);
  const cy = h / 2 + 4;
  const body = motifs[motif].replaceAll('fill="A"', `fill="${accent}"`).replaceAll('fill="P"', 'fill="#FFFDF7"');
  const dots = Array.from({ length: 5 }, (_, i) => {
    const x = ((r >> (i * 3)) % 340) + 30;
    const y = ((r >> (i * 2 + 5)) % (h - 60)) + 30;
    return `<circle cx="${x}" cy="${y}" r="${3 + (i % 3)}" fill="#181818" opacity=".55"/>`;
  }).join('');
  const starX = r % 2 ? 330 : 54;
  const starY = (r >> 7) % 2 ? 54 : h - 56;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice">
<defs><pattern id="g${r}" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#181818" stroke-opacity=".08" stroke-width="1"/></pattern></defs>
<rect width="${w}" height="${h}" fill="${bg}"/><rect width="${w}" height="${h}" fill="url(#g${r})"/>
${dots}
<path d="M${starX} ${starY - 18}c1.5 9 4 14 6 16 3 2 8 3 13 3-6 2-10 4-11.5 6.5-2 3.5-3 9-3.5 12-2-5-4.5-9.5-7.5-11-3-2-8-3-12.5-3 5-2 9-4.5 10-6.5 2-3.5 4.5-10 5-17z" fill="#181818"/>
<g transform="translate(${cx - size / 2} ${cy - size / 2}) rotate(${rot} ${size / 2} ${size / 2}) scale(${scale})" fill="none" stroke="#181818" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">${body}</g>
</svg>`;
}
