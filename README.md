# Chamika Gayantha - Professional Portfolio

This is a modern, responsive, and animated personal portfolio website built with HTML5, CSS3, and Vanilla JavaScript.

## 📂 Project Structure

```text
portfolio/
├── index.html           # Main HTML document
├── css/
│   └── style.css        # Stylesheet with variables, responsive queries & animations
├── js/
│   └── script.js        # Logic for runtime animations, interactions & modals
├── images/
│   ├── profile.jpg      # Your profile picture (Need to add)
│   └── projects/        # Project screenshots
│       ├── cake-business.png
│       ├── unit-converter.png
│       ├── exam-eligibility.png
│       └── javafx-calculator.png
├── assets/
│   └── Chamika-Gayantha-CV.pdf  # Your CV file (Need to add)
└── README.md            # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic tags for accessibility and structure.
- **CSS3**: Custom properties (variables), Flexbox, Grid, Glassmorphism, Keyframe animations, Media queries.
- **Vanilla JavaScript**: DOM Manipulation, IntersectionObserver (for scroll animations), Event Listeners, Custom Cursor, Typing effect, Magnetic buttons.
- **Font Awesome**: Icons for social links and UI elements.
- **Google Fonts**: Inter & Poppins fonts.

## ✨ Features Implemented

1. **Loading Screen**: Professional animated loading screen.
2. **Custom Cursor**: Interactive cursor on desktop that responds to hovers.
3. **Hero Section Animations**: Text reveals, typing animations, and floating code icons.
4. **Scroll Reveal Animations**: Elements fade and slide into view as you scroll.
5. **Interactive Navigation**: Sticky glass header, scrollspy (highlighting active section), mobile hamburger menu.
6. **3D Tilt Effect**: Vanilla JS implemented tilt effect on project cards.
7. **Magnetic Buttons**: Buttons subtly follow the mouse cursor on hover.
8. **Project Modals**: Detailed project views with smooth open/close transitions.
9. **Responsive Design**: Works perfectly across mobile, tablet, and desktop viewports.
10. **Accessibility**: Respects `prefers-reduced-motion` to disable/reduce heavy animations for users who prefer it.

## 📝 Action Items (What you still need to add)

1. **Profile Picture**: Place your profile picture at `images/profile.jpg`.
2. **Project Screenshots**: Add screenshots of your projects in `images/projects/`:
   - `cake-business.png`
   - `unit-converter.png`
   - `exam-eligibility.png`
   - `javafx-calculator.png`
   *(Currently using placeholders if not found)*
3. **CV File**: Place your CV PDF at `assets/Chamika-Gayantha-CV.pdf`.
4. **Future Activities**: In the HTML file (around line 527), there is a placeholder card under "Experience & Activities" where you can add future workshops/certifications.

## 🚀 How to Run Locally

You can run this website on your local machine using a simple HTTP server.

**Option 1: Using Python**
1. Open your terminal in the `portfolio` folder.
2. Run: `python -m http.server 8000` (or `python3 -m http.server 8000`)
3. Open your browser and go to `http://localhost:8000`

**Option 2: Using Node.js (http-server)**
1. Open your terminal in the `portfolio` folder.
2. Run: `npx http-server`
3. Check the output for the local URL (usually `http://127.0.0.1:8080`)

**Option 3: VS Code Live Server**
1. Open the folder in VS Code.
2. Install the "Live Server" extension.
3. Right-click on `index.html` and select "Open with Live Server".

## 🌐 How to Deploy (GitHub Pages / Vercel / Netlify)

**GitHub Pages:**
1. Initialize a Git repository in this folder: `git init`
2. Add files and commit: `git add .` and `git commit -m "Initial commit"`
3. Create a repository on GitHub.
4. Link it: `git remote add origin https://github.com/Chamika-Gayantha/repository-name.git`
5. Push: `git push -u origin main`
6. Go to repository Settings > Pages, select the `main` branch, and save.

**Vercel / Netlify:**
1. Push your code to a GitHub repository.
2. Log into Vercel or Netlify.
3. Click "Add New Project" or "Import from GitHub".
4. Select your repository.
5. Leave build settings as default (since it's static HTML/CSS/JS) and click Deploy.
