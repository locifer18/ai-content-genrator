# 🚀 AI Content Generator

A powerful, modern AI-powered content generation platform built with Next.js, featuring Google Gemini AI integration, user authentication, subscription management, and a beautiful dashboard interface.

![AI Content Generator](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🤖 AI-Powered Content Generation
- **50+ AI Templates** for various content types
- **Google Gemini AI Integration** for high-quality content generation
- **Real-time Content Generation** with streaming responses
- **Multiple Content Formats** (blogs, emails, social media, etc.)

### 🔐 Authentication & Security
- **Clerk Authentication** with secure user management
- **Protected Routes** and middleware
- **User Session Management**

### 💳 Subscription & Billing
- **Razorpay Payment Integration** for seamless transactions
- **Flexible Subscription Plans** (Free & Pro)
- **Usage Tracking** with real-time limits
- **Automatic Plan Management**

### 📊 Dashboard & Analytics
- **Modern Dashboard Interface** with intuitive navigation
- **Content History** with search and filter capabilities
- **Usage Analytics** and subscription status
- **Export Functionality** for generated content

### 🎨 Modern UI/UX
- **Responsive Design** optimized for all devices
- **Beautiful Components** built with Radix UI
- **Smooth Animations** and transitions

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.5.4** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Lucide React** - Beautiful icons

### Backend & Database
- **Next.js API Routes** - Serverless backend
- **Drizzle ORM** - Type-safe database toolkit
- **Neon Database** - Serverless PostgreSQL
- **Server Actions** - Server-side data mutations

### AI & Integrations
- **Google Gemini AI** - Advanced language model
- **Clerk** - Authentication and user management
- **Razorpay** - Payment processing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm
- PostgreSQL database (Neon recommended)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ai-content-generator.git
cd ai-content-generator
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Environment Setup**
Create a `.env.local` file in the root directory:
```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Google Gemini AI
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key

# Database
DATABASE_URL=your_neon_database_url

# Razorpay
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET_KEY=your_razorpay_secret_key
SUBSCRIPTION_PLAN_ID=your_subscription_plan_id
```

4. **Database Setup**
```bash
npm run db:push
```

5. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
ai-content-generator/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication pages
│   ├── (context)/                # React Context providers
│   ├── (data)/                   # Static data and templates
│   ├── api/                      # API routes
│   ├── dashboard/                # Dashboard pages and components
│   └── globals.css               # Global styles
├── components/                   # Reusable UI components
│   └── ui/                       # Base UI components
├── utils/                        # Utility functions
│   ├── AiModel.tsx              # AI integration
│   ├── db.tsx                   # Database connection
│   └── schema.tsx               # Database schema
├── public/                       # Static assets
└── lib/                         # Shared utilities
```

## 🎯 Usage

### For Users
1. **Sign Up/Login** using Clerk authentication
2. **Choose Templates** from 50+ available options
3. **Generate Content** using AI with custom inputs
4. **Manage Subscription** and track usage

### For Developers
1. **Add New Templates** in `app/(data)/Templates.tsx`
2. **Customize AI Prompts** in template configurations
3. **Extend Database Schema** in `utils/schema.tsx`
4. **Add New Components** following the existing patterns

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run db:push      # Push database schema changes
npm run db:studio    # Open Drizzle Studio
```

## 🌟 Key Features Breakdown

### Content Templates
- Blog Post Generator
- Email Marketing Templates
- Social Media Content
- Product Descriptions
- SEO Meta Tags
- And 45+ more templates

### Subscription Plans
- **Free Plan**: 10,000 words/month, 50+ templates
- **Pro Plan**: 10,00,000 words, all templates, priority support

### Dashboard Features
- Real-time usage tracking
- Content history with search
- Subscription management
- Export functionality

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Google Gemini](https://ai.google.dev/) for powerful AI capabilities
- [Clerk](https://clerk.com/) for seamless authentication
- [Tailwind CSS](https://tailwindcss.com/) for beautiful styling
- [Drizzle ORM](https://orm.drizzle.team/) for type-safe database operations


<div align="center">
  <p>Made with ❤️ by Ansh Kanda</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
