---
title: 使用 Claude Code 进行更改
description: 了解如何修改和保存您的项目
sidebar:
  order: 8
---

现在 Claude Code 已经创建了您的项目，并且您可以在系统上查看它，接下来您可能需要进行一些更改和改进。以下是具体方法！

## 进行更改

想要调整某些内容？您有两种选择：

## 方法一：让 Claude Code 来做（推荐）

最简单的方式——直接告诉 Claude Code 需要更改什么，或者分享一些截图或设计图片（仅支持 PNG、GIF、WebP、JPEG 格式，不支持 PDF）

```text
Change the heading font to something more playful
```

```text
Make the buttons bigger and add rounded corners
```

```text
Add a footer with copyright information
```

## 方法二：自己编辑文件

您也可以使用任意文本编辑器直接编辑文件：

1. 在文本编辑器中打开文件（VS Code、Notepad++、TextEdit 等）
2. 进行更改
3. 保存文件
4. 刷新浏览器查看更改效果

<div class="tip-box">
  <strong>💡 专业提示：</strong> 尝试自己做一些小改动！如果出了问题，随时可以让 Claude Code 来修复。
</div>

### 使用 GitHub Desktop 保存进度

在对项目进行更改后，让我们通过 GitHub Desktop 保存这些更改：

#### 第一步：打开 GitHub Desktop

1. 切换到 GitHub Desktop。
2. 点击"**Fetch Origin**"，以便获取 Claude Code 所做的更改并在本地进行验证。
3. 如果您在编辑器中手动进行了任何更改，应该可以在"Changes"选项卡中看到新文件的列表。

<div class="tip-box">
  如果您是让 Claude 帮您进行更改的，可以跳过下面的第二步和第三步。
</div>

#### 第二步：查看您的更改

点击文件查看已创建或修改的内容。所有已更改的文件都应处于勾选状态。

![手动检查您的更改](../../making-changes/checking-in.png)

#### 第三步：提交您的更改

1. 在左下角的"Summary"字段中，输入描述本次更改内容的说明
   - 首次提交：`Initial project created with Claude Code`
   - 更改后：`Updated button styles and added footer`
1. 点击 **"Commit to branch"** 按钮

<div class="checkpoint">
  <div class="checkpoint-title">✅ 检查点</div>
  <p>您已了解如何进行更改并保存进度。准备好将项目发布到互联网上了吗？</p>
</div>

## 最佳实践

### 1. 频繁提交
使用有意义的提交信息频繁保存您的工作，这将创建一份可供日后参考的历史记录。

### 2. 提交前先测试
在提交之前，务必在浏览器中查看您的更改，确保一切按预期运行。

### 3. 编写清晰的提交信息
不要使用"updates"或"changes"这样的描述，而应写成：
- "Add contact form with validation"
- "Fix navigation menu alignment"
- "Update color scheme to blue"

您甚至可以让 Claude 帮您撰写这些信息。

## 后续步骤

在下一节中，我们将学习如何[将您的项目部署到 GitHub Pages](/deploy-github-pages/)，使其可以在互联网上访问。