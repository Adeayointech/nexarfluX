# Setting Up Gmail for Contact Form

Your contact form is now configured to send emails directly to your Gmail inbox!

## Steps to Set Up:

### 1. Enable 2-Step Verification on Gmail
1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left menu
3. Under "How you sign in to Google", enable **2-Step Verification**
4. Follow the prompts to set it up

### 2. Generate an App Password
1. After enabling 2-Step Verification, go back to **Security**
2. Under "How you sign in to Google", click **App passwords**
3. Select app: **Mail**
4. Select device: **Other (Custom name)** - type "Portfolio Website"
5. Click **Generate**
6. Google will show you a 16-character password (like: `abcd efgh ijkl mnop`)
7. **Copy this password** - you'll only see it once!

### 3. Update Your .env.local File
Open the `.env.local` file in your Portfolio folder and update:

```env
GMAIL_USER=your.actual.email@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
```

**Important:** 
- Remove the spaces from the app password (just paste the 16 characters together)
- Replace with your actual Gmail address
- This file is already in .gitignore so it won't be pushed to GitHub ✅

### 4. Restart Your Dev Server
```bash
# Stop the current server (Ctrl+C)
npm run dev
```

### 5. Test It!
1. Go to your portfolio: http://localhost:3000
2. Scroll to the Contact section
3. Fill out the form and click "Send Message"
4. Check your Gmail inbox - you should receive the message!

## How It Works:
- Messages are sent from your Gmail to your Gmail
- The sender's email is set as the "Reply-To" address
- You can reply directly from Gmail and it will go to the person who contacted you
- All form data is validated and sanitized

## Troubleshooting:
- **"Failed to send message"**: Check your .env.local file has correct credentials
- **Still not working**: Make sure you've restarted the dev server after updating .env.local
- **App password not showing**: Make sure 2-Step Verification is enabled first

That's it! Your contact form is now fully functional! 🎉
