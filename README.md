# nexarfluX Portfolio

A stunning, modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This portfolio showcases your projects, skills, and professional experience in an elegant and interactive way.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive**: Fully responsive layout that works perfectly on all devices
- **Dark Theme**: Beautiful dark mode design with gradient accents
- **Interactive**: Smooth scrolling, hover effects, and engaging animations
- **Project Showcase**: Filterable project gallery with detailed descriptions
- **Skills Display**: Visual skill bars showing proficiency levels
- **Contact Form**: Functional contact form with validation
- **Performance**: Built with Next.js 15 for optimal performance and SEO

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📋 Prerequisites

- Node.js 18+ and npm

## 🛠️ Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Update Your Information

1. **Personal Details**: Edit the Hero component in `src/components/Hero.tsx`
2. **Projects**: Update the projects array in `src/components/Projects.tsx`
3. **Skills**: Modify skill categories in `src/components/Skills.tsx`
4. **About Section**: Customize `src/components/About.tsx`
5. **Contact Info**: Update email and social links in `src/components/Contact.tsx` and `src/components/Footer.tsx`

### Color Theme

Customize the color scheme in `tailwind.config.ts`:
- Primary colors are defined in the `theme.extend.colors.primary` section
- Change gradient colors throughout the components

### Metadata

Update SEO information in `src/app/layout.tsx`:
- Title
- Description
- Keywords

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Main page component
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Navigation.tsx  # Navigation bar
│       ├── Hero.tsx        # Hero section
│       ├── About.tsx       # About section
│       ├── Projects.tsx    # Projects showcase
│       ├── Skills.tsx      # Skills display
│       ├── Contact.tsx     # Contact form
│       └── Footer.tsx      # Footer
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
└── package.json           # Dependencies
```

## 🎯 Sections

1. **Hero**: Eye-catching introduction with CTA buttons and social links
2. **About**: Overview of your expertise and specializations
3. **Projects**: Filterable showcase of your best projects
4. **Skills**: Visual representation of your technical skills
5. **Contact**: Contact form and information
6. **Footer**: Additional links and copyright information

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

- **Netlify**: Connect your Git repository
- **AWS Amplify**: Deploy from GitHub
- **Custom Server**: Build and serve the `.next` folder

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For issues or questions, please open an issue on GitHub or reach out via the contact form.

---

**Made with ❤️ and dedication**
