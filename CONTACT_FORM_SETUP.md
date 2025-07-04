# Contact Form Setup Instructions ✅

## ✅ Setup Complete!

**Your contact form is now fully functional and sending emails successfully!**

The form has been tested and confirmed working with:

- ✅ EmailJS service: `service_knyc1l3`
- ✅ EmailJS template: `template_9nl2dgc`
- ✅ Configured to send to: `mailto.dev.bz@gmail.com`

## 🎉 What's Working

- ✅ Form validation (all fields required)
- ✅ EmailJS integration and email sending
- ✅ Environment variables properly loaded from `.env`
- ✅ Loading states and user feedback
- ✅ Success/error message display
- ✅ Form reset after successful submission

## 📧 Email Template Variables

Your EmailJS template receives these variables:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email address (mailto.dev.bz@gmail.com)
- `{{reply_to}}` - Sender's email for replies

---

## 📋 Original Setup Instructions (For Reference)

### EmailJS Setup

To enable the contact form to send emails, you need to set up EmailJS. Follow these steps:

### 1. Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### 3. Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

Hello,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
Reply to: {{reply_to}}
```

4. Save the template and note down your **Template ID**

### 4. Get Your Public Key

1. Go to "Account" in your dashboard
2. Find your **Public Key** (also called User ID)

### 5. Configure Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
VUE_APP_EMAILJS_SERVICE_ID=your_actual_service_id
VUE_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id
VUE_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
VUE_APP_CONTACT_EMAIL=your-email@example.com
```

### 6. Test the Contact Form

1. Restart your development server: `npm run serve`
2. Navigate to the contact page
3. Fill out the form and submit
4. Check your email for the message

## Template Variables

The following variables are available in your EmailJS template:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email address
- `{{reply_to}}` - Sender's email for replies

## Security Notes

- Never commit your actual EmailJS credentials to version control
- The `.env` file is ignored by git by default
- EmailJS has rate limiting to prevent abuse
- Consider adding a captcha for production use

## Troubleshooting

### "EmailJS configuration is missing" Error

- Check that all environment variables are set in `.env`
- Restart your development server after changing `.env`
- Verify the variable names start with `VUE_APP_`

### Email Not Sending

- Check the browser console for error messages
- Verify your EmailJS service is active
- Check your template ID matches exactly
- Ensure your email service is properly configured

### Rate Limiting

- EmailJS free tier has a monthly limit
- Consider upgrading for production use
- Implement client-side validation to reduce failed attempts

## Alternative: Backend API

For production applications, consider implementing a backend API instead of using EmailJS:

1. Create a Node.js/Express server
2. Use nodemailer or similar library
3. Implement proper validation and security measures
4. Update the `sendWithBackend()` method in ContactPage.vue

This approach provides better security and control over the email sending process.
