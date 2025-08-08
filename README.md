# Kanoon Mitra - Your Digital Legal Friend

A modern, responsive React website designed to make legal assistance accessible to every Indian citizen. Built with React, Tailwind CSS, and modern web technologies.

## 🎯 Project Overview

Kanoon Mitra is a comprehensive legal platform that helps Indian citizens easily access legal information, consult with lawyers, and stay informed about their rights. The platform is designed with a focus on simplicity and accessibility, especially for users in rural and semi-urban areas.

## ✨ Features

### 🏠 Landing Page
- Hero section with "Justice Made Simple" tagline
- Quick search functionality
- Call-to-action buttons
- Feature highlights and statistics

### 🛠️ Services Page
- Comprehensive grid layout of legal services
- Detailed service descriptions and pricing
- Interactive service cards with features
- Categories include:
  - Legal Advice
  - Online FIR Guidance
  - Lawyer Connect
  - RTI Filing Help
  - Cyber Complaint Assist
  - Free Legal Documents

### ❓ Ask a Lawyer Page
- Comprehensive legal question submission form
- Live chat mockup interface
- Category selection and urgency levels
- Form validation and submission feedback

### 📚 Knowledge Hub
- Blog-style layout with legal articles
- Category filtering and search functionality
- Featured articles section
- Newsletter subscription

### 📞 Contact Page
- Contact form with validation
- Google Maps integration
- Contact information display
- Social media links
- FAQ section

### 👨‍💼 Lawyer Portal
- Separate login/register forms for lawyers
- Professional registration with specialization
- Benefits showcase for joining the platform

### 📊 User Dashboard
- Overview with statistics
- Question tracking and responses
- Saved articles management
- Download history
- Profile management

## 🎨 Design Features

- **Indian-themed color palette**: Saffron, blue, white, and earthy tones
- **Modern, minimalist design**: Clean and professional appearance
- **Fully responsive**: Works perfectly on all devices
- **Smooth animations**: Subtle transitions and hover effects
- **Accessibility focused**: Easy to use for all age groups

## 🛠️ Tech Stack

- **React 18**: Modern React with functional components
- **Tailwind CSS**: Utility-first CSS framework
- **React Router DOM**: Client-side routing
- **Heroicons**: Beautiful SVG icons
- **Google Fonts**: Inter font family

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kanoon-mitra
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation component
│   ├── Footer.js       # Footer component
│   └── FloatingHelp.js # Floating help button
├── pages/              # Page components
│   ├── Home.js         # Landing page
│   ├── Services.js     # Services page
│   ├── AskLawyer.js    # Ask a lawyer page
│   ├── KnowledgeHub.js # Knowledge hub page
│   ├── Contact.js      # Contact page
│   ├── LawyerAuth.js   # Lawyer authentication
│   └── UserDashboard.js # User dashboard
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Global styles
```

## 🎯 Key Features Implementation

### Form Validation
- Email validation
- Required field validation
- Real-time feedback
- Loading states

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions

### Interactive Elements
- Hover effects
- Smooth transitions
- Loading animations
- Success/error states

## 🌟 Special Features

### Floating Help Button
- Always accessible help chat
- Mock conversation interface
- Quick access to assistance

### Search Functionality
- Global search on landing page
- Article search in knowledge hub
- Category filtering

### User Experience
- Intuitive navigation
- Clear call-to-actions
- Consistent design language
- Fast loading times

## 🎨 Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:

```javascript
colors: {
  saffron: { /* saffron color variations */ },
  indian: {
    blue: '#1e40af',
    green: '#059669',
    red: '#dc2626',
    orange: '#ea580c',
  }
}
```

### Components
All components are built with Tailwind CSS classes and can be easily customized by modifying the class names or adding new styles.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Deployment

The project can be deployed to any static hosting service:

1. **Netlify**
   ```bash
   npm run build
   # Upload the build folder to Netlify
   ```

2. **Vercel**
   ```bash
   npm run build
   # Deploy using Vercel CLI or GitHub integration
   ```

3. **GitHub Pages**
   ```bash
   npm run build
   # Push build folder to gh-pages branch
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from modern government websites
- Icons from Heroicons
- Images from Unsplash
- Fonts from Google Fonts

## 📞 Support

For support or questions, please contact:
- Email: support@kanoonmitra.com
- Website: https://kanoonmitra.com

---

**Made with ❤️ for Indian citizens** 