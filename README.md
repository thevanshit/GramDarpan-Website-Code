<<<<<<< HEAD
# GramDarpan - Adarsh Gram Development Monitoring Platform

A comprehensive, beautiful, and modern web application for monitoring Adarsh Gram development progress across India. Built with React, TypeScript, Tailwind CSS, and modern web technologies.

## 🌟 Features

### Public Pages (Transparency)
- **Interactive Village Map**: Color-coded heatmap showing development progress
- **Village Detail Pages**: Comprehensive progress tracking with photos and indicators
- **District Overview**: Aggregated statistics and comparisons
- **About Section**: Detailed information about the Adarsh Gram scheme

### Role-Based Access System
- **Field Workers**: Submit survey data, upload photos with GPS, update progress
- **Agencies**: Manage assigned tasks, update work progress, attach proofs
- **District Officials**: Approve/reject submissions, monitor villages, generate reports
- **State Officials**: View district dashboards, monitor fund utilization
- **Ministry Team**: National-level dashboards, cross-state analytics

### Key Capabilities
- **50+ Development Indicators**: Track sanitation, education, healthcare, infrastructure, water supply
- **Real-Time Monitoring**: Live updates from field workers and agencies
- **Mobile-First Design**: Optimized for field workers with GPS tagging
- **Data Integration**: Seamless integration with PMAGY Portal and other government schemes
- **AI Integration**: Budget prediction, auto-prioritization, deadline forecasting
- **Beautiful UI/UX**: Modern, clean, and attractive interface

## 🚀 Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Charts**: Recharts for data visualization
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd GramDarpan
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 🎨 Design System

### Color Palette
- **Primary**: Blue tones for main actions and branding
- **Success**: Green for completed/positive states
- **Warning**: Orange for pending/warning states
- **Danger**: Red for errors/urgent states
- **Secondary**: Gray tones for neutral elements

### Typography
- **Display Font**: Poppins for headings
- **Body Font**: Inter for content

### Components
- **Cards**: Soft shadows with hover effects
- **Buttons**: Multiple variants with smooth transitions
- **Forms**: Clean inputs with focus states
- **Charts**: Beautiful data visualizations
- **Animations**: Smooth transitions and micro-interactions

## 🔐 Demo Credentials

Use these demo accounts to explore different user roles:

| Role | Email | Password | Access Level |
|------|-------|----------|--------------|
| Field Worker | field@gramdarpan.com | password | Half Access |
| Agency | agency@gramdarpan.com | password | Full Access |
| District Official | district@gramdarpan.com | password | Full Access |
| State Official | state@gramdarpan.com | password | Full Access |
| Ministry | ministry@gramdarpan.com | password | Full Access |

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with all capabilities
- **Tablet**: Adapted layouts for medium screens
- **Mobile**: Mobile-first design for field workers

## 🗺️ Page Structure

### Public Pages
- `/` - Homepage with hero section and features
- `/map` - Interactive village progress map
- `/village/:id` - Detailed village information
- `/district/:id` - District overview and statistics
- `/about` - About the Adarsh Gram scheme

### Authentication
- `/login` - User login with demo credentials
- `/register` - New user registration

### Dashboards (Role-Based)
- `/dashboard` - General dashboard
- `/dashboard/field-worker` - Field worker specific tools
- `/dashboard/agency` - Agency task management
- `/dashboard/district` - District monitoring
- `/dashboard/state` - State-level analytics
- `/dashboard/ministry` - National oversight

## 🎯 Key Features Implemented

### 1. Beautiful Homepage
- Hero section with gradient backgrounds
- Feature showcase with animations
- Statistics and impact metrics
- Call-to-action sections

### 2. Interactive Village Map
- Filter system for states, districts, and status
- Color-coded village status indicators
- Search functionality
- Detailed village cards with progress bars

### 3. Role-Based Dashboards
- **Field Worker**: Task management, photo uploads, progress tracking
- **Agency**: Project management, budget tracking, milestone updates
- **District**: Village monitoring, approval workflows, report generation
- **State**: Cross-district analytics, performance metrics
- **Ministry**: National overview, policy insights, strategic reports

### 4. Data Visualization
- Progress charts and trends
- Indicator performance bars
- Status distribution pie charts
- Budget utilization graphs

### 5. Modern UI Components
- Animated cards with hover effects
- Smooth transitions and micro-interactions
- Beautiful form designs
- Responsive navigation
- Toast notifications

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure
```
src/
├── components/
│   ├── auth/          # Authentication components
│   └── layout/        # Layout components (Navbar, Footer)
├── contexts/          # React contexts (Auth)
├── pages/
│   ├── auth/          # Login/Register pages
│   ├── dashboard/     # Role-specific dashboards
│   └── public/        # Public pages
├── App.tsx           # Main app component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## 🎨 Customization

### Colors
Modify the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* Blue tones */ },
  success: { /* Green tones */ },
  warning: { /* Orange tones */ },
  danger: { /* Red tones */ }
}
```

### Animations
Customize animations in `tailwind.config.js`:
```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  // ... more animations
}
```

## 🚀 Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service:
   - Vercel
   - Netlify
   - AWS S3
   - Any static hosting service

## 📄 License

This project is developed for the Adarsh Gram Yojana initiative and is intended for government use.

## 🤝 Contributing

This is a prototype demonstration. For production use, additional features would include:
- Backend API integration
- Real-time data synchronization
- Advanced security measures
- Performance optimizations
- Comprehensive testing

## 📞 Support

For questions or support regarding this prototype, please refer to the documentation or contact the development team.

---

**GramDarpan** - Transforming Rural India through Technology and Transparency 🏘️✨
=======
# GramDarpan-Website-Code
A website which connects the agencies, ministries and feild workers all to the same platform, provides accountability and transparency, It is also the part of SIH Problem Statement SIH25151.
>>>>>>> 4d4a502c6f87b41160efa778877f505d89bbc956
