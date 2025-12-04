# Arkadiy Yaretskiy MD - Psychiatric Practice Website

A modern, minimalist website for Dr. Arkadiy Yaretskiy's psychiatric practice, providing psychotherapy-led care in California and New York.

## 🌟 Features

- **Cinematic Design**: Video backgrounds and smooth GSAP animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **5 Complete Pages**: Home, About, Services, FAQ, Contact
- **Booking Integration**: Direct links to Headway (CA) and Alma (NY)
- **Modern Tech Stack**: React 19, TypeScript, Tailwind CSS, Vite

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR-USERNAME/yaretskiy-website.git
cd yaretskiy-website
Install dependencies:
pnpm install
Start development server:
pnpm run dev
Open browser to http://localhost:3000
📦 Build for Production
pnpm run build
The built files will be in the dist/ folder, ready for deployment.

🌐 Deployment
This site is optimized for deployment on:

Vercel (recommended)
Netlify
Cloudflare Pages
Deploy to Vercel
Push code to GitHub
Go to vercel.com
Import your repository
Vercel auto-detects settings
Click "Deploy"
📁 Project Structure
yaretskiy-website/
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/         # Base UI elements (Button, etc.)
│   │   ├── Header.tsx  # Navigation bar
│   │   ├── Footer.tsx  # Footer component
│   │   └── Layout.tsx  # Page layout wrapper
│   ├── pages/          # Page components
│   │   ├── Home/       # Homepage with hero video
│   │   ├── About/      # About Dr. Yaretskiy
│   │   ├── Services/   # Clinical services
│   │   ├── FAQ/        # Frequently asked questions
│   │   ├── Contact/    # Contact information
│   │   └── NotFound/   # 404 page
│   ├── routes/         # React Router configuration
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # App entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── package.json        # Dependencies
🛠️ Tech Stack
Framework: React 19 with TypeScript
Build Tool: Vite
Styling: Tailwind CSS
Animations: GSAP with ScrollTrigger
Routing: React Router v7
Icons: Lucide React
UI Components: Radix UI primitives
📝 Making Updates
Change Text Content
Edit the respective page file in src/pages/[PageName]/index.tsx

Update Colors
Modify color scheme in tailwind.config.ts

Change Images
Replace image URLs in page components

Add New Pages
Create new folder in src/pages/
Create index.tsx inside
Register route in src/routes/index.tsx
🔗 Booking Links
California: Update Headway link in components
New York: Update Alma link in components
Current placeholder links should be replaced with actual booking URLs.

📄 License
© 2025 Arkadiy Yaretskiy MD. All rights reserved.

🆘 Support
For technical issues or questions:

Check Vercel documentation: https://vercel.com/docs
React documentation: https://react.dev
Tailwind CSS: https://tailwindcss.com/docs
Built with care for thoughtful psychiatric practice.


---

### **FILE 28/35: `DEPLOYMENT_GUIDE.md`**

Create **`DEPLOYMENT_GUIDE.md`** in the ROOT:

```markdown
# Deployment Guide - Yaretskiy MD Website

## 🚀 Deploy to Vercel (Recommended)

### Step 1: Push to GitHub
Your code should already be on GitHub. If not:
```bash
git add .
git commit -m "Initial commit"
git push origin main
Step 2: Connect Vercel
Go to vercel.com
Sign in with GitHub
Click "Add New Project"
Select your yaretskiy-website repository
Vercel auto-detects settings:
Framework: Vite
Build Command: pnpm run build
Output Directory: dist
Install Command: pnpm install
Click "Deploy"
Wait 2-3 minutes ☕
Step 3: Custom Domain
In Vercel dashboard, go to "Settings" → "Domains"
Add yaretskiymd.com
Copy the DNS records provided
Add them to your domain registrar (GoDaddy, Namecheap, etc.)
Wait 10-60 minutes for DNS propagation
Done! ✅
🌐 Deploy to Netlify (Alternative)
Option A: GitHub Integration
Go to netlify.com
Sign in with GitHub
Click "Add new site" → "Import an existing project"
Select your repository
Settings:
Build command: pnpm run build
Publish directory: dist
Click "Deploy"
Option B: Manual Upload
Run pnpm run build locally
Go to netlify.com/drop
Drag the dist folder
Get instant live URL
⚡ Deploy to Cloudflare Pages
Go to dash.cloudflare.com
Select "Pages" → "Create a project"
Connect GitHub repository
Build settings:
Build command: pnpm run build
Build output: dist
Deploy
🔧 Environment Variables
If you need to add API keys or secrets:

Vercel:

Go to Settings → Environment Variables
Add variables (e.g., VITE_API_KEY)
Netlify:

Go to Site settings → Environment variables
Add variables
Cloudflare:

Go to Settings → Environment variables
Add variables
📊 Post-Deployment Checklist
✅ Site loads correctly
✅ All pages are accessible (Home, About, Services, FAQ, Contact)
✅ Videos play properly
✅ Navigation works
✅ Booking buttons open correct links
✅ Mobile responsive
✅ HTTPS certificate is active (automatic on Vercel/Netlify)

🔄 Making Updates
After initial deployment:

Make changes to your code locally
Commit and push to GitHub:
git add .
git commit -m "Update homepage text"
git push
Vercel/Netlify automatically rebuilds (30-60 seconds)
Changes go live automatically ✅
🆘 Troubleshooting
Build fails:

Check build logs in Vercel/Netlify dashboard
Ensure package.json has correct dependencies
Try building locally first: pnpm run build
Blank page after deployment:

Check browser console for errors
Verify index.html is in the root
Check routing configuration
Videos not playing:

Videos are hosted on CDN (should work)
Check browser console for CORS errors
Ensure video URLs are accessible
Domain not working:

DNS can take up to 48 hours (usually much faster)
Check DNS propagation: https://dnschecker.org
Verify DNS records match exactly
📞 Support Resources
Vercel Docs: https://vercel.com/docs
Netlify Docs: https://docs.netlify.com
Cloudflare Docs: https://developers.cloudflare.com/pages
Need help? Contact a web developer or your hosting provider's support team.


---

### **FILES 29-35: Additional Config Files**

These are optional but recommended. Create them in the ROOT:

### **FILE 29/35: `.env.example`**
Example environment variables
Copy this to .env.local and fill in your values
VITE_API_URL=https://api.example.com
VITE_BOOKING_URL_CA=https://headway.co/your-profile
VITE_BOOKING_URL_NY=https://helloalma.com/your-profile
