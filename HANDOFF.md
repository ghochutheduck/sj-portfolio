# HANDOFF.md

State as of 19 Aug 2026, end of session. Read this, `CLAUDE.md`, and `DESIGN.md` (decision log through D-124) before touching anything.

**This session's stated goal, carried into the next one: get the site live, then keep making the remaining edits below.**

---

## Go live — start here

No git repo exists yet (`.git` absent, confirmed via `git status`). Nothing has been pushed anywhere. Her other project (BoopShaillyBoop) runs on Netlify off a GitHub repo — same pattern is the reasonable default here unless she says otherwise. Intended domain, per `COPY.md`'s own header: `shambhavijaipuriar.com`.

This is not something to do unilaterally — repo creation, hosting account access and DNS all need her present. Rough sequence for next session:

1. Confirm with her: GitHub account to push to, hosting target (Netlify, same as BoopShaillyBoop, or something else), and whether `shambhavijaipuriar.com` is already registered/pointed anywhere.
2. `git init`, commit the current tree as-is.
3. Push to a new GitHub repo.
4. Connect that repo to the hosting target, deploy.
5. Point the domain at it, verify DNS propagates, verify the live site matches what's been built (fonts loading, images resolving, no dev-only paths like `localhost:8790` baked in anywhere — check `_server.js`/`.claude/launch.json` aren't referenced from any shipped page, they're dev-only).
6. Once live, resume the remaining edits below against the live URL as well as local preview.

---

## Working with Shailly

- **Terse replies. No walls of text, no overexplaining.** State what changed in a few lines. Reasoning goes in `DESIGN.md`'s decision log, not the chat reply.
- She sends short, typo-dense instructions, often mid-thought, sometimes multiple asks stacked in one message. Read carefully — she will correct a misread firmly (see D-95 vs D-99: she called out that I'd misunderstood "Contact" as the nav link instead of the footer itself).
- She communicates a lot through pasted, hand-annotated screenshots (red circles/arrows) — look closely, the annotation is the actual spec, not decoration.
- **Confirm understanding before building when she asks for it explicitly** ("confirm what you understand from now on before making the changes") — she asked for this mid-session and it stuck. When a request is genuinely ambiguous (which exact asset, which exact color), ask via a real question or `AskUserQuestion` rather than guess — she'd rather answer a crisp question than redo a wrong guess.
- She iterates in fast rounds on the same element (colour, size, spacing) — interpret each round at face value, act, don't ask her to re-clarify magnitude ("darker" means darker, "cut down aggressively" means cut hard).
- Always verify changes before saying they're done — she checks, closely, and catches things (redundant images, low-contrast text, em dashes, wrapping pills).

---

## Known tooling caveat, not a page bug

The Browser pane's screenshot tool intermittently stops compositing frames — screenshots time out or return stale/cached frames, `requestAnimationFrame`/`IntersectionObserver` callbacks can silently fail to fire. Recurred multiple times again this session. Not something real visitors see. When it happens: verify via DOM (`getBoundingClientRect`, `getComputedStyle`, `naturalWidth`/`complete` on images, simulated `.click()`/drag events) instead of trusting a screenshot. A fresh navigation usually clears it.

---

## Blocked on Shailly

| | |
|---|---|
| Going live | See above — needs her present for accounts/DNS. |
| Archive images | `Assets/Archive/` folder still doesn't exist. Photographs and Experiments sections are built and waiting. Explicitly last on her list, not urgent. |
| Pretty What interior pages | Merch (pins, tote, wrap) landed. Book-interior pages were in progress in Canva as of last session (square 8.5×8.5in trim, 2000×2000px, cover-consistency prompt handed off) — status unconfirmed this session. |
| Activity book typo | KIND page reads "finds **same** ways to care", should be "some". Baked into the artwork — needs a new export, not a code fix. |
| SANAT competitor icons | Resolved this session — all 7 supplied and wired in (D-119). |
| Resume | Resolved last session — `Assets/resume.pdf` in place. |

---

## What shipped this session (see `DESIGN.md` D-99–D-124 for full reasoning)

Heavy case-study polish pass across XFC, BoopShaillyBoop and SANAT — no Home/About/Archive changes this session.

- **XFC**: has-ground spacing bug found and fixed sitewide (D-101, was silently zeroed by a cascade collision with each page's own `.wrap` rule — affected every case study, not just XFC). Ratio bar's invisible-on-its-own-ground bug fixed with an outline (D-102). Mobile now shows the huddle-to-hexagon sketches, not just text (D-103). Rules-card image swapped for the competition announcement card, since the old one duplicated the sidebar text (D-104), then re-cropped to its real aspect ratio after the square crop was found cutting off its top and bottom (D-106).
- **BoopShaillyBoop**: new "Boop Ledger" act carved out of "I Built It" with its own ground and nav pill (D-107). Footer-gap bug (same root cause class as D-101, different mechanism) fixed here and on Lombardi (D-108). Member-form phone triptych replaced with real site pages — home, what's inside, the form (D-109). Ground colours reset to a strict red/yellow/red/yellow alternation, both reds darkened (D-110), then the first tilt's gradient flattened to exactly match the third's red (D-111). Hero swapped from a browser-chrome mockup to a real photo of the actual mailed envelopes, then re-cropped tighter (D-111/D-112).
- **SANAT** (the bulk of this session, D-113–D-124): "01 The Craft" went aqua, then to plain paper — colour experimentation, not indecision, each step logged. Artisan-interview grid rebuilt as a draggable-then-click stacked carousel, ported from a pasted React/shadcn/Motion prompt per `CLAUDE.md`'s structural-donor rule (no React/Tailwind adopted). Competitor table replaced with a one-line icon-chip strip, then given real logos (all 7 supplied and wired, D-119), then rebuilt again as a two-column grid to fill dead space (D-118) with a written comparison line. "03 The Solution" given its first-ever ground, a new near-black brown (`#1E0F08`) outside the existing palette; "04 Design Process" lost its mustard ground so the page runs exactly two ground states. Naming-diagram lines that overlapped their own labels fixed. Colour swatches collapsed from stacked bars to a one-row grid of squares. Final logotype and one prototype photo swapped for supplied images; a personal photo and a duplicate logo asset removed from Outcome; two of three near-identical AI-regenerated retail shots kept (one dropped after she flagged the similarity) plus a new sticker/seal shot added. A pull-quote and one voice pill removed on request, no reason needed.

---

## Conventions that must not break

- **Two fonts only.** Noto Serif Display Extra Condensed + Inter Tight.
- **No em dashes** in shipped copy. Quote attributions and internal comments are the exception. Sweep before showing her anything — caught and fixed one real slip this session (D-121, introduced while trimming copy, not caught until she flagged it).
- **Dependency-free.** Plain HTML/CSS/JS, no framework, no build step. Confirmed again this session: even when a pasted prompt assumes React/Tailwind/shadcn, port the pattern only (SANAT's carousel, D-113/D-114).
- **Case studies keep their own inline `<style>`** and their own pagenav, including their own local `.wrap`/`.act` rules — this is *why* the D-101 has-ground bug existed (each page's own `.wrap` was silently beating the shared `has-ground` rule). Don't assume a shared design.css rule is actually winning without checking the page's own inline styles.
- **`has-ground` needs `.wrap.has-ground`, not just `.has-ground`**, per D-101 — the compound selector is load-bearing, don't simplify it back.
- **When adding a ground to a section, check what it actually wraps** before assuming its scope — SANAT's "01 The Craft" wraps far more content than the equivalent ground on other pages (D-116 caught this by checking the real closing tag).
- **Unused-but-not-broken assets get left on disk, not deleted** (e.g. `hr-artisan-polishing.jpg`, `retail-store.png`, `logo-variants.png`) — only delete a file when it's actively defective (e.g. D-115's white-banded PNG).

---

## Before showing her anything

- Grep for `—` outside comments/quote attributions
- Every colour, radius and font traced to a `DESIGN.md` token (or a logged exception)
- No placeholder copy, no stock images
- Checked at 1440px, 1000px and 375px
- New design choice? Add it to the `DESIGN.md` decision log with its reason
