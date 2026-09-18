# Personal portfolio

A responsive, static portfolio made with HTML, CSS, and vanilla JavaScript. No build step, packages, external fonts, paid services, API keys, database, or backend are required.

## Content and editing

Content was adapted from the existing portfolio supplied by Ruike Lin:
https://ruikelin.github.io/Ruike-Rickie-Lin/RuikeLin-main/

The site includes the original portrait and résumé as local assets, the Zooniverse research experience, and four existing projects. Dates and unsupported credentials have not been invented. Check that the original résumé and student status are still current before publishing.

- Edit `index.html` for biography, experience, project descriptions, and links.
- Replace `assets/ruike-lin-resume.pdf` when your résumé changes.
- Replace `assets/ruike-campus.jpg` to update your portrait.
- Adjust color variables at the start of `styles.css`.
- Email links open the visitor's email application; the site has no contact form or backend.

## Preview

Open `index.html` in your browser, or serve this folder with `python3 -m http.server 8000` and visit `http://localhost:8000`.

## Host on GitHub Pages

1. Commit and push these files to a GitHub repository. Keep `index.html`, `styles.css`, `script.js`, `assets/`, and `.nojekyll` in the repository root.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select your branch (usually `main`) and the **/ (root)** folder, then save.
5. GitHub will display your published URL after deployment. It is typically `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/`.

All asset paths are relative, so the site also works under a repository subdirectory. Use a public repository for free GitHub Pages hosting. No GitHub Actions workflow is needed.

## Accessibility and behavior

Semantic sections, a skip link, visible keyboard focus, a keyboard-accessible mobile menu, reduced-motion support, and native expandable project overviews. Content and navigation remain available without JavaScript. JavaScript adds the mobile menu, click-to-switch sections with shareable URLs and browser back/forward support, and automatic footer year.
