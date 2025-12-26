# SMTP Email Setup for Contact Form

Your contact form is now configured to send emails to contact@clentro.io

## Setup Instructions

### 1. Install Dependencies

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` with your SMTP credentials:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-specific-password
SMTP_FROM=noreply@clentro.io
```

### 3. SMTP Provider Setup

#### Option 1: Gmail (Recommended for testing)

1. Enable 2-factor authentication on your Google account
2. Go to: https://myaccount.google.com/apppasswords
3. Generate an app-specific password
4. Use that password in `SMTP_PASSWORD`

#### Option 2: SendGrid (Recommended for production)

1. Sign up at https://sendgrid.com
2. Create an API key
3. Use these settings:
   - `SMTP_HOST=smtp.sendgrid.net`
   - `SMTP_PORT=587`
   - `SMTP_USER=apikey`
   - `SMTP_PASSWORD=<your-sendgrid-api-key>`

#### Option 3: AWS SES (Enterprise)

1. Set up AWS SES
2. Verify your domain
3. Use these settings:
   - `SMTP_HOST=email-smtp.us-east-1.amazonaws.com`
   - `SMTP_PORT=587`
   - `SMTP_USER=<your-access-key>`
   - `SMTP_PASSWORD=<your-secret-key>`

### 4. Restart Development Server

```bash
npm run dev
```

## What It Does

When a user submits the contact form:

1. **Email to You**: Sends a detailed email to `contact@clentro.io` with:
   - Contact information (name, email, company)
   - Project details (type, budget, description)
   
2. **Confirmation Email**: Sends an automatic confirmation to the user thanking them for their inquiry

## Files Created/Modified

- `app/api/contact/route.ts` - API endpoint that handles email sending
- `components/ContactForm.tsx` - Updated to submit to API with loading states
- `.env.local.example` - Example environment variables

## Testing

1. Fill out the contact form at `/contact`
2. Click "Send Project Brief"
3. Check your email at contact@clentro.io
4. The user should receive a confirmation email

## Production Deployment

Don't forget to add environment variables to your hosting platform:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables
- Other platforms: Add to your deployment config
