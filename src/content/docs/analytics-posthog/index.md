---
title: Adding Analytics with PostHog
description: Track how people use your project with PostHog analytics
sidebar:
  order: 10
---


You've built something amazing and put it online. But how do you know if people are actually using it? That's where analytics come in!


## What is PostHog?

PostHog is a free, open-source analytics tool that helps you understand:
- How many people visit your site
- What pages they view
- What buttons they click
- Where they come from
- And much more!

It's privacy-friendly and has a generous free tier - perfect for personal projects.


## Why Analytics Matter

Without analytics, you're flying blind:

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│   Without Analytics:                                       │
│   "I wonder if anyone uses my site?" 🤷                    │
│                                                            │
│   With Analytics:                                          │
│   "50 people visited yesterday! Most clicked the          │
│    contact button but few filled out the form.            │
│    I should make the form simpler."  💡                   │
│                                                            │
└────────────────────────────────────────────────────────────┘
```


## Step 1: Create a PostHog Account

1. Go to [posthog.com](https://posthog.com)
2. Click **"Get Started - Free"**
3. Sign up with your email or GitHub account

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: PostHog signup page]</strong><br/>
    PostHog homepage with the "Get Started - Free" button
  </div>
</div>

### During Setup

- Choose **"PostHog Cloud"** (easiest option)
- Select your region (usually US or EU)
- Name your project

<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>You should now see your PostHog dashboard!</p>
</div>


## Step 2: Get Your Snippet

PostHog will give you a JavaScript snippet to add to your site.

1. In your PostHog dashboard, go to **"Settings"** → **"Project"**
2. Find the **"Web snippet"** section
3. Copy the snippet

It looks something like this:

```html
<script>
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('YOUR_API_KEY_HERE', {api_host: 'https://app.posthog.com'})
</script>
```


## Step 3: Add to Your Website

Paste the snippet in your HTML file, just before the closing `</head>` tag:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Awesome Project</title>
  <link rel="stylesheet" href="styles.css">

  <!-- PostHog Analytics -->
  <script>
    !function(t,e){/* ... PostHog snippet ... */}
    posthog.init('YOUR_API_KEY_HERE', {api_host: 'https://app.posthog.com'})
  </script>
</head>
<body>
  <!-- Your content -->
</body>
</html>
```

<div class="warning-box">
  <strong>⚠️ Replace the API key!</strong> Make sure to use your actual PostHog API key from your dashboard.
</div>


## Step 4: Test It's Working

1. Save your file
2. Open it in your browser
3. Go back to PostHog dashboard
4. Click **"Live Events"** in the sidebar
5. You should see your visit appear in real-time!

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: PostHog Live Events]</strong><br/>
    PostHog Live Events page showing a recent pageview event
  </div>
</div>

<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>If you see events appearing in PostHog, analytics is working!</p>
</div>


## Step 5: Track Custom Events

PostHog automatically tracks page views. But you can also track specific actions!

### Track Button Clicks

Add this to track when someone clicks an important button:

```javascript
// When the button is clicked
document.getElementById('signupButton').addEventListener('click', function() {
  posthog.capture('signup_button_clicked');
});
```

### Track Form Submissions

```javascript
document.getElementById('contactForm').addEventListener('submit', function() {
  posthog.capture('contact_form_submitted');
});
```

### Track with Extra Data

You can include additional information:

```javascript
posthog.capture('project_viewed', {
  project_name: 'Portfolio',
  section: 'about'
});
```


## Understanding Your Dashboard

Let's explore what PostHog shows you:

### Web Analytics

The main dashboard shows:
- **Unique visitors** - How many different people visited
- **Page views** - Total pages viewed
- **Sessions** - Browsing sessions
- **Bounce rate** - People who left immediately

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: PostHog Web Analytics]</strong><br/>
    PostHog analytics dashboard showing visitor graph and key metrics
  </div>
</div>

### Session Recordings (Bonus Feature!)

PostHog can record user sessions (with their consent). This shows you exactly how people interact with your site:
- Where they click
- How far they scroll
- Where they get confused

<div class="tip-box">
  <strong>💡 Privacy Note:</strong> Session recordings are optional. Always be transparent with your users about what you track!
</div>


## Creating Your First Insight

Insights help you answer specific questions about your data.

### Example: Button Click Analysis

1. Go to **"Insights"** in PostHog
2. Click **"New Insight"**
3. Choose **"Trends"**
4. Select your event (e.g., "signup_button_clicked")
5. Click **"Save"**

Now you can see how many times that button was clicked over time!

<div class="image-placeholder">
  <div class="image-placeholder-icon">🖼️</div>
  <div class="image-placeholder-text">
    <strong>[Screenshot: PostHog Trends Insight]</strong><br/>
    A line graph showing button clicks over the past week
  </div>
</div>


## Privacy & GDPR

Be a good internet citizen:

### Add a Cookie Notice

```html
<div id="cookie-notice" style="position: fixed; bottom: 0; background: #333; color: white; padding: 1rem; width: 100%;">
  We use analytics to improve this site.
  <button onclick="acceptCookies()">Accept</button>
  <button onclick="declineCookies()">Decline</button>
</div>

<script>
function acceptCookies() {
  posthog.opt_in_capturing();
  document.getElementById('cookie-notice').style.display = 'none';
  localStorage.setItem('cookies_accepted', 'true');
}

function declineCookies() {
  posthog.opt_out_capturing();
  document.getElementById('cookie-notice').style.display = 'none';
  localStorage.setItem('cookies_accepted', 'false');
}

// Check on page load
if (localStorage.getItem('cookies_accepted') === 'true') {
  document.getElementById('cookie-notice').style.display = 'none';
} else if (localStorage.getItem('cookies_accepted') === 'false') {
  document.getElementById('cookie-notice').style.display = 'none';
  posthog.opt_out_capturing();
}
</script>
```


## What to Track (And What Not To)

### Good Things to Track

| Event | Why It's Useful |
|-------|-----------------|
| Page views | Know which pages are popular |
| Button clicks | See what features people use |
| Form submissions | Track conversions |
| Error occurrences | Find problems to fix |

### Don't Track

- Personal information (names, emails)
- Passwords or sensitive data
- Anything users wouldn't expect


## PostHog Free Tier

PostHog's free tier includes:
- **1 million events/month** - Plenty for personal projects
- **Session recordings**
- **Feature flags**
- **Unlimited team members**

Perfect for what we're building!


<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>You've added analytics to your project! You can now see how people interact with your site.</p>
</div>


## What You've Accomplished!

Take a moment to appreciate how far you've come:

- ✅ Created a GitHub account
- ✅ Installed Claude Code
- ✅ Learned Git basics
- ✅ Built a real project with AI
- ✅ Tested it locally
- ✅ Deployed it to the internet
- ✅ Learned to use the Claude API
- ✅ Added analytics

**You're no longer a complete beginner - you're a builder!** 🎉


## Next Steps

Check out the Reference section for:
- [Cheat Sheet](/ai-workshop/reference/cheat-sheet/) - Quick command reference
- [Glossary](/ai-workshop/reference/glossary/) - Terms explained
- [Troubleshooting](/ai-workshop/troubleshooting/) - Common issues and fixes
