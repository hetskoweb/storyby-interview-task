# 🧠 Storyby Interview Task

This project was created as a test task for the **Junior Frontend Developer** position at **Storyby**.  
The goal was to design an architecture that allows building **hundreds of marketing landing pages** within a single project — each generating its own standalone HTML file.

---

## Live demo

Experience the live website: [Task Demo](https://hetskoweb.github.io/storyby-interview-task/landing1)

---

## 🚀 Technologies

- **React + TypeScript** – component-based architecture
- **Vite** – fast build and development
- **SCSS (Sass)** – modular and maintainable styling
- **ESLint + Prettier** – code quality and consistent formatting
- **Intersection Observer API** – scroll-triggered animations
- **Simulated Facebook Pixel** – sends a `Lead` event on button click
- **Responsive Layout** – adaptive design for mobile, tablet, and desktop

---

## 🧩 How to Run

Available landing names:

- landing1
- landing2
- landing3

1. **Clone the repository:**

```bash
git clone https://github.com/hetskoweb/storyby-interview-task.git
cd storyby-interview-task
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Run the project locally:**

```bash
npm run dev:landing1
# or
yarn dev:landing1
```

4. **Open the landing page in your browser:**

```bash
http://localhost:5173
```

---

## 🏗 How the Build Works

This project supports **multiple landing pages** in a single repository.

- Each landing page has its own folder inside `src/landings`.
- Vite uses a **dynamic config** to build each landing separately.
- The built files go into `dist/{landingname}`.

### Build Commands

**Build all landings:**

```bash
npm run build
# or
yarn build
```

**Build a specific landing:**

```bash
cross-env LANDING_NAME=landing1 vite build
# or
yarn build:landing1
```

The output for each landing will be in `dist/landing1`, `dist/landing2`, etc.

### Adding a New Landing

1. Create a new folder inside `src/landings/`, e.g., `landing4`.
2. Add your `index.html` and main entry file (`main.jsx` or `main.tsx`).
3. Add `landing4` to the `landingNames` array in `build-landings.js` (if building all landings).
4. Use the dev script to run it locally:

```bash
npm run dev:landing4
# or
yarn dev:landing4
```

---

## 🎨 Implemented Features

- Hero section with animated heading and buttons
- Features block with feature cards
- Testimonals section
- Footer with contact information
- Smooth scroll-triggered animations using the **Intersection Observer API**
- Simulated **Facebook Pixel** event triggered on “Get started” and “Start free trial” button clicks

---

## 🧠 Additional Notes

- The Facebook Pixel integration is **simulated** — when a user clicks a button in the Hero section, a mock `Lead` event is logged to the console to demonstrate tracking logic:
  - If `window.fbq` exists, `fbq('track', 'Lead')` is called.
  - Otherwise, it logs `Simulated Lead event (no Pixel connected)`.
- Intersection Observer is used for scroll-triggered visibility animations. Refs are captured inside effects (`const target = ref.current`) to ensure safe cleanup.
- TypeScript-friendly global declaration for `fbq` is added to avoid TS errors without using `any`.

---

## 📱 Responsiveness

The landing page is fully responsive and adapts smoothly to:

- Mobile devices
- Tablets
- Desktops

Media queries and flexible layouts ensure proper scaling of images, text, and components across breakpoints.

---

## ✅ Notes for Reviewers

- The architecture is designed to scale — add new landings under `src/landings/`, each with its own `index.html` and components; add the entry to Vite’s build input or use an automated discovery script.
- Key aspects to test:
  - Scroll-triggered animations in different viewports
  - Button hover states and keyboard accessibility
  - Console logs for simulated Pixel events (or connect a real Pixel to verify actual events)

---

## 📎 Additional Information

You can view the original technical task here:
[📘 View Technical Task (PDF)](./Storyby_-_Frontend_Developer_Task_3.pdf)
