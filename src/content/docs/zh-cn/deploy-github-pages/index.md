---
title: 部署到 GitHub Pages
description: 免费将你的项目发布到互联网上
sidebar:
  order: 8
---

这是见证真相的时刻！让我们把你的项目发布到互联网上，让任何人都能看到它。

### 第一步：确认你的代码已上传到 GitHub

让我们确保一切准备就绪：

1. 打开 **GitHub Desktop**
2. 点击"**Fetch Origin**"
3. 确认 **Changes 标签页**为空（所有更改已提交）

如果一切就绪，那么你就可以将更改合并到主代码库了。

### 第二步：创建 Pull Request

现在让我们将本地代码推送到主分支。
![](../../deploy-github-pages/preview-pr.png)

1. 打开 **GitHub Desktop**
2. 界面上应该有一个"**Preview Pull Request**"按钮
3. 点击它，它会带你前往 Github.com
4. 填写 Pull Request 的描述，然后点击"**Create Pull Request**"
5. Github 会运行一些检查，检查完成后，你可以点击最终的"**Merge Branch**"完成合并

<div class="tip-box">
  如果你在这里遇到任何错误，请将错误信息粘贴到 Claude 中，以便调试。
</div>

### 第三步：访问你的线上网站！

GitHub 通常需要一两分钟来构建和部署你的网站。在浏览器中输入：

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

🎉 **恭喜你！你的项目已经上线了！**

## 更新你的网站

在看到网站上线后，你可能需要进行一些修改。

建议每次新的修改都在 Claude Code 中开启一个新的对话，因为 Claude 往往会创建一个新分支来进行工作。如果你在 **Github Desktop** 中创建了分支，Claude Code 将无法访问它。

如需进行修改，你可以重复 [使用 Claude Code 进行更改](/making-changes/) 中提到的步骤。

## 故障排查

更多解决方案，请参阅我们完整的[故障排查指南](/troubleshooting/)。

#### 部署延迟

![部署已完成](../../deploy-github-pages/git-actions.png)

这是一个可选步骤，供你在需要调试时使用。

1. **检查 Actions 标签页** - 查看部署是否仍在运行
2. 检查是否有指出的错误

### 404 错误 / 页面未找到

- **检查 URL** - 确保你使用的是正确的仓库名称
- **检查你的文件** - 确保仓库根目录中有 `index.html` 文件
- **稍等片刻** - 首次部署可能需要最多 10 分钟

### 空白页面

- **检查浏览器控制台**中的错误（F12 → Console 标签页）
- **检查文件路径** - 指向 CSS/JS 的链接可能需要更新
- **注意大小写** - `Styles.css` 和 `styles.css` 是不同的文件

### 更改未显示

- **等待 2-5 分钟** - GitHub Pages 的缓存较为激进
- **强制刷新** - `Ctrl + Shift + R`（Windows）或 `Cmd + Shift + R`（Mac）
- **检查 Actions 标签页** - 查看部署是否仍在运行


<div class="tip-box">
  <strong>💡 专业提示：</strong>你可以使用自定义域名（如"yourname.com"）来替代 github.io 地址。这稍微复杂一些，但如果你有兴趣，GitHub 提供了<a href="https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site" target="_blank">很好的文档</a>！
</div>


<div class="checkpoint">
  <div class="checkpoint-title">✅ 检查点</div>
  <p>你的项目已经在互联网上上线了！你刚刚部署了一个真实的网站。🎉</p>
</div>

## 接下来做什么？

你完成了一件了不起的事情——从零开始，一路到部署上线！

花一点时间欣赏你走过的历程：

- ✅ 创建了 GitHub 账号
- ✅ 安装了 Claude Code
- ✅ 学习了 Git 基础
- ✅ 用 AI 构建了一个真实的项目
- ✅ 在本地进行了测试
- ✅ 部署到了互联网上

在接下来的章节中，我们将通过以下内容提升你的技能：
- [直接学习使用 Claude API](/claude-api/)
- [使用 PostHog 添加访客数据分析](/analytics-posthog/)