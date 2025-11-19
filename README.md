# yyyxxx.cc - Astro 网站

使用 Astro 构建并部署到 GitHub Pages 的个人网站。

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 `http://localhost:4321` 查看网站。

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 📦 部署到 GitHub Pages

### 1. 创建 GitHub 仓库

在 GitHub 上创建一个新仓库（例如：`yyyxxx-website`）。

### 2. 推送代码到 GitHub

```bash
git init
git add .
git commit -m "Initial commit: Astro website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 3. 配置 GitHub Pages

1. 进入你的 GitHub 仓库
2. 点击 **Settings** > **Pages**
3. 在 **Source** 下选择 **GitHub Actions**

### 4. 配置自定义域名 yyyxxx.cc

#### 在 DNS 提供商处配置：

添加以下 DNS 记录：

**A 记录（用于根域名）：**
```
类型: A
名称: @
值: 185.199.108.153
值: 185.199.109.153
值: 185.199.110.153
值: 185.199.111.153
```

**CNAME 记录（用于 www 子域名，可选）：**
```
类型: CNAME
名称: www
值: YOUR_USERNAME.github.io
```

#### 在 GitHub 仓库中配置：

1. 进入 **Settings** > **Pages**
2. 在 **Custom domain** 输入框中输入：`yyyxxx.cc`
3. 点击 **Save**
4. 等待 DNS 检查完成
5. 勾选 **Enforce HTTPS**（DNS 生效后）

### 5. 触发部署

推送代码到 `main` 分支会自动触发部署：

```bash
git add .
git commit -m "Update website"
git push
```

也可以在 GitHub 仓库的 **Actions** 选项卡手动触发部署。

## 📁 项目结构

```
/
├── public/
│   └── CNAME              # 自定义域名配置
├── src/
│   └── pages/
│       └── index.astro    # 首页
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions 部署配置
├── astro.config.mjs       # Astro 配置
├── package.json
└── tsconfig.json
```

## 🔧 配置说明

### astro.config.mjs

- `site`: 设置为你的域名 `https://yyyxxx.cc`
- 如果使用非根路径部署，需要设置 `base` 选项

### public/CNAME

包含自定义域名 `yyyxxx.cc`，确保 GitHub Pages 正确配置域名。

## 📚 了解更多

- [Astro 文档](https://docs.astro.build)
- [Astro GitHub Pages 部署指南](https://docs.astro.build/zh-cn/guides/deploy/github/)
- [GitHub Pages 文档](https://docs.github.com/pages)

## ⚠️ 注意事项

1. **DNS 生效时间**：DNS 记录可能需要 24-48 小时才能完全生效
2. **HTTPS 证书**：首次配置自定义域名后，GitHub 需要一些时间来颁发 SSL 证书
3. **仓库名称**：如果你的仓库名是 `<username>.github.io`，则不需要在 `astro.config.mjs` 中设置 `base`
4. **分支名称**：确保工作流配置中的分支名称（`main`）与你的默认分支一致

## 🎨 自定义

你可以编辑 `src/pages/index.astro` 来自定义首页内容和样式。

## 📝 License

MIT
