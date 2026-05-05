# TradeBuilt — Setup Guide

## What's in this project

```
tradebuilt/
├── src/
│   ├── components/
│   │   ├── Layout.astro       ← Base HTML wrapper (title, meta tags)
│   │   ├── Nav.astro          ← Navigation bar
│   │   └── Calculator.astro   ← College vs Apprenticeship calculator
│   ├── pages/
│   │   └── index.astro        ← Homepage (all sections)
│   └── styles/
│       └── global.css         ← Brand tokens + shared button styles
├── public/                    ← Drop your logo, favicon, images here
├── astro.config.mjs
├── netlify.toml
└── package.json
```

---

## Step 1 — Install Node.js

1. Go to https://nodejs.org
2. Download the **LTS** version and install it
3. Open **Terminal** (Mac) or **Command Prompt** (Windows)
4. Type `node -v` and press Enter — you should see a version number

---

## Step 2 — Install VS Code (free code editor)

1. Go to https://code.visualstudio.com
2. Download and install it
3. Open the `tradebuilt` folder in VS Code: File → Open Folder

---

## Step 3 — Install project dependencies

In VS Code, open the Terminal (View → Terminal) and run:

```bash
npm install
```

This installs Astro and everything it needs. Takes about 1 minute.

---

## Step 4 — Run the site locally

```bash
npm run dev
```

Open your browser to http://localhost:4321 — you'll see your site live.
Any changes you make to the files will update instantly.

---

## Step 5 — Swap in your logo

1. Put your logo files in the `/public` folder (e.g. `logo.png`, `logo-circle.png`)
2. In `src/components/Nav.astro`, replace the TB initials circle with:
   ```html
   <img src="/logo-circle.png" alt="TradeBuilt" width="40" height="40" />
   ```

---

## Step 6 — Update your domain in astro.config.mjs

Open `astro.config.mjs` and replace `yourdomainhere.com` with your actual GoDaddy domain:

```js
site: 'https://tradebuilt.com',  // ← your actual domain
```

---

## Step 7 — Deploy to Netlify

1. Go to https://github.com and create a free account (if you don't have one)
2. Create a new repository called `tradebuilt`
3. In VS Code Terminal, run:
   ```bash
   git init
   git add .
   git commit -m "Initial TradeBuilt site"
   git remote add origin https://github.com/YOURUSERNAME/tradebuilt.git
   git push -u origin main
   ```
4. Go to https://netlify.com → Sign up free → "Add new site" → "Import from Git"
5. Connect your GitHub account and select the `tradebuilt` repo
6. Netlify auto-detects the settings from `netlify.toml` — just click **Deploy**
7. Your site goes live at a Netlify URL (e.g. `tradebuilt.netlify.app`)

---

## Step 8 — Connect your GoDaddy domain to Netlify

### In Netlify:
1. Go to your site → **Domain settings** → **Add custom domain**
2. Type your GoDaddy domain (e.g. `tradebuilt.com`) and confirm
3. Netlify will show you **two nameserver addresses** — copy them

### In GoDaddy:
1. Log into GoDaddy → **My Products** → **DNS** next to your domain
2. Scroll to **Nameservers** → click **Change**
3. Select **Enter my own nameservers**
4. Paste the two Netlify nameserver addresses
5. Save — DNS changes take 15 min to 48 hours to fully propagate

Once connected, your GoDaddy domain points to your Netlify site automatically.
Netlify also gives you a **free SSL certificate** (the https:// padlock).

---

## Adding new pages later

To add a Study page, Careers page, etc.:
1. Create a new file in `src/pages/` — e.g. `src/pages/study.astro`
2. Copy the Layout and Nav imports from `index.astro`
3. Add your content — it will be live at `/study` automatically

---

## Need help?

- Astro docs: https://docs.astro.build
- Netlify docs: https://docs.netlify.com
- GoDaddy DNS help: https://support.godaddy.com/help/change-nameservers-for-my-domains-664
