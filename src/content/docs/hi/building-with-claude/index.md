---
title: Claude Code से निर्माण करना
description: अपना प्रोजेक्ट चरण दर चरण बनाने के लिए Claude Code का उपयोग करें
sidebar:
  order: 6
---


यह वह क्षण है जिसका आप इंतज़ार कर रहे थे! अपना प्रोजेक्ट बनाने के लिए Claude Code का उपयोग करते हैं।

### चरण 1: एक नया Claude Code chat खोलें

![New Chat Setup](../../building-with-claude/new-project.png)

1. वह repository चुनें जिस पर Claude को काम करना है। जैसे, username/username.github.io
2. डिफ़ॉल्ट Cloud environment चुनें
3. अपना prompt पेस्ट करें
4. (वैकल्पिक) डिज़ाइन संदर्भ के लिए कोई भी images जोड़ें


### चरण 2: देखें और सीखें

Claude Code यह करेगा:

1. **योजना बनाना** - सबसे अच्छे तरीके के बारे में सोचना
2. **फ़ाइलें बनाना** - HTML, CSS, और JavaScript फ़ाइलें तैयार करना
3. **समझाना** - बताना कि वह क्या कर रहा है और क्यों

![How the mostly one-sided Chat conversation would look like](../../building-with-claude/example-convo.png)

<div class="warning-box">
  <strong>⚠️ धैर्य रखें!</strong> जटिल प्रोजेक्ट्स में एक-दो मिनट लग सकते हैं। Claude Code के काम करते समय उसे बाधित न करें।
</div>


### चरण 3: जो बनाया गया उसकी समीक्षा करें

![Claude will push it's changes to a branch](../../building-with-claude/claude-branch.png)

Claude Code के समाप्त होने के बाद, देखते हैं कि कौन सी फ़ाइलें बनाई गईं। Claude Code ने एक नई branch बनाई होगी और अपना काम उस branch पर push किया होगा। समीक्षा के लिए आपको उन परिवर्तनों को अपने local system पर *fetch* करना होगा।


<div class="tip-box">
  <strong>💡 और टिप्स चाहिए?</strong> उन्नत तकनीकों के लिए Level Up अनुभाग में <a href="/claude-tips/">Working with Claude Code: Tips & Tricks</a> देखें!
</div>

## समस्या निवारण

### Github Repo इंस्टॉल नहीं है

![Github app not installed](../../building-with-claude/github-connection.png)

आपको Github Integration को फिर से जोड़ना होगा और वह repository चुननी होगी जिस पर आप काम कर रहे हैं।

## अगले चरण

अब जब आपके पास अपने local system में कोड है, तो आपको यह जानना होगा कि इसे कैसे सत्यापित करें! अगले अनुभाग में, हम सीखेंगे कि [अपने प्रोजेक्ट को locally कैसे test करें](/testing-locally/)।

<div class="checkpoint">
  <div class="checkpoint-title">✅ चेकपॉइंट</div>
  <p>Claude Code ने आपकी प्रोजेक्ट फ़ाइलें बना दी हैं। क्या आप उन्हें Test करने के लिए तैयार हैं?</p>
</div>