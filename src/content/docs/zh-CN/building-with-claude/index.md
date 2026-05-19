---
title: 使用 Claude Code 进行构建
description: 使用 Claude Code 逐步创建您的项目
sidebar:
  order: 6
---


这就是您期待已久的时刻！让我们使用 Claude Code 来构建您的项目。

### 第一步：打开新的 Claude Code 对话

![新建对话设置](new-project.png)

1. 选择您希望 Claude 处理的代码仓库，例如：username/username.github.io
2. 选择默认的云端环境
3. 粘贴您的提示词
4. （可选）添加任何设计参考图片


### 第二步：观察并学习

Claude Code 将会：

1. **规划** - 思考最佳方案
2. **创建文件** - 生成 HTML、CSS 和 JavaScript 文件
3. **解释说明** - 告诉您它在做什么以及原因

![对话过程大致呈现单方面交流的样子](example-convo.png)

<div class="warning-box">
  <strong>⚠️ 请耐心等待！</strong> 复杂的项目可能需要一两分钟。在 Claude Code 工作期间请勿打断它。
</div>


### 第三步：查看已创建的内容

![Claude 会将更改推送到一个分支](claude-branch.png)

Claude Code 完成后，让我们看看创建了哪些文件。Claude Code 会创建一个新分支并将其工作推送到该分支。您需要将这些更改*拉取*到本地系统进行审查。


<div class="tip-box">
  <strong>💡 想要更多技巧？</strong> 请查看进阶部分中的 <a href="/claude-tips/">与 Claude Code 协作：技巧与窍门</a>，了解高级使用方法！
</div>

## 故障排除

### Github 仓库未安装

![Github 应用未安装](github-connection.png)

您需要重新连接 Github 集成并选择您正在使用的代码仓库。

## 下一步

现在您已经将代码保存到本地系统，接下来需要了解如何验证它！在下一节中，我们将学习如何[在本地测试您的项目](/testing-locally/)。

<div class="checkpoint">
  <div class="checkpoint-title">✅ 检查点</div>
  <p>Claude Code 已创建您的项目文件，准备好测试了吗？</p>
</div>