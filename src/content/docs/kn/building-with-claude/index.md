---
title: Claude Code ನೊಂದಿಗೆ ನಿರ್ಮಿಸುವುದು
description: ನಿಮ್ಮ ಪ್ರಾಜೆಕ್ಟ್ ಅನ್ನು ಹಂತ ಹಂತವಾಗಿ ರಚಿಸಲು Claude Code ಅನ್ನು ಬಳಸಿ
sidebar:
  order: 6
---


ನೀವು ಕಾಯುತ್ತಿದ್ದ ಕ್ಷಣ ಬಂದಿದೆ! ನಿಮ್ಮ ಪ್ರಾಜೆಕ್ಟ್ ನಿರ್ಮಿಸಲು Claude Code ಅನ್ನು ಬಳಸೋಣ.

### ಹಂತ 1: ಹೊಸ Claude Code ಚಾಟ್ ತೆರೆಯಿರಿ

![New Chat Setup](../../building-with-claude/new-project.png)

1. Claude ಕೆಲಸ ಮಾಡಬೇಕಾದ ರೆಪೊಸಿಟರಿಯನ್ನು ಆರಿಸಿ. ಉದಾ., username/username.github.io
2. ಡೀಫಾಲ್ಟ್ Cloud ಪರಿಸರವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ
3. ನಿಮ್ಮ ಪ್ರಾಂಪ್ಟ್ ಅನ್ನು ಅಂಟಿಸಿ
4. (ಐಚ್ಛಿಕ) ವಿನ್ಯಾಸ ಉಲ್ಲೇಖಕ್ಕಾಗಿ ಯಾವುದಾದರೂ ಚಿತ್ರಗಳನ್ನು ಸೇರಿಸಿ


### ಹಂತ 2: ವೀಕ್ಷಿಸಿ ಮತ್ತು ಕಲಿಯಿರಿ

Claude Code ಈ ಕೆಳಗಿನವುಗಳನ್ನು ಮಾಡುತ್ತದೆ:

1. **ಯೋಜಿಸುತ್ತದೆ** - ಅತ್ಯುತ್ತಮ ವಿಧಾನದ ಬಗ್ಗೆ ಯೋಚಿಸುತ್ತದೆ
2. **ಫೈಲ್‌ಗಳನ್ನು ರಚಿಸುತ್ತದೆ** - HTML, CSS, ಮತ್ತು JavaScript ಫೈಲ್‌ಗಳನ್ನು ತಯಾರಿಸುತ್ತದೆ
3. **ವಿವರಿಸುತ್ತದೆ** - ಅದು ಏನು ಮಾಡುತ್ತಿದೆ ಮತ್ತು ಏಕೆ ಎಂದು ತಿಳಿಸುತ್ತದೆ

![How the mostly one-sided Chat conversation would look like](../../building-with-claude/example-convo.png)

<div class="warning-box">
  <strong>⚠️ ತಾಳ್ಮೆ ತಾಳಿ!</strong> ಸಂಕೀರ್ಣ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳಿಗೆ ಒಂದು ಅಥವಾ ಎರಡು ನಿಮಿಷ ತಗಲಬಹುದು. Claude Code ಕೆಲಸ ಮಾಡುತ್ತಿರುವಾಗ ಅಡ್ಡಿಪಡಿಸಬೇಡಿ.
</div>


### ಹಂತ 3: ರಚಿಸಿದ್ದನ್ನು ಪರಿಶೀಲಿಸಿ

![Claude will push it's changes to a branch](../../building-with-claude/claude-branch.png)

Claude Code ಮುಗಿಸಿದ ನಂತರ, ಯಾವ ಫೈಲ್‌ಗಳನ್ನು ರಚಿಸಲಾಗಿದೆ ಎಂದು ನೋಡೋಣ. Claude code ಹೊಸ ಶಾಖೆಯನ್ನು ರಚಿಸಿ ಅದರ ಕೆಲಸವನ್ನು ಆ ಶಾಖೆಗೆ ಪುಶ್ ಮಾಡಿರುತ್ತದೆ. ಪರಿಶೀಲನೆಗಾಗಿ ಆ ಬದಲಾವಣೆಗಳನ್ನು ನಿಮ್ಮ ಸ್ಥಳೀಯ ಸಿಸ್ಟಮ್‌ಗೆ *fetch* ಮಾಡಬೇಕಾಗುತ್ತದೆ.


<div class="tip-box">
  <strong>💡 ಹೆಚ್ಚಿನ ಸಲಹೆಗಳು ಬೇಕೇ?</strong> ಸುಧಾರಿತ ತಂತ್ರಗಳಿಗಾಗಿ Level Up ವಿಭಾಗದಲ್ಲಿ <a href="/claude-tips/">Working with Claude Code: Tips & Tricks</a> ಅನ್ನು ಪರಿಶೀಲಿಸಿ!
</div>

## ದೋಷನಿವಾರಣೆ

### Github Repo ಸ್ಥಾಪನೆಯಾಗಿಲ್ಲ

![Github app not installed](../../building-with-claude/github-connection.png)

ನೀವು Github Integration ಅನ್ನು ಮರು-ಸಂಪರ್ಕಿಸಬೇಕು ಮತ್ತು ನೀವು ಕೆಲಸ ಮಾಡುತ್ತಿರುವ ರೆಪೊಸಿಟರಿಯನ್ನು ಆಯ್ಕೆ ಮಾಡಬೇಕು.

## ಮುಂದಿನ ಹಂತಗಳು

ಕೋಡ್ ನಿಮ್ಮ ಸ್ಥಳೀಯ ಸಿಸ್ಟಮ್‌ನಲ್ಲಿ ಇರುವ ಈಗ, ಅದನ್ನು ಹೇಗೆ ಪರಿಶೀಲಿಸಬೇಕು ಎಂದು ತಿಳಿಯಬೇಕು! ಮುಂದಿನ ವಿಭಾಗದಲ್ಲಿ, [ನಿಮ್ಮ ಪ್ರಾಜೆಕ್ಟ್ ಅನ್ನು ಸ್ಥಳೀಯವಾಗಿ ಪರೀಕ್ಷಿಸುವುದು](/testing-locally/) ಹೇಗೆ ಎಂದು ಕಲಿಯೋಣ.

<div class="checkpoint">
  <div class="checkpoint-title">✅ ಚೆಕ್‌ಪಾಯಿಂಟ್</div>
  <p>Claude Code ನಿಮ್ಮ ಪ್ರಾಜೆಕ್ಟ್ ಫೈಲ್‌ಗಳನ್ನು ರಚಿಸಿದೆ. ಅವುಗಳನ್ನು ಪರೀಕ್ಷಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?</p>
</div>