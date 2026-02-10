export type ProductId = 'floweye' | 'jackproxy' | 'aisql' | 'snowlight';

export type ProductMeta = {
  id: ProductId;
  name: string;
  href: string;
  badgeColor: 'blue' | 'purple' | 'green' | 'amber' | 'orange' | 'cyan';
};

type UpdateSection = { title: string; items: string[] };

export type UpdateEntry = {
  date: string;
  product: ProductId;
  version: string;
  title: string;
  highlights: string[];
  sections?: UpdateSection[];
  links?: { label: string; href: string; external?: boolean }[];
};

const repos = {
  floweye: 'https://github.com/YingxueSec/Floweye-yyyxxx.cc',
};

export const products: ProductMeta[] = [
  { id: 'jackproxy', name: 'JackProxy', href: '/products/jackproxy', badgeColor: 'purple' },
  { id: 'aisql', name: 'Yingxue AiSQL', href: '/products/aisql', badgeColor: 'orange' },
  { id: 'snowlight', name: 'SnowLight', href: '/products/snowlight', badgeColor: 'cyan' },
  { id: 'floweye', name: 'FlowEye', href: '/products/floweye', badgeColor: 'blue' },
];

const updatesRaw = [
  {
    date: '2026-02-10',
    product: 'floweye',
    version: 'v1.6.2',
    title: '稳定性与准确性修复：DNSLog 兼容增强，Spring/DirScan 误报收敛',
    highlights: ['DNSLog 配置兼容性增强（ceye/dnslog.cn）', 'Spring SpEL 双 payload 差异验证，降低误报', 'DirScan 路径拼接与 baseline 策略修复', '新增相关单元测试，`go test ./...` 与 `npm run build` 通过'],
    sections: [
      {
        title: 'DNSLog 配置兼容性增强',
        items: [
          '修复 `ceye.io` 被识别为不支持的问题，`ceye.io` / `ceye` 统一识别为 `ceye`',
          '修复 `dnslog.cn` 被错误要求必须填写 API Key 的问题，当前 API Key 为可选（仅 Domain 即可测试）',
          '统一前后端校验逻辑，避免“前端通过、后端报错”与“前端拦截过严”',
          '新增 provider 规范化存储：`ceye.io` -> `ceye`，`dnslog` -> `dnslog.cn`',
          '设置页文案同步优化，明确不同平台下 API Key 的必填/可选规则',
        ],
      },
      {
        title: 'Spring SpEL 误报修复',
        items: [
          '修复页面仅包含数字或普通回显内容即被判定为 SpEL 注入的问题',
          '检测逻辑升级为双 payload 差异验证：`7*7` 与 `8*8` 对比，并同时校验与 baseline 差异',
          '排除 payload 原样回显场景，减少误报',
          'URL 参数注入改为基于 query 解析，不再使用粗暴字符串替换',
        ],
      },
      {
        title: 'DirScan 敏感路径批量误报修复',
        items: [
          '修复 URL 拼接 `//` 问题，避免触发 Spring Firewall 拒绝页',
          'baseline 缓存粒度由 host 调整为 baseURL，减少分层路径扫描时的基线误匹配',
          '增加对 Spring Whitelabel + `potentially malicious String //` 拒绝页的噪声过滤',
          '修复 `/nacos/v1/auth//...` 等场景下的批量误报',
        ],
      },
      {
        title: '测试与兼容性',
        items: [
          '新增并补充 DNSLog、Spring、DirScan 相关单元测试',
          '`go test ./...` 全量通过，`npm run build` 通过',
          '兼容增强版本，无需手工迁移；历史 DNSLog provider 会在加载/保存时自动规范化',
        ],
      },
      {
        title: '发布资产',
        items: [
          '`floweye-darwin-amd64`',
          '`floweye-darwin-arm64`',
          '`floweye-linux-amd64`',
          '`floweye-windows-amd64.exe`',
          '`floweye-burp-plugin-1.0.0.jar`',
          '`config.example.yaml`',
          '镜像仓库同步附加：`floweye-windows-x86_64.exe`（与 amd64 同架构，命名适配）',
        ],
      },
    ],
    links: [
      { label: 'Releases', href: `${repos.floweye}/releases`, external: true },
      { label: 'GitHub', href: repos.floweye, external: true },
    ],
  },
  {
    date: '2026-01-27',
    product: 'floweye',
    version: 'v1.6.1',
    title: '误报修复版本：更少噪音、更稳定的全量测试',
    highlights: ['目录扫描默认忽略 403 误报', 'Spring4Shell 误报控制', 'ThinkPHP 测试稳定性提升', '`go test ./...` 全量通过'],
    sections: [
      {
        title: '目录扫描（信息泄露/敏感路径）误报',
        items: ['默认不再把 `403 Forbidden` 当作“敏感路径存在”来展示（403 通常代表被 WAF/鉴权拦截）', '如需保留 403 命中：在配置里显式加入 `engines.dirscan.include_status: ...,403`'],
      },
      {
        title: 'Spring4Shell RCE (CVE-2022-22965) 误报',
        items: ['跳过明显静态资源（如 `.txt`）', '提高 Spring 相关证据门槛（响应头/体出现 Spring 绑定/错误特征才继续）', '通过 `invalid` / `verify` 差异校验，降低对无关 URL 的误报'],
      },
      {
        title: '测试稳定性',
        items: ['ThinkPHP 引擎未初始化时不执行扫描，避免测试用例触发网络请求导致超时', '`go test ./...` 全量通过'],
      },
    ],
    links: [
      { label: 'Releases', href: `${repos.floweye}/releases`, external: true },
      { label: 'GitHub', href: repos.floweye, external: true },
    ],
  },
  {
    date: '2026-01-16',
    product: 'floweye',
    version: 'v1.6.0',
    title: 'SQLi/目录扫描增强 & Burp 插件体验升级',
    highlights: ['布尔盲注差异检测', 'DNSLog OOB 带外检测', 'JSON 参数模糊测试', '目录扫描层级遍历 + 智能路径构建', '插件中文汉化 + QPS/连接状态/日志暗色主题'],
    sections: [
      { title: 'SQL 注入检测增强', items: ['布尔盲注差异检测（响应对比）', 'DNSLog OOB 带外检测（Ceye/Dnslog.cn 等）', 'JSON 参数模糊测试（自动解析 JSON 请求体）'] },
      { title: '目录扫描增强', items: ['层级遍历：`hierarchical_scan` / `max_path_depth`', '智能路径构建：按 URL 路径逐层扫描'] },
      { title: 'Burp 插件优化', items: ['全量中文汉化', 'QPS 实时统计', '连接状态动画', '日志深色主题', '作者信息展示：映雪安全 | yyyxxx.cc'] },
      { title: '测试覆盖', items: ['新增 68 个单元测试用例', '覆盖主要扫描引擎关键路径'] },
    ],
    links: [
      { label: 'Releases', href: `${repos.floweye}/releases`, external: true },
      { label: 'GitHub', href: repos.floweye, external: true },
    ],
  },
  {
    date: '2026-01-14',
    product: 'floweye',
    version: 'v1.5.0',
    title: '新增 4 个漏洞检测引擎（引擎总数：17）',
    highlights: ['Solr / Tomcat / Jira / Laravel 引擎', '覆盖多个典型漏洞与常见误配置'],
    sections: [
      { title: '新增引擎', items: ['Solr：Velocity RCE / SSRF / 未授权', 'Tomcat：AJP Ghostcat / Manager 弱口令 / PUT 上传', 'Jira：模板注入 / SSRF / 用户枚举', 'Laravel：Ignition RCE / .env 泄露 / Telescope 暴露'] },
    ],
    links: [{ label: 'Releases', href: `${repos.floweye}/releases`, external: true }],
  },
  {
    date: '2026-01-13',
    product: 'floweye',
    version: 'v1.4.0',
    title: '新增 Weblogic/Spring/Jenkins/ThinkPHP 引擎与指纹规则',
    highlights: ['新增 4 个重点框架引擎', '补齐 Console/Actuator/CLI 等指纹识别'],
    sections: [
      { title: '新增引擎', items: ['Weblogic：T3/IIOP 反序列化与 Console 暴露', 'Spring：Spring4Shell / SpEL / Actuator 风险面', 'Jenkins：任意文件读取 / Script Console / 未授权', 'ThinkPHP：5.x 多版本 RCE 与周边风险'] },
      { title: '新增指纹规则', items: ['Weblogic（Console/WSAT/T3）', 'Jenkins（Script/CLI/API）', 'SpringBoot（Actuator/Whitelabel）'] },
    ],
  },
  {
    date: '2026-01-12',
    product: 'floweye',
    version: 'v1.3.0',
    title: 'Fastjson 反序列化漏洞检测引擎',
    highlights: ['覆盖 1.2.24–1.2.83', '多变体 Payload 适配不同绕过思路', '自动识别 JSON 请求触发检测'],
  },
  {
    date: '2026-01-11',
    product: 'floweye',
    version: 'v1.2.0',
    title: '指纹识别引擎上线（1000+ 规则）',
    highlights: ['YAML 规则格式', 'Favicon Hash（MMH3）', '智能调度：按指纹选择引擎', '新增指纹展示页面'],
  },
  {
    date: '2026-01-10',
    product: 'floweye',
    version: 'v0.1.0',
    title: '首发版本：嵌入式被动扫描平台',
    highlights: ['零配置启动', 'UI/字典/规则全部内置', '多引擎检测 + WebSocket 实时推送', '漏洞去重 + Webhook 告警'],
  },
  {
    date: '2025-12-18',
    product: 'jackproxy',
    version: 'v2.0',
    title: '稳定版发布：代理池可视化与轮换策略升级',
    highlights: ['轮换策略升级：按时间/请求次数/失败率', '实时健康检查与自动剔除', '更现代的 UI 与深色模式体验', '常用工具更友好的代理输出'],
    sections: [
      { title: '核心升级', items: ['代理轮换策略与容错增强', '实时状态监控与失效剔除', '更快的列表检索与筛选'] },
    ],
    links: [{ label: '产品页', href: '/products/jackproxy' }],
  },
  {
    date: '2025-10-29',
    product: 'jackproxy',
    version: 'v1.9',
    title: '监控告警与稳定性增强',
    highlights: ['监控维度扩展：可用率/延迟/失败率', '批量导入与代理分组', '关键路径性能优化'],
  },
  {
    date: '2025-08-16',
    product: 'jackproxy',
    version: 'v1.8',
    title: '一键启动体验与多协议兼容提升',
    highlights: ['启动流程简化', 'HTTP/HTTPS/SOCKS5 兼容性提升', '更易用的参数与默认配置'],
  },
  {
    date: '2025-06-22',
    product: 'jackproxy',
    version: 'v1.7',
    title: '代理质量控制与去重策略优化',
    highlights: ['智能去重与黑名单', '更稳的并发调度', '记录导出与基础审计能力'],
  },
  {
    date: '2025-04-12',
    product: 'jackproxy',
    version: 'v1.5',
    title: '早期版本：基础代理池能力成型',
    highlights: ['基础代理池管理', '轮换与基础健康检测', '面向安全测试场景的可用性优化'],
  },
  {
    date: '2025-12-06',
    product: 'aisql',
    version: 'v1.0',
    title: '稳定版：AI 驱动的 SQL 注入自动化检测',
    highlights: ['全流程自动化：识别/验证/利用', '现代化 Web 界面与报告输出', '常见注入类型覆盖与误报控制'],
    links: [{ label: '产品页', href: '/products/aisql' }],
  },
  {
    date: '2025-10-08',
    product: 'aisql',
    version: 'v0.9',
    title: 'Beta：提示工程与自动化链路完善',
    highlights: ['AI 提示模板迭代', '自动化链路更稳定', '更清晰的结果聚合与复测'],
  },
  {
    date: '2025-08-19',
    product: 'aisql',
    version: 'v0.6',
    title: 'Alpha：核心检测链路打通',
    highlights: ['基础注入识别与验证', '任务队列与结果面板雏形', '工程化落地与可用性打磨'],
  },
  {
    date: '2025-12-29',
    product: 'snowlight',
    version: 'Milestone 03',
    title: '开发预览：控制面板与通信模块迭代',
    highlights: ['核心通信模块稳定性提升', '基础控制面板雏形', '对抗方向的工程化优化（合规前提）'],
    links: [{ label: '产品页', href: '/products/snowlight' }],
  },
  {
    date: '2025-11-06',
    product: 'snowlight',
    version: 'Milestone 02',
    title: '核心模块完善与构建体系优化',
    highlights: ['模块化重构', '构建/打包流程优化', '开发预览与内部测试推进'],
  },
  {
    date: '2025-10-02',
    product: 'snowlight',
    version: 'Milestone 01',
    title: '项目立项：Rust 原生框架方向确定',
    highlights: ['Rust 原生开发路线', '基础协议与架构设计', '持续开发中（测试版筹备）'],
  },
] satisfies UpdateEntry[];

export const updates = [...updatesRaw].sort((a, b) => (a.date < b.date ? 1 : -1));
