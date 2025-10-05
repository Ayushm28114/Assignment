# IELTS Institute - Home Page

A modern, responsive home page for an IELTS Institute built with React, Vite, and Tailwind CSS.


## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone and install**
   ```bash
   git clone <repository-url>
   cd InternProject
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   - Navigate to `http://localhost:5174`

## 🛠️ Tech Stack

- **React 19** - Modern functional components with hooks
- **Vite 7** - Fast build tool with HMR
- **Tailwind CSS 3** - Utility-first styling
- **JavaScript/JSX** - ES6+ features

## 📱 Features

- **Responsive Design** - Mobile-first approach, works on all devices
- **Modern UI/UX** - Glass morphism, gradients, smooth animations
- **Interactive Elements** - Functional navigation, hover effects, smooth scrolling
- **Accessibility** - ARIA labels, keyboard navigation, semantic HTML
- **Performance** - Optimized with Vite, under 150KB bundle size

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation with mobile menu
│   ├── Hero.jsx        # Landing section with CTA
│   ├── Features.jsx    # Course features grid
│   ├── PracticeTests.jsx # Test sections
│   ├── Testimonials.jsx  # Student reviews
│   ├── About.jsx       # Team and company info
│   └── Footer.jsx      # Links and contact
├── App.jsx             # Main component
├── index.css           # Global styles + animations
└── main.jsx            # Entry point
```

## 🎨 Design Choices

### **Visual Design**
- **Color Scheme**: Professional blue/indigo gradients for trust and education
- **Typography**: Inter font for modern readability
- **Layout**: CSS Grid/Flexbox for responsive, flexible layouts
- **Animations**: Subtle hover effects and transitions for engagement

### **User Experience**
- **Navigation**: Smooth scrolling between sections with fixed navbar
- **Mobile-First**: Responsive design starting from mobile screens
- **Accessibility**: Proper contrast ratios, keyboard navigation, ARIA labels
- **Performance**: Component-based architecture for fast loading

### **Technical Decisions**
- **React Functional Components**: Modern hooks-based approach
- **Tailwind CSS**: Utility-first for rapid development and consistent design
- **Vite**: Fast development server and optimized production builds
- **No External Libraries**: Minimal dependencies for better performance

## 🚀 Available Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview build locally
npm run lint     # Code quality check
```

## 🔧 Deployment

**Build for production:**
```bash
npm run build
```

**Deploy to static hosting:**
- Netlify: Deploy the `dist` folder
- Vercel: Connect GitHub repo for auto-deployment
- GitHub Pages: Use `gh-pages` package

## 📄 License

Educational/Portfolio use. Built with ❤️ for learning modern web development.
