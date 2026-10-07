# Validata design process

The audience is dealership operators, prospective partners, and people viewing a live showcase. The homepage should make the work tangible: warranty evidence, operational reports, and controlled dealership workflows. Keep the original logo and blue/black/white brand.

## Review method

Use [Apple Design](https://github.com/dickwu/apple-design-skill/blob/main/SKILL.md) in improvement mode. Read the relevant foundation and interaction references, review the current screen, define one product-specific interaction, implement, and verify. This is a React website; native tab bars, window chrome, and Apple system fonts aren't requirements.

The current review found that one-time fade-ins and slow independent loops did little to explain the work. The signature interaction is now a scroll-driven portfolio: as each explanation reaches the reader, a shared illustration assembles the relevant documents, report, or workflow. Hero selection also visibly connects the chosen system to its input and outcome.

Sources used:

- `motion.md` › Best practices / Providing feedback: purposeful, brief, interruptible responses.
- `feedback.md` › Best practices: feedback beside the item it explains.
- `accessibility.md` › Vision / Mobility / Cognitive: readable contrast, comfortable controls, equivalent reduced-motion content.
- `layout.md` › Visual hierarchy / Adaptability: progressive disclosure and the same functions at different widths.
- `typography.md` › Using custom fonts / Supporting Dynamic Type: preserve legibility and hierarchy as text grows.
- `color.md` › Inclusive color: use labels and shapes in addition to color.
- `branding.md` › Best practices: retain brand expression with familiar control behavior.
- `design-principles.md` › Agency / Craft / Delight: freedom to explore and restrained, meaningful detail.

The files live in the installed skill's `references/hig/`. The reference source URLs are embedded there. Cross-platform guidance is in `references/cross-platform.md`.

## Tokens and layout

Manrope stays the display and body face, with IBM Plex Mono reserved for genuine technical annotations. New content uses 16px body copy, 12–14px controls, 11px minimum diagram labels, and responsive 35–51px story headlines. Controls target at least 44px in both dimensions where possible.

| Role              | Light section | Dark section | Contrast against section background            |
| ----------------- | ------------- | ------------ | ---------------------------------------------- |
| Background        | #ffffff       | #05080f      | —                                              |
| Content           | #172033       | #f5f8ff      | 16.27:1 / 18.85:1                              |
| Secondary content | #526478       | #b0c0d7      | 6.08:1 / 10.85:1                               |
| Interactive text  | #086aab       | #69c8ed      | 5.74:1 / 10.58:1                               |
| Raised surface    | #f4f7fc       | #0c1829      | Use the content roles above                    |
| Brand accent      | #2196f3       | #23b1de      | Original brand; avoid small blue text on white |

Contrast values are computed from sRGB relative luminance. The original #2196f3 is 3.12:1 against white, so small interactive copy uses the darker blue role.

Regular width:

```
Original logo + navigation
Hero copy       Interactive system orbit
Portfolio title
Claim story     [sticky illustration]
Report story    [transitions with scrolling]
Agent story     [normal page scroll]
Interactive overview + approach + contact
```

Compact width or short viewport:

```
Original logo + navigation
Hero copy + orbit
Claim copy + its illustration
Report copy + its illustration
Agent copy + its illustration
Overview + approach + contact
```

The portfolio is deliberately specific to dealership work: real document types, reporting categories, and human checkpoints. Generic device mockups, fake results, scroll hijacking, and autoplaying carousels would weaken it. Decorative chapter numbers were removed from the discipline strip because the three product areas aren't a required sequence.

## Verification floor

- Original logo file and colors preserved.
- Normal scrolling, anchor links, and keyboard controls work.
- Illustrations say they are examples; no claim of a live backend.
- Scroll-linked scenes remain readable when motion is stopped; pause is available in the hero and footer.
- Phone, tablet, desktop, short viewport, and enlarged-text layouts retain all content.
- Reduced motion, reduced transparency, and increased contrast have deliberate fallbacks.
- Typecheck, production build, and hosted-preview verification pass before sharing.
