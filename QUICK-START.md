# 🚀 快速开始指南

## ✅ 已完成的工作

我已经帮你完成了以下所有配置：

1. ✅ 创建了完整的 Astro 项目
2. ✅ 安装了所有依赖
3. ✅ 创建了 GitHub 仓库：https://github.com/YingxueSec/yyyxxx-website
4. ✅ 推送了代码到 GitHub
5. ✅ 配置了 GitHub Actions 自动部署
6. ✅ 启用了 GitHub Pages
7. ✅ 配置了自定义域名 yyyxxx.cc

## 📋 你需要做的唯一一件事：配置 DNS

### 在你的域名提供商处添加以下 DNS 记录：

#### A 记录（必需）

| 主机记录 | 记录值 |
|---------|--------|
| @ | 185.199.108.153 |
| @ | 185.199.109.153 |
| @ | 185.199.110.153 |
| @ | 185.199.111.153 |

#### CNAME 记录（可选，支持 www）

| 主机记录 | 记录值 |
|---------|--------|
| www | yingxuesec.github.io |

### DNS 生效时间

- 通常：1-2 小时
- 最长：24-48 小时

### 验证 DNS

```bash
dig yyyxxx.cc +short
```

应该返回 4 个 GitHub Pages 的 IP 地址。

## 🌐 访问你的网站

DNS 生效后，访问：
- https://yyyxxx.cc

你会看到一个精美的紫色渐变欢迎页面！

## 🔐 启用 HTTPS

DNS 生效后：
1. 访问 https://github.com/YingxueSec/yyyxxx-website/settings/pages
2. 等待 DNS 检查通过
3. 勾选 **Enforce HTTPS**

## 🎨 更新网站内容

```bash
# 编辑首页
vim src/pages/index.astro

# 提交并推送
git add .
git commit -m "Update content"
git push

# GitHub Actions 会自动部署（约 1-2 分钟）
```

## 📚 详细文档

- **DNS-SETUP.md** - 详细的 DNS 配置指南和故障排除
- **DEPLOYMENT.md** - 完整的部署流程说明
- **README.md** - 项目概览

## 🔗 重要链接

- **GitHub 仓库**：https://github.com/YingxueSec/yyyxxx-website
- **GitHub Pages 设置**：https://github.com/YingxueSec/yyyxxx-website/settings/pages
- **Actions 部署状态**：https://github.com/YingxueSec/yyyxxx-website/actions

## 💡 本地开发

```bash
# 启动开发服务器
npm run dev

# 访问 http://localhost:4321

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

---

**下一步**：配置 DNS，然后访问 https://yyyxxx.cc 查看你的网站！🎉
