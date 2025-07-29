# 📱 iPhone 3D Interactive Showcase

An immersive 3D iPhone web experience featuring interactive models, smooth animations, and Apple-inspired design. Built with modern web technologies for a premium user experience.
![iPhone 15 Pro 3D Showcase](./public/assets/images/iphone.png)

## 🚀 **Live Demo**

**🌐 [View Live Project](https://iphone-3d-project.vercel.app)**

## ✨ **Features**

- 🎮 **Interactive 3D Models** - Rotate, zoom, and explore iPhone from all angles
- 🎬 **Smooth Animations** - GSAP-powered transitions and scroll-triggered effects
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Apple-Inspired UI** - Clean, minimalist design matching Apple's aesthetic
- ⚡ **High Performance** - Optimized 3D rendering with smooth 60fps animations
- 🌙 **Modern UX** - Intuitive controls and seamless user interactions
- 📐 **WebGL Graphics** - Hardware-accelerated 3D rendering

## 🛠️ **Tech Stack**

| Technology | Purpose | Version |
|------------|---------|---------|
| **React.js** | Frontend Framework | ^18.0.0 |
| **Three.js** | 3D Graphics Library | ^0.150.0 |
| **GSAP** | Animation Engine | ^3.12.0 |
| **Tailwind CSS** | Styling Framework | ^3.3.0 |
| **Vite** | Build Tool | ^4.4.0 |
| **Vercel** | Deployment Platform | Latest |

## 🎯 **Key Highlights**

### **3D Model Features:**
- High-quality iPhone 3D model with realistic materials
- Interactive rotation with mouse/touch controls
- Smooth camera transitions and zoom functionality
- Multiple color variants and configurations

### **Animation System:**
- Scroll-triggered animations using GSAP ScrollTrigger
- Smooth page transitions and micro-interactions
- Loading animations and progress indicators
- Parallax effects and depth-based motion

### **Performance Optimizations:**
- Efficient 3D model loading and caching
- Responsive design with adaptive quality settings
- Optimized textures and materials for web
- Smooth 60fps animations across devices

## 🚀 **Getting Started**

### **Prerequisites**
```bash
Node.js >= 16.0.0
npm >= 8.0.0
```

### **Installation**
```bash
# Clone the repository
git clone https://github.com/HA2345567/iphone-3d-project.git

# Navigate to project directory
cd iphone-3d-project

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Available Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
```

## 📁 **Project Structure**

```
iphone-3d-project/
├── public/
│   ├── models/          # 3D model files (.glb, .gltf)
│   ├── textures/        # Texture images
│   └── images/          # Static images
├── src/
│   ├── components/      # React components
│   │   ├── Canvas/      # Three.js canvas components
│   │   ├── UI/          # User interface components
│   │   └── Layout/      # Layout components
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   ├── styles/          # Global styles
│   └── App.jsx          # Main application component
├── package.json
└── README.md
```

## 🎮 **Usage & Controls**

### **Desktop Controls:**
- **Mouse Drag** - Rotate 3D model
- **Mouse Wheel** - Zoom in/out
- **Scroll** - Navigate through sections
- **Click** - Interact with UI elements

### **Mobile Controls:**
- **Touch & Drag** - Rotate 3D model
- **Pinch** - Zoom in/out
- **Swipe** - Navigate sections
- **Tap** - Interact with elements


## ⚡ **Performance**

- **Lighthouse Score**: 95+ Performance
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **3D Model Load Time**: < 3s
- **Smooth Animations**: 60fps maintained

## 🚀 **Deployment**

This project is deployed on **Vercel** for optimal performance and global CDN distribution.

### **Deploy Your Own:**
```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod
```

### **Environment Variables:**
```env
VITE_APP_TITLE=iPhone 3D Showcase
VITE_ANALYTICS_ID=your-analytics-id
```

## 🎨 **Customization**

### **Adding New iPhone Models:**
1. Place 3D model files in `/public/models/`
2. Update model configuration in `/src/utils/models.js`
3. Add new color variants in component props

### **Modifying Animations:**
1. Edit GSAP timelines in `/src/components/Canvas/`
2. Adjust scroll triggers in `/src/hooks/useScrollAnimation.js`
3. Customize easing and duration values

## 🤝 **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request.

### **Development Guidelines:**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **Apple** - Design inspiration and brand aesthetics
- **Three.js Community** - 3D graphics framework and examples
- **GSAP** - Powerful animation engine
- **React Community** - Frontend framework and ecosystem
- **Vercel** - Hosting and deployment platform


---

⭐ **Star this repository if you found it helpful!**

![GitHub stars](https://img.shields.io/github/stars/HA2345567/iphone-3d-project?style=social)
![GitHub forks](https://img.shields.io/github/forks/HA2345567/iphone-3d-project?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/HA2345567/iphone-3d-project?style=social)
