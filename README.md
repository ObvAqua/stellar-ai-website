# Stellar AI Website

A professional, modern website for Stellar AI - a B2B SaaS company specializing in AI-powered voice agents for medical practices.

## 🏥 About Stellar AI

Stellar AI provides AI-powered voice agents that handle appointment booking, patient information access, appointment reminders, and basic medical inquiries. Our solution allows healthcare providers to focus on patient care rather than administrative tasks.

### Key Features
- **24/7 Smart Appointment Booking** - AI handles scheduling with calendar integration
- **Intelligent Patient Information Retrieval** - Quick access to patient records
- **Automated Appointment Reminders** - Reduce no-shows by 30%
- **Multi-Language Support** - Serve diverse patient populations
- **After-Hours Availability** - Never miss a patient call
- **HIPAA Compliant** - Enterprise-grade security and compliance

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd stellar-ai-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form (planned)
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
stellar-ai-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── HeroSection.tsx    # Hero section
│   ├── FeaturesSection.tsx # Features showcase
│   ├── ROICalculator.tsx  # Interactive ROI calculator
│   ├── ContactSection.tsx # Contact form
│   └── Footer.tsx         # Footer
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies
```

## 🎨 Design Features

### Visual Style
- Clean, medical-grade professional aesthetic
- Subtle healthcare color palette (soft blues, whites, grey)
- Modern typography (Inter, Poppins)
- Buttery smooth animations and micro-interactions

### Animations
- CSS transforms and opacity transitions
- Framer Motion for complex animations
- Parallax scrolling effects
- Animated counters for statistics
- Smooth reveal animations as elements enter viewport

### Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Optimized for all device sizes

## 📊 Key Sections

### 1. Hero Section
- Trust indicators (HIPAA compliant, medical partnerships)
- Demonstration video placeholder
- Headline addressing primary pain points
- Animated statistics
- Primary CTA for demo booking

### 2. Features Showcase
- Animated demonstrations of core solutions
- Interactive feature cards
- Benefits and capabilities
- Demo video section

### 3. ROI Calculator
- Interactive calculator with real-time updates
- Implementation timeline
- Transparent pricing tiers
- Customizable practice parameters

### 4. Contact Section
- Booking form for demo calls
- Contact information
- Trust indicators
- Benefits of consultation

## 🎯 Target Audience

### Primary Pain Points Addressed
- **Staff Overwhelm**: 200+ calls daily causing burnout
- **Missed Revenue**: 30% of appointment slots unfilled
- **After-Hours Limitations**: Patients can't book outside business hours
- **Human Error**: Manual scheduling leads to double-bookings
- **High Turnover**: 40% annual turnover in medical reception
- **Patient Experience**: Long hold times damage reputation

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📝 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your custom primary colors
  },
  medical: {
    // Your custom medical colors
  }
}
```

### Content
- Update text content in component files
- Replace placeholder images in `public/`
- Modify contact information in components

### Styling
- Custom CSS in `app/globals.css`
- Component-specific styles in individual files
- Tailwind utility classes for rapid styling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions:
- Email: hello@stellar-ai.com
- Phone: (555) 123-4567
- Website: [stellar-ai.com](https://stellar-ai.com)

---

Built with ❤️ for healthcare providers 