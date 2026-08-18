# DESIGN.md

The design system for shambhavijaipuriar.com. One source of truth for colour, type, spacing and components, plus a decision log recording every choice and why.

**Authority rule, as set by you:**
- **Your brand kit wins on colour and type.** Palette and typefaces come from `brand-guide.html` and are not up for renegotiation by a reference.
- **The references win on layout and feel.** Composition, rhythm, scale, motion and page structure are drawn from theolly.it, billchien.net and the six DESIGN files.

**Sources merged**

| Source | What it contributed |
|---|---|
| `brand-guide.html` | Colour, type, typographic law. Authoritative. |
| theolly.it | Chapter structure, display serif at 100px, long narrative scroll, scroll cue |
| billchien.net/studies | Numbered index, two-column work rows, 0.2s hover |
| designarestudeo.framer.website | Italic serif cut used for section headings, warm cream canvas, condensed light serif display at 90px |
| Airtree (DESIGN 11) | Section gaps 75–112px, monochrome logo strip, rationed accent |
| Ditto (DESIGN 9, 10) | Serif-display / sans-body role split, surface stacking without shadows |
| SVZ (DESIGN 8) | Letter-spacing as a load-bearing tool, ghost CTAs with ↗, accent as heartbeat |
| The1 (DESIGN 7) | Crushed display line-height, hairline dividers as section breaks, flatness |
| Fonts Ninja (DESIGN 6) | Single-accent discipline, one shadow token maximum, type as the subject |

---

## 0. The system in one paragraph

A warm paper canvas carries near-black type and exactly one red. An extra-condensed display serif, locked at weight 400, does every heading in uppercase and grows only by size. Inter Tight does everything else. There are no shadows, no gradients, and no second accent. Structure is drawn with 1px hairlines rather than cards or elevation. The page is quiet so the four projects can supply all the colour — and each case study is built as a chaptered narrative, numbered, with generous air between acts.

---

## 1. Colour — from your brand kit

Six colours. This is the whole palette.

| Name | Hex | Token | Role |
|---|---|---|---|
| Paper | `#F3F1EC` | `--paper` | Page ground, every page. Warm off-white, never pure white. |
| Ink | `#111111` | `--ink` | All headings and body copy. Nav and contact links. |
| Muted | `#767676` | `--muted` | Labels, captions, standfirsts, secondary values. Never body copy. |
| Rule | `#E0DDD3` | `--rule` | 1px dividers, card borders, table rows. Structure only. |
| Stage | `#EDEAE1` | `--stage` | Image and mockup beds. One step darker than paper, so a shot sits on something. |
| Cadmium red | `#D92E15` | `--red` | Accent, sparingly. Status dot, act numbers, quote rule, link hover. Never a background. |

### Surface stack

| Level | Name | Value | Use |
|---|---|---|---|
| 0 | Paper | `#F3F1EC` | Page canvas |
| 1 | Stage | `#EDEAE1` | Image beds, mockup grounds |
| 2 | White | `#FFFFFF` | Specimen panels and light cards only, where an image needs a true-white ground |
| 3 | Ink | `#111111` | Full-bleed inverted bands. Used once per page at most. |

### Rules

- The chrome is deliberately colourless. **The four projects supply all the colour**, through their own imagery and per-project accents.
- Red is punctuation, not paint. Act numbers, the status dot, the quote rule, link hover. **Never a background, never body text, never an icon fill.**
- Never introduce a second site-wide accent. If something needs emphasis, use size, weight or the red — not a new hue.
- Per-project accents (Lombardi's blues, SANAT's cocoa, XFC's purple) live **inside** their case study pages only, as swatches and section grounds. They never reach the nav, the footer, or any other page.

### Per-project accents, for reference

Declared locally on each case study page, never in the global stylesheet.

| Project | Colours |
|---|---|
| Lombardi | `#107EC1` `#FFCE40` · properties `#1CABB0` `#64973C` `#E8849D` |
| SANAT | `#73411F` `#C8972A` `#D96704` `#91D5D9` `#EBEBEB` |
| XFC | `#6C40DD` `#5FC2C6` · dark ground `#050510` |
| BoopShaillyBoop | `#930F23` and its gradient `#9C1428 → #6B0B1B` |

---

## 2. Type — from your brand kit

Two families. No third.

### Noto Serif Display Extra Condensed — display only

Self-hosted from `Assets/fonts/*.woff2`. Static extra-condensed instance at `font-stretch: 62.5%`.

| Property | Value |
|---|---|
| Weights | 400 roman, 400 italic. **Never moves.** |
| Case | Uppercase, except italic |
| Tracking | `-0.01em` roman, `-0.005em` italic |
| Line height | 0.98 at h1, 1.0 at h2, 1.2 italic |

### Inter Tight — everything else

Google Fonts. Weights 400 · 500 · 600 · 700 · 900.

| Weight | Use |
|---|---|
| 400 | Body copy, values, captions |
| 500 | Nav, meta labels, act numbers |
| 600 | Eyebrows, organisation names, wordmark |
| 700 | Swatch names, tier names, table keys |
| 900 | Statement lines and stats only, tracking `-0.03em` |

### Type scale

Golden-ratio steps down from 92px, as already documented in `case-sanat.html`.

| Role | Size | Clamp | Face | Line height | Tracking |
|---|---|---|---|---|---|
| display | 92px | `clamp(52px, 6.4vw, 92px)` | Display | 0.98 | -0.01em |
| heading | 57px | `clamp(34px, 4vw, 57px)` | Display | 1.0 | 0 |
| italic | 44px | `clamp(30px, 3.2vw, 44px)` | Display italic | 1.2 | -0.005em |
| statement | 35px | `clamp(24px, 2.5vw, 35px)` | Inter Tight 900 | 1.15 | -0.03em |
| quote | 31px | `clamp(23px, 2.4vw, 31px)` | Display italic | 1.35 | -0.005em |
| standfirst | 24px | `clamp(19px, 1.7vw, 24px)` | Inter Tight 400 | 1.4 | -0.015em |
| body | 17px | — | Inter Tight 400 | 1.6 | — |
| value | 14px | — | Inter Tight 400 | 1.5 | — |
| label | 12px | — | Inter Tight 500, uppercase | 1.5 | +0.06em |
| eyebrow | 12px | — | Inter Tight 600, uppercase | 1.5 | +0.08em |

### Two families. That is the entire list.

**Noto Serif Display Extra Condensed** and **Inter Tight**. Nothing else enters the codebase, from any reference, any pasted component, or any convenience.

Rejected by name, so nobody re-adds them from a reference: Plus Jakarta Sans, ITC Garamond, Afacad, DM Sans, Libre Baskerville, Fragment Mono, Manuka, Faktum, Basis Grotesque Mono Pro, Saol Display, Pitch, National, KH Teka, Aeonik, Prody, SuisseIntl, Hedvig Letters Serif, Inter (plain), Roboto, Playfair Display, Suez One, Prompt.

Where a reference uses a font role you do not have, solve it inside the two families:

| Reference wants | You use |
|---|---|
| Monospace numerals for act numbers and stats | Inter Tight 500 with `font-variant-numeric: tabular-nums` |
| A third display face for spectacle moments | Size, or the italic cut |
| A light condensed serif for section headings | The italic cut of the display face, per D-22 |
| A geometric sans for labels | Inter Tight 500 uppercase, +0.06em |

### Typographic law

These are your existing rules, carried over unchanged.

1. **Only size moves on the display face.** Weight stays 400 everywhere.
2. **Caps carry the presence** that extra weight would otherwise supply.
3. **Italic is never caps.** It is the quiet register — vision lines, asides, pull quotes.
4. **Statement lines stay Inter Tight 900.** The display face is for headings only.
5. `text-wrap: balance` on every heading, `pretty` on every paragraph.
6. **No widows or orphans** at any breakpoint, not just desktop.
7. **No em dashes anywhere**, including alt text and captions.
8. **Letter-spacing is structural, not decorative.** Negative on display (-0.01em), positive on small uppercase labels (+0.06 to +0.08em). Adopted from SVZ, and already how your pages behave.

> ⚠︎ **Rule 7 conflicts with COPY.md.** The copy draft uses em dashes throughout. Your brand guide bans them outright. They need converting before build — most become commas, colons, or full stops, and a few become the middle dot `·` you already use in meta lines. Flag if you'd rather relax the rule instead; it's your rule and either answer is fine, but the two files can't both be right.

---

## 3. Spacing and shape — from the references

### Base unit: 4px

| Token | Value | Use |
|---|---|---|
| `--sp-xs` | 12px | Inside labels, tight stacks |
| `--sp-s` | 20px | Paragraph gaps, element spacing |
| `--sp-m` | 32px | Block separation inside a section |
| `--sp-l` | 56px | Sub-section gaps |
| `--sp-xl` | 96px | Act and section gaps |
| `--gut` | 10px | Mosaic and image-grid gutter. Deliberately tight. |
| `--pad` | 72px desktop / 24px ≤1000px | Page side padding |

### Layout

| Property | Value |
|---|---|
| Page max-width | **1440px**, all pages |
| Section gap | 96px (64px below 1000px) |
| Split columns | `46fr / 54fr`, reversible, 48px gap |
| Image gutter | 10px |
| Body measure | 680px max on standfirsts, ~70ch on body |

> Airtree and The1 both sit at 1280–1440px with 75–112px section gaps. Your case studies already use 1440px and 96px acts; the index and brand guide use 1240px. **Unified to 1440px** — see decision log D-04.

### Border radius

Near-sharp. This system is editorial, not soft-modern.

| Element | Value |
|---|---|
| Panels, specimen cards, swatches | 3px |
| Image tiles and mosaics | 0px |
| Pills (nav pill, tags) | 9999px |
| Buttons | 3px |

> The1 uses 0px cards and 100px pills; SVZ uses 3px and 8px. Airtree and Fonts Ninja use 32–37px, which belongs to a rounder, friendlier language than an extra-condensed serif can carry. See D-05.

### Shadows

**One token, used only on the floating page-nav pill.**

```
--shadow-pill: 0 6px 20px rgba(0,0,0,.10);
```

No shadows on cards, images, buttons or sections. Depth comes from the Stage surface and hairline rules. Every reference agrees on this.

---

## 4. Motion

| Name | Value | Use |
|---|---|---|
| Reveal | `opacity .6s ease, transform .6s cubic-bezier(.2,.7,.2,1)` | Section entry, 14px rise, IntersectionObserver at 0.12 threshold, fires once |
| Chrome | `.35s cubic-bezier(.4,0,.2,1)` | Page-nav compaction on scroll |
| Hover | `.2s ease` | Links, arrows, nav items |
| Image | `transform .6s cubic-bezier(.2,.7,.2,1)`, scale 1.03 | Card hover only |

Rules:
- Hover states shift **colour to red or position**, never scale text, never change background.
- Reveal animations fire once and unobserve. Nothing re-animates on scroll-up.
- Respect `prefers-reduced-motion`: disable reveal and image transforms, keep instant states.

---

## 5. Components

### Top navigation
Flush on paper, no border, no shadow. Name at 14px Inter Tight 600 left. Links at 14px 400 right, 36px gap, hover to red. Order: Work · About · Resume · Archive · Contact.

### Page nav pill — case studies only
Fixed, centred, 22px from top. Circular 40px back-arrow, then a white pill with 1px rule border, 100px radius, holding 12px 500 links. Active item takes a Stage background. On scroll-down the pill compacts to 3px padding and goes 72% translucent with a 10px backdrop blur. Scroll-spy highlights whichever section crosses the middle band.

### Eyebrow
12px Inter Tight 600, uppercase, +0.08em, muted. Sits above a heading, never below.

### Act marker
Red act number at 12px 500 +0.06em, then the display heading, baseline-aligned, 24px gap, with a 1px rule border beneath and 20px padding under it. This is the chapter device — adopted from theolly.it's *CAPITOLO* pattern, drawn in your own colours.

### Headline morph — Home hero only

The h1 begins set in Inter Tight 900, a wave passes through it, and it resolves into Noto Serif Display Extra Condensed. Adapted from the Fonts Ninja hero.

**Why it earns its place here.** On Fonts Ninja the morph is decoration on a wordmark. On your site it is the type system introducing itself: your two families are a grotesque and a condensed display serif, and the morph is literally one becoming the other. It also acts out the headline. "The niches hate to see me coming" is a claim about range, and the line demonstrating range in the first two seconds is a better argument than the sentence alone.

**Sequence**
1. Rest state: Inter Tight 900, `-0.03em`, ink.
2. Wave enters left to right over roughly 900ms, displacement peaking near 40 and settling to 0.
3. Cross-fade to Noto Serif Display Extra Condensed 400 uppercase at `clamp(52px, 6.4vw, 92px)`, `-0.01em`, line height 0.98.
4. A red `#D92E15` ghost offsets by 2 to 4px at the peak of the wave and retreats to nothing. This is the only moment red moves anywhere on the site.
5. Final state is the serif. It does not loop.

**Build notes**
- Real HTML `<h1>` carrying the actual text, so it stays selectable, indexable and readable by screen readers. The headline holds the page's search terms and must not become an image or bare SVG.
- Displacement via an inline `<svg>` filter (`feTurbulence` + `feDisplacementMap`) applied to the h1 through `filter: url(#morph)`. Animate the `scale` attribute in JS.
- Cross-fade two stacked spans of identical text, one per family, so no glyph reflow mid-animation. The second span is `aria-hidden`.
- Fires once on load. Optional re-trigger on click, never on scroll and never on a loop.
- `prefers-reduced-motion`: skip the animation entirely and render the serif final state. No wave, no red ghost.
- SVG filters on live text are expensive. Confine to this one element, drop the filter below 640px and cross-fade only, and profile before shipping.
- If the filter fails to load, the fallback is the serif final state. Never leave the sans as the fallback; the serif is the real headline.

### Tilt-in act — case studies only

Each act is a full-bleed section that enters rotated and straightens as it scrolls into place, stacking over the act before it. Structural donor: the pasted `story-scroll`. Its rotation-on-scroll and z-stacking are kept; GSAP, ScrollTrigger, pinning and Plus Jakarta Sans are not.

**Behaviour**
- Act 01 sits flat. Every act after it starts at 30° about its bottom-left corner and rotates to 0° as it scrolls from the bottom of the viewport to roughly the top quarter.
- Rotation is tied to scroll position, not to a timer, so the reader controls it.
- Each act sits one z-index above the last, so it covers rather than pushes.

**Grounds**
Each act takes a ground from **that project's own palette**, which D-10 already permits inside a case study. Never the shared chrome colours, and never red.

| Project | Act grounds |
|---|---|
| Lombardi | `#1CABB0`, `#107EC1`, `#FFCE40` with ink type |
| SANAT | `#73411F` with paper type, `#C8972A` with ink type, `#D96704` unused |
| XFC | `#6C40DD` with paper type, `#050510` unused |
| BoopShaillyBoop | `#930F23` and its `#9C1428`→`#6B0B1B` gradient, with paper type |

Every pairing needs a contrast check before it ships. `#FFCE40` and `#91D5D9` take ink type only; white on them fails. **Measured 18 Aug, D-64:** the blanket "paper type" originally written above for SANAT was wrong for `#C8972A` — at 2.35:1 paper fails outright; it needs ink, same failure mode `#FFCE40` already carries.

**No pinning.** The donor pins each section with ScrollTrigger. Do not. Your case studies run a scroll-spy pill using IntersectionObserver with a `-35% 0px -55%` root margin, and pinning remaps scroll geometry underneath it, which desyncs the active-section highlight. Rotation and z-stacking give the effect; pinning is what breaks the nav.

**Build notes**
- No GSAP. `animation-timeline: view()` where supported, with a `requestAnimationFrame` scroll handler as the fallback. Both drive one `transform: rotate()` on the act's inner wrapper, `transform-origin: bottom left`.
- `overflow-x: hidden` on the page. A 30° rotation throws corners well outside the viewport.
- `prefers-reduced-motion`: no rotation at all. Acts render flat and stacked, colour grounds intact.
- Type never changes. Act headings stay in the display face, body stays Inter Tight, sizes stay on the scale. The tilt moves the section, not the typography.
- Watch the cost on long pages. SANAT is the longest case study on the site; profile it before the others.

> The tilt is the one device on this site that is decoration rather than structure. That is a fair thing to spend once, on the pages a visitor has already chosen to enter, and it suits a portfolio claiming range. It would be wrong on Home, About, Work, Resume or Contact, where the job is orientation rather than immersion.

### Arc morph — Archive only

The Archive opens with its images arranged in a ring that unfurls into a shallow arc as you scroll. Structural donor: the pasted `scroll-morph-hero`. Its circle-to-arc interpolation and its entry sequence are kept. Its scroll hijacking, its card size, its flip and framer-motion are not.

**Why it suits Archive and nowhere else.** The Archive is a loose collection with no hierarchy and no argument to make. A grid implies ranking and completeness; an arc you scrub through implies neither. It is also the one page where playfulness costs nothing, because nobody is being asked to make a decision on it.

**Sequence**
1. Images enter scattered and faded, then settle into a ring at the centre of the first viewport.
2. As the page scrolls, the ring interpolates into a shallow arc across the lower half, cards growing as they go.
3. Continued scroll rotates the arc, bringing later images through the centre.
4. Below the arc, the Archive's own sections (Words, The making, Photographs, Experiments) follow as ordinary page content.

**Real scroll, never virtual**

> ⚠︎ The donor attaches a `wheel` listener calling `preventDefault()` and drives the animation from a private counter. **Do not.** The reader scrolls and the page does not move, and they cannot reach the rest of Archive. Drive every stage from the document's own scroll position, so the page keeps behaving like a page. The arc occupies the first viewport and hands over normally once passed.

**Card size**

140×190 desktop, 96×130 below 1000px. The donor's 60×85 is too small to read a photograph, and this page exists to show photographs.

**Entrance, restored to three stages.** Scatter (faded in, no text) settles into a line (no text), which settles into the ring — and only once the ring has formed does "Side quests" fade in at its exact centre, in the italic display cut per D-22. As scroll then morphs the ring into the arc, that same text travels from centre to top-centre, landing above the crown as a heading once the arc is fully formed. The arc performs its own heading reveal rather than sitting under a static one. No text appears anywhere before the ring completes, and no page heading sits above the animation at all.

**Behaviour**
- Hover, focus, **or click** reveals a `--ink` scrim at 70% carrying a real two-line caption (title line + description line), same treatment as the project grid. Click was added because touch has no hover at all — tapping toggles the reveal directly, no separate tap-to-open step.
- No flip to a "View Details" back face. There is nowhere to go; these are images, not links.
- Mouse parallax kept at a much smaller amplitude, ±30px rather than ±100px.

**Phones: tested, and the answer is no, not at 18 cards.**

> ⚠︎ You asked to actually try the circular motion on a phone rather than assume it away. Done: the 640px width cutoff was removed and the arc measured directly at 375px, using each card's real bounding box rather than eyeballing it.
>
> Both states are legible failures. In the resting ring, 36 of 153 card pairs meaningfully overlap. In the formed arc, 45 of 153 pairs overlap **and two cards are pushed fully off the visible edge.** The maths is correct — the ring radius and arc geometry scale down exactly as specified — the problem is that 18 simultaneous cards do not fit a 375px circumference at any legible size. Shrinking the cards further doesn't fix it; the fix would be showing fewer cards at once on narrow screens, a materially bigger change than tuning a size tier.
>
> The width cutoff is back on the evidence, restoring D-45. A 480px card-size tier is still sitting in the CSS in case a future windowed variant wants it, but it's inert until that variant exists.

**Count**

Works with 12 to 24 images; the arc spread and angular step recalculate from the count. Fixed at 20 in the donor. Pending your images.

**Build notes**
- No framer-motion. `requestAnimationFrame` reading `scrollY`, or CSS `animation-timeline: view()` where supported.
- Radius 0px, per D-05. No shadows, per D-09.
- `prefers-reduced-motion`: no scatter, no morph, no parallax. Render the images as a plain mosaic and skip the arc entirely. The donor has no reduced-motion path at all.
- Images stay in DOM order as real `<figure>` elements with real captions. The arc is a visual arrangement laid over honest markup, so keyboard order, screen readers and search all still work.
- Alt text comes from the captions. The donor's `hero-${index}` is meaningless and must not ship.
- Below 640px, drop the arc entirely and use the mosaic. Twenty spring-animated absolutely positioned elements is a poor trade on a phone.

> ⚠︎ **Three showpieces on one site.** This is now the third bespoke motion piece, after the headline morph and the tilt acts. Each is defensible alone. Together they push against a system whose stated character is flat, calm and editorial, where type does the work. Worth deciding deliberately rather than by accumulation. If one has to go, this is the least costly to lose, because Archive is the page you described as mostly for yourself.

### Statement line
Inter Tight 900 at `clamp(24px, 2.5vw, 35px)`, -0.03em, line-height 1.15. The loudest non-heading element. One per section maximum.

### Standfirst
`clamp(19px, 1.7vw, 24px)`, Inter Tight 400, line-height 1.4, -0.015em, muted, max-width 680px. Sits directly under an h1.

### Meta block
Column pairs of a 12px uppercase muted label above a 14px value. Flex-wrapped, 24px row / 48px column gap, 200px minimum column.

### Proof strip
Sits above the fold on a case study, before the brief. Inter Tight 900 numerals at 22px with tabular numerals, 12px muted label beneath, separated by a 1px rule above. Leads with what happened before explaining how it was made.

### Split
`46fr / 54fr` grid, 48px gap, `align-items: start`, reversible with `.rev`. Collapses to one column at 1000px. The workhorse layout for text-beside-evidence.

### Mosaic
CSS grid, 10px gutter, Stage background behind each tile, `object-fit: cover` by default and `contain` on a `.fit` modifier. Aspect ratio is set on the **container**, not the tiles, so mixed source ratios resolve to one clean row.

### Project grid, expand to centre

The four project tiles. Structural donor: the pasted `LayoutGrid`, this time kept close to its actual behaviour.

**Layout: uneven, three columns**

Not four equal cells. Narrow cells are square, wide cells are 2:1, which falls out of a three-column grid naturally.

```
row 1   [ Lombardi  1:1 ] [ SANAT              2:1 ]
row 2   [ BoopShaillyBoop      2:1 ] [ XFC     1:1 ]
```

Reading order is unchanged from D-01: Lombardi, SANAT, BoopShaillyBoop, XFC. Widths alternate narrow-wide then wide-narrow. `--gut` 10px, collapsing to one column at 1000px.

Lombardi leads by position and SANAT dominates by area, which splits the two jobs sensibly: Lombardi carries the numbers and is read first, SANAT is the most striking image and holds the eye longest.

**Images**

| Cell | File | Native | Crop |
|---|---|---|---|
| Lombardi 1:1 | `Assets/lombardi keys.PNG` | 1024×1024 | **None.** Already square. All three keycards survive, which matters because "one mark, three properties" is what the image is for. |
| SANAT 2:1 | `Assets/SANAT/hero-lifestyle-render.png` | 1536×1024 | To 2:1, biased upward so the leather handle at the top of the tower is not clipped. Trim from the table, not the handle. |
| BoopShaillyBoop 2:1 | `Assets/BoopShaillyBoop/landing page laptop mockup centred.png` | landscape | To 2:1. Already the image on the current site. |
| XFC 1:1 | `XFC Practice Kit 2026-27.png` | 1920×1080 | **x 0 to 1080.** The photo is a 1080×1080 square sitting on a 1920×1080 canvas with the right 840px solid black. Cropping the black off yields the square exactly. |

Move the XFC file into `Assets/XFC/` at build time rather than leaving it in the project root.

Container-level aspect ratios, per the mosaic rule: the cell defines the shape, the image fills it. Both wide images are natively landscape and both narrow images are natively square, so nothing is forced.

**Behaviour**
- **Rest.** Image fills the cell. Title and tag line sit below it, always visible.
- **Click a tile.** It animates from where it sits to the centre of the viewport and enlarges. A dark scrim fades over it and the project's text appears on top. The rest of the page dims behind.
- **Click again, anywhere on the expanded tile.** Opens that case study.
- **Click outside, or press Escape.** Closes and the tile animates back to its place in the grid.

> ⚠︎ **This puts one extra click between a visitor and the work.** The expansion is a visible, deliberate response so nobody reads it as a failed click, but it is still a step. Mitigated by making the *entire* expanded tile the link, not a small "read more" target, so the second click needs no aim. Worth watching once it is real.

**The scrim**

`--ink` at **70%**, covering the expanded tile. Not pure black; `#111111` keeps the palette's warmth.

> **70%, not 60%.** The scrim must stay legible over four very different images, including the bright yellow BoopShaillyBoop laptop and the near-white regions of the SANAT shot. Measured against the worst case, a pure white region of a photo:
>
> | Scrim | Resulting ground | Contrast with `--paper` text |
> |---|---|---|
> | 60% | `#707070` | 4.29:1, fails AA for body text |
> | 65% | `#646464` | 5.1:1, passes with no margin |
> | 70% | `#585858` | 6.07:1, passes comfortably |
>
> 65% is the floor. 70% is the spec.

**Revealed content**

| Element | Type |
|---|---|
| Project name | Display face, uppercase, `clamp(34px, 4vw, 57px)`, `--paper` |
| One-liner | Inter Tight 400, 17px, `--paper` |
| Proof figure | Inter Tight 900, 22px, `--paper`, tabular numerals |
| Link cue | Inter Tight 500, 12px, uppercase, +0.06em, `--paper` at 70% |

Bottom-aligned, 32px padding.

**Build notes**
- FLIP, not a modal. Measure the tile's rect, move it to centre with a `transform`, animate the transform to zero. The tile never leaves the DOM, so nothing reloads and the image never re-requests.
- 0.4s on `--ease-reveal` for the move, scrim and text fading in over the last 0.2s so text never travels while unreadable.
- Page dim behind: `--ink` at 30%, click-to-close, `pointer-events` off when closed.
- Escape closes. Focus returns to the tile that was opened.
- The tile is a real `<a>` to the case study, so it works with JavaScript disabled and opens directly. The expand behaviour is progressive enhancement layered on top.
- `prefers-reduced-motion`: no travel. The scrim and text appear in place, and the tile stays where it is.
- Radius 0px, per D-05.
- Only one tile open at a time.

### Superseded: project card, flip and hover-scrim

Two earlier versions of the above, kept only so the reasoning is not lost. **Neither is built.** The first turned the tile on its Y axis to a separate back face; dropped because the same photo on both faces makes the rotation read as a glitch. The second faded a scrim up in place on hover; dropped 18 Aug when you chose the donor's own expand-to-centre behaviour instead. Hover is also unavailable on touch, which the expand version does not care about.

Original note follows.

**Behaviour**
- **Rest.** Image fills the card. Title and tag line sit below it, always visible.
- **Hover or keyboard focus.** A dark scrim fades up over the same image, and the project's one-liner, its single strongest proof and a "Read the case study" cue fade in on top of it.
- **Click or Enter.** Navigates to that case study. The card is a real `<a>` wrapping the whole tile.
- **Touch.** No hover exists, so on pointer-coarse devices the one-liner renders statically beneath the tag line instead. Never a tap-to-reveal-then-tap-to-open pattern; it costs a tap and users read the first tap as a failed click.

**The scrim**

`--ink` at **70%**, covering the whole tile. Not pure black: `#111111` keeps the warmth of the palette, and pure `#000` reads cold against paper.

> ⚠︎ **70%, not 60%.** The scrim has to stay legible over four very different images, including the bright yellow BoopShaillyBoop laptop and the near-white regions of the SANAT shot. Measured against the worst case, a pure white region of a photo:
>
> | Scrim | Resulting ground | Contrast with `--paper` text |
> |---|---|---|
> | 60% | `#707070` | 4.29:1 — **fails** AA for body text |
> | 65% | `#646464` | 5.1:1 — passes, no margin |
> | 70% | `#585858` | 6.07:1 — passes comfortably |
>
> 65% is the floor. 70% is the spec. Below that, text over a bright photo region becomes unreadable and the card fails accessibility.

**Revealed content**

| Element | Type |
|---|---|
| One-liner | Inter Tight 400, 17px, `--paper` |
| Proof figure | Inter Tight 900, 22px, `--paper`, tabular numerals |
| Link cue | Inter Tight 500, 12px, uppercase, +0.06em, `--paper` at 70% |

Content is bottom-aligned with 24px padding, so it sits away from the focal point of each photo.

> **No 3D rotation.** An earlier version specced a Y-axis flip. With the same image on both faces the rotation mirrors the photo mid-turn and lands on itself, which reads as a glitch rather than a reveal. A scrim fading up over the still image is what the interaction actually is. It is also faster, needs no `preserve-3d`, and degrades to nothing on reduced motion.

**Back-face content, from COPY.md**

| Project | One-liner | Proof |
|---|---|---|
| Lombardi Hotels | One identity across three Italian hotels, and a 102-year-old woman who became the face of it. | 673 Italian reservations |
| SANAT | A 400-year-old Saharanpur wood carving tradition, repackaged as a building you can carry home. | Built under the UP Government's ODOP initiative |
| BoopShaillyBoop | An art mail club I designed, built and ship myself. One envelope a month, made by hand. | Designed, built and shipped solo |
| XFC Cricket | A winning practice kit built from the shape of a team huddle. Going into production. | Winner, open competition, Dubai |

**Grid**
Two by two, equal cells, `--gut` 10px. Equal weight is deliberate: the four projects are presented as peers, and `md:col-span-2` asymmetry inherited from the donor would imply a ranking the page does not intend. Collapses to one column at 1000px.

**Build notes**
- Pure CSS opacity transition on the scrim layer and its content. No JavaScript, no framer-motion, no 3D transforms.
- 0.3s on `--ease-reveal`. Faster than the site's 0.6s section reveal, because this responds to a pointer and must not feel laggy.
- The revealed text lives in the DOM at all times at `opacity: 0`, so one-liners and proof are readable by screen readers and indexable regardless of hover state.
- `:focus-visible` triggers the same reveal as `:hover`. A keyboard user must not lose the content.
- `prefers-reduced-motion`: scrim and text appear instantly, no fade.
- Radius 0px on the image tile, per D-05.
- The scrim is a pseudo-element, not a second `<img>`. Same asset, no extra request.

### Work card
Image on Stage with a 1px rule border, 4:3. Title in the display face at 20px uppercase, tag line at 12px muted on the same baseline, 14px above. Hover scales the image to 1.03 and turns the title red.

### Pull quote
Display italic at `clamp(23px, 2.4vw, 31px)`, 3px red left border, 26px left padding, max-width 820px. Attribution beneath at 12px Inter Tight 500 muted.

### Stat
Inter Tight 900 at `clamp(26px, 3vw, 40px)`, -0.02em, with a 12px muted label beneath, max-width 170px. Auto-fit grid, 140px minimum, 28px gap.

### Ghost link — the only CTA
No filled buttons anywhere. Text at 14px Inter Tight 500, ink, with a trailing arrow, hover to red. Adopted from SVZ: calls to action read as editorial lines, not UI controls.

### Hairline divider
1px `--rule`, full content width, no padding. The line is the break. From The1.

### Footer
1px rule top, 40px padding, 12px muted. Email link at 14px 600 with a 1px underline that turns red on hover.

---

## 6. Do's and don'ts

### Do
- Keep the display face at weight 400 and let size alone carry authority.
- Use red for act numbers, the status dot, quote rules and link hover — four places, nowhere else.
- Draw structure with 1px `--rule` hairlines rather than cards, borders or elevation.
- Put every image on `--stage`, never on paper and never on white, so shots sit on something.
- Set aspect ratio on mosaic containers so mixed image ratios resolve to one clean edge.
- Give acts 96px of air. The system reads as editorial because it breathes.
- Track small uppercase labels out to +0.06em and display type in to -0.01em.
- Let each project's own palette appear inside its case study and nowhere else.

### Don't
- Don't add a second site-wide accent colour, ever.
- Don't use red as a background, a body colour, or an icon fill.
- Don't add box-shadows or gradients to cards, images or buttons. One shadow token exists, for the page-nav pill.
- Don't introduce a third typeface.
- Don't bold the display face, and don't set it below 34px — under that it stops reading as display.
- Don't use em dashes anywhere, including alt text and captions.
- Don't round anything past 3px except pills.
- Don't let a heading or paragraph end on a widow at any breakpoint.
- Don't dress the site chrome in any single project's palette.

---

## 7. Decision log

Every design choice, with its reason. Append here as we build; never delete an entry, supersede it.

| ID | Date | Decision | Why | Status |
|---|---|---|---|---|
| D-01 | 18 Aug 2026 | Palette and typefaces taken wholly from `brand-guide.html`; references contribute nothing to colour or type | Your instruction. Also correct on the merits — the kit is already coherent and already matches what you're drawn to. | Locked |
| D-02 | 18 Aug 2026 | Layout, rhythm, scale and motion drawn from the references | Your instruction | Locked |
| D-03 | 18 Aug 2026 | Red stays punctuation. It is never a background or a display-heading colour | theolly.it sets 100px headings in red, and it works there because red is that brand's identity. Here the chrome must stay colourless so four projects can supply colour without clashing. Your brand guide already records this, including that cream-and-red was tried and rejected for being BoopShaillyBoop's palette. | Locked |
| D-04 | 18 Aug 2026 | Page max-width unified to 1440px | Case studies use 1440px, index and brand guide use 1240px. Inconsistent. 1440 matches The1 and gives the display face room to run. | Locked |
| D-05 | 18 Aug 2026 | Radius stays near-sharp: 3px panels, 0px image tiles, pills only for the nav pill | Airtree's 37px and Fonts Ninja's 32px belong to a soft, friendly language. An extra-condensed serif in uppercase is the opposite register; large radii would fight it. The1 (0px) and SVZ (3–8px) are the right neighbours. | Locked |
| D-06 | 18 Aug 2026 | No filled buttons. Ghost text links with arrows are the only CTA | From SVZ. Suits a portfolio where the action is "read on" or "email me", neither of which needs a button. Keeps red scarce. | Locked |
| D-07 | 18 Aug 2026 | Chapter/act structure adopted for case studies: red numeral, display heading, hairline beneath | Merges theolly.it's CAPITOLO device with billchien's numbered index. Already how your four case studies are built, so this formalises rather than changes. | Locked |
| D-08 | 18 Aug 2026 | Proof strip sits above the fold on case studies | Lead with what happened, not just what was made. A recruiter shouldn't have to reach the bottom to learn the work succeeded. | Locked |
| D-09 | 18 Aug 2026 | One shadow token, on the page-nav pill only | Every reference rejects elevation. The pill floats over content and needs to separate from it; nothing else does. | Locked |
| D-10 | 18 Aug 2026 | Per-project accent palettes stay inside their case study pages | Keeps the shared chrome neutral and stops one client's brand colouring the whole site. | Locked |
| D-11 | 18 Aug 2026 | Section gap set to 96px desktop, 64px below 1000px | Airtree uses 75–112px, your pages already use 96px. Confirms existing behaviour rather than changing it. | Locked |
| D-12 | 18 Aug 2026 | Em dashes banned, per brand guide rule 7. COPY.md converted the same day | Your existing rule, reaffirmed. Quote attribution lines keep their leading dash because four are already live on the case study pages and read as typographic convention rather than prose punctuation. | Locked |
| D-14 | 18 Aug 2026 | Archive uses the mosaic: grid on Stage, container-level aspect ratios, 10px gutter | Approved by you. Also the only component that absorbs mixed image ratios cleanly, which an archive of unrelated photos needs. | Locked |
| D-15 | 18 Aug 2026 | Dark mode wanted but deferred, not built now | Your call on priority. Recorded so it isn't lost. When built: invert around Ink as canvas, Paper as type, red unchanged. No hooks or dual tokens in this build. | Deferred |
| D-16 | 18 Aug 2026 | Home h1 gets the sans to serif morph, adapted from Fonts Ninja | Your request. Earns its place because your two families are exactly a grotesque and a condensed display serif, so the effect is the type system introducing itself rather than borrowed decoration. It also acts out a headline that claims range. | Locked |
| D-17 | 18 Aug 2026 | No full stop on the headline | Your call, closing the craft flag left open in HANDOFF §19. Correct: at 92px in condensed caps an isolated terminal period reads as a stray mark, with no lowercase nearby to anchor it. | Locked |
| D-18 | 18 Aug 2026 | Case studies use the five act structure from the built pages. The two act spine is retired | Your call. The two act spine ("I designed it" / "I built it, warts and all") is not operational anywhere in the built HTML, and the five pill nav is. Supersedes HANDOFF §3. | Locked |
| D-19 | 18 Aug 2026 | Home closing reworded to satisfy the dual audience rule | "Currently looking" was employment-only and wrote clients out, the same failure caught in HANDOFF §19. Fixed by HANDOFF's own remedy: make the work the subject, then name all three arrangements. | Locked |
| D-20 | 18 Aug 2026 | Assets live at `D:\Portfolio Website prettier\Assets`, 248 files including both font cuts | You placed them. Project is self-contained. Supersedes Q-04. | Locked |
| D-21 | 18 Aug 2026 | About rebuilt as a horizontal scroll-snap card row. Swipe, keyboard and trackpad driven, no library | Your call. Reuses the mosaic mechanics already approved, works on mobile without a stacked-deck fallback, and fixes the "visual-led, text-light" tension the four-paragraph About was pushing against. | Locked |
| D-22 | 18 Aug 2026 | Italic display cut promoted from pull quotes to section headings | Approved by you. All three site references treat the italic as its own register; your brand guide already calls it "the quiet register" but only spent it on quotes. Gives a third voice you already own. Italic is never caps, per type law 3. | Locked |
| D-23 | 18 Aug 2026 | Pasted components are structural donors only. Skeleton from the component, skin from DESIGN.md, words from COPY.md | Your rule, recorded in `CLAUDE.md`. A pasted prompt is not authorisation to change stack or to build. | Locked |
| D-24 | 18 Aug 2026 | Home project cards flip on hover to reveal details, and navigate on click. Built in CSS, not framer-motion | Your call on behaviour. Rebuilt from the LayoutGrid donor per D-23: its grid and transform-in-place motion kept, its click-to-expand-and-dismiss dropped, since these cards go somewhere. | Locked |
| D-25 | 18 Aug 2026 | Title and tag line stay visible below each card. The flip adds detail rather than replacing the label | A hover-only reveal would leave a scanning recruiter looking at four unlabelled images, and touch devices have no hover at all. Keeping the label static costs nothing and removes the failure mode. | Locked |
| D-26 | 18 Aug 2026 | Home grid stays a two by two of equal cells | The donor's `md:col-span-2` asymmetry would imply a ranking among the four projects. They are peers; only the reading order carries priority. | Locked |
| D-27 | 18 Aug 2026 | Tilt-in acts on case studies only, rotation kept at 30° | Your call. Rebuilt from the story-scroll donor per D-23: rotation and z-stacking kept, GSAP and pinning dropped. Confined to case studies because that is where a reader has already opted in; on orientation pages it would be noise. | Locked |
| D-28 | 18 Aug 2026 | No pinning on tilt acts | ScrollTrigger's pin remaps scroll geometry, which desyncs the IntersectionObserver scroll-spy driving the case study page nav. Rotation and z-stacking deliver the effect without it. | Locked |
| D-29 | 18 Aug 2026 | Act grounds on case studies come from that project's own palette | Extends D-10. Gives the tilt something to reveal without touching the shared chrome or spending red. | Locked, **built 18 Aug** — see D-64/D-65 |
| D-30 | 18 Aug 2026 | **Two font families, total. No exceptions, ever** | Your instruction, reaffirmed 18 Aug. A monospace numeral face had already slipped into this document twice from the billchien reference; removed. Every reference font is now rejected by name in section 2 so none can be reintroduced by accident. | Locked |
| D-31 | 18 Aug 2026 | The Home card grid is not reused on Work. Work uses image-left, details-right rows instead | Reusing the Home grid would make Work a duplicate of Home and remove its reason to exist. The row layout from billchien shows the same four projects as a scannable list, which is the different job Work is there to do. | Locked |
| D-32 | 18 Aug 2026 | Home card reveal keeps the same photo under a dark scrim, rather than turning to a separate back face | Your call. Supersedes the Y-axis flip in D-24: with the same image on both faces a rotation mirrors the photo mid-turn and lands on itself, which reads as a glitch. A scrim fading up is what the interaction actually is, and it is faster and simpler. | Locked, supersedes part of D-24 |
| D-33 | 18 Aug 2026 | Scrim is `--ink` at 70%, not 60% and not pure black | You asked for 60 to 70%. Measured against the worst case, a pure white region of a photo: 60% yields 4.29:1 against paper text and fails AA, 65% yields 5.1:1 with no margin, 70% yields 6.07:1. 70% is the only value safe across all four images. Ink rather than black keeps the palette's warmth. | Locked |
| D-34 | 18 Aug 2026 | Tiles expand to the centre of the viewport on click, darken, and show text. Second click opens the case study | Your call, and the donor's own behaviour. Supersedes both the flip (D-24) and the hover-scrim (D-32). Works identically on touch, which neither earlier version did. | Locked, supersedes D-24 and D-32 |
| D-35 | 18 Aug 2026 | Grid is uneven: three columns, alternating a two-column cell with a one-column cell | Your call, from the reference image. Supersedes D-26. Gives the page rhythm rather than a flat checkerboard. Open question about which projects get the wide cells. | Locked, supersedes D-26 |
| D-36 | 18 Aug 2026 | The morphing headline is the hero, and the four project tiles sit below it | Your call. This is also what the existing site does. | Locked |
| D-37 | 18 Aug 2026 | Home and Work merged into one page. Site is now nine pages | Approved by you. A separate Work page showing the same four projects had no job left once the hero and the tiles shared a page. Retires D-31. Nav "Work" becomes a jump to the tiles. | Locked |
| D-38 | 18 Aug 2026 | Cell sizes: SANAT and BoopShaillyBoop wide, Lombardi and XFC narrow. Narrow is 1:1, wide is 2:1 | Your call on which projects get which. The square and 2:1 ratios follow from a three-column grid and happen to match the native ratios of all four chosen images, so nothing needs forcing. | Locked |
| D-39 | 18 Aug 2026 | Reading order stays Lombardi, SANAT, BoopShaillyBoop, XFC despite SANAT holding the larger cell | Position and area do different jobs. Lombardi is read first and carries the numbers; SANAT is the strongest image and holds the eye. Preserves the position-one credibility argument from D-01 without wasting SANAT's visual weight. | Locked |
| D-40 | 18 Aug 2026 | XFC card uses `XFC Practice Kit 2026-27.png`, cropped x 0 to 1080 | You supplied it. The collage panels would have cropped to roughly 820px square, under what the cell needs at 2x; this is a clean 1080px square once the black canvas is removed. | Locked |
| D-41 | 18 Aug 2026 | Archive opens with the circle-to-arc morph, rebuilt from the scroll-morph-hero donor | Your call. Suits a collection with no hierarchy, where a grid would imply ranking and completeness that the page does not intend. | Locked |
| D-42 | 18 Aug 2026 | The morph is driven by real document scroll. No wheel hijacking, no virtual counter | The donor calls `preventDefault()` on wheel and animates from a private counter, so the reader scrolls and the page does not move, and cannot reach the rest of Archive. Non-negotiable. | Locked |
| D-43 | 18 Aug 2026 | Cards are 140×190, not the donor's 60×85 | Archive exists to show photographs. At 60px wide they are unreadable as images. | Locked |
| D-44 | 18 Aug 2026 | Hover reveal on arc cards uses the same 70% ink scrim as the project grid, not a flip to a back face | One reveal language across the site rather than two. The donor's flip leads to a "View Details" face with nowhere to go; these are images, not links. | Locked |
| D-45 | 18 Aug 2026 | Arc drops entirely below 640px and on reduced motion, falling back to the mosaic | The donor has no reduced-motion path. Twenty absolutely positioned spring-animated elements is a poor trade on a phone. **Tested 18 Aug** with the cutoff removed: at 375px and 18 cards, 36 of 153 pairs overlap in the ring, 45 of 153 in the arc, with 2 cards pushed off-screen — measured, not assumed. Reinstated on that evidence. | Locked, empirically confirmed |
| D-46 | 18 Aug 2026 | Card reveal on Archive fires on click as well as hover/focus, with a real two-line caption | Your call. Touch has no hover, and the earlier version's single-word label under-served what a caption needs to say. | Locked |
| D-47 | 18 Aug 2026 | Three-stage entrance restored: scatter, then line, then circle — matching the donor's original cadence, dropped in the first build of this spec | Your call, correcting an omission. "Side quests" only appears once the ring has formed, then travels to the arc's crown as the page scrolls, so the arc reveals its own heading rather than sitting under a static one. | Locked |
| D-48 | 18 Aug 2026 | No static page heading above the arc. The reveal text is the only heading | Your call. A heading text block sitting above the animation pre-empted the text reveal the arc itself performs, so it's removed; only the preview tool's own banner remains, and that's meta chrome, not page content. | Locked |
| D-49 | 18 Aug 2026 | "SIDE QUESTS" reveal text set uppercase, roman, not italic. D-22 corrected | Your call, and it catches a real contradiction: typographic law 3 says "Italic is never caps." D-22 promoted italic to section headings, but headings on this site are conventionally uppercase, so implementing D-22 literally would have broken law 3 the moment it touched a real heading. Corrected: section headings that read as headings stay upright caps in the display face; italic stays reserved for true quiet asides and pull quotes, per the original law. | Locked, corrects D-22 |
| D-50 | 18 Aug 2026 | Mobile gets scatter → line → circle, and stops there. No scroll-driven arc on narrow screens | Your call, following the D-45 test result. Circle-only intro plays once, then releases into normal scroll immediately — no tall pinned section held open for a payoff (the arc) that isn't coming on that device. | Locked |
| D-51 | 18 Aug 2026 | One Archive image count, shared by phone and desktop. No separate "desktop gets more" tier | Your call. You'll curate however many pieces fit the phone's circle without overlapping and use that number everywhere. The component is built to work with however many images are supplied rather than a hardcoded total. | Locked |
| D-52 | 18 Aug 2026 | Contact folded into a shared footer on every page, with Sam standing on the Madhubani wall. `contact.html` deleted | Your call. Trades a dedicated `/contact` URL for location and email appearing on every page rather than one. | Locked |
| D-53 | 18 Aug 2026 | Pill buttons stay outlined everywhere, darkening on hover/touch rather than filling | Your call, resolving the D-06 conflict raised by the show-more button reference. One button language sitewide. | Locked |
| D-54 | 18 Aug 2026 | About and Resume merged into one page. `resume.html` deleted, 9 pages total | Your call. Resume content folded into About as an "Experience" section; download button moved there. Site loses a dedicated `/resume` URL in exchange for one shorter page. | Locked |
| D-55 | 18 Aug 2026 | About text cut roughly 50%, hard limit of 3 sentences per paragraph, horizontal card deck removed | Your call. Verified: 513 words on the merged page, max 3 sentences per paragraph, confirmed programmatically. | Locked |
| D-56 | 18 Aug 2026 | Sam, an illustrated character from the Pretty, What? project, appears sitewide: footer (every page), Home's show-more button, SANAT (rocking horse), 404, and natively on Pretty, What?. Not on Lombardi (Alice) or BoopShaillyBoop (the brand's own mark). Every instance jiggles on hover/touch, ±4° and a slight scale, disabled under reduced-motion | Your call. Sam only appears where she has a reason to be; scattering her as generic decoration would undercut what she represents. | Locked |
| D-57 | 18 Aug 2026 | Home hero: hard two-line break, morph duration 900ms→1350ms, sans size 0.78→0.86 of display, red ghost now settles into a permanent ~22% shadow behind the serif headline instead of fading to zero. Intro/status moved to a bottom-aligned right column (`1fr/300px`) | Your call. The persistent shadow is a real, scoped amendment to D-03 (red stays punctuation elsewhere); recorded as an exception, not a rule change. Verified: sans/serif ratio measured at exactly 0.860 via computed style. | Locked, amends D-03 for this one instance |
| D-58 | 18 Aug 2026 | Home project grid reverted to symmetric 2×2, 4:3 tiles. Supersedes D-26/D-35/D-38 | Your call. Verified: two equal 555.5px columns, all four tiles 556×417 (4:3). | Locked, supersedes D-26/D-35/D-38 |
| D-59 | 18 Aug 2026 | A fifth project, Pretty, What?, added behind a "Show one more" reveal below the main grid. Grid itself untouched | Your call, to keep the primary 2×2 uncluttered while still surfacing a project with thin production assets. Sam peeks beside the button. | Locked |
| D-60 | 18 Aug 2026 | SANAT gets two additions from on-site field notes: the five-step making sequence (Drawing → Cutting → Hand Carving → Fitting → Polish) and the air/sea shipping-weight constraint, which echoes BoopShaillyBoop's own 50g logic | Your call, kept deliberately short per instruction — everything else from the field notes held back for a later pass. | Locked |
| D-61 | 18 Aug 2026 | "Freelance" replaced with "project work" everywhere on the site | Your call. Reads less transactional next to full-time and remote. | Locked |
| D-62 | 18 Aug 2026 | New pages: `pretty-what.html` (fifth case study, built from available deck assets) and `404.html` (Sam, peeking) | Your call. Pretty What is intentionally light on production artefacts; the page is built to absorb more when they arrive, flagged inline. | Locked |
| D-63 | 18 Aug 2026 | `resume-print.html` added: a plain print-optimised A4 page, real site type, no nav/footer, used to generate `Assets/resume.pdf` via the browser's own Print → Save as PDF | Your call. No PDF library, no build step — matches the site's dependency-free stack. You open it, print to PDF, drop the file into `Assets/`. | Locked |
| D-64 | 18 Aug 2026 | D-29 built as **alternating** grounds, not every act coloured | Two acts per case study (Lombardi's colour tiers, SANAT's palette specimens) present that project's own colours as swatches. A ground in the project's own colour behind a swatch in the same colour erases the swatch, so those two acts stay on paper by necessity. Once that constraint exists, alternating (ground, paper, ground, paper) reads as one deliberate rhythm across all four pages rather than two pages with full colour and two constrained ones. Reversible if every specimen act is redesigned to not need paper underneath it. | Locked |
| D-65 | 18 Aug 2026 | Grounds implemented as a `::before` pseudo-element inside `.has-ground`, not by restructuring each act | Keeps the tuned per-page `.wrap` markup untouched on four pages that took many sessions to get right (§9 of HANDOFF.md). The pseudo is a child of the rotating element, so the ground tilts in with its act — the rotation now has something to reveal, which was the entire point of D-29. Required `overflow-x:hidden` on `html, body`, already specced in the tilt-in act component and separately the worst live bug in the previous handoff (measured 1580px of horizontal scroll on SANAT); now 0px on all four pages, verified. | Locked |
| D-66 | 18 Aug 2026 | Ground type doesn't override classes one at a time. `.has-ground.on-dark`/`.on-light` redefine `--muted`, `--rule` and `--red` themselves | Every case study styles its secondary text as `var(--muted)`, tuned for paper; left alone it measured 1.62:1 on Lombardi's teal ground and 1.00:1 (invisible) for XFC's hardcoded `var(--purple)` act numeral. Redefining the token inside the ground catches the whole tail — figcaptions, stat labels, diagram captions, tier levels — in one rule instead of hunting each class per page. XFC's numeral needed one extra line since it bypasses `--red` entirely. Verified: 88 text elements checked programmatically across all four grounds pages, 0 failures below WCAG AA (4.5:1 body, 3:1 large type). | Locked |
| D-67 | 18 Aug 2026 | Home grid: XFC card swapped to a cropped player photo from `XFC Practice Kit 2026-27.png`; BoopShaillyBoop's transparent laptop mockup gets its `#9C1428`→`#6B0B1B` brand-red ground back, carried over from the previous build; Pretty What's card resized to match the other three tiles (one grid cell, 4:3, centred) instead of running full width at 21:9 | Your call, three separate fixes to the same grid. The XFC swap replaces a mostly-transparent product shot with a photo that reads at card size. The Boop ground was dropped somewhere in this build and needed restoring, not designing fresh — same gradient, same reasoning as the original: flat red read too solid next to the photographed tiles. Pretty What sizing corrects an unintentional asymmetry against D-59, which specced a fifth tile, not a differently-shaped one. | Locked |
| D-68 | 18 Aug 2026 | Sam appears on XFC with a cricket bat, same treatment as her rocking horse on SANAT | Extends D-56. Asset supplied directly (`sam-swing-bat.png`), resized for web and placed after the Outcome act, right-aligned, matching the SANAT rocking horse pattern exactly. | Locked |
| D-69 | 18 Aug 2026 | Footer restructured: `.footer-scene` wraps `.footer-wall` and `.footer-sam`, reserving the full height of whichever is taller | Fixes the footer clipping bug from the previous handoff (§3.2): Sam was a child of `.footer-wall`, which was 120px tall with `overflow:hidden`, clipping exactly the 70px she stood taller than it (50px on mobile). The reference always showed her standing on top of the wall, not inside it. Making her a sibling inside a taller, non-clipping wrapper fixes it without changing either element's own size. Verified: 0px clipping on all nine pages, both breakpoints. | Locked |
| D-70 | 18 Aug 2026 | Sam's site-wide images (`sam-standing`, `sam-peek`, `sam-rockinghorse`) compressed to roughly 2x their largest on-page display height; originals kept in `Assets/Sam/_source/` | Fixes the performance bug from the previous handoff (§3.3): `sam-standing.png` alone was 2.28MB at 4961×3508, displayed at 190px tall, on every page. No image tool was installed, but `System.Drawing` via PowerShell handled it with no new dependency. WebP conversion still not done — PNG covers most of the win and keeps alpha with no fallback markup needed. Sizes: standing 2.28MB→67KB, peek 576KB→114KB, rocking horse 723KB→133KB. | Locked |
| D-71 | 18 Aug 2026 | Footer corrected a second time: `.footer-base` gives the whole wall + Sam + legal block its own `--ink` background, full-bleed, the literal last pixel of every page; Sam's feet are repositioned to the wall's TOP edge, not its floor | D-69 fixed the clipping bug but not the standing relationship: Sam was bottom-aligned with the wall, which put her ankles at the wall's floor rather than its surface, and the footer's background stayed `--paper`, identical to the body, so the whole footer read as merging with the rest of the page — measured, not assumed: `getComputedStyle` returned the same `rgb(243,241,236)` for both. Wall grew from 120px to 240px (90 to 160 on mobile) so the band reads as a real destination rather than a sliver. Ink is the one token DESIGN.md clears for a full-bleed inverted band, and the Madhubani art is itself painted on a near-black ground, so the two meet with no seam. | Locked, corrects D-69 |
| D-72 | 18 Aug 2026 | Removed `max-width:22ch` from `.morph-h1` | The cap predates the current headline markup and was silently forcing "THE NICHES HATE" and "TO SEE ME COMING" to each wrap a second time inside their own `<br>`-separated span, four visual lines instead of the intended two, verified via `getClientRects()` before and after. The explicit `hero-break` already controls the line split at the sizes DESIGN.md specs; the ch cap was fighting it, not helping it. Fixing it also pulled the project grid up into view sooner as a side effect, with no separate spacing change needed. | Locked |
| D-73 | 18 Aug 2026 | "Freelance" reinstated everywhere "project work" appeared: hero status, closing section, footer-open paragraph on all nine pages | Your call, reversing D-61 the same day it was made. | Locked, supersedes D-61 |
| D-74 | 18 Aug 2026 | Pretty What gets a fourth palette colour, Soft Lavender `#C6A8CC`, sampled from the pin and tote merch mockups rather than invented; used as the ground for a new merchandise mosaic (pins, tote, book wrap) | Your call. Sampling from the supplied photos rather than picking a fresh hex keeps the swatch honest to what it's naming. Measured 8.88:1 for ink text, 1.88:1 for paper, so the ground takes ink only, same rule as the case studies' light grounds (D-66). The mosaic sits where the page's own placeholder note previously promised "campaign applications, to come" — that note is now trimmed to just the interior pages still outstanding. Sam's expression sheet added to the Meet Sam mosaic; the wrap mockup's fictional name label ("Diya Sharma, Class 4-B") kept as supplied, your call. | Locked |
| D-75 | 18 Aug 2026 | XFC, SANAT, Lombardi meta rows trimmed so every value sits on one line: SANAT's SPONSOR field reverts to its shorter pre-existing wording ("Indian Institute of Packaging", dropping the ODOP clause) and WHEN & WHERE drops the added "Field research in Saharanpur" clause; Lombardi's LOCATION field removed as a duplicate of WHEN & WHERE, which already names Gabicce Mare | Your call, working from the previous build's own copy rather than new wording — reused, not drafted. Measured before and after: SANAT's SPONSOR and WHEN & WHERE values were each wrapping to 2 lines at 1440px; both are 1 line now. | Locked |
| D-76 | 18 Aug 2026 | XFC's AI-disclosure note moved from Overview to the end of Outcome, and trimmed by one clause ("and this is how I worked") | Your call. Reads better as a closing note on the finished kit than as a caveat before the reader has seen anything. The trimmed clause was redundant with the sentence before it, which already says the competition allowed any method including AI. | Locked |
| D-77 | 18 Aug 2026 | Site-wide role title unified to "Concept & Brand Designer" everywhere; About's title tag, meta description, eyebrow and opening line changed from "Graphic and Communication Designer" to match | Your call, given a straight choice between the two phrases already live on the site. Home's title tag, meta description and eyebrow all used "Concept & Brand Designer"; About's title tag, eyebrow and opening body line used "Graphic and Communication Designer", the latter a direct quote from CONTEXT.md. The academic credential itself ("B.Des, Graphic and Communication Design") is untouched — it's the literal name of the degree, not a self-description, and stays factual either way. | Locked, supersedes the "Graphic and Communication Designer" phrasing everywhere it appeared as a role title |
| D-78 | 18 Aug 2026 | Footer wall and Sam removed sitewide; footer ends on the legal line, in `--muted` on paper, directly under the contact block | Your call. Retires D-52's "Sam on the Madhubani wall" footer treatment and everything built on it since (D-69, D-71). Sam's other sitewide appearances (rocking horse on SANAT, bat on XFC, peek on Home/404, standing portrait and expression sheet on Pretty What) are untouched — D-56's "she appears only where she has a reason to be" rule was scoped to her, not to this one instance. | Locked, retires D-52's footer illustration and supersedes D-69/D-71 for the footer |
| D-79 | 18 Aug 2026 | About rebuilt around three verbatim CONTEXT.md bio paragraphs plus the resume pill, an Education/Experience two-column block (experience keeps short bullets of what was actually done, education reordered WUD → NABA → Notre Dame), and Skills restored as its own four-category section (Design, Software, Build, Languages) | Your call, explicitly "something in the middle" of the original six-section page and a fully bare reference layout. The bio text reverts D-55's trimming — CONTEXT.md's own header calls it "verbatim, 3 paragraphs," so the paraphrase was the deviation, not this. Dropped entirely: the "I design it, then I build it" and "Milan" sections and "Selected recognition" — none appear in your reference, and the Build column under Skills still states the AI tooling plainly per CLAUDE.md. Software awaiting icon assets from you; text list stands in until then. Page height: 3871px → 1933px. | Locked, supersedes D-55 |
| D-80 | 18 Aug 2026 | Archive's arc entrance forces straight to the 'circle' phase the instant real scrolling is detected, instead of waiting on its own 500ms/2200ms timers | Fixes a real bug, not a hypothetical: the scatter→line→circle entrance played on a wall-clock timer, independent of the scroll position driving the sticky pin. A user who scrolled fast immediately on page load could outrun the timer — the sticky region released and the whole arc scrolled off before the circle had even formed, which read as the arc leaving the page mid-animation, exactly as reported. Forcing the phase on first scroll ties both systems to the same clock, so they can no longer desync; anyone who doesn't touch the scroll wheel still gets the full timed entrance per D-47. | Locked |
| D-81 | 18 Aug 2026 | `overflow-x:hidden` moved off the shared `html, body` rule in design.css and into each case study's own local `<style>` block instead | Corrects a regression from this session's own D-65/D-72: `html, body{overflow-x:hidden}` in shared design.css was silently breaking `position:sticky` sitewide, which is what actually caused D-80's Archive bug — not a timing race alone. Confirmed by toggling the rule live: Archive's sticky arc viewport stuck at 0 with the rule off, jumped to -951px the instant it was reverted to `hidden`. The four case studies still need the rule for their 30° tilt overflow (D-65), so it now lives only where it's needed; Archive and every other page never see it. A `body`-only version was tried first and found insufficient — `document.documentElement.scrollWidth` still measured the tilt's true extent unless `html` also had it, so both are set together, scoped to the four pages that use the tilt component. | Locked, corrects D-65/D-72 |
| D-82 | 18 Aug 2026 | About gets your photo, cropped and jiggling gently on hover/touch, and seven doodles cropped from your own reference sheet clustered over her head and shoulders, wiggling once on scroll-into-view or load. Bio's opening phrase changed to "concept and brand designer" (D-77 now applied here too); key phrases bolded per your reference | Your call on all three. Photo and doodles both cropped from supplied assets (`Add a heading (5).png`, `Add a heading (6).png`), originals not kept in `Assets/` since only the crops are used. The doodle wiggle reuses the sitewide `.reveal`/`.in` IntersectionObserver pattern already proven on Archive and Home, newly wired into About, which had no reveal script before this. | Locked, amends D-79 |
| D-83 | 18 Aug 2026 | About's photo reduced 20% (320px → 256px column) and the grid gap widened 56px → 72px; doodles pulled in from the photo's edges to match. Same bold treatment extended to the Experience bullets | Your call. The doodles spill past the photo's own box by design (D-82), so shrinking the photo alone would have left them just as close to the text; the gap widened and each doodle's offset was pulled in a few points so real air survives the resize. | Locked, amends D-82 |
| D-84 | 18 Aug 2026 | Footer background changed to the hero headline's own shadow colour: `--red` at 22% opacity (D-57), reused directly rather than a derived hex. `--muted` overridden inside the footer to `#5C3D33` for contrast | Your call, a second explicit exception to "red is punctuation, never a background" (§1 Rules), alongside D-57's own. Measured before shipping: default `--muted` (#767676) drops to 2.90:1 against the new rose ground, below the 4.5:1 AA floor for the labels and legal line that use it; `#5C3D33` clears 6.18:1. `--ink` already clears 12:1 unchanged. | Locked, second exception alongside D-57 to §1's "never a background" rule |
| D-85 | 18 Aug 2026 | Home's project tiles get a cursor follower: hovering a tile with art ready swaps the real pointer for that project's own Sam, tracking the mouse with light easing; a small tile zoom on hover cues "wants to be selected" before she even appears. Stays through both clicks (expand, then navigate) since neither state change touches it | Your call, a new interaction layer, separate from D-56's "Sam appears in page content" rule. Built as a positioned follower rather than the native `cursor:url()` property — that CSS property caps custom cursor images at roughly 32-128px depending on browser, too small for an illustration; a follower has no such ceiling. Fine-pointer/hover-capable devices only, gated in JS same as Archive's existing mouse parallax; touch has no cursor to swap, so tiles behave exactly as before there. Wired now for SANAT (rocking horse) and XFC (bat), both already on site; Lombardi and BoopShaillyBoop wait on new art (D-86) and stay inert — normal cursor, tiny zoom only — until `data-sam` on their tile-links is filled in. | Locked |
| D-86 | 18 Aug 2026 | Sam commissioned for two projects that previously excluded her: Lombardi (buried in sand, happily) and BoopShaillyBoop (cross-legged, four arms, each holding something from the business: a laptop, an envelope, a receipt printer, a paintbrush) | Your call, and a deliberate, explicit amendment to D-56, which read "Not on Lombardi (Alice) or BoopShaillyBoop (the brand's own mark)." D-56 governed Sam appearing in page content: the two projects had their own established characters (Alice; the Boop mark) and didn't need a third. The cursor follower (D-85) is a different mechanism — an interaction layer, not page content — and you're commissioning purpose-built art for it on exactly these two, so it stands as its own choice rather than a contradiction of the original rule. Generation prompts handed off; art not yet in `Assets/`. | Locked, amends D-56 for the cursor-follower mechanism only |
| D-87 | 18 Aug 2026 | Software skills now show as icon tiles (Illustrator, Photoshop, InDesign, Lightroom, After Effects, Figma, Procreate), supplied by you, replacing the text list | Your call. Icons cropped to 128px squares, no other treatment. | Locked, amends D-79/D-82's text-list placeholder |
| D-88 | 18 Aug 2026 | Sam-cursor sizing gets a per-tile `--sam-scale` multiplier rather than one fixed width for every project | The rocking horse art (1.78:1, landscape) and the bat art (0.67:1, portrait) don't share an aspect ratio, so a single fixed width made the rocking horse read noticeably smaller at the same box: 110×62 against the bat's 110×165. Area-matched rather than matched on any one axis — matching height alone would have made the rocking horse absurdly wide. SANAT's scale set to 1.6 (110px → 176px), solved from the bat's own current footprint, which you confirmed as the size to keep. | Locked, amends D-85 |
| D-89 | 18 Aug 2026 | About's photo sized up 10% from its previous pass (256px → 282px); doodles pulled down off the header/nav and the two right-side doodles (cookie, book) pushed further from the photo's edge | Your call on both. The first doodle placement (D-82) put the top cluster high enough to collide with the site nav above the row; brought down so nothing sits above roughly where her hair starts. Cookie and book were reading as crowding her arm; pushed out further into the gap, still short of the bio text (25px clear, measured). | Locked, amends D-83 |
| D-90 | 18 Aug 2026 | Archive's "Words" section cut to one paragraph, five sentences instead of eight, dropping the reading/Jane Austen opening | Your call, trimmed from your own sentences rather than reworded — the Inkwell Society story is what's left, the personal reading habit isn't. | Locked, amends D-47's copy for this section |
| D-91 | 18 Aug 2026 | Lombardi and BoopShaillyBoop's commissioned Sam art (D-86) landed and is wired into the cursor follower: `sam-sand.png` at 1.5x, `sam-laptop-mail.png` at 1.27x, both area-matched to the bat's own footprint the same way SANAT's was (D-88) | Closes out D-85/D-86 — all five home tiles now swap the cursor for that project's Sam. Sand art is 1536×1024 (1.5:1), laptop art 1303×1207 (1.08:1); scales solved the same way as D-88's, from the bat's 18,150px² footprint at its 110px base width. Verified rendered widths: 164px and 140px, matching the solved targets. | Locked, completes D-85/D-86 |
| D-92 | 18 Aug 2026 | `resume-print.html` audited against Harvard OCS and RISD Career Center formatting guidance and brought into line: "Concept and Brand Designer" added under the name; Education moved ahead of Experience; the summary's "I" removed ("Turn concepts..." not "I turn concepts..."); portfolio URL (`shambhavijaipuriar.com`) added to the contact line; Skills changed from a 2-column grid to a single-column list for ATS-safer reading order | Your call to run the audit; findings and fixes below. Verified live: section order Education→Experience→Selected recognition→Skills, no bare "I" in the summary, 0px horizontal overflow, ~1.1 pages at A4. Not changed: font stays the site's own display serif + Inter Tight rather than Harvard/RISD's suggested "traditional" faces (Helvetica/Garamond/Georgia) — brand consistency across her own materials outweighs a soft recommendation, your call if you disagree. GPA not added — no verified figure exists in CONTEXT.md and design-specific guidance treats it as optional. Length is a genuine open question: Harvard's "strict one page" rule for students/recent grads is real, and this resume is now closer to 1.1 pages with the two additions; worth a look once printed for real, and worth deciding whether to cut the WUD social-media or Inkwell Society entries if it doesn't fit. | Locked |
| D-93 | 18 Aug 2026 | Sam removed from page content on 404, SANAT and XFC. Stays as page content only on Pretty What (her origin project); stays sitewide as the home tile cursor (D-85) and beside the "show more" button on Home — both explicitly kept | Your call, a real narrowing of D-56: she now appears in exactly one project's content instead of three, plus the two mechanisms you named to keep. SANAT's rocking-horse block and XFC's bat block removed outright (each was a dedicated, self-contained markup block, nothing else depended on it); 404's `.nf-sam` image and its now-unused CSS rule removed, layout collapses cleanly onto the heading. | Locked, narrows D-56 |
| D-94 | 18 Aug 2026 | Cursor scales rebalanced: SANAT ×1.2 (1.6 → 1.92), BoopShaillyBoop and XFC ×0.9 (1.27 → 1.14, 1.0 → 0.9). Pretty What's cursor swapped from the standing portrait to a new thinking pose (`sam-thinking.png`), area-matched at 0.87× the same way as the others (D-88) | Your call on all four. Thinking-pose art cropped from a 1920×1080 supplied canvas down to its actual 380×764 content, gets its own scale solved the same way as every other pose: area-matched against the bat's 18,150px² footprint at the 110px base. Verified on a fresh page load after the first read came back stale (a chained-hover test artifact, same class of flakiness as this session's known rAF/IntersectionObserver issue) — XFC's rendered width now measures exactly 99px, matching 110×0.9. | Locked, amends D-88/D-91 |
| D-95 | 18 Aug 2026 | Pretty What's tile loses its Sam cursor; the same thinking-pose art moves to the Contact nav link instead, at 0.61× (0.87 × 0.7, your "decrease by 30%") | Your call. Pretty What already carries Sam natively as page content (D-93); the cursor no longer needed to do that job too, once Contact needed art of its own. Contact isn't a project tile, so it gets its own small, separate wiring rather than reusing the tile hover/expand logic verbatim — same `showSamCursor()` call, no `data-tile` dependency. | Locked, amends D-88/D-91 |
| D-96 | 18 Aug 2026 | Site nav converted to a fixed pill on Home, About, Archive, Pretty What and 404 — same visual language as the case studies' own pagenav, persists at every scroll depth, compacts on scroll-down (`nav-compact`, shared `nav-scroll.js`). `body{padding-top:96px}` reserves clearance, scoped via `body:has(> header.site-nav)` so the four case studies (their own bespoke header, never this class) are untouched | Your call, "option 1" of two you proposed, to fix scrolling down with no way back to the top or to another page. A page-identity bug surfaced and got fixed before shipping: the naive active-link check marked both "Work" and "Contact" active on Home, since both were bare `#...` anchors defaulting to the same page; Contact is never a distinct page (it's each page's own footer), so it's now excluded from active-matching entirely, only "Work" (as Home's stand-in) and real page links qualify. Verified on all five pages: correct single active link, pill clears the top content by 29px, case studies' own pagenav and 0px body padding confirmed untouched, arc's sticky mechanism (D-81) unaffected by the extra scroll distance. | Locked |
| D-97 | 18 Aug 2026 | Software icons re-cropped: centre-square crop of the original 1920×1080 source instead of a stretch to 128×128 | Corrects a mistake in D-87's own processing script, which forced a non-square source directly into a square canvas, distorting every icon. Fixed by cropping the largest centred square from the source first, then resizing that square down — verified all seven render at native 1:1 aspect, no stretch. | Locked, corrects D-87 |
| D-98 | 18 Aug 2026 | About's photo and doodle cluster moved down 40px via `margin-top` on `.a-photo-wrap`, not `padding-top` | Your call, to align the photo's top edge with the eyebrow/heading rather than sitting above it — measured before, the photo started 40px above the eyebrow; now they align exactly. Margin was the deliberate choice over padding: the doodles are absolutely positioned against this box's own padding edge, so a margin carries them down together with the photo as one unit, while padding alone would have moved the photo (a normal-flow child) and left the doodles stranded at their old position, breaking D-89's "over her head" alignment the moment the fixed nav (D-96) changed the page's own top offset. | Locked, amends D-89 |
| D-99 | 18 Aug 2026 | Sam's cursor swap moves off the Contact nav link and onto the footer itself (same `sam-thinking.png`, unchanged 0.61×); Pretty What's tile gets its own Sam cursor back, a new jump-and-wave pose (`sam-jump-wave.png`, cropped from a 1920×1080 supplied canvas to 315×512, area-matched at 0.96× against the same 18,150px² bat baseline as every other pose, then your own "decrease by 50%" put it at 0.48×, then "30% increase" to 0.62×) | Your call, correcting a misread of D-95/D-96: the nav's "Contact" link only scrolls to the footer, it isn't a distinct page, so the cursor swap belongs on the footer itself, not the link. Pretty What's tile lost its cursor at D-95 when the thinking pose moved to Contact; now that Contact has its own separate wiring again, the tile gets art of its own back rather than going without. Verified live: footer hover shows the thinking pose over "Let's talk", nav Contact link shows nothing, Pretty What tile shows the new jump-wave pose at a comparable visual weight to the other four tiles, then halved on request. | Locked, amends D-94/D-95 |
| D-100 | 18 Aug 2026 | Space before every section heading, wherever the tilt-in-on-scroll effect (D-27/D-28/D-49) fires, increased 150% across all four case studies: `.act` padding-top 96px→240px (64px→160px at ≤1000px) in XFC/Lombardi/SANAT, 140px→350px (88px→220px) in BoopShaillyBoop since it already ran a different base value; `.has-ground`'s shared `margin-top` in `design.css` (used only by these four pages) goes from `var(--sp-l)` to `calc(var(--sp-l) * 2.5)`, same multiplier, so ground and non-ground transitions scale together | Your call, "a running problem" — not enough breathing room between one act ending and the next act's heading starting to tilt in. `.act` is defined inline per case study rather than in `design.css` (each keeps its own bespoke header/pagenav per CLAUDE.md), so the padding-top was changed in all four files individually rather than at a shared token, to avoid touching `--sp-xl`/`--sp-l` themselves, which are also used for unrelated spacing (footer, has-ground's own bottom padding). Superseded same day by D-101: the `.has-ground` half of this fix never actually rendered. | Locked, corrected by D-101 |
| D-101 | 18 Aug 2026 | Two changes. (1) A real bug found and fixed: `.has-ground`'s margin-top/padding-top/padding-bottom in `design.css` were being silently zeroed on every ground section, sitewide, by each case study's own inline `.wrap{padding:0 var(--pad)}` shorthand — same specificity, later in the cascade, always won. Selector raised to `.wrap.has-ground` (matches how the two classes are always used together) so it actually wins now. This means D-100's has-ground half never rendered, and neither did the original pre-D-100 spacing — the gap into every ground section has been invisible for as long as this bug existed. (2) With the bug fixed and D-100's `.act` increase now reading as too much on the non-ground tilts, both eased back: `.act` padding-top halved from D-100's values (240px→120px, 160px→80px mobile; Boop 350px→175px, 220px→110px), and `.has-ground` itself set to explicit values rather than a token multiplier — padding-top 120px, padding-bottom 140px (80px/90px at ≤1000px), margin-top back to plain `var(--sp-l)` — so the ground colour itself carries the visible margin around the heading, not an invisible paper-coloured gap that happened to sit under the fixed pagenav | Your call, twice: first flagging that "the rest of the tilts... have too much blank space, reduce by 50%" while this one specific transition (hero into "01 The Brief") still looked broken, which is what surfaced the cascade bug on inspection. Second, asking the purple itself to extend top and bottom so the heading has margin to sit on, rather than paper-coloured space that reads as no space at all once the fixed nav sits over it. Verified live: `getComputedStyle` on `#sec-problem` now reports the real values (was 0/0/0 before the fix), 120px of purple visibly above "01 The Brief" before the heading, non-ground `.act` transitions confirmed back at the halved value. | Locked, corrects D-100 |
| D-102 | 19 Aug 2026 | XFC "The Brief": the 75/25 ratio bar's purple segment gets a right-edge border plus an outer border on the whole bar, both `rgba(243,241,236,.35)` | Your call, a real bug: the segment's `background:var(--purple)` is the exact same hex as the section's own `--ground:#6C40DD`, so the 75% segment had been invisible against its own background since D-29 built this ground, not something today's spacing work caused. Fixed with an outline rather than a colour swap since the fill is correct (it is XFC Purple, honestly labelled) — only its edges needed to exist. Verified live: `getComputedStyle` confirms the border renders on both the bar and the segment. | Locked |
| D-103 | 19 Aug 2026 | XFC "From Huddle to Hexagon": the mobile fallback (`.dia-list`, shown ≤1000px in place of the desktop SVG) now includes the three actual sketches (`huddle-1/2/3.png`) above their numbered captions, not text alone | Your call, "it is important" — the process diagram was readable as prose on mobile but the sketches themselves, the actual evidence of the process, were desktop-only. Verified live at 375px: all three images render in order above their captions. | Locked |
| D-104 | 19 Aug 2026 | XFC "The Brief": rules-card.jpeg swapped for competition-card.jpeg | Your call, after seeing both side by side. rules-card.jpeg restated THEME/LOGO/COLOURS/METHODS, all of which the sidebar text already carries; competition-card.jpeg is the competition's own announcement card instead, visually distinct from the text next to it. Same 1:1 tile, `object-fit:cover` crop unchanged. Verified live. | Locked |
| D-105 | 19 Aug 2026 | XFC "The Brief": the competition-card figure shrunk to 82% width, centred (purple showing as padding on both sides) at desktop; `#sec-problem`'s own `padding-bottom` cut from the shared 140px to 100px, ID-scoped so the other three grounds on this page keep the shared value. Mobile explicitly reset back to full width and the shared 90px, since the split already stacks to one column there and the inset isn't needed | Your call, following the competition-card swap: full-bleed at the old size, the picture dominated the row and left the ground padding-bottom looking like leftover space rather than intentional. Shrinking the figure shortened the row itself; the padding-bottom cut tightens the leftover further. Verified live: tile measures 539px (82% of the old 657px) at 1440px, ground height 1059px→901px, mobile confirmed back at full width. | Locked |
| D-106 | 19 Aug 2026 | Same tile's `aspect-ratio` changed from a forced `1/1` to the competition-card image's own `1320/1557`, `object-fit` from `cover` to `contain`, tile background from `--stage` to `transparent` | Your call: the square crop had been cutting the card's own top (XFC wordmark) and bottom (the "we want you to design..." line) to force it into a shape the image was never drawn for. Matching the tile to the image's real proportions means nothing gets cropped; transparent background lets the section's own purple ground stand in for the tile's usual stage-coloured backdrop, since at the exact matching ratio there's no gap left for a backdrop to show through anyway. Verified live: `imgW`/`imgH` now equal `tileW`/`tileH` exactly (539×636 at 1440px), full card visible top to bottom. | Locked |
| D-108 | 19 Aug 2026 | Lombardi's Outcome-to-footer white band closed the same way as D-107's part 4: `#site-footer{margin-top:0}` added to Lombardi's own `<style>`, scoped to that page, shared `footer.site-footer` rule in design.css untouched | Your call, following up on the flag left in D-107 — same underlying issue (a `has-ground` Outcome sitting directly against the footer in the markup, with the shared 96px `margin-top` between them). Verified live: gap measures 0 at 1440px, yellow ground flows straight into the footer's own translucent red. | Locked |
| D-107 | 19 Aug 2026 | BoopShaillyBoop, four changes. (1) "I Built It, warts and all" (02) gets a ground, `#AA232D` on-dark — previously the only numbered act with no colour at all. (2) A new act, "Boop Ledger" (03), carved out of what used to be 02's tail: the "Subscription cash and subscription revenue are different things" paragraph plus its body text, now its own `has-ground on-light` wrap (`#FCD85D`) with its own act header, sitting between 02 and Outcome; the ledger widget and its phone mockups stay uncoloured siblings after it, same pattern as every other act's figures on this page. (3) New pagenav pill "Boop Ledger" added between "I Built It" and "Outcome", wired the same way as the rest (`data-target` matching the new `id="sec-ledger"`, no JS changes needed since scroll-spy and the tilt-in rotation both already key off `[id^="sec-"]`). (4) The white gap between Outcome's ground and the footer closed: `footer.site-footer{margin-top:var(--sp-xl)}` is shared sitewide (design.css), so scoped to just this page with `#site-footer{margin-top:0}` in Boop's own `<style>` rather than touching the shared rule | Your exact hex values, both on-brand: `#AA232D` red (between the existing `#9C1428`/`#6B0B1B` gradient and `#930F23`, without repeating either), `#FCD85D` yellow (the accent already visible in the laptop mockup referenced in DESIGN.md's own contrast notes, never before used as a ground). `.act .num`'s colour already resolves through `--red`, which `.has-ground.on-dark`/`.on-light` redefine — no XFC-style hardcoded-colour fix needed here. Verified live: both grounds render with correct contrast, all five pagenav pills present and the new one activates on scroll, outcome-to-footer gap measures exactly 0. Lombardi's Outcome (`#FFCE40`) sits against its footer the same unfixed way — flagged, not touched, since this request was scoped to Boop. Superseded same day by D-110: the exact reds and the red/red/yellow/red pattern this entry describes didn't survive the next round. | Locked, colours superseded by D-110 |
| D-109 | 19 Aug 2026 | BoopShaillyBoop's "I built it" member-form phone triptych replaced: the old three form-step screenshots (`6 full.png`, `8a.png`, `8b.png`) swapped for full-page captures of three different site pages — home (`home-full.png`), What's Inside (`whats-inside-full.png`), the member form's creative-corner step (`form-full.png`). Figcaption changed from "The member form is a four-step slam book..." to "The site: home, what's inside, and the member form," since the three images no longer show sequential steps of one form | Your three screenshots. The existing `.phone.creep` mechanism (a 22s alternating `translateY` animation that slow-scrolls the image inside its fixed-height frame) needed no changes — it was already built to handle a full, tall page capture, which is exactly what these three are; the old images had just been pre-cropped to a single step instead. Verified live: all three phones show the new pages, framed and ready to creep-scroll. | Locked |
| D-110 | 19 Aug 2026 | BoopShaillyBoop's four grounds reset to a strict alternation and both reds darkened. "I Designed It" (01): gradient darkened `#9C1428→#6B0B1B` to `#750F1E→#500814`, stays on-dark. "I Built It" (02): switched from red `#AA232D` to yellow `#FCD85D`, on-dark→on-light. "Boop Ledger" (03): switched from yellow `#FCD85D` to red `#930F23` (reused from the old pre-D-107 Outcome value rather than inventing a third red), on-light→on-dark. "Outcome" (04): switched from red `#930F23` to yellow `#FCD85D`, on-dark→on-light. Net pattern: red, yellow, red, yellow | Your call: "make both darker and do red yellow red yellow." Reused `#930F23` for the new third-position red instead of a fresh hex since it was already road-tested (was Outcome's own colour until this entry) and already reads distinctly darker than `#AA232D` without needing new contrast math. `.act .num` and body text again resolve automatically through `--red`/`--ink` via `.has-ground.on-dark`/`.on-light` — no hardcoded colour to chase on this page. Verified live: `getComputedStyle` on all four `::before` pseudo-elements confirms the alternation and exact hex values, all four screenshotted with legible text, footer transition (D-107/D-108) still gapless. | Locked, supersedes D-107's colour choices |
| D-111 | 19 Aug 2026 | BoopShaillyBoop, two more changes. (1) "I Designed It"'s gradient dropped: flat `#930F23`, exactly matching "Boop Ledger"'s red — both reds on the page are now the identical value, not two similar-but-different shades. (2) The Overview hero swapped from a browser-chrome mockup (two stacked screenshots, a base landing-page capture plus a hover-revealed "info panel" image) to a single real photograph, `envelopes-tray.jpg` — a tray of hand-addressed, stamped BoopShaillyBoop envelopes, converted from your supplied HEIC. The browser-chrome markup and its now-orphaned CSS (`.viewport.crop`, the `.panel` hover/animation rules, `.browser.hero-shot`) removed rather than reused, since a photograph isn't a screenshot and doesn't belong inside fake browser chrome; a new `.hero-photo` rule carries over the same corner radius and shadow as `.browser` so it still reads as part of the same visual system. Homepage project tile (`index.html`) left untouched, as asked | Your call on both. "Both the reds to look the same" reads as exact match, not just closer — confirmed via `getComputedStyle`, both `::before` elements return identical `rgb(147, 15, 35)`. The photo swap is a deliberate tone shift: this section is literally titled "I designed it," and a real photo of the finished, physical product argues that harder than another polished screenshot would. HEIC has no native browser support, so it was decoded via WPF's `BitmapImage`/`JpegBitmapEncoder` pipeline (System.Drawing's GDI+ path failed outright on the format) and saved as a standard JPEG. Verified live: image loads at full 4032×3024, renders card-framed with no browser chrome, both reds confirmed identical, homepage tile confirmed unchanged. | Locked |
| D-112 | 19 Aug 2026 | `envelopes-tray.jpg` re-cropped tighter to the tray itself: 4032×3024 → 3460×2806, trimming the dark wall/table margin the original photo carried on most sides | Your call, "fit to frame." Crop box found by scanning for high-saturation red/blue pixels (the envelopes and the tray) against the neutral brown background, then padded 3% on each side rather than cut exactly to the content's edge. Verified live: image now loads at 3460×2806 in the same `.hero-photo` frame, tray fills the card with much less dead space at the corners. | Locked, amends D-111 |
| D-113 | 19 Aug 2026 | SANAT, four changes. (1) "01 The Craft" ground swapped from `--cocoa` (`#73411F`, on-dark) to `--aqua` (`#91D5D9`, on-light) — the "Soft Aqua" swatch already defined and named in this page's own palette specimen section, not a new colour. (2) The paper gap between the hero and "01 The Craft" closed: `#sec-problem.has-ground{margin-top:0}`, ID-scoped in SANAT's own `<style>` so "03 The Strategy" (this page's other ground) keeps the normal shared spacing. (3) `artisan-crouching.png` (280×345, a defective low-res crop with an actual opaque white band baked into its left and top edges — confirmed via alpha-channel scan, not a CSS/`object-fit` issue) replaced with `artisan-crouching.jpg`, resized from your supplied full-resolution original (`drive-originals/IMG_5460.jpg`, 3024×4032) to 1050×1400; the old broken file deleted. (4) The four-photo "interviewed artisans" grid replaced with a draggable stacked-card carousel, ported from a pasted React/shadcn/Motion component per CLAUDE.md's structural-donor rule: kept the fanned-stack layout, drag-to-advance, and rotation/scale falloff by distance from centre; dropped React, Tailwind, shadcn's `Badge`, Motion, and the donor's Unsplash stock images and lucide icons entirely, since this site is dependency-free HTML/CSS/JS. Radius and pill use this site's own `--radius`/`--radius-pill` tokens, not the donor's `rounded-2xl`. Each card's caption is that photo's own existing alt text, trimmed; the old figcaption's "third-generation artisan... stencils" detail moved onto that artisan's own card instead of sitting outside the carousel, since the useful text belongs with its photo | Your call on all four, and on the "01 The Craft" ground specifically: "01" was previously the only cocoa-ground act still visually similar to "03"'s mustard; aqua reads clearly distinct against both. Section 01 wraps far more content than the equivalent ground on other case studies (the whole act through the hand-carving mosaic, not just the intro statement) — confirmed by finding its actual closing tag rather than assuming the shorter pattern used elsewhere, so the aqua correctly covers all of it, not a leak. Carousel verified live via simulated drag (`mousedown`/`mousemove`/`mouseup` dispatched programmatically): index advanced two cards, stack fanned and rotated/scaled correctly on both sides, all four real captions present. Screenshot tool was down for part of this verification (known Browser-pane compositing issue, see HANDOFF.md) — confirmed via DOM/computed-style instead. | Locked |
| D-114 | 19 Aug 2026 | SANAT carousel, five more changes. (1) Continuous drag-follow replaced with click only: two prev/next buttons plus clicking any side card brings it to front; the per-pointermove layout recalculation was the lag source, so it's gone rather than tuned. (2) Two cards added — `artisan-crouching.jpg` ("Hand-carving") and `craft-tools-closeup.jpg` ("His tools", the chisels-and-gouges close-up, already used elsewhere on the page) — six cards total. (3) Carousel wrapped in `.carousel-wrap`, background `var(--paper)` (the site's own base colour), so it reads as a distinct component floating on the aqua ground rather than sitting flush with it. (4) "How it's made" moved from below the carousel to above it, rebuilt as a five-step flow chart (`.flow`, arrow-connected, wraps to a vertical arrow under 800px) with each step's copy cut to a single short phrase (e.g. "Sheesham, mango and teak, cut to size, mango mostly for export; sheesham holds the finest detail" → "Sheesham, mango and teak, cut to size"). (5) The constraint paragraph (below the carousel, unchanged position) cut from two paragraphs/85 words to one/32, keeping only the weight-decides-shipping mechanism and the "constraint decides the object" payoff line | Your call throughout. Click-to-advance was a direct fix for reported lag, not a guess — removing the mousemove listener entirely rather than throttling it, since the whole stack's transform was being recomputed on every pixel of movement. "His tools" reuses `craft-tools-closeup.jpg` rather than a new asset, since no unused artisan-plus-tools photo existed and the close-up already reads as exactly that. Verified live: 5 flow steps confirmed above the carousel (DOM order), 6 cards confirmed with all 6 images loaded (`naturalWidth`>0, `complete:true`), two programmatic `.click()` calls on the next button advanced the index correctly, constraint text confirmed at 32 words. | Locked, amends D-113 |
| D-115 | 19 Aug 2026 | SANAT, three fixes. (1) The "Hand carving and polish" mosaic (`artisan-crouching.jpg` + `hr-artisan-polishing.jpg`) removed outright — both photos now repeat what the carousel above already shows (the first added there in D-114, the second already redundant with the crouching one's new "Hand-carving" card). Its parent `.split` collapsed to a plain text block since there was no longer a second column to split against. (2) "01 The Craft" ground removed entirely — class dropped back to plain `.wrap`, `--ground`/`on-light` gone, section now runs the sitewide base paper colour like an unnumbered/paper act elsewhere. The now-orphaned `#sec-problem.has-ground{margin-top:0}` override (D-113) deleted with it, since there's no ground left for a gap to appear under. (3) An em dash in the constraint paragraph's own copy ("...runs on — the constraint decides the object") reverted to the colon the original sentence used, catching a mistake introduced while trimming it in D-114 — CLAUDE.md's no-em-dash rule applies to body copy, not just new prose. `hr-artisan-polishing.jpg` stays on disk, unused but not broken, unlike the deleted D-113 file | Your call on all three; the em dash was a straight rule violation, fixed on sight. Verified live: `mosaicPresent` false via DOM query, `emDashesInDoc` down to the two pre-existing, both quote attributions (an allowed exception per CLAUDE.md), `#sec-problem` computed background confirmed transparent (inherits body's paper), constraint paragraph text confirmed reads "...runs on: the constraint decides the object." | Locked, amends D-113/D-114 |
| D-116 | 19 Aug 2026 | SANAT "02 The Strategy", three changes. (1) `.flow-arrow` colour changed from `var(--muted)` to `var(--red)`, matching the act numeral ("01", "02"...) it sits near. (2) The seven-brand competitor positioning table (`.comps`: Jaypore, Gaatha, iTokri, FabIndia, Etsy, World Art Community, The India Craft House) removed, and with it the `.split` grid it shared with the headline — the headline column no longer needs to share width with a second column that's gone. (3) The six-criteria SANAT-vs-Trunk-Tales decision matrix removed outright, your call that it duplicates competitor names covered later on the page; the four personas immediately after it kept untouched, as asked | Your call on all three. The headline picked up an explicit `max-width:640px` once it was freed from the `.split`'s 46fr column — full-width at 1296px would have set it on one slack line instead of reading as a considered "big" statement; 640px was tuned to land the existing sentence at exactly three lines, verified by dividing rendered height by computed line-height (3.0, not rounded up from 2.4 or down from 3.6). Verified live: `arrowColor` computed as `rgb(217, 46, 21)` (`--red`), `.comps`/`.matrix` both absent from the DOM, four persona cards still present. | Locked |
| D-117 | 19 Aug 2026 | Competitor analysis restored, redesigned as a one-line strip of seven icon chips (`.comp-strip`) instead of D-116's removed table — `.chip-icon` sized and styled (16×16px, `--stage` fallback) but left empty, no stock icon substituted, per CLAUDE.md's rule against filling missing assets with stock imagery | Your correction to D-116: you wanted the table format gone, not the competitor analysis itself. Verified live: all 7 chips (Jaypore, Gaatha, iTokri, FabIndia, Etsy, World Art Community, The India Craft House) confirmed on one line at 1440px (`getBoundingClientRect().top` identical across all seven). Real icons still needed from you — `.chip-icon` is ready to take an `<img>` the moment they land. | Locked, restores competitor content cut in D-116 |
| D-118 | 19 Aug 2026 | The `.split` grid brought back for "02 The Strategy": headline/pills in the left column, the competitor grid in the right, `.comp-strip` changed from a one-line flex row to a two-column CSS grid (one column under 480px). A one-line synthesis added above the grid: "Across all seven, SANAT reads as the more craft-rooted, story-led alternative." | Your call, fixing the dead space D-117 left on the right of the headline at desktop widths — the single-line strip had nowhere to go but underneath, wasting the split's second column entirely. The synthesis line is new copy, written to your direct request ("write a line about the comparison too"): drawn from the seven differentiators' actual throughline (craft origin, storytelling, unified identity came up repeatedly across the original per-brand copy in COPY.md) rather than invented from nothing. Verified live: 7 chips confirmed alternating between two x-positions (680px/1014px at 1440px width, 4 rows), comparison line confirmed present in the second column. | Locked, amends D-117 |
| D-119 | 19 Aug 2026 | The seven `.chip-icon` slots filled with real logos, supplied by you: `comp-jaypore.jpg`, `comp-gaatha.jpg`, `comp-itokri.png`, `comp-fabindia.png`, `comp-etsy.jpg`, `comp-worldartcommunity.jpg`, `comp-indiacrafthouse.jpg`, all copied into `Assets/SANAT/`. Jaypore specifically uses the compact square "J" mark over the wordmark-plus-tagline lockup you also sent (`jaypore e.png`, left unused on disk), since the chip icon is 16×16px and the square mark reads at that size where the wordmark wouldn't | Your files, matched to their brands by eye (`images.jpeg` was Etsy's icon, unlabelled). Verified live: all 7 `<img>` tags report `complete:true` with non-zero `naturalWidth`, confirming every logo actually loaded, not just referenced. | Locked, fills the empty slots left by D-117 |
| D-120 | 19 Aug 2026 | SANAT, seven changes in one pass. (1) Persona card border (`.cards4 .p`) changed from `var(--rule)` grey to `var(--red)`. (2) `.voice` pills tightened (padding 9px 20px→8px 14px, font-size 14→13px, gap 10→8px, `white-space:nowrap` added) so "Cultural Continuity" stops wrapping to its own line at real 100% browser zoom — the split column was only ~570-600px and the four pills' combined width was landing right at that edge. (3) The naming diagram's two lead-in curves, which started literally inside their own label's glyphs (`M120,50` sat inside "SAHARANPUR"'s cap-height, `M170,170` inside "SANNAT (Urdu: صنعت)"'s own text), moved to start below each label's caption line instead (`M20,95` and `M20,215`). (4) "03 The Solution" given a ground for the first time: `#1E0F08`, on-dark, deliberately outside the existing palette and far darker than `--cocoa` (`#73411F`) — text and diagram both go white/paper automatically through the existing `.has-ground.on-dark` machinery in design.css, no per-element overrides needed. (5) "04 Design Process" ground removed (`#C8972A` mustard → plain `.wrap`), leaving this page with exactly two ground states sitewide: `#1E0F08` dark brown and the base paper, per your "only 2 tilt colour" instruction. (6) The five brand-colour bars collapsed from stacked full-width rows into 76×76px squares in one row, name and hex overlaid at the bottom of each square instead of beside it. (7) `concept-2-proto.png` swapped for `concept-2-elephants.jpg` (your supplied HEIC, converted) — the old photo buried its one visible elephant in a dim corner of a five-shot collage; the new one shows all four carved elephants clearly, one per compartment. Figcaption gained a clause: "The elephant is the product: each compartment holds one carved piece." | Your calls throughout. `#1E0F08` chosen by eye for "very dark, not the palette" rather than derived from an existing swatch, unlike D-107/D-113's reused-value pattern — deliberately a new colour since reusing `--cocoa` darker would still read as "the palette, darkened," not distinct from it. Verified live: `sec-solution` computed background `rgb(30, 15, 8)`, `sec-process` class confirmed plain `wrap`, all four voice-pill tops identical (no wrap), persona border computed as `rgb(217, 46, 21)`, elephant image `complete:true`. | Locked |
| D-121 | 19 Aug 2026 | SANAT, three fixes following D-120. (1) `concept-2-elephants.jpg` reverted back to `concept-2-proto.png`, figcaption reverted to its pre-D-120 wording ("Concept II, built in white card before it was set aside," dropping the added elephant clause) — your call to undo that swap outright. (2) The four `.floors` rows ("04 Balcony...", "03 Dining and kitchen", etc.) were unreadable against the new `#1E0F08` ground: `.fl` has always had a hardcoded `background:#fff`, but `.fd` (the description span) had no explicit colour, so it was inheriting `.has-ground.on-dark{color:var(--paper)}` — white text on a white row. Fixed with `.floors .fd{color:var(--ink)}`, matching `.fn`'s existing explicit `color:var(--cocoa)` on the same row. (3) "The final logotype" swapped from `logo-variants.png` (an eight-variant exploration grid) to `logo-final-clean.jpg`, your supplied single-mark version, aspect-ratio updated to match its real 1600×1107 | Your calls throughout; the floor-text bug was a real contrast failure introduced by D-120's new dark ground meeting an old white-card component that had never needed its own text colour before, since every ground on this page used to be light. Verified live: `.fd` computed colour `rgb(17, 17, 17)`, both reverted/replaced images confirmed `complete:true`. | Locked, amends D-120 |
| D-122 | 19 Aug 2026 | Outcome's finished-prototype mosaic reduced from three images to one: `hr-brother-holding.jpg` (a personal photo, her brother holding the prototype) and `logo-clean.png` (redundant since D-121 replaced "the final logotype" with `logo-final-clean.jpg`) removed; `hr-proto-tower.jpg` now stands alone, full-width single-column mosaic instead of the 2×2 grid it shared with the other two | Your call — a personal family photo and a duplicate logo asset both being removed from the case study, not replaced in place, since neither is coming back. Verified live: both images confirmed absent from the DOM, the remaining tower photo confirmed loaded. | Locked |
| D-123 | 19 Aug 2026 | Four AI-generated images from `D:\sanat replacements` sorted into use. (1) The sticker prompt handed off last turn came back as `brand-sticker.png`, a close-up of the SANAT seal closing the box flap — added back into the finished-prototype mosaic beside `hr-proto-tower.jpg` (the two-image slot D-122 had reduced to one), figcaption gained "The seal on the flap closes each tier shut." (2) Of the three retail-context regenerations (duty-free, store window, café), only two used: `retail-dutyfree-v2.png` and `retail-cafe-v2.png`, replacing the old `retail-dutyfree.png`/`retail-cafe.png`. The store-window version dropped as the most redundant-looking of the three, mosaic cut from three columns to two, and "Where it is meant to sit: airport retail, craft stores, and the homes it is bought for" trimmed to "...airport retail and the homes it is bought for" so the copy still matches what's actually shown. `retail-store.png` (the old asset) left unused on disk, not deleted — it's a real, un-broken photo, just currently unreferenced | Your call on which pair to keep, after flagging all three looked too similar — asked rather than guessed since it also meant trimming the "airport retail, craft stores, and homes" copy to match, a real content decision. Verified live: all four `<img>` tags confirm `complete:true`, `retail-store.png` confirmed absent from the DOM. | Locked, amends D-122 |
| D-124 | 19 Aug 2026 | The "brand voice" pull-quote ("SANAT speaks softly but powerfully, like a chisel etching heritage into wood.") removed from the Outcome section, along with its attribution line; the voice-word pills moved up to sit directly under the ODOP fact instead. "Minimal yet Rich" then also dropped from those pills, leaving Respectful, Rooted, Warm, Bilingual | Your calls — the quote "reads weird," cut outright rather than reworded, per CLAUDE.md (trim her copy, don't silently rewrite it); the pill cut came as a follow-up with no reason stated, honoured as asked. Verified live: both "speaks softly" and "Minimal yet Rich" confirmed absent from the page's HTML. | Locked |
| D-13 | 18 Aug 2026 | Motion: 0.6s reveal on entry, 0.2s on hover, fires once, respects `prefers-reduced-motion` | Carried from your existing pages; billchien uses 0.2s hover, which matches. | Locked |

### Open questions

| ID | Question |
|---|---|
| Q-01 | ~~Em dashes in COPY.md~~ **Resolved 18 Aug: converted.** All page copy is em dash free. Quote attribution lines keep the leading dash, matching the four already live on your case study pages. En dashes remain in numeric ranges only, which rule 7 permits. |
| Q-02 | ~~Dark mode~~ **Resolved 18 Aug: wanted, but deferred.** Not in scope for this build. When it comes, the palette inverts around Ink as canvas and Paper as type, with red unchanged; SVZ is the reference. Do not build hooks for it now. |
| Q-03 | ~~Archive layout~~ **Resolved 18 Aug: mosaic approved.** Mosaic grid on Stage, container-level aspect ratios, 10px gutter, captions written once images arrive. |
| Q-04 | ~~Assets location~~ **Resolved 18 Aug:** in place at `D:\Portfolio Website prettier\Assets`, 248 files, both font cuts present. Archive images still to come. |
| Q-05 | ~~About page form~~ **Resolved 18 Aug: horizontal scroll-snap row.** See D-21. |
| Q-06 | ~~LayoutGrid: which page?~~ **Resolved 18 Aug: Home, for the four project cards.** Hover flips to details, click opens the case study. See D-24 and the Project card component. Archive gets something else, to come. |
| Q-07 | ~~Back face ground: Ink or Stage?~~ **Resolved 18 Aug: neither.** The reveal keeps the same photo under a 70% ink scrim. See D-32 and D-33. |

---

## 8. Quick start

```css
:root{
  /* Colour */
  --paper:#F3F1EC;
  --ink:#111111;
  --muted:#767676;
  --rule:#E0DDD3;
  --stage:#EDEAE1;
  --red:#D92E15;

  /* Type */
  --display:'Noto Serif Display Extra Condensed', serif;
  --sans:'Inter Tight', -apple-system, sans-serif;

  --fs-display: clamp(52px, 6.4vw, 92px);
  --fs-heading: clamp(34px, 4vw, 57px);
  --fs-italic: clamp(30px, 3.2vw, 44px);
  --fs-statement: clamp(24px, 2.5vw, 35px);
  --fs-quote: clamp(23px, 2.4vw, 31px);
  --fs-standfirst: clamp(19px, 1.7vw, 24px);
  --fs-body: 17px;
  --fs-value: 14px;
  --fs-label: 12px;

  /* Spacing */
  --sp-xs:12px; --sp-s:20px; --sp-m:32px; --sp-l:56px; --sp-xl:96px;
  --gut:10px;
  --pad:72px;

  /* Layout */
  --page-max:1440px;

  /* Shape */
  --radius:3px;
  --radius-pill:9999px;

  /* Elevation — the only one */
  --shadow-pill:0 6px 20px rgba(0,0,0,.10);

  /* Motion */
  --ease-reveal:cubic-bezier(.2,.7,.2,1);
  --ease-chrome:cubic-bezier(.4,0,.2,1);
}

@media (max-width:1000px){ :root{ --pad:24px; --sp-xl:64px; } }

@font-face{
  font-family:'Noto Serif Display Extra Condensed';
  font-style:normal; font-weight:400; font-stretch:62.5%; font-display:swap;
  src:url('Assets/fonts/NotoSerifDisplayExtraCondensed-400.woff2') format('woff2');
}
@font-face{
  font-family:'Noto Serif Display Extra Condensed';
  font-style:italic; font-weight:400; font-stretch:62.5%; font-display:swap;
  src:url('Assets/fonts/NotoSerifDisplayExtraCondensed-400italic.woff2') format('woff2');
}
```

---

## 9. What the references gave, and what was left behind

| Reference | Taken | Left behind |
|---|---|---|
| theolly.it | Chapter markers, display serif at 100px, long chaptered scroll, scroll cue | Red as a heading colour, red as a page ground, Playfair/Suez/Prompt |
| billchien.net | Numbered index, two-column work rows, 0.2s hover | Black canvas, amber accent, Manuka/Faktum |
| Airtree | 75–112px section gaps, monochrome logo strip, one rationed accent | 37px radius, electric yellow, filled pill CTAs |
| Ditto | Serif-display / sans-body role split, surfaces without shadows | Pill everything, decorative blobs, multi-hue decoration |
| SVZ | Letter-spacing as structure, ghost CTAs with arrows, accent as heartbeat | Dark canvas, three type families, 160px display |
| The1 | Crushed display leading, hairline dividers as breaks, total flatness | Four-colour identity system, 215px display, concrete grey |
| Fonts Ninja | Single-accent discipline, one shadow token, type as subject, **the sans to serif headline morph** | 32px radius, coral, pure white canvas |
| Designare Studeo | Italic serif cut as a section-heading register, warm cream canvas, condensed light serif at 90px with -2px tracking | ITC Garamond, Afacad, the large mixed radii, brown |
