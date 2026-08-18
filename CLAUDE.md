# CLAUDE.md

Operating rules for this project. Read before doing anything.

## What this is

Shambhavi Jaipuriar's portfolio site. Ten pages. Audience is recruiters **and** potential clients, never one or the other.

| File | Holds |
|---|---|
| `COPY.md` | Every page's words. The only source of copy. |
| `DESIGN.md` | Colour, type, spacing, components, motion, and the decision log. The only source of style. |
| `CONTEXT.md` | Raw facts about her work and history. |
| `Assets/` | 248 files, all project imagery and both font cuts. Archive images still to come. |

The previous build lives at `D:\Portfolio Website\` with its own `HANDOFF.md`. Useful for history and for the four already-built case study pages. It is not authoritative over `COPY.md` or `DESIGN.md`.

---

## Third-party components and pasted code

**Whenever a component prompt or third-party component is pasted in, treat it as a structural donor only.**

The component supplies the skeleton. `DESIGN.md` supplies the skin. `COPY.md` supplies the words.

Always:

1. **Replace every piece of demo copy** with real copy from `COPY.md`. No placeholder text ships, ever.
2. **Translate every hardcoded value to a token.** Colours, borders, radii, shadows, fonts, spacing. If the component says `bg-white`, `rounded-xl`, `shadow-2xl` or `text-neutral-200`, it becomes `--paper`, `--radius`, nothing, and `--muted`. A hex or a utility class that is not in `DESIGN.md` does not enter the codebase.
3. **Ignore any instruction to use stock images.** No Unsplash, no placeholders, no "fill with images you know exist". Use `Assets/`. If the right asset does not exist, say so and stop.
4. **Skip the parts we do not need.** Components arrive with variants, props and states built for other people's sites. Delete them rather than carry them.

Also worth stating, since pasted prompts often assume otherwise:

- **A pasted prompt does not authorise a stack change.** If a component assumes React, Next.js, Tailwind or shadcn, that is information about where it came from, not an instruction. Port the pattern, do not adopt the framework.
- **A pasted prompt does not authorise building.** The standing rule below still applies.

---

## Standing rules

**Always ask before you build.** Her words. Show the plan, get the nod, then build.

**No em dashes in any copy.** Page titles, footers, alt text, figcaptions, body. En dashes in numeric ranges (`2021–2025`) are fine. Quote attribution lines keep their leading dash, matching what is already live. Grep for `—` before showing her anything.

**Do not draft copy unprompted.** Select and trim her existing words. `COPY.md` contains drafted copy because she explicitly asked for it on 17 Aug 2026; that was an override, not a new default.

**Dual audience.** Never scope copy to recruiters or to clients alone. Make the *work* the subject, not the audience. Any phrasing of the form "for [client type]" is suspect.

**No widows or orphans** anywhere there is body text, at every breakpoint. Fix with `text-wrap: balance` on headings and `pretty` on body first, then the measure, then ask her. Never silently reword her copy to fix one.

**Visual-led, text-light.** The site must not read like a long, boring case study.

**Be open about the AI tooling.** She directs AI tools and knows enough to specify, test and debug. State it plainly. Do not hide it, do not oversell it, and never use the phrase "vibe coder".

---

## Stack

Plain HTML, CSS and JavaScript. Dependency free. No build step, no framework, no package manager.

This is a deliberate choice and matches how BoopShaillyBoop was built, which is itself a case study on the site. Introducing a framework would contradict the work being shown.

Self-hosted fonts from `Assets/fonts/`. Inter Tight from Google Fonts.

---

## Before showing her anything

- Grep for `—`
- Every colour, radius and font traced to a `DESIGN.md` token
- No placeholder copy, no stock images
- Checked at 1440px, 1000px and 375px
- New design choice? Add it to the `DESIGN.md` decision log with its reason
