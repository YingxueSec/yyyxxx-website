# 部署指南：将 Astro 网站部署到 GitHub Pages 并绑定域名 yyyxxx.cc

## 📋 前置要求

- GitHub 账号
- Git 已安装
- Node.js 18+ 已安装
- 域名 yyyxxx.cc 的 DNS 管理权限

## 🚀 部署步骤

### 第一步：安装依赖并测试

```bash
cd /Users/admin/Documents/yyyxxx
npm install
npm run dev
```

访问 `http://localhost:4321` 确认网站正常运行。

### 第二步：创建 GitHub 仓库

1. 访问 https://github.com/new
2. 创建新仓库（建议命名为 `yyyxxx-website` 或 `<你的用户名>.github.io`）
3. **不要**初始化 README、.gitignore 或 license（我们已经有了）

### 第三步：推送代码到 GitHub

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Astro website for yyyxxx.cc"

# 设置主分支名称
git branch -M main

# 添加远程仓库（替换 YOUR_USERNAME 和 YOUR_REPO）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 推送到 GitHub
git push -u origin main
```

### 第四步：配置 GitHub Pages

1. 进入你的 GitHub 仓库页面
2. 点击 **Settings**（设置）
3. 在左侧菜单中点击 **Pages**
4. 在 **Source** 部分，选择 **GitHub Actions**
5. 保存设置

此时，GitHub Actions 会自动开始构建和部署你的网站。

### 第五步：配置 DNS（域名解析）

登录你的域名注册商或 DNS 服务提供商（例如：阿里云、腾讯云、Cloudflare 等），添加以下 DNS 记录：

#### 方案 A：使用 A 记录（推荐）

添加 4 条 A 记录指向 GitHub Pages 的 IP 地址：

| 类型 | 名称/主机记录 | 值/记录值 | TTL |
|------|--------------|----------|-----|
| A    | @            | 185.199.108.153 | 600 |
| A    | @            | 185.199.109.153 | 600 |
| A    | @            | 185.199.110.153 | 600 |
| A    | @            | 185.199.111.153 | 600 |

#### 方案 B：同时支持 www 子域名（可选）

添加 CNAME 记录：

| 类型  | 名称/主机记录 | 值/记录值 | TTL |
|-------|--------------|----------|-----|
| CNAME | www          | YOUR_USERNAME.github.io | 600 |

**注意**：将 `YOUR_USERNAME` 替换为你的 GitHub 用户名。

### 第六步：在 GitHub 配置自定义域名

1. 回到 GitHub 仓库的 **Settings** > **Pages**
2. 在 **Custom domain** 输入框中输入：`yyyxxx.cc`
3. 点击 **Save** 按钮
4. 等待 DNS 检查（可能需要几分钟到几小时）
5. DNS 检查通过后，勾选 **Enforce HTTPS** 选项

### 第七步：验证部署

1. 访问 https://yyyxxx.cc 查看你的网站
2. 检查 HTTPS 是否正常工作
3. 在 GitHub 仓库的 **Actions** 选项卡查看部署状态

## 🔄 后续更新

每次修改代码后，只需：

```bash
git add .
git commit -m "描述你的修改"
git push
```

GitHub Actions 会自动重新构建和部署。

## ⚠️ 常见问题

### 1. DNS 未生效

**问题**：访问域名显示"无法访问此网站"或"DNS_PROBE_FINISHED_NXDOMAIN"

**解决方案**：
- DNS 记录可能需要 24-48 小时才能完全生效
- 使用 `dig yyyxxx.cc` 或在线工具检查 DNS 是否正确配置
- 清除浏览器缓存和 DNS 缓存

### 2. GitHub Pages 显示 404

**问题**：访问域名显示 GitHub 的 404 页面

**解决方案**：
- 确认 `public/CNAME` 文件包含正确的域名
- 检查 GitHub Pages 设置中的自定义域名是否正确
- 等待几分钟让 GitHub 重新部署

### 3. HTTPS 证书错误

**问题**：浏览器显示"不安全"或证书错误

**解决方案**：
- GitHub 需要一些时间（最多 24 小时）来颁发 SSL 证书
- 确保 DNS 已正确配置并生效
- 在 GitHub Pages 设置中取消勾选再重新勾选 **Enforce HTTPS**

### 4. 构建失败

**问题**：GitHub Actions 显示红色 ❌

**解决方案**：
- 查看 Actions 日志了解具体错误
- 确保本地 `npm run build` 可以成功运行
- 检查 `package.json` 中的依赖版本

### 5. 仓库名称是 `<username>.github.io`

**问题**：如果你的仓库名称是 `<username>.github.io`

**解决方案**：
- 在 `astro.config.mjs` 中**不需要**设置 `base` 选项
- 网站会直接部署到根路径

### 6. 仓库名称不是 `<username>.github.io`

**问题**：如果你的仓库名称是其他名称（如 `yyyxxx-website`）

**解决方案**：
- 如果使用自定义域名 `yyyxxx.cc`，**不需要**设置 `base`
- 如果不使用自定义域名，需要在 `astro.config.mjs` 中设置：
  ```js
  export default defineConfig({
    site: 'https://YOUR_USERNAME.github.io',
    base: '/YOUR_REPO',
  });
  ```

## 🔍 检查清单

部署前确认：

- [ ] 已安装依赖 (`npm install`)
- [ ] 本地构建成功 (`npm run build`)
- [ ] 代码已推送到 GitHub
- [ ] GitHub Pages 设置为 **GitHub Actions**
- [ ] DNS A 记录已添加
- [ ] `public/CNAME` 文件包含 `yyyxxx.cc`
- [ ] GitHub Pages 自定义域名设置为 `yyyxxx.cc`
- [ ] DNS 检查通过
- [ ] HTTPS 已启用

## 📞 获取帮助

- [Astro Discord](https://astro.build/chat)
- [GitHub Pages 文档](https://docs.github.com/pages)
- [Astro 部署文档](https://docs.astro.build/zh-cn/guides/deploy/github/)

## 🎉 完成

恭喜！你的网站现在应该可以通过 https://yyyxxx.cc 访问了。
