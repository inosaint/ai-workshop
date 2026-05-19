---
title: GitHub 账号
description: 逐步创建你的 GitHub 账号
sidebar:
  order: 2
---
<div class="tip-box">
  如果你已经熟悉 Github 并拥有账号，可以跳过本节。

</div>

GitHub 是开发者存储代码的地方。可以把它理解为**代码版的 Google Drive**。

在本节中，你将创建一个免费的 GitHub 账号，并在整个工作坊中使用它。

### 什么是 Git？

**Git 是你代码的时光机。**

还记得以前保存文件时的情形吗：
- `design_final.psd`
- `poster_final_v2.ai`
- `design_FINAL_FINAL.sketch`
- `design_FINAL_FINAL_actually_final.fig`

Git 优雅地解决了这个问题。它不是创建副本，而是追踪你所做的每一次更改。你可以：
- 回到任意历史版本
- 查看修改了什么以及修改时间
- 与他人协作而不会互相覆盖对方的工作

## Git 与 GitHub：有什么区别？

| Git                  | GitHub                   |
| -------------------- | ------------------------ |
| 安装在你电脑上的软件 | 互联网上的网站           |
| 在本地追踪更改       | 将你的代码存储在云端     |
| 免费且开源           | 公开项目免费             |
| 可离线使用           | 需要联网                 |

## 术语速览

在深入了解之前，让我们先熟悉一些你需要掌握的术语。

| 概念 | 日常类比 |
|---|---|
|**GitHub**|类似 Google Drive（云端），但专为代码项目设计|
|**Repository**（仓库/repo）|包含你项目文件的文件夹|
|**Commit**（提交）|保存一个版本的工作（类似带备注的"另存为"）|
|**Push**（推送）|将已保存的工作上传到云端|
|**Pull**（拉取）|从云端下载最新版本|

现在不需要记住这些——等我们实际使用时，你自然会理解！

## 设置你的 GitHub 账号

### 第 1 步：

前往 **[github.com](https://github.com/)** 创建你自己的账号。创建账号时请选择一个好的用户名。你选择的用户名将作为 Github pages 的默认名称，所以请选择一个专业的用户名（不像我那样随便）。

### 第 2 步：

下载 [Github Desktop](https://desktop.github.com)，并使用你新创建的账号凭据登录。

### 第 3 步：

使用 Github Desktop [创建一个新的 repository](https://docs.github.com/en/desktop/overview/creating-your-first-repository-using-github-desktop#creating-a-new-repository)（仓库/repo）。

![创建新 Repository 的对话框](../../github-setup/new-repo-dialog.png)

按照以下格式命名：[username].github.io，其中 *username* 是你的 github 用户名。这将作为你免费的 github 域名使用。请不要出错，repository 的名称在拼写和大小写上必须与你的 github 用户名完全一致。

![使用 Github Desktop 创建新 Repository](../../github-setup/new-repo.png)

你可以前往 [Github 的帮助文章](https://docs.github.com/en/desktop/overview/creating-your-first-repository-using-github-desktop)，了解更多关于 Github Desktop 及其界面的信息。

### 第 4 步：

发布该仓库。发布时，请记得取消勾选"Keep this code private"复选框。

![发布 Repository 的对话框](../../github-setup/publish-repo.png)

### 第 5 步：

前往 Github.com，进入你新创建的 repository，点击 Settings。

### 第 6 步：

![配置仓库的发布设置](../../github-setup/gh-pages.png)

在左侧导航栏中进入 pages，选择"**Deploy from a Branch**"，然后选择 **main / root**，点击"**Save**"。

如果你在发布 repository 时没有取消勾选"Keep this code private"复选框，则需要执行额外步骤。你需要前往 Setting > General，然后一直向下滚动页面，在"Danger Zone"区域找到"Change repository visibility"，将其从 Private 改为 Public。

## 下一步

你的 GitHub 账号已经准备好了。在下一节中，我们将在你的电脑上安装 Claude Code。

<div class="tip-box">
  <strong>💡 提示：</strong>保持 GitHub 标签页处于打开状态——我们很快还会用到它！
</div>