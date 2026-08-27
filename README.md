# TEDxHeriot-Watt University Dubai — Event Website

A single-page site for TEDxHeriot-Watt University Dubai (Thursday, April 8, 2027), built for GitHub Pages.
Colors follow TEDx brand guidelines (red / black / white only). Theme, speakers, and venue
details are marked "TBA" as placeholders — swap them in as they're confirmed.

## Files
- `index.html` — page content/structure
- `styles.css` — all styling (TEDx red `#EB0028`, black, white)
- `script.js` — live countdown to April 8, 2027 at 12:00 PM GST + mobile menu toggle and motion effects
- `images/hwud.jpg` — Heriot-Watt University Dubai campus photo (hero + venue section)
- `images/organizers/` — future organizer profile photos

## Publish it on GitHub Pages (using the `tedxhwud` account)

Your colleague's site works because their repo is named exactly `f27id.github.io` —
GitHub auto-publishes any repo named `<username>.github.io` to that URL. Same pattern here:

1. **Sign in / create the GitHub account** `tedxhwud` at github.com (if not already done).
2. Click **New repository**.
   - Repository name: **`tedxhwud.github.io`** (must match exactly, all lowercase)
   - Set to **Public**
   - Don't initialize with a README (we already have one) — or if you do, you'll just overwrite it in step 3.
3. Upload the files from this folder into the repo, keeping the same structure:
   ```
   tedxhwud.github.io/
   ├── index.html
   ├── styles.css
   ├── script.js
   └── images/
       └── hwud.jpg
   ```
   Easiest way: on the repo page, click **Add file → Upload files**, drag in `index.html`,
   `styles.css`, `script.js`, and the `images` folder (with `hwud.jpg` inside it), then
   **Commit changes**.
4. Go to **Settings → Pages** in the repo.
   - Under "Build and deployment", Source should be **Deploy from a branch**.
   - Branch: **main**, folder: **/ (root)** → **Save**.
5. Wait 1–2 minutes. Your site will be live at:
   **https://tedxhwud.github.io**

## Updating content later
- **Theme reveal**: edit the `theme-title` (`xxx`) and `theme-sub` text in `index.html` under `<section id="theme">`.
- **Speakers**: duplicate a `.speaker-card` block in the `speaker-grid` and replace the placeholder photo `div` with an `<img>` tag once headshots are ready.
- **Venue/contact details**: edit the `<section id="venue">` and `<section id="organize">` blocks (address, email, ticket links).
- **Organizer photos**: add photos to `images/organizers/`, then replace the matching placeholder in `<section id="organize">` with an `<img>` tag.
- **Countdown target time**: update the `Date.UTC` target in `script.js` if the exact start time changes.

Any edit can be made directly in the GitHub web editor (pencil icon on each file) — changes go live automatically within a minute or two of committing.
