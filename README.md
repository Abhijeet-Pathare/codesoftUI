# Codesoft UI 🎓

A modern, responsive landing page for Codesoft - a coding education platform. Built with React and Material-UI, featuring a clean design with glassmorphism effects, smooth animations, and an integrated contact form.

## ✨ Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Modern UI**: Glassmorphism effects, gradient animations, and smooth transitions
- **Interactive Navbar**: Dynamic typewriter animation, progress bar on scroll
- **Course Showcase**: Beautiful cards displaying available courses
- **Mentor Profiles**: Showcase instructors with their qualifications
- **Contact Form**: Integrated EmailJS for direct message delivery with validation
- **Animations**: AOS (Animate On Scroll) and Framer Motion for engaging user experience
- **Multi-language Support**: English and Marathi content

## 🛠️ Tech Stack

- **React** - UI library
- **Material-UI (MUI)** - Component library
- **EmailJS** - Email service integration
- **AOS** - Scroll animations
- **Framer Motion** - Advanced animations
- **React Simple Typewriter** - Typing effect animations

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Navbar.jsx     # Navigation bar with typewriter
│   ├── SocialMedia.jsx
│   └── LogoRow.js     # Technology logos
├── sections/          # Page sections
│   ├── Hero.jsx       # Landing section
│   ├── Courses.jsx    # Course offerings
│   ├── Mentors.jsx    # Instructor profiles
│   ├── Contact.jsx    # Contact form
│   ├── About.jsx
│   ├── Skills.jsx
│   └── Projects.jsx
├── styles/            # CSS files
│   ├── Navbar.css
│   ├── Hero.css
│   ├── Contact.css
│   └── ...
├── images/            # Image assets
├── App.js             # Main application
└── index.js           # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/codesoftUI.git
   cd codesoftUI
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```bash
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### EmailJS Configuration

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an Email Service (e.g., Gmail)
3. Create an Email Template with these variables:
   - `{{user_name}}` - Sender's name
   - `{{user_email}}` - Sender's email
   - `{{user_mobile}}` - Sender's phone number
   - `{{message}}` - Message content
4. Copy your Service ID, Template ID, and Public Key to `.env`

### Running the App

Development mode:
```bash
npm start
```
Opens at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

Creates an optimized production build in the `build` folder.

## 🌐 Deployment

### GitHub Pages

1. Update `package.json`:
   ```json
   "homepage": "https://your-username.github.io/codesoftUI"
   ```

2. Deploy:
   ```bash
   npm run deploy
   ```

### Environment Variables in Production

If using GitHub Actions or CI/CD, add your EmailJS keys as repository secrets:
- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_TEMPLATE_ID`
- `REACT_APP_EMAILJS_PUBLIC_KEY`

## 📱 Features Breakdown

### Navbar
- Responsive menu with drawer for mobile
- Typewriter animation showcasing platform values
- Social media links (Instagram, YouTube)
- Scroll progress indicator

### Hero Section
- Eye-catching hero with gradient animations
- Call-to-action buttons
- Feature highlights with icons

### Courses
- Grid layout showcasing available courses
- Hover effects and detailed descriptions
- Technology stack for each course

### Contact Form
- Name, Email, Mobile (required)
- Message (optional)
- Real-time validation
- EmailJS integration for instant delivery

## 🐛 Troubleshooting

### Contact Form Not Working

1. **Environment Variables Not Loading**:
   - Ensure `.env` is in the root directory
   - Restart the development server after creating `.env`
   - Variable names must start with `REACT_APP_`

2. **Gmail API: Invalid Grant**:
   - Go to EmailJS Dashboard → Email Services
   - Reconnect your Gmail account

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Contact

- **Instagram**: [@codesoft__](https://www.instagram.com/codesoft__?igsh=MXNqbXNqbjRuOWUzdw==)
- **YouTube**: [@maharashtrianCoder](https://www.youtube.com/@maharashtrianCoder)

---

Built with ❤️ by the Codesoft Team
