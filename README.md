# Kevin Nguyen - Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and professional experience. Built with React and deployed on GitHub Pages.

## 🚀 Live Demo

Visit the live site: [https://kvn147.github.io/](https://kvn147.github.io/)

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library for building interactive user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Router** - Client-side routing for single-page application
- **Headless UI** - Unstyled, accessible UI components

### Backend
- **Express.js** - Node.js web application framework
- **MongoDB Atlas** - Cloud database for storing contact form submissions
- **Nodemailer** - Email service for contact form notifications
- **CORS** - Cross-origin resource sharing middleware
- **Express Rate Limit** - Rate limiting middleware for API protection

## 📁 Project Structure

```
kvn147.github.io/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Main page components
│   ├── assets/        # Images, icons, and static files
│   └── data/          # Project data and configurations
├── backend/           # Express.js server
├── public/            # Static assets
└── dist/              # Production build files
```

## ✨ Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Contact Form** - Functional contact form with backend integration
- **Project Showcase** - Interactive portfolio section highlighting key projects
- **Social Links** - Direct links to LinkedIn, GitHub, and email contact
- **Fast Performance** - Optimized builds with Vite for quick loading times

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kvn147/kvn147.github.io.git
   cd kvn147.github.io
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=3001
   EMAIL_USER=your.email@gmail.com
   EMAIL_PWD=your-app-password-here
   MONGODB_URI=your-mongodb-connection-string
   ```

### Development

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start the frontend development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   
   Visit `http://localhost:5173` to view the application.

### Production Build

1. **Build the frontend**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## 📧 Contact Form Setup

The contact form requires a backend server and MongoDB database:

1. **MongoDB Setup**
   - Create a MongoDB Atlas account
   - Create a new cluster and database
   - Add your connection string to the `.env` file

2. **Email Configuration**
   - Use Gmail with an App Password for email notifications
   - Add your credentials to the `.env` file

## 🌐 Deployment

- **Frontend**: Deployed automatically to GitHub Pages via GitHub Actions
- **Backend**: Can be deployed to platforms like Vercel, Heroku, or Railway

## 📝 Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Website**: [https://kvn147.github.io/](https://kvn147.github.io/)
- **LinkedIn**: [linkedin.com/in/kevin1nguyen](https://www.linkedin.com/in/kevin1nguyen)
- **GitHub**: [github.com/kvn147](https://github.com/kvn147)
- **Email**: kevnguyen49@gmail.com

---

*Built with ❤️ by Kevin Nguyen*
