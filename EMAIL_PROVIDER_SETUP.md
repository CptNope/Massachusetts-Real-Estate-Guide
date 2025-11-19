# 📧 Email Provider Setup Guide

## Complete Configuration Instructions for All Providers

---

## 🚀 Quick Start

Your CMA CRM system supports 7 email service providers. Choose the one that fits your needs!

### Provider Comparison:

| Provider | Free Tier | Monthly Cost | Setup Difficulty | Best For |
|----------|-----------|--------------|------------------|----------|
| **SendGrid** | 100 emails/day | $20-$90 | Easy | Most agents |
| **Mailchimp** | 500 contacts | $13-$350 | Easy | Marketing focus |
| **Resend** | 100 emails/day | $20+ | Very Easy | Developers |
| **Mailgun** | 5,000 emails | $35+ | Medium | High volume |
| **AWS SES** | 62,000 emails | $0.10/1000 | Hard | Tech-savvy |
| **Postmark** | None | $15+ | Easy | Transactional |
| **SMTP** | Varies | Free-$50 | Medium | Custom servers |

---

## 1️⃣ SendGrid Setup (RECOMMENDED)

### Why SendGrid?
- ✅ Free tier: 100 emails/day
- ✅ Easy to set up
- ✅ Excellent deliverability
- ✅ Great for real estate agents

### Step-by-Step Setup:

#### Step 1: Create Account
1. Go to https://signup.sendgrid.com
2. Sign up (free account)
3. Verify your email
4. Complete onboarding

#### Step 2: Create API Key
1. Go to Settings → API Keys
2. Click "Create API Key"
3. Name it "CMA CRM System"
4. Select "Full Access"
5. Click "Create & View"
6. **COPY THE KEY** (you can't see it again!)

#### Step 3: Verify Sender Identity
1. Go to Settings → Sender Authentication
2. Click "Verify a Single Sender"
3. Enter your details:
   - From Name: Your Name
   - From Email: your@email.com
   - Reply To: same email
4. Check your email and click verification link

#### Step 4: Configure in CMA Tool
1. Click "⚙️ Email Settings" in CMA toolbar
2. Select "SendGrid"
3. Paste your API Key
4. Enter your verified sender email
5. Click "Save & Test Connection"
6. ✅ You're ready to send!

### SendGrid Code Integration:
```javascript
// Backend API (Node.js/Express)
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/api/send-campaign', async (req, res) => {
  const { recipients, subject, body, from } = req.body;
  
  const msg = {
    to: recipients,
    from: from,
    subject: subject,
    html: body
  };
  
  await sgMail.sendMultiple(msg);
  res.json({ success: true });
});
```

---

## 2️⃣ Mailchimp Setup

### Why Mailchimp?
- ✅ 500 contacts free
- ✅ Marketing automation
- ✅ Templates included
- ✅ Analytics

### Step-by-Step Setup:

#### Step 1: Create Account
1. Go to https://mailchimp.com/signup
2. Sign up (free account)
3. Complete your profile

#### Step 2: Create API Key
1. Go to Account → Extras → API keys
2. Click "Create A Key"
3. Name it "CMA CRM"
4. **COPY THE KEY**

#### Step 3: Get Audience ID
1. Go to Audience → All contacts
2. Click Settings → Audience name and defaults
3. Copy "Audience ID"

#### Step 4: Configure in CMA Tool
1. Click "⚙️ Email Settings"
2. Select "Mailchimp"
3. Paste API Key
4. Paste Audience ID
5. Enter From Email & Name
6. Click "Save & Test"

### Mailchimp Code Integration:
```javascript
const Mailchimp = require('mailchimp-api-v3');
const mailchimp = new Mailchimp(apiKey);

app.post('/api/send-campaign', async (req, res) => {
  const campaign = await mailchimp.post('/campaigns', {
    type: 'regular',
    recipients: { list_id: audienceId },
    settings: {
      subject_line: subject,
      from_name: fromName,
      reply_to: replyEmail
    }
  });
  
  await mailchimp.put(`/campaigns/${campaign.id}/content`, {
    html: body
  });
  
  await mailchimp.post(`/campaigns/${campaign.id}/actions/send`);
});
```

---

## 3️⃣ Resend Setup (EASIEST!)

### Why Resend?
- ✅ 100 emails/day free
- ✅ Super simple API
- ✅ Modern developer experience
- ✅ Fast setup

### Step-by-Step Setup:

#### Step 1: Create Account
1. Go to https://resend.com
2. Sign up with GitHub or Email
3. Verify email

#### Step 2: Create API Key
1. Go to API Keys
2. Click "Create API Key"
3. Name it "CMA CRM"
4. **COPY THE KEY**

#### Step 3: Add Domain (or use resend.dev)
1. For testing: use yourname@resend.dev
2. For production: Add your domain in Domains section

#### Step 4: Configure in CMA Tool
1. Click "⚙️ Email Settings"
2. Select "Resend"
3. Paste API Key
4. Enter From Email
5. Click "Save & Test"

### Resend Code Integration:
```javascript
const { Resend } = require('resend');
const resend = new Resend(apiKey);

app.post('/api/send-campaign', async (req, res) => {
  const { recipients, subject, body, from } = req.body;
  
  await resend.emails.send({
    from: from,
    to: recipients,
    subject: subject,
    html: body
  });
});
```

---

## 4️⃣ Mailgun Setup

### Why Mailgun?
- ✅ 5,000 emails/month free
- ✅ High deliverability
- ✅ Powerful analytics

### Step-by-Step Setup:

#### Step 1: Create Account
1. Go to https://signup.mailgun.com
2. Sign up (free trial)
3. Verify email

#### Step 2: Get API Key
1. Go to Settings → API Keys
2. Copy "Private API key"

#### Step 3: Get Domain
1. Go to Sending → Domains
2. Use sandbox domain (for testing) or add your own

#### Step 4: Configure in CMA Tool
1. Click "⚙️ Email Settings"
2. Select "Mailgun"
3. Paste API Key
4. Enter Domain
5. Enter From Email
6. Click "Save & Test"

---

## 5️⃣ AWS SES Setup (ADVANCED)

### Why AWS SES?
- ✅ 62,000 emails/month FREE (if using EC2)
- ✅ $0.10 per 1,000 emails
- ✅ Enterprise-grade
- ⚠️ Complex setup

### Step-by-Step Setup:

#### Step 1: AWS Account
1. Go to https://aws.amazon.com
2. Create account (requires credit card)

#### Step 2: Enable SES
1. Go to AWS Console → SES
2. Select your region
3. Request production access (starts in sandbox)

#### Step 3: Verify Email
1. Go to Verified identities
2. Create identity (email address)
3. Verify via email link

#### Step 4: Create IAM User
1. Go to IAM → Users
2. Create user "ses-sender"
3. Attach policy: AmazonSESFullAccess
4. Create access key
5. **COPY Access Key & Secret**

#### Step 5: Configure in CMA Tool
1. Click "⚙️ Email Settings"
2. Select "AWS SES"
3. Paste Access Key
4. Paste Secret Key
5. Select Region
6. Enter From Email
7. Click "Save & Test"

---

## 6️⃣ Postmark Setup

### Why Postmark?
- ✅ Excellent deliverability
- ✅ Transactional focus
- ✅ Great support

### Step-by-Step Setup:

#### Step 1: Create Account
1. Go to https://postmarkapp.com
2. Sign up (45-day trial)

#### Step 2: Create Server
1. Create "Default Transactional Server"
2. Go to Server → API Tokens
3. **COPY Server API Token**

#### Step 3: Add Sender Signature
1. Go to Sender Signatures
2. Add your email
3. Verify via email link

#### Step 4: Configure in CMA Tool
1. Click "⚙️ Email Settings"
2. Select "Postmark"
3. Paste API Token
4. Enter From Email
5. Click "Save & Test"

---

## 7️⃣ SMTP Setup (Generic)

### Why SMTP?
- ✅ Works with any email provider
- ✅ Use your existing email
- ✅ Gmail, Outlook, etc.

### Gmail SMTP Setup:

#### Step 1: Enable 2-Factor Auth
1. Go to Google Account settings
2. Security → 2-Step Verification
3. Enable it

#### Step 2: Create App Password
1. Security → App passwords
2. Select "Mail" and "Other (Custom name)"
3. Name it "CMA CRM"
4. **COPY 16-character password**

#### Step 3: Configure in CMA Tool
1. Click "⚙️ Email Settings"
2. Select "SMTP"
3. Enter settings:
   - Host: smtp.gmail.com
   - Port: 587
   - Username: your@gmail.com
   - Password: (app password)
   - From Email: your@gmail.com
4. Click "Save & Test"

### Outlook SMTP:
- Host: smtp-mail.outlook.com
- Port: 587
- Use regular password

---

## 🔒 Security Best Practices

### DO:
✅ Store API keys in environment variables
✅ Use .env files (never commit to git)
✅ Rotate keys regularly
✅ Use separate keys for dev/production
✅ Monitor usage for suspicious activity

### DON'T:
❌ Never commit keys to GitHub
❌ Don't share keys in screenshots
❌ Don't use production keys in development
❌ Don't hardcode keys in frontend

---

## 🧪 Testing Your Setup

### Test Email:
1. Configure provider
2. Add yourself as a contact
3. Create simple campaign
4. Send to yourself
5. Check inbox (and spam!)

### Troubleshooting:
- **Email in spam?** → Set up SPF/DKIM records
- **Not receiving?** → Check sender verification
- **API error?** → Verify API key is correct
- **Rate limited?** → Check your plan limits

---

## 📊 Which Provider Should You Choose?

### For Beginners:
→ **Resend** or **SendGrid** (easiest setup)

### For Marketing:
→ **Mailchimp** (best automation)

### For High Volume:
→ **AWS SES** (cheapest at scale)

### For Deliverability:
→ **Postmark** or **SendGrid**

### For Existing Email:
→ **SMTP** (use what you have)

---

## 🚀 Production Deployment

### Backend Required:
```
Your email service needs a backend server because:
1. API keys must stay secret (can't expose in frontend)
2. Email services require server-side calls
3. Rate limiting and security
```

### Recommended Stack:
- **Frontend:** Your CMA React app
- **Backend:** Node.js/Express or Vercel serverless
- **Hosting:** Vercel, Netlify Functions, AWS Lambda

### Example Backend (Express):
```javascript
const express = require('express');
const app = express();

app.post('/api/send-email', async (req, res) => {
  const { provider, apiKey, recipients, subject, body } = req.body;
  
  // Call appropriate email service
  if (provider === 'sendgrid') {
    // SendGrid code
  } else if (provider === 'resend') {
    // Resend code
  }
  
  res.json({ success: true });
});

app.listen(3000);
```

---

## 💡 Next Steps

After configuration:
1. ✅ Test with yourself first
2. ✅ Add 5-10 real contacts
3. ✅ Send first campaign
4. ✅ Monitor deliverability
5. ✅ Set up tracking (opens/clicks)
6. ✅ Scale up gradually

---

## 📚 Additional Resources

- **SendGrid Docs:** https://docs.sendgrid.com
- **Mailchimp API:** https://mailchimp.com/developer
- **Resend Docs:** https://resend.com/docs
- **Mailgun Docs:** https://documentation.mailgun.com
- **AWS SES Docs:** https://docs.aws.amazon.com/ses
- **Postmark Docs:** https://postmarkapp.com/developer

---

## 🎊 You're Ready to Send Professional Emails!

Your CMA CRM now supports enterprise-grade email delivery through multiple providers!
