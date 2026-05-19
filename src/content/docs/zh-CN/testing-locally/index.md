---
title: 本地测试
description: 在你自己的电脑上运行和测试你的项目
sidebar:
  order: 7
---

在与世界分享你的项目之前，让我们先确保它在你自己的电脑上能正常运行。

## "本地测试"是什么意思？

"本地"是指在你自己的电脑上（相对于"云端"或"在线"）。

当你进行本地测试时：
- 只有你能看到它
- 更改会立即显示
- 你可以放心地搞坏东西（其他人看不到！）
- 完全免费——无需托管

## 通过 Github Desktop 获取 Claude 的更改

![](github-bar.png)
### 第一步：打开 GitHub Desktop

切换到 GitHub Desktop。你应该能看到顶部的上述工具栏。最左侧的部分是你当前所在的仓库，中间部分是你当前所在的分支，最右侧是"操作"区域。

### 第二步：切换到你的分支

![](github-branch.png)

使用分支选择器，选择 Claude 工作所在的分支。

### 从远端拉取

选择正确的分支后，你可能会看到一个"Pull Origin"按钮，点击它即可。如果没有，则点击"**Fetch Origin**"，等待应用检查更新。

## 本地测试

你可以选择以下两种方法来测试 Claude Code 的成果。

## 方法一：直接打开 HTML 文件

如果你选择构建的是一个简单的静态项目，查看项目最简单的方式就是在文件管理器中找到对应文件夹，然后打开 **index.html** 文件。

打开该文件后，浏览器会弹出一个新窗口，你就能看到你的项目了。

<div class="tip-box">
  <strong>💡 提示：</strong> 地址栏会显示类似 <code>file:///path/to/your/file</code> 的内容。这说明你正在查看的是本地文件，而不是互联网上的网站。
</div>

## 方法二：使用本地服务器（推荐）

某些功能（例如加载数据或使用特定的 JavaScript）需要一个"真实的"服务器。以下是搭建方法：

### 第一步：打开终端

**Windows：**
1. 按 `⊞ Win + R` 打开"运行"对话框
2. 输入 `cmd` 并按回车
3. 命令提示符窗口将会打开

**Mac：**
1. 按 `Cmd + Space` 打开 Spotlight
2. 输入 `Terminal` 并按回车
3. 终端窗口将会打开


<div class="tip-box">
  <strong>💡 终端参考：</strong> 更多终端命令和使用技巧，请查阅<a href="/reference/cheat-sheet/#terminal--command-line">速查表的终端部分</a>。
</div>

### 第二步：导航到你的项目

在终端中，使用 `cd`（切换目录）命令进入你的项目文件夹。你可以通过系统的文件夹信息菜单操作来找到完整的文件夹路径。

**Windows：**
```bash
cd Documents\GitHub\my-project
```

**Mac：**
```bash
cd ~/Documents/GitHub/my-project
```

<div class="tip-box">
  <strong>💡 提示：</strong> 将"my-project"替换为你实际的项目文件夹名称。如果不确定 GitHub Desktop 将项目保存在哪里，可以在 GitHub Desktop → Preferences → Advanced → Repository storage location 中查看。
</div>


你可以运行以下命令来验证你是否在正确的目录中：
- **Windows：** `dir`
- **Mac：** `ls`

你应该能看到你的项目文件（如果刚创建，则是空文件夹）。

### 第三步：运行服务器
导航到项目文件夹后，运行以下命令：

**Python 3：**
```bash
python -m http.server 8000
```

**Python 2（旧版系统）：**
```bash
python -m SimpleHTTPServer 8000
```

这将在端口 8000 上启动本地服务器，服务器运行后，浏览器应该会自动打开正确的地址。如果没有，请手动访问以下地址：
```
http://localhost:8000
```

如果终端窗口中出现任何错误，将错误内容复制并粘贴到 Claude 的对话框中，Claude 会告诉你接下来该怎么做。

## 测试清单

逐一检查你的项目，确认以下事项：

### 视觉检查

- [ ] 所有内容是否正常显示在屏幕上？
- [ ] 颜色是否正确？
- [ ] 文字是否清晰可读（不过小或过大）？
- [ ] 图片是否正常加载？

### 交互检查

- [ ] 按钮点击后是否有响应？
- [ ] 链接是否跳转到正确的页面？
- [ ] 表单是否能接受输入？
- [ ] 动画/效果是否正常运行？

### 响应式检查（移动端适配）

大多数浏览器允许你模拟移动设备：

1. 在页面任意位置右键单击
2. 点击**"检查"**或**"检查元素"**
3. 点击**设备切换**图标（形似手机/平板）
4. 选择不同设备进行测试

## 发现问题？修复它！

当某些地方不对劲时，你有以下选择：

### 选项一：询问 Claude Code

返回 Claude Code 并描述问题：

```text
When I click "Submit", nothing happens. The form should
show a success message.
```

或者截取错误截图，并描述你希望如何修复它。

```text
The color contrast of the button on the homepage isn't as per accessibility guidelines. Can you fix it?
```

### 选项二：自行调试

打开浏览器的开发者工具：

- **Windows**：按 `F12` 或 `Ctrl + Shift + I`
- **Mac**：按 `Cmd + Option + I`

在 **Console**（控制台）选项卡中查找红色错误信息，这些信息会告诉你哪里出了问题。如果看不懂，将这些信息粘贴到 Claude 对话框中，它将帮助你确定下一步操作。

![Debugger on Arc](debugging.png)

## 故障排查

### 图片无法加载

**可能的原因：**
- 文件路径错误（检查 `src` 属性）
- 文件放在了错误的文件夹中
- 文件名拼写错误（区分大小写！）

**解决方法：** 确保图片路径与文件实际位置完全一致：
```html
<!-- 如果图片与 HTML 文件在同一文件夹 -->
<img src="photo.jpg" alt="Photo">

<!-- 如果图片在"images"文件夹中 -->
<img src="images/photo.jpg" alt="Photo">
```

### CSS 样式未生效

**可能的原因：**
- HTML 中未链接 CSS 文件
- CSS 链接路径拼写错误
- 浏览器缓存了旧版本

**解决方法：** 检查 HTML 的 `<head>` 部分：
```html
<link rel="stylesheet" href="styles.css">
```

尝试强制刷新：`Ctrl + Shift + R`（Windows）或 `Cmd + Shift + R`（Mac）

### JavaScript 无法运行

**可能的原因：**
- 脚本文件未链接
- 脚本在 HTML 元素加载之前就已执行
- 代码中存在语法错误

**解决方法：** 在控制台中查找错误，并确保脚本放在 body 底部：
```html
<body>
  <!-- 你的内容 -->

  <script src="script.js"></script>  <!-- 将脚本放在末尾！ -->
</body>
```


<div class="checkpoint">
  <div class="checkpoint-title">✅ 检查点</div>
  <p>你的项目已在本地正常运行，并且你已保存了进度。还有什么想要修改的地方吗？</p>
</div>

## 下一步

现在你已经让你的第一个 vibe coded 项目跑起来了。你可以继续[对项目进行修改](/making-changes/)，或者前往[将其部署到 GitHub Pages](/deploy-github-pages/)。