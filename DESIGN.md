# DESIGN.md — University Innovation Project Repository

> **Design system / implementation specification**  
> Version: 1.0  
> Working concept: **Innovation Archive** / **Archivo de Innovación**  
> Purpose: A reusable, content-driven website for presenting, discovering, and documenting university innovation projects across faculties, teams, cohorts, and initiatives.  
> Visual inspiration: the user-supplied collage of portfolio website screens. This is an interpretation of its design language, not an instruction to duplicate its brand or page copy.

---

## 0. Instructions for developers and AI coding agents

**Treat this file as the source of truth for visual design, UX, and component behavior.** Build a functional project repository, not a static portfolio mockup.

**Design priorities, in order:**

1. Make projects easy to **find, compare, understand, and share**.
2. Preserve the reference's **editorial notebook + playful scrapbook** personality.
3. Ensure projects—not decorative effects—remain visually dominant.
4. Use repeatable templates and content schemas so **hundreds of projects** can be added without rewriting page layouts.
5. Deliver responsive, accessible, fast, and maintainable interfaces.

**Do not:** copy the reference's original person's name, navigation, content, photography, brand, or decorative positioning exactly; turn every component into a random collage; use fake impact metrics; use a giant hero that hides access to projects; or make filters and buttons decorative/inert.

**Working assumptions:** The repository is publicly browsable, primarily Spanish-language, with an optional English locale. There may be many projects from different years and faculties. Publishing and editorial approval are handled separately from public browsing; a submission workflow is optional. Replace all example institutional copy with verified university content before launch.

### Design concept

**"A living notebook of ideas."** Imagine an innovation lab's physical archive: projects filed in folders, photos taped to pages, colored notes used as labels, and case studies documented on ruled paper. The site should feel curious, hands-on, youthful, and academically credible—not childish, chaotic, or corporate.

**Keywords:** editorial, academic, inventive, analog-meets-digital, notebook, catalog, taped photos, tabbed folders, practical optimism, experimental but systematic.

---

## 1. Visual interpretation of the reference

| Reference characteristic | How to use it in the repository |
|---|---|
| Off-white background with faint horizontal ruled lines | Persistent paper texture beneath page content; decorative and low-contrast |
| Large uppercase, narrow, bold black headlines | Section headlines and project hero titles; reserve for high-priority text |
| Small editorial labels and micro-copy | Dates, project IDs, faculty, cohort, categories, progress stage |
| Yellow active navigation item | Active primary nav tab and selected high-level collection |
| Saturated pink, green, blue, and yellow accents | Topic labels, folders, stickers, and occasional feature panels |
| Taped / tilted Polaroid-like images | Featured imagery, gallery highlights, research photos; used intentionally |
| Asymmetric collages and overlapping cards | Hero, featured project section, exploratory gallery; not every catalog item |
| Alternating black and yellow featured panels | Large editorial project spotlights and collection banners |
| Tiny doodles, smiley stickers, lines, and arrows | Secondary details that signal experimentation; never essential information |
| Distinct index and case-study layouts | Catalog for discovery; structured detail pages for comprehension |

### The translation rule

- **Playful on the surface, rigorous underneath.** The public interface may look like a scrapbook, but information architecture must be predictable.
- **Use decorated layouts selectively.** One expressive composition per viewport/major section; use quieter cards for dense browsing.
- **Separate decoration from data.** Colored notes never replace visible textual project metadata or semantic headings.
- **Avoid implying all projects are design projects.** Photography, product renders, field experiments, prototypes, posters, hardware, diagrams, and video thumbnails should all fit.

---

## 2. Identity, tone, and content language

### Working identity

| Element | Recommended default | Notes |
|---|---|---|
| Website name | `Archivo de Innovación` | Configurable; use the university's approved name and identity |
| English translation | `Innovation Archive` | Optional localization |
| Tagline | `Ideas que se convierten en proyectos.` | Example copy, not an institutional claim |
| Supporting line | `Explorá iniciativas creadas por estudiantes y equipos universitarios.` | Adapt to faculty/research participation |
| Main call to action | `Explorar proyectos` | Leading browsing action |
| Secondary call to action | `Conocer el repositorio` | Explains purpose and methodology |

**Brand relationship:** The repository can have a distinctive visual voice, but university logo placement, official naming, and logo clear space must follow institution-provided brand rules. Never recreate the official logo using a text approximation. Keep the institutional logo separate from playful stickers.

### Voice

Short, clear, energetic, explanatory, and evidence-oriented. Prefer **what the project does**, **who it serves**, and **what was achieved** over vague claims such as “revolutionary” or “game-changing.” Use Spanish interface copy consistently; support localization by storing strings outside components.

---

## 3. Design tokens

Use these variables as defaults. The palette is **inspired by**, not sampled precisely from, the reference screenshot.

### 3.1 Color

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#FAF9F4` | Primary background |
| `--paper-raised` | `#FFFDF7` | Cards, modals, photo frames |
| `--ink` | `#181818` | Primary text, bold dividers |
| `--ink-soft` | `#575650` | Body-secondary text |
| `--rule` | `#E4E3DA` | Notebook lines and subtle dividers |
| `--border-strong` | `#272522` | Outlined actions and active tabs |
| `--yellow` | `#F5CD51` | Featured accent, active navigation |
| `--blue` | `#6489EB` | Technology / prototype labels |
| `--blue-soft` | `#C9D6FB` | Blue paper notes |
| `--pink` | `#F477A5` | People / society accent |
| `--pink-soft` | `#FAD0DF` | Pink paper notes |
| `--green` | `#60C7A0` | Sustainability / outcomes accent |
| `--green-soft` | `#C7EBDD` | Mint paper notes |
| `--sand` | `#F1E5C9` | Folder background / neutral tag |
| `--white` | `#FFFFFF` | Contrasting surfaces |
| `--tape` | `#D3E0F4` | Simulated matte adhesive tape |
| `--focus` | `#2047C5` | High-visibility keyboard focus ring |

**Usage ratio:** ~75% paper/white, ~15% ink and imagery, ~10% colorful accents. Black, yellow, and muted pastels are the signature combination. Do not make every entire card a different color.

**Color roles are a UI mapping, not scientific classification.** Use a consistent taxonomy badge mapping when helpful, while always displaying category text. Don't rely on color alone to communicate meaning.

**Contrast:** On yellow/pink/green/blue pastel surfaces use `--ink`. On solid `--ink`, use `--paper-raised`. For small text, verify WCAG AA contrast (4.5:1) for the actual color combination; never place white small text on the saturated accents without testing it.

### 3.2 Typography

| Role | Font recommendation | Treatment |
|---|---|---|
| Display headings | `Anton`, fallback `Barlow Condensed`, `Arial Narrow`, sans-serif | Uppercase; tightly tracked; large, narrow, heavyweight |
| UI / body | `Space Grotesk`, fallback `Inter`, sans-serif | Readable geometric sans-serif |
| Metadata / numbers | `IBM Plex Mono`, monospace | Compact uppercase labels, dates, IDs |
| Handwritten annotations | `Patrick Hand`, cursive | Short handwritten notes only |

Use licensed, hosted font files or reputable font hosting with sensible fallbacks. Avoid rendering full long-form case studies in the handwritten or condensed headline font.

**Scale:**

```css
:root {
  --font-display: "Anton", "Barlow Condensed", "Arial Narrow", sans-serif;
  --font-body: "Space Grotesk", "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --font-note: "Patrick Hand", cursive;

  --text-xs: clamp(0.72rem, 0.7rem + 0.2vw, 0.8rem);
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: clamp(1.125rem, 1rem + 0.5vw, 1.375rem);
  --h3: clamp(1.5rem, 2.5vw, 2.25rem);
  --h2: clamp(2.6rem, 5vw, 5rem);
  --h1: clamp(3.8rem, 8.5vw, 8rem);
}
```

- Display headlines: line-height `0.95–1.05`, letter-spacing `-0.02em`, all caps when short.
- Body copy: `16–18px`, line-height `1.55–1.7`, maximum paragraph measure `65–75ch`.
- Metadata: `11–13px` where readable; letter spacing `0.04–0.09em`, uppercase, medium weight.
- Handwriting: `18–26px`, maximum one to two lines, never for instructions or essential data.

### 3.3 Spacing and structure

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --container: 1280px;
  --reading-width: 760px;
  --page-gutter: clamp(20px, 4.5vw, 72px);
  --radius-sm: 2px;
  --radius-md: 6px;
  --line-weight: 1px;
  --shadow-paper: 3px 5px 0 rgba(24, 24, 24, 0.09);
}
```

- Desktop: centered max-width `1280px`; catalog grid up to 3 columns (2 for larger editorial cards).
- Tablet: 2-column project grid.
- Mobile: one-column grid with reduced collage overlap, no horizontal scroll.
- Vertical section rhythm: `64–112px` desktop, `48–72px` mobile.
- Keep true content left-aligned where practical; reserve centered alignment for hero typography and rare feature moments.

### 3.4 Paper background

The notebook-line texture is essential, but it must remain subtle under long-form text.

```css
.page-paper {
  background-color: var(--paper);
  background-image: repeating-linear-gradient(
    to bottom,
    transparent 0,
    transparent 31px,
    var(--rule) 32px,
    transparent 33px
  );
  background-position: 0 8px;
}
```

Do **not** bake ruled lines into screenshot backgrounds or project photos. For dense tables and long articles, place text on a nearly opaque paper surface so readability stays high. Optional subtle grain must be performant and must not reduce text contrast.

---

## 4. Signature visual motifs

### 4.1 Folder tabs

Active navigation, section headers, and featured story panels use **rectangular folder/tab silhouettes**, sometimes with one clipped or angled end. The reference's stepped stack of blue/black/yellow project panels is a key composition.

- Height `34–44px` for interactive tabs, `28–36px` for metadata tabs.
- Use text + color, not color alone.
- Avoid rounded pill styling for primary tabs; small radius (`0–3px`) is preferred.
- Selected tab can use yellow and a 1px border; non-selected tabs mostly paper.
- For `tablist` navigation, implement appropriate keyboard interaction; for site links use ordinary anchors.

### 4.2 Torn-paper stickers

Use for category labels, short project facts, result callouts, and section annotations.

- Lightweight irregular edge via `clip-path` or an SVG shape.
- Slight rotation `-2deg` to `2deg`; retain level typography inside if long.
- Pastel fills with dark text.
- No sticker should contain a paragraph or multiple focusable controls.

### 4.3 Taped photo frames

- White/cream image mat, slightly thicker bottom border like a photographic print.
- Soft drop shadow; optional rotation from `-3deg` to `3deg`.
- One to two semi-transparent tape strips positioned near corners, created as decorative pseudo-elements.
- Use real uploaded project images and descriptive alt text.
- All decorations (`tape`, stickers, doodles) should be `aria-hidden="true"`.
- Avoid rotation on catalog cards when it impairs alignment or scanning; reserve for featured sections and case-study galleries.

### 4.4 Editorial ink panels

Use high-contrast black panels to spotlight a project, with yellow or blue adjacent panels to echo the reference.

- One project title, 1–2 sentence summary, metadata, and a clear “Ver proyecto” link.
- Photo can overlap frame edges within an intentional clipping container.
- Keep images and text in distinct zones; no text over noisy imagery unless contrast is guaranteed.

### 4.5 Arrows, underlines, and doodles

Use small hand-drawn strokes, arrows, stars, smiley faces, circles, and connecting lines as SVG decorations. Maximum ~2–4 motifs per prominent section. Never use emojis as the primary icon library or substitute doodles for meaningful labels.

---

## 5. Information architecture

### Core routes

| Route | Purpose | Priority |
|---|---|---|
| `/` | Editorial landing page: what is here, featured work, browse gateways | Must have |
| `/proyectos` | Searchable and filterable repository index | Must have |
| `/proyectos/[slug]` | Structured case study for each project | Must have |
| `/colecciones` | Thematic collections, events, cohorts, or challenges | Recommended |
| `/colecciones/[slug]` | Collection landing page with related projects | Recommended |
| `/sobre-el-repositorio` | Purpose, curation criteria, participation, attribution | Must have |
| `/participar` | Publication guidelines or optional project submission route | Optional |

Optional data-driven directories: `/facultades/[slug]`, `/ediciones/[year]`, `/eventos/[slug]` — implement only when there is enough verified content to justify them. Do not build empty destinations.

### Primary navigation

Desktop: `INICIO` · `PROYECTOS` · `COLECCIONES` · `SOBRE EL REPOSITORIO` · optional bordered `PARTICIPAR` action.

- Compact, single-row header with black iconography and one yellow active tab.
- Brand at left, browse links center/left, institutional endorsement and optional language/menu control at right.
- Sticky header is acceptable if it remains compact and does not obscure anchors.
- Mobile: accessible menu button; preserve visible `Proyectos` entry or clear CTA.
- All navigational labels map to real destinations.

### Repository content taxonomy

These are independent dimensions, **not one overlapping list of categories**:

1. **Innovation category** — e.g., `Tecnológica`, `Social`, `Procesos`, `Otra` (configurable).
2. **Topic** — e.g., `Educación`, `Salud`, `Sostenibilidad`, `Turismo`, `Agro`, `Cultura`, `Inclusión`.
3. **Faculty / academic program** — populated from approved institutional data.
4. **Year / cohort** — year the project participated or was produced.
5. **Stage** — `Idea`, `Prototipo`, `Validación`, `Implementación`, `Concluido`.
6. **Event or initiative** — rally, hackathon, research fair, course, incubation program, etc.
7. **Format / output** — prototype, app, service, physical product, campaign, research-led solution, process improvement.

Never conflate **stage** with **award** or **impact**. Awards are optional factual records; outcomes require evidence or explicit context.

---

## 6. Page specifications

### 6.1 Home `/`

**Goal:** Introduce the archive and move users toward browsing actual projects within the first screen or immediately below it.

**Section sequence:**

1. **Hero: “IDEAS EN ACCIÓN.”** Oversized black condensed headline over ruled paper; surrounding 2–4 small taped photos or stickers as accents; concise explanation; primary `Explorar proyectos` button. A small notebook label can show `ARCHIVO / INNOVACIÓN / UNIVERSIDAD`.
2. **At-a-glance data strip.** Display project count, represented faculties, and years *only when derived from real published data*. Otherwise omit the strip.
3. **Proyectos destacados.** Two prominent featured project cards; one may be an ink-black editorial panel, another yellow. Link to individual case studies.
4. **Explorá por categoría.** 3–5 bold folder-like links with counts when available; show actual categories present in the dataset.
5. **Del aula a la práctica.** Short explanation of what projects include, who develops them, and how they are documented.
6. **Colecciones / eventos.** Small cards for verified curated groups or competitions.
7. **Latest projects.** 3–6 compact repository cards and a `Ver todos los proyectos` link.
8. **Footer.** University identity, repository purpose, publication/contact links, accessibility/privacy links if institution provides them.

**Hero layout:** desktop asymmetrical collage with dominant text; mobile text-first with at most one overlapping photo. Decorative images must not precede the main call to action in reading or keyboard order.

### 6.2 Projects index `/proyectos`

**Goal:** Make many entries discoverable without a visually chaotic grid.

**Top:** Small handwritten `explorá el archivo`, large headline `TODOS LOS PROYECTOS`, 1-sentence introduction, dynamic result count.

**Controls:**

- Search by title, brief summary, tags (and optionally team/faculty if those are public).
- Filter by category, year, topic, faculty, and stage; secondary filters can be in collapsible panel.
- Sort: `Más recientes` (default), `Más antiguos`, `A–Z`.
- `Limpiar filtros` button when filters are applied.
- Active filters visible as removable chips; chosen values encoded in URL query params.
- On input, filter instantly for small static datasets or debounce/server-query for large datasets.

**Grid:** 3 columns desktop / 2 tablet / 1 mobile. Cards align to consistent image dimensions (recommended `4:3`). Cards have visible title, short description, category, year, faculty/team when provided, and an explicit `Ver proyecto` link (or entire card as a semantic link, without nesting links).

**States:** visible loading feedback if asynchronous; helpful empty-results message; keyboard-accessible pagination or `Cargar más` (no infinite-scroll requirement); graceful missing-image placeholder with identifiable project title.

**Important:** Never rotate every card or overlap neighboring cards in the dense catalog. Let images, occasional colored labels, and 1px line work carry the reference aesthetic.

### 6.3 Project detail `/proyectos/[slug]`

**Goal:** Explain the innovation, its origin, process, evidence, and current state—not only showcase its image.

**Header and hero:**

- Back link `← Todos los proyectos`.
- Small metadata `AÑO / CATEGORÍA / EDICIÓN` where provided.
- Display project title at large scale and an understandable one-line summary.
- A compact sticker group for `Categoría`, `Etapa`, `Tema`.
- Wide main image (`16:9` or `3:2`) with optional tape-frame accent; credit if required.

**Suggested article order:**

1. **El reto** — problem, context, users / community / process affected.
2. **La propuesta** — solution, what makes it different, intended value.
3. **Cómo se desarrolló** — research, ideation, prototyping, implementation stages as applicable.
4. **El resultado** — what was built, observed, tested, or delivered; honest limitation if not validated.
5. **Evidencias** — photos, prototypes, demo video, materials, publications, documented metrics, citations where available.
6. **Equipo y contexto** — team, faculty, mentors, edition, partners, with consent and accurate roles.
7. **Estado actual** — clearly explain whether idea, prototype, validated, implemented, or completed.
8. **Recursos relacionados** — project demo, poster, article, repository link, project brief as available.
9. **Proyectos relacionados** — 2–3 linked items based on topic/category, excluding self.

For mixed project types, sections may be omitted if no data exists. **Never generate empty headings or fill missing content with invented copy.**

**Desktop layout:** article content on left (`~8/12`), concise sticky metadata sidebar on right (`~4/12`), followed by gallery and related projects. On mobile, metadata stacks directly after the summary.

**Evidence and impact:** Distinguish `Resultados obtenidos` from `Impacto esperado`. Display measured percentages only with source, measurement context, and period. Avoid a generic “+XX%” graphic unless the project provides verifiable data.

### 6.4 Collections `/colecciones` and details

Create folder-style editorial entries for cohorts, events, themes, and curated highlights. Example **types**: `Edición anual`, `Evento`, `Tema`, `Facultad`. A collection detail contains title, short editorial context, cover imagery, any verified event metadata, and a filtered project list using the standard card component. Collections are curated groupings; a project may belong to multiple collections.

### 6.5 About `/sobre-el-repositorio`

Use the reference's “About” scrapbook treatment for institutional storytelling. Cover repository objectives, who may be featured, what counts as an innovation project, curation/publication process, image and data attribution, how to report a correction, and a contact method. Avoid personal-profile content unless the institution explicitly wants an editorial team profile.

### 6.6 Optional submission `/participar`

Only implement if a real submission/review process exists. In the absence of a backend, present **publication guidelines and a verified contact route**, not a nonfunctional upload form. If enabled: validate inputs, describe moderation, get media/consent confirmation, support draft/review/publish, and do not publish private details by default.

---

## 7. Reusable UI component library

| Component | Purpose | Visual / interaction notes |
|---|---|---|
| `SiteHeader` | Global navigation | Compact border/bottom rule, active yellow tab, accessible mobile menu |
| `PaperCanvas` | Background layer | CSS ruled paper, no image dependency |
| `SectionHeading` | Titles + editorial annotations | Oversized display heading, optional mono eyebrow, small handwritten note |
| `FolderTab` | Nav or editorial section tab | Rectangular/clipped silhouette, semantic active state |
| `Sticker` | Taxonomy or short facts | Pastel irregular-edge label; text mandatory |
| `PaperPhoto` | Photo with tape effect | Actual image + optional caption/credit, decorative tape hidden from assistive tech |
| `ProjectCard` | Dense searchable browsing | Consistent aspect ratio, readable metadata, clear destination |
| `FeaturedProjectPanel` | Home spotlight | Large ink/yellow/blue panel, staggered tabs and photo |
| `FilterBar` | Search / sort / facets | Query-param synchronized, keyboard accessible, responsive |
| `ActiveFilterChip` | Applied filter | Labeled removable chip with visible clear control |
| `ProjectMetadata` | Taxonomy + factual info | Semantic definition list for detail page |
| `StatSticker` | Verified results | Number, unit, context, optional source; omit if unverified |
| `MediaGallery` | Case study evidence | Responsive images/video poster; captions; no autoplay |
| `CollectionCard` | Browse curated groups | Folder motif, cover image, short summary, project count |
| `RelatedProjects` | Continued discovery | Standard project cards, no duplicative variants |
| `EmptyState` | No results / missing content | Helpful explanation and reset action |
| `SiteFooter` | Identity and governance | Institutional credit, contacts, policy links |

### Component behavior constraints

- Reuse the same `ProjectCard` data contract across home, catalog, collections, and related projects.
- Centralize colors, tokens, and sticker variants; no per-page hard-coded random palettes.
- Keep heading hierarchy semantic: a single `h1` per page; `h2` for sections; `h3` for cards where appropriate.
- Do not rely on absolute positioning for core article content.
- Every interactive element needs default, hover, focus-visible, disabled (when applicable), and active states.
- Tap targets should be comfortably large (aim for at least `44 × 44px` when practical).

---

## 8. Content model: project data contract

Choose MDX/JSON, a CMS, or database records, but keep a stable **normalized schema** and content validation. Below is a TypeScript example, not a claim that these are existing university projects.

```ts
type ProjectStage =
  | "idea"
  | "prototype"
  | "validation"
  | "implementation"
  | "completed";

type InnovationCategory =
  | "technological"
  | "social"
  | "process"
  | "other";

type MediaItem = {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  width?: number;
  height?: number;
};

type ProjectLink = {
  label: string;
  url: string;
  kind: "demo" | "source" | "publication" | "video" | "document" | "other";
};

type Project = {
  id: string;                    // Stable ID
  slug: string;                  // Unique URL-safe slug
  title: string;
  shortDescription: string;      // 1–2 sentences, suitable for cards
  year: number;
  category: InnovationCategory;
  stage: ProjectStage;
  topics: string[];
  facultyId?: string;
  programIds?: string[];
  teamMembers?: { name: string; role?: string; publicConsent: boolean }[];
  mentors?: { name: string; role?: string; publicConsent: boolean }[];
  initiativeIds?: string[];     // Hackathon, rally, class, etc.
  collectionIds?: string[];
  featured?: boolean;
  publishedAt?: string;         // ISO date
  cover: MediaItem;
  gallery?: MediaItem[];
  challenge?: string;
  solution?: string;
  process?: string;
  results?: string;
  expectedImpact?: string;      // Distinct from measured results
  limitations?: string;
  links?: ProjectLink[];
  // Optional structured outcomes only when actual evidence exists
  metrics?: {
    label: string;
    value: string;
    context: string;
    source?: string;
  }[];
  visibility: "draft" | "review" | "public";
};
```

**Content requirements:** `id`, `slug`, `title`, `shortDescription`, `year`, `category`, `stage`, `topics`, `cover`, `visibility`. Public listing only displays records with `visibility === "public"`.

**Recommended authoring convention:**

```text
content/
  projects/
    ejemplo-proyecto.mdx
  collections/
    ejemplo-coleccion.mdx
public/
  projects/
    ejemplo-proyecto/
      cover.webp
      process-01.webp
      outcome-01.webp
```

**Example frontmatter (fictional placeholder; replace with verified content):**

```yaml
---
id: "demo-001"
slug: "ejemplo-innovacion"
title: "Ejemplo de innovación"
shortDescription: "Descripción breve del reto y la solución propuesta."
year: 2026
category: "social"
stage: "prototype"
topics: ["educacion", "inclusion"]
facultyId: "facultad-ejemplo"
collectionIds: []
featured: false
visibility: "draft"
cover:
  src: "/projects/ejemplo-innovacion/cover.webp"
  alt: "Descripción específica de la imagen cuando esté disponible"
---
```

Never promote this sample to public content. Slugs should remain stable; define redirects when a slug changes. Faculty/program labels should be looked up by canonical ID, not duplicated free-text variations.

---

## 9. Interaction and motion

The site should feel tactile, like flipping through an archive—not like a continuously animated landing page.

| Interaction | Recommended motion |
|---|---|
| Nav selection | Instant background change to yellow; optional `120ms` transition |
| Project card hover | Translate `-3px` vertically, deepen hard paper shadow, `160–200ms` |
| Sticker hover (if clickable) | Slight `1–2deg` rotation, `160ms`; not required for non-interactive labels |
| Featured folder transition | Subtle panel reveal / clipped-tab emphasis, `200–280ms` |
| Photo hover | Max `2deg` rotation or `1.02` scale; no hover requirement on touch |
| Page content entry | Optional fade + `8px` upward motion once; do not delay visible content |
| Filter updates | Update count/results with minimal reflow; preserve focus |

Respect `prefers-reduced-motion`. No automatic carousels, scroll hijacking, parallax-dependent content, constant bouncing stickers, or animation that prevents reading.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Responsive specifications

| Viewport | Layout and composition |
|---|---|
| `>= 1280px` | Full editorial hero; 3-column catalog; featured panels side by side or stacked editorially; metadata sidebar |
| `768–1279px` | 2-column grid; fewer floating images; compact filters; sidebar may become inline |
| `< 768px` | Single column; text-first hero; one decorative photo; scroll-safe tabs; collapsible filters; no overlapping essential content |

### Mobile rules

- Keep `h1` large but avoid line clipping and horizontal overflow.
- Decorative elements stay within the viewport; hide some entirely on small screens.
- Search input spans available width; filter trigger clearly shows active filter count.
- Project image ratio consistent; text and CTA always visible without hovering.
- Place the real project list early; don't make users scroll through multiple decorative hero collages.
- Sticky elements must not crowd the viewport or trap keyboard focus.

---

## 11. Accessibility, performance, and quality

### Accessibility

- Target **WCAG 2.2 AA**.
- Semantic landmarks (`header`, `nav`, `main`, `article`, `aside`, `footer`) and correct heading hierarchy.
- All project images have meaningful alt text; avoid descriptions like “image 1”. Decorative tape, graph-paper rules, arrows, and stickers without meaning are hidden from assistive tech.
- Visible focus ring, skip-to-content link, labeled controls, keyboard-operable filters, accessible dialogs if any.
- Expose search result count changes via a polite live region if results update dynamically.
- Do not embed important information inside images only. Provide captions/transcripts for video/audio and text alternatives for charts.
- Avoid tiny low-contrast type despite the reference's editorial micro-label look.

### Performance

- Implement paper texture, stickers, and tape with CSS/SVG; do **not** ship large raster backgrounds for notebook lines.
- Responsive image formats (`AVIF`/`WebP`) and `srcset`/sizes; define aspect ratios to avoid layout shifts.
- Lazy-load below-the-fold imagery; prioritize main hero/project cover image.
- Limit font requests/weights and avoid heavy animation dependencies when CSS works.
- For large catalogs, paginate or use server-side search/indexing. Do not preload every full-resolution project image.
- Set page title, metadata description, Open Graph image, canonical URL, and structured data where applicable.

### Content ethics

- Obtain relevant permission before publishing identifiable student photos/names or external partner information.
- Display credits and source details when appropriate.
- Mark unpublished/unfinished work accurately; distinguish concept, prototype, validation, and deployment.
- Do not fabricate user numbers, impact percentages, partnerships, awards, or testimonials.
- Provide a correction/contact process, particularly for public-facing project claims.

---

## 12. Starter CSS for visual motifs

This is a minimal implementation foundation. Component markup must still be semantic.

```css
:root {
  --paper: #FAF9F4;
  --paper-raised: #FFFDF7;
  --ink: #181818;
  --ink-soft: #575650;
  --rule: #E4E3DA;
  --border-strong: #272522;
  --yellow: #F5CD51;
  --blue: #6489EB;
  --blue-soft: #C9D6FB;
  --pink: #F477A5;
  --pink-soft: #FAD0DF;
  --green: #60C7A0;
  --green-soft: #C7EBDD;
  --sand: #F1E5C9;
  --tape: #D3E0F4;
  --focus: #2047C5;
}

* { box-sizing: border-box; }
body { margin: 0; color: var(--ink); background: var(--paper); }

.paper-canvas {
  background-color: var(--paper);
  background-image: repeating-linear-gradient(
    0deg, transparent 0px, transparent 31px,
    var(--rule) 32px, transparent 33px
  );
}

.nav-tab {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 14px;
  color: var(--ink);
  text-decoration: none;
  font: 600 0.75rem/1.1 "IBM Plex Mono", monospace;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.nav-tab[aria-current="page"] { background: var(--yellow); }
.nav-tab:hover { background: var(--sand); }
.nav-tab[aria-current="page"]:hover { background: var(--yellow); }

.sticker {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 13px;
  color: var(--ink);
  background: var(--yellow);
  font: 600 0.76rem/1.2 "IBM Plex Mono", monospace;
  clip-path: polygon(0 6%, 7% 2%, 18% 5%, 29% 1%, 41% 5%,
                     53% 2%, 65% 6%, 77% 2%, 89% 5%, 100% 2%,
                     98% 97%, 87% 93%, 75% 98%, 62% 95%, 49% 99%,
                     37% 95%, 24% 99%, 12% 95%, 1% 98%);
}
.sticker--blue { background: var(--blue-soft); }
.sticker--pink { background: var(--pink-soft); }
.sticker--green { background: var(--green-soft); }
.sticker--sand { background: var(--sand); }

.paper-photo {
  position: relative;
  padding: 9px 9px 25px;
  background: var(--paper-raised);
  border: 1px solid #dedbd2;
  box-shadow: 3px 6px 0 rgba(24,24,24,0.1);
}
.paper-photo img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}
.paper-photo::before {
  content: "";
  pointer-events: none;
  position: absolute;
  z-index: 1;
  top: -10px;
  left: 34%;
  width: 32%;
  height: 20px;
  background: rgba(211,224,244,0.8);
  transform: rotate(-4deg);
}

.project-card {
  background: rgba(255,253,247,0.92);
  border: 1px solid #dedbd2;
  box-shadow: 3px 4px 0 rgba(24,24,24,0.07);
  transition: transform 180ms ease, box-shadow 180ms ease;
}
.project-card:focus-within,
.project-card:hover {
  transform: translateY(-3px);
  box-shadow: 5px 7px 0 rgba(24,24,24,0.12);
}
.project-card__media { aspect-ratio: 4 / 3; overflow: hidden; }
.project-card__media img { width: 100%; height: 100%; object-fit: cover; }

:where(a, button, input, select, textarea):focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .project-card { transition: none; }
  .project-card:hover, .project-card:focus-within { transform: none; }
}
```

**Do not treat the snippet as a complete UI implementation.** Import fonts, build semantic components, and connect filters to actual project records.

---

## 13. Suggested code organization

Framework-agnostic concept; a React/Next.js + TypeScript + Tailwind implementation works, as does Astro + content collections. Pick one approach appropriate to the repository's publishing workflow. **The design spec does not require a particular framework or CMS.**

```text
src/
  app-or-pages/
    home
    projects-index
    project-detail
    collections-index
    collection-detail
    about
  components/
    layout/        # SiteHeader, SiteFooter, PaperCanvas
    editorial/     # SectionHeading, PaperPhoto, Sticker, FolderTab
    projects/      # ProjectCard, FeaturedProjectPanel, ProjectMetadata
    discovery/     # SearchInput, FilterBar, ActiveFilterChip, EmptyState
    media/         # MediaGallery, MediaCaption
  data/
    taxonomy.ts    # Categories, topics, faculty IDs, stage display labels
    projects.ts    # Content reading + validated queries
  styles/
    tokens.css
    paper.css
    components.css
  i18n/
    es.json
    en.json
content/
  projects/
  collections/
public/
  projects/
```

### Content retrieval functions

Implement consistent, testable functions such as:

```ts
getPublicProjects()
getProjectBySlug(slug)
getFeaturedProjects(limit)
searchProjects({ query, categories, topics, faculties, years, stages, sort, page })
getRelatedProjects(project, limit)
getCollections()
getCollectionBySlug(slug)
```

Prefer URL-driven filters, predictable sort behavior, and canonical category IDs. Avoid storing catalog logic inside presentational cards.

---

## 14. Launch checklist / acceptance criteria

### Visual fidelity

- [ ] Warm white ruled-paper background appears across the site, without competing with text.
- [ ] Bold condensed display typography creates a recognizable editorial hierarchy.
- [ ] Active navigation uses a clear yellow folder/tab treatment.
- [ ] Accent palette includes controlled yellow, pink, blue, and mint/green.
- [ ] Featured work uses at least one expressive ink/yellow folder-panel composition.
- [ ] Taped-photo and sticker components are reusable, not hard-coded per screen.
- [ ] Dense project grids stay organized, with readable content and consistent images.

### Functional repository

- [ ] Home links to a working project index and valid project detail pages.
- [ ] Search, sort, and filters work against real project data and survive refresh via URL state.
- [ ] Cards and collections reuse a normalized data model.
- [ ] Missing images/data and zero-result searches render coherent fallbacks.
- [ ] Project detail pages distinguish challenge, solution, process, outcomes, and evidence.
- [ ] Project status, team credits, and institution/initiative metadata are factual and validated.
- [ ] No placeholder projects or fabricated impact metrics are publicly visible.

### Responsive and accessible

- [ ] Mobile layout does not overflow or cover critical content with collage decorations.
- [ ] Keyboard navigation and focus states function on links, menu, filters, and media controls.
- [ ] Color contrast, text size, image alt text, and heading order pass accessibility review.
- [ ] Reduced-motion preferences are respected.
- [ ] Page speed is reasonable with optimized imagery and CSS-driven textures.

---

## 15. Ready-to-use implementation brief for an AI agent

> Build a responsive, content-driven university innovation project repository using `DESIGN.md` as the visual and functional specification. Recreate the **design language**, not the exact portfolio screenshots: lined cream notebook background, oversized black condensed headings, yellow folder tabs, subtle colored paper stickers, taped photos, editorial black/yellow feature panels, micro-labels, and intentional collage details. Make it feel like a **living archive of student and university innovation**, professional enough for an academic institution.
>
> Implement the home page, searchable/filterable projects catalog, individual project detail pages, collection pages, and about page using reusable components and a validated project schema. Prioritize project discovery, true content, credible outcomes, accessibility, responsive behavior, and performance. Use Spanish UI labels initially, and make text and institutional branding configurable. Do not fabricate projects or statistics. Deliver working interactions—not a decorative concept page.

---

**Design principle to preserve through all future iterations:**

> **An innovation repository should look like a place where ideas are explored, but behave like a place where knowledge can be found.**
