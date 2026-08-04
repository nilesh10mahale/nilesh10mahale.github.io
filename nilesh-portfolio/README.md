# Nilesh.dev — Portfolio

A multi-page developer portfolio (plain HTML/CSS/JS — no build step needed).

## Pages
- `index.html` — Home
- `work.html` — Selected work
- `about.html` — About + process
- `contact.html` — Contact (GitHub + Gmail)

## Deploy to GitHub Pages

1. Create a new repository on GitHub, e.g. `nilesh10mahale/nilesh10mahale.github.io`
   (using this exact name gives you the site at `https://nilesh10mahale.github.io/`).
   Alternatively use any repo name like `portfolio` — the site will then be at
   `https://nilesh10mahale.github.io/portfolio/`.

2. From this folder, push the files to that repo:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/nilesh10mahale/<your-repo-name>.git
   git push -u origin main
   ```

3. On GitHub: go to the repo → **Settings** → **Pages**.
   - Under "Build and deployment", set **Source** to `Deploy from a branch`.
   - Set **Branch** to `main` and folder to `/ (root)`.
   - Click **Save**.

4. Wait 1–2 minutes, then your site will be live at the URL GitHub shows on that
   Pages settings screen (usually `https://nilesh10mahale.github.io/<repo-name>/`).

No build tools, frameworks, or `node_modules` required — it's static HTML/CSS/JS,
so GitHub Pages serves it as-is.

## Editing content

- Projects: edit the `PROJECTS` array near the bottom of `index.html` and `work.html`.
- Skills/stack: edit the `STACK` array in `index.html` and `about.html`.
- Process steps: edit the `PROCESS` array in `about.html`.
- Contact details: `contact.html` (and the nav/overlay on every page).
