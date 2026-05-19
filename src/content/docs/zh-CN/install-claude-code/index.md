---
title: 安装 Claude Code
description: 在您的电脑上运行 Claude Code
sidebar:
  order: 3
---

接下来，让我们在您的电脑上安装 Claude Code。我们将使用 Claude Code 桌面应用程序，它包含了您开始构建所需的一切。

## 下载 Claude Code

### Windows/Mac

1. 前往 **[claude.ai/download](https://claude.ai/download)**（或 Claude Code 官方下载页面）
2. 点击 **"Download for Windows/Mac"**
3. 安装程序将开始下载（通常保存到您的下载文件夹）

## 安装 Claude Code

### Windows

1. 从下载文件夹中打开已下载的文件
2. 按照安装向导进行操作
3. 点击 **"Install"** 并等待安装完成
4. 完成后点击 **"Finish"**

### Mac

1. 从下载文件夹中打开已下载的 `.dmg` 文件
2. 将 **Claude Code** 应用拖入您的 **Applications** 文件夹
3. 打开 **Applications** 并双击 **Claude Code**
4. 如果出现安全警告，点击 **"Open"** 确认


<div class="checkpoint">
  <div class="checkpoint-title">✅ 检查点</div>
  <p>Claude Code 现已安装到您的电脑上！</p>
</div>

### 将 Github 连接到 Claude Code
![](github-claude-settings.png)

在开始之前，我们需要将 Claude Code 连接到 Github。您需要进入 Claude 的设置并连接 Github。

您需要验证您的 Github 登录，然后会跳转到 **Integrations > Applications > Claude** 页面。在这里，您可以选择授权访问所有仓库，或仅授权您当前正在使用的仓库。

如果您选择 **"Select repository"**，可以选择您刚刚创建的那个仓库。

![](repo-claude.png)


## 故障排除

<div class="tip-box"> 您可以在 <a href="https://support.claude.com/en/articles/10167454-using-the-github-integration"> Claude 帮助站点<a> 上找到更多关于 Github 集成的信息。
</div>

### 安装后找不到 Claude Code（Mac）
检查您的 **Applications** 文件夹。如果 Claude Code 在那里但无法打开，请右键点击它并选择 **"Open"** 以绕过安全警告。

### 安装卡住或无法完成（Windows）

尝试以管理员身份运行安装程序：
1. 右键点击安装程序文件
2. 选择 **"Run as administrator"**
3. 再次按照安装步骤操作

### 出现"App is damaged"提示（Mac）

下载的应用程序有时会出现此问题。请尝试：
1. 打开 **Terminal**
2. 运行：`xattr -cr /Applications/Claude\ Code.app`
3. 再次尝试打开 Claude Code

### 出现"npm is not recognized"（Windows）

完全关闭命令提示符并重新打开。安装需要一个新的窗口才能正常工作。


## 后续步骤

Claude Code 已安装完毕，Github 也已配置好，现在您可以开始了！接下来，您将选择一个项目，使用 Claude Code 进行构建。