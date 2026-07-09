# /public — drop your assets here

These files are referenced by the site. Add them here to replace the
placeholders:

| File              | Used for                                  | Status      |
| ----------------- | ----------------------------------------- | ----------- |
| `resume.pdf`      | The "Resume" button (Hero)                | **TODO**    |
| `profile.jpg`     | About section photo (optional)            | optional    |

## Resume
Drop `resume.pdf` here. The Hero "Resume" button links to `/resume.pdf`
(configured via `site.resumeUrl` in `data/content.ts`).

## Profile photo (optional)
Drop a square-ish `profile.jpg` here, then follow the `TODO` comment in
`components/sections/about.tsx` to swap the monogram placeholder for a
`next/image`. If you skip this, the tasteful "CB" monogram placeholder is shown.

## Icons & social image — already handled
You do **not** need to add a favicon or OG image. They are generated at build
time from your brand colors by:
- `app/icon.tsx` (favicon)
- `app/apple-icon.tsx` (Apple touch icon)
- `app/opengraph-image.tsx` (Open Graph / Twitter card)

Edit those files if you want to customize them.
