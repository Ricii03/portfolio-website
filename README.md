# Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and a professional layout perfect for showcasing web development and data analysis projects.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Elements**: Hover effects, smooth scrolling, and interactive components
- **Project Showcase**: Featured projects carousel and comprehensive project grid
- **Skills Visualization**: Animated skill bars and technology categories
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading and smooth interactions

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful, customizable icons
- **Vite** - Fast build tool and dev server

## 📁 Project Structure

```
portfolio/
├── frontend/                   # React frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx      # Navigation component
│   │   │   ├── Hero.tsx        # Hero section with CTA
│   │   │   ├── About.tsx       # About me section
│   │   │   ├── Skills.tsx      # Skills and technologies
│   │   │   ├── Projects.tsx    # Projects showcase with carousel
│   │   │   ├── Contact.tsx     # Contact form and information
│   │   │   └── Footer.tsx      # Footer with links
│   │   ├── App.tsx             # Main application component
│   │   ├── main.tsx            # Application entry point
│   │   └── index.css           # Global styles and Tailwind
│   ├── public/                 # Static assets
│   ├── tailwind.config.js      # Tailwind CSS configuration
│   ├── postcss.config.js       # PostCSS configuration
│   └── package.json            # Frontend dependencies
├── package.json                # Root package.json for scripts
└── README.md                   # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `frontend/dist/` directory, ready for deployment.

## 🎨 Customization

### Personal Information
Update the following files with your information:

- **Hero.tsx**: Change name, title, and description
- **About.tsx**: Update experience, education, and personal details
- **Skills.tsx**: Modify skill levels and add/remove technologies
- **Projects.tsx**: Add your own projects with descriptions and links
- **Contact.tsx**: Update contact information and social links

### Styling
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Update font families in `tailwind.config.js`
- **Animations**: Customize animations in `tailwind.config.js`

### Content
- **Projects**: Add your portfolio projects in the `Projects.tsx` component
- **Skills**: Update your technical skills and proficiency levels
- **Experience**: Modify work history and education details

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build your project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify
3. Configure custom domain if needed

### Other Platforms
The built files in the `dist/` directory can be deployed to any static hosting service.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## 🎭 Animations

Built with Framer Motion for smooth, performant animations:
- **Page Transitions**: Smooth scrolling between sections
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive hover states for buttons and cards
- **Loading States**: Smooth loading animations and transitions

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Code Quality
- **TypeScript**: Full type safety throughout the application
- **ESLint**: Code linting and formatting
- **Prettier**: Consistent code formatting

## 📈 Performance

- **Lazy Loading**: Components load as needed
- **Optimized Images**: WebP format support
- **Minified CSS/JS**: Production builds are optimized
- **CDN Ready**: Static assets optimized for CDN delivery

## 🔒 Security

- **Form Validation**: Client-side and server-side validation
- **XSS Protection**: Sanitized user inputs
- **HTTPS Ready**: Secure deployment configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons
- **Vite** for fast development experience

## 📞 Support

If you have any questions or need help:
- Create an issue in the repository
- Contact me through the portfolio contact form
- Email: your.email@example.com

---

**Happy Coding! 🚀**

Built with ❤️ using React, TypeScript, and Tailwind CSS
