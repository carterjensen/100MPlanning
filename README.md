# TUB Product & Experience — $100M Org Plan

Interactive web app visualizing the Product & Experience division scaling from $20-30M to $100M revenue. 5 tabs: Org Evolution (phase slider), Mission & Context, Abby's Role, Next 90 Days, Cost Model.

## Local preview

Open `index.html` in a browser. Or for a proper local server:

```bash
cd ~/100MPlanning
python3 -m http.server 8000
# visit http://localhost:8000
```

The password gate uses Web Crypto API (`crypto.subtle.digest`). It only works over `http://localhost` or `https://`, not `file://`. So use the local server above, not double-click.

## Deploy to GitHub Pages

1. Push to `main` on `github.com/carterjensen/100MPlanning`
2. Repo → Settings → Pages
3. Source: `Deploy from a branch`, Branch: `main`, Folder: `/ (root)`
4. Save. Site goes live at `https://carterjensen.github.io/100MPlanning/` in 1-3 minutes.

The `.nojekyll` file at root tells GitHub Pages to skip Jekyll processing and serve files as-is.

## Password

The site is gated by a single password. The expected SHA-256 hash is stored in [js/auth.js](js/auth.js). The plaintext password is shared out-of-band. `sessionStorage` keeps it unlocked until the tab closes.

### Security caveat

This is casual-viewer protection, not real encryption. The data files (`js/data.js`) sit on the public repo and the public site, and anyone who navigates directly to them can read the raw role/comp data without ever interacting with the password gate.

If you need real protection (data unreadable without the password), the upgrade path is AES-encrypt `data.js` with the password as the key and decrypt at runtime. Tell CJ and we'll swap it in.

## To change the password

1. Pick a new password.
2. Compute its SHA-256 hash: `echo -n "NewPassword" | shasum -a 256`
3. Replace `EXPECTED_HASH` in [js/auth.js](js/auth.js).
4. Commit and push.

## File structure

```
index.html              Shell, nav, header, password gate, 5 view containers
.nojekyll               Tells GitHub Pages to skip Jekyll
css/
  variables.css         Design tokens
  layout.css            Body, nav, header, view layout, responsive
  components.css        Slider, dept cards, role lists, badges, tables, timeline, priorities
  auth.css              Password gate
js/
  data.js               All org plan data: PHASES + MISSION + ABBY_TIMELINE + PRIORITIES + COST_MODEL
  render.js             Pure render functions per tab
  app.js                Tab switching
  auth.js               Password gate (SHA-256 compare, sessionStorage unlock)
```

## To edit data

Open [js/data.js](js/data.js). All numbers, roles, comp ranges, prose, and badges live there. Edit, save, refresh. Render code never holds values.

## Source documents

This app is built from:
- `TUB Org Plan Build/CLAUDE.md` (build brief)
- `TUB Org Plan Build/CONTEXT.md` (decision history v1-v9)
- `TUB Org Plan Build/reference-v9.html` (functional spec)
- `TUB $100M Org Plan - Product & Experience Division.md` (source of truth)

All four live in CJ's second brain vault.
