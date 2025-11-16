# 📧 Contact Form Setup Guide

## Overview

The contact form is fully functional and uses Resend API for sending emails. It includes:

- ✅ Form validation with Zod
- ✅ Success/Error popups using Sonner
- ✅ Developer-friendly terminal-style design
- ✅ Email sent to: `shihabud696@gmail.com`
- ✅ Updated location: `Nurjahan Road, Mohammodpur, Dhaka, Bangladesh`

## 🚀 Quick Setup

### Option 1: Using Resend (Recommended - Free tier available)

1. **Sign up for Resend**

   - Go to https://resend.com
   - Create a free account (100 emails/day free)

2. **Get your API Key**

   - Go to https://resend.com/api-keys
   - Click "Create API Key"
   - Copy your API key

3. **Add to .env.local**

   ```env
   EMAIL_SERVICE=resend
   CONTACT_EMAIL=shihabud696@gmail.com
   RESEND_API_KEY=re_your_api_key_here
   ```

4. **Verify Domain (Optional but Recommended)**
   - For production, verify your domain in Resend
   - Update the `from` field in `src/app/api/contact/route.ts`:
     ```typescript
     from: "Portfolio Contact <contact@yourdomain.com>",
     ```

### Option 2: Using Nodemailer (Alternative)

If you prefer using Nodemailer with Gmail or other SMTP:

1. **Install nodemailer**

   ```bash
   npm install nodemailer
   ```

2. **Update .env.local**

   ```env
   EMAIL_SERVICE=nodemailer
   CONTACT_EMAIL=shihabud696@gmail.com
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```

3. **Update API Route**
   - Modify `src/app/api/contact/route.ts` to add nodemailer support

## 📦 Required Packages

All packages are already installed:

- ✅ `react-hook-form` - Form handling
- ✅ `zod` - Form validation
- ✅ `@hookform/resolvers` - Zod resolver
- ✅ `sonner` - Toast notifications

## 🎨 Features

### Developer-Friendly Design

- Terminal-style form with code syntax
- Animated gradient backgrounds
- Glassmorphism effects
- Smooth animations with Framer Motion

### Form Features

- Real-time validation
- Loading states
- Success/Error notifications
- Responsive design
- Accessible form labels

### Email Features

- HTML email template with terminal theme
- Reply-to functionality
- Professional formatting
- Error handling

## 🔧 Configuration

### Environment Variables

Create `.env.local` in your project root:

```env
# Email Service
EMAIL_SERVICE=resend
CONTACT_EMAIL=shihabud696@gmail.com

# Resend API Key
RESEND_API_KEY=re_your_api_key_here
```

### Update Email Template

You can customize the email template in `src/app/api/contact/route.ts`:

- Change the HTML styling
- Modify the email format
- Add additional fields

## 🧪 Testing

1. **Test Locally**

   ```bash
   npm run dev
   ```

   - Fill out the contact form
   - Check your email inbox

2. **Test in Production**
   - Deploy to Vercel
   - Add environment variables in Vercel dashboard
   - Test the form

## 📝 Notes

- The form sends emails to `shihabud696@gmail.com`
- Location is set to: `Nurjahan Road, Mohammodpur, Dhaka, Bangladesh`
- Success popup appears after successful submission
- Error popup appears if something goes wrong
- Form resets after successful submission

## 🐛 Troubleshooting

### Emails not sending?

1. Check your API key is correct
2. Verify environment variables are set
3. Check browser console for errors
4. Check server logs in Vercel

### Resend API errors?

- Make sure you're using a valid API key
- Check your Resend account status
- Verify domain if using custom domain

## 📚 Resources

- [Resend Documentation](https://resend.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)
- [Sonner Toasts](https://sonner.emilkowal.ski/)
