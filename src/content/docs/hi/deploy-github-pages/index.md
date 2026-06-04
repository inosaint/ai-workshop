---
title: GitHub Pages पर Deploy करें
description: अपने प्रोजेक्ट को मुफ़्त में इंटरनेट पर लाइव करें
sidebar:
  order: 8
---

यह सच्चाई का क्षण है! चलिए आपके प्रोजेक्ट को इंटरनेट पर डालते हैं जहाँ कोई भी इसे देख सके।

### Step 1: जाँचें कि आपका Code GitHub पर है

सुनिश्चित करें कि सब कुछ तैयार है:

1. **GitHub Desktop** खोलें
2. '**Fetch Origin**' पर क्लिक करें
3. जाँचें कि **Changes tab** खाली है (सभी बदलाव commit हो चुके हैं)

अगर सब कुछ ठीक है, तो आप अपने बदलावों को main codebase में merge करने के लिए तैयार हैं।

### Step 2: एक Pull Request बनाएं

अब अपने local code को main branch में ले जाते हैं।
![](../../deploy-github-pages/preview-pr.png)

1. **GitHub Desktop** खोलें
2. वहाँ '**Preview Pull Request**' का एक button होना चाहिए
3. उस पर क्लिक करें और यह आपको Github.com पर ले जाएगा
4. Pull Request का विवरण भरें और फिर '**Create Pull Request**' पर क्लिक करें
5. Github कुछ जाँच चलाएगा और जब वे पूरी हो जाएं, तो आप अंतिम '**Merge Branch**' पर क्लिक करके merger पूरा कर सकते हैं

<div class="tip-box">
  अगर आपको यहाँ कोई error मिलती है, तो उन errors को Claude में paste करें ताकि आप उन्हें debug कर सकें।
</div>

### Step 3: अपनी Live Site देखें!

GitHub को आमतौर पर आपकी site build और deploy करने में एक-दो मिनट लगते हैं। इसे अपने browser में टाइप करें:

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

🎉 **बधाई हो! आपका प्रोजेक्ट इंटरनेट पर live है!**

## अपनी Site अपडेट करना

अब इंटरनेट पर site live देखने के बाद, आपको बदलाव करने की ज़रूरत पड़ सकती है।

हर नए बदलाव के लिए Claude Code में एक नई chat शुरू करना recommended है क्योंकि Claude काम करने के लिए एक नई branch बनाता है। अगर आप **Github Desktop** पर एक branch बनाते हैं, तो Claude Code उसे access नहीं कर पाएगा।

बदलाव करने के लिए आप [Making Changes with Claude Code](/making-changes/) में बताए गए steps दोहरा सकते हैं।

## Troubleshooting

अधिक समाधानों के लिए, हमारी पूरी [Troubleshooting guide](/troubleshooting/) देखें।

#### Deployment में देरी

![The deployment has completed](../../deploy-github-pages/git-actions.png)

यह एक वैकल्पिक step है अगर आपको debug करने की ज़रूरत हो।

1. **Actions tab जाँचें** - देखें कि deployment अभी भी चल रही है या नहीं
2. जाँचें कि कोई error तो नहीं बताई गई है

### 404 Error / Page Not Found

- **URL जाँचें** - सुनिश्चित करें कि आप सही repository name का उपयोग कर रहे हैं
- **अपनी files जाँचें** - सुनिश्चित करें कि आपके repository की root में एक `index.html` file है
- **थोड़ा इंतज़ार करें** - पहली deployment में 10 मिनट तक का समय लग सकता है

### Blank Page

- errors के लिए **browser console जाँचें** (F12 → Console tab)
- **File paths जाँचें** - CSS/JS के links को अपडेट करने की ज़रूरत हो सकती है
- **Case sensitivity** - `Styles.css` और `styles.css` अलग-अलग हैं

### बदलाव नहीं दिख रहे

- **2-5 मिनट इंतज़ार करें** - GitHub Pages aggressively cache करता है
- **Hard refresh करें** - `Ctrl + Shift + R` (Windows) या `Cmd + Shift + R` (Mac)
- **Actions tab जाँचें** - देखें कि deployment अभी भी चल रही है या नहीं


<div class="tip-box">
  <strong>💡 Pro Tip:</strong> आप github.io address की जगह एक custom domain (जैसे "yourname.com") उपयोग कर सकते हैं। यह थोड़ा advanced है, लेकिन अगर आप रुचि रखते हैं तो GitHub के पास <a href="https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site" target="_blank">बेहतरीन documentation</a> है!
</div>


<div class="checkpoint">
  <div class="checkpoint-title">✅ Checkpoint</div>
  <p>आपका प्रोजेक्ट इंटरनेट पर LIVE है! आपने अभी एक real website deploy की। 🎉</p>
</div>

## आगे क्या?

आपने कुछ अद्भुत हासिल किया है - शून्य से एक deployed website तक!

एक पल लें और सोचें कि आप कितना आगे आ गए हैं:

- ✅ GitHub account बनाया
- ✅ Claude Code install किया
- ✅ Git की basics सीखीं
- ✅ AI के साथ एक real project बनाया
- ✅ इसे locally test किया
- ✅ इसे इंटरनेट पर deploy किया

अगले sections में, हम आपकी skills को और बेहतर बनाएंगे:
- [Claude API को directly उपयोग करना सीखें](/claude-api/)
- [PostHog के साथ visitors track करने के लिए analytics जोड़ें](/analytics-posthog/)