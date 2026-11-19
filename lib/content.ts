// 站点配置与文案。改品牌名、接口地址、支持的模型，只需要改这个文件。
// Site config and copy. Edit this file to change brand, endpoint or model list.

export const site = {
  brand: "TokenHub",
  domain: "yzjstudio.com",
  // 网关上线后改成真实地址 / replace with the real gateway endpoint once it is live
  apiBaseUrl: "https://api.yzjstudio.com/v1",
  exampleModel: "claude-sonnet-4-5",
  keyEnv: "TOKENHUB_API_KEY",
};

export type Locale = "zh" | "en";

type Feature = { title: string; body: string };
type Step = { title: string; body: string };
type ModelRow = { family: string; vendor: string; protocol: string };

export type Copy = {
  locale: Locale;
  htmlLang: string;
  meta: { title: string; description: string };
  nav: { features: string; quickstart: string; models: string; switchLabel: string; switchHref: string };
  hero: { title: string; lead: string; primary: string; secondary: string; baseUrlLabel: string };
  diagram: {
    caption: string;
    app: string;
    key: string;
    gateway: string;
    primary: string;
    backup: string;
    timeout: string;
    ok: string;
    other: string[];
  };
  quickstart: { title: string; lead: string; copy: string; copied: string; note: string };
  features: { title: string; lead: string; items: Feature[] };
  steps: { title: string; items: Step[] };
  models: {
    title: string;
    lead: string;
    head: [string, string, string];
    rows: ModelRow[];
    note: string;
  };
  closing: { title: string; body: string; action: string };
  footer: { line: string; top: string };
};

export const copy: Record<Locale, Copy> = {
  zh: {
    locale: "zh",
    htmlLang: "zh-CN",
    meta: {
      title: "TokenHub｜大模型 API 统一网关",
      description:
        "一个域名、一把密钥，接入 Claude、GPT、Gemini 等主流大模型。自动故障切换，用量和费用一目了然。",
    },
    nav: {
      features: "功能",
      quickstart: "接入",
      models: "模型",
      switchLabel: "English",
      switchHref: "/en",
    },
    hero: {
      title: "一把密钥，调用所有大模型",
      lead: "把 base URL 换成我们的地址，现有代码不用改。上游渠道出问题时，请求会自动切到备用线路。",
      primary: "查看接入方式",
      secondary: "支持的模型",
      baseUrlLabel: "接口地址",
    },
    diagram: {
      caption: "一次请求的路由过程：主渠道超时后，自动切换到备用渠道并返回结果。",
      app: "你的应用",
      key: "1 把密钥",
      gateway: "网关",
      primary: "Claude 主渠道",
      backup: "Claude 备用渠道",
      timeout: "超时",
      ok: "200 OK",
      other: ["GPT 渠道", "Gemini 渠道"],
    },
    quickstart: {
      title: "改一行地址就能接入",
      lead: "接口与 OpenAI 格式兼容，官方 SDK 可以直接使用。",
      copy: "复制",
      copied: "已复制",
      note: "把密钥放在环境变量里，不要写进代码仓库。",
    },
    features: {
      title: "团队用得上的四件事",
      lead: "网关站在你的应用和模型厂商之间，接管路由、限额和账单。",
      items: [
        {
          title: "统一入口",
          body: "所有模型共用一个域名和一把密钥。换模型只改 model 参数，不用再对接新的 SDK。",
        },
        {
          title: "故障自动切换",
          body: "按渠道的健康状态、延迟和价格选路。某条线路超时或限流时，请求转到下一条，调用方无感知。",
        },
        {
          title: "用量与费用可见",
          body: "按密钥、模型、时间查看调用量、错误率和花费。给每把密钥设置额度，超出即停。",
        },
        {
          title: "为开发者设计",
          body: "兼容 OpenAI 接口格式，支持流式输出。现有的工具链、Agent 框架和编辑器插件可以直接指向网关。",
        },
      ],
    },
    steps: {
      title: "三步上线",
      items: [
        { title: "创建密钥", body: "生成一把 API 密钥，按项目或成员设置额度和可用模型。" },
        { title: "替换地址", body: "把 SDK 的 base URL 指向网关，其余代码保持不变。" },
        { title: "观察与调整", body: "在面板里看调用趋势和失败率，按需要调整额度和路由策略。" },
      ],
    },
    models: {
      title: "支持的模型",
      lead: "同一套协议覆盖主流模型家族，新模型发布后陆续接入。",
      head: ["模型家族", "厂商", "接口格式"],
      rows: [
        { family: "Claude", vendor: "Anthropic", protocol: "OpenAI 兼容 / Anthropic 原生" },
        { family: "GPT", vendor: "OpenAI", protocol: "OpenAI 兼容" },
        { family: "Gemini", vendor: "Google", protocol: "OpenAI 兼容" },
        { family: "DeepSeek", vendor: "DeepSeek", protocol: "OpenAI 兼容" },
      ],
      note: "各商标归其所有者所有。TokenHub 是独立服务，与上述厂商无隶属关系。",
    },
    closing: {
      title: "从下一次请求开始用网关",
      body: "不需要迁移，不需要重写。改一行地址，先在一个项目里试。",
      action: "查看接入方式",
    },
    footer: { line: "大模型 API 统一网关", top: "回到顶部" },
  },
  en: {
    locale: "en",
    htmlLang: "en",
    meta: {
      title: "TokenHub | One gateway for every LLM API",
      description:
        "One domain and one key for Claude, GPT, Gemini and more. Automatic failover, with usage and spend in one place.",
    },
    nav: {
      features: "Features",
      quickstart: "Quickstart",
      models: "Models",
      switchLabel: "中文",
      switchHref: "/",
    },
    hero: {
      title: "One key for every large model",
      lead: "Point your base URL at the gateway and keep the code you have. When an upstream channel fails, requests move to a backup route on their own.",
      primary: "See how to connect",
      secondary: "Supported models",
      baseUrlLabel: "Endpoint",
    },
    diagram: {
      caption: "How one request is routed: the primary channel times out, the gateway switches to the backup and returns the result.",
      app: "Your app",
      key: "1 key",
      gateway: "Gateway",
      primary: "Claude primary",
      backup: "Claude backup",
      timeout: "Timeout",
      ok: "200 OK",
      other: ["GPT channel", "Gemini channel"],
    },
    quickstart: {
      title: "Change one line to connect",
      lead: "The API follows the OpenAI format, so the official SDKs work as they are.",
      copy: "Copy",
      copied: "Copied",
      note: "Keep the key in an environment variable, not in your repository.",
    },
    features: {
      title: "Four things teams need",
      lead: "The gateway sits between your app and the model vendors and takes over routing, quotas and billing.",
      items: [
        {
          title: "One entry point",
          body: "Every model shares one domain and one key. Switching models means changing the model parameter, not wiring up another SDK.",
        },
        {
          title: "Automatic failover",
          body: "Routes are picked by channel health, latency and price. When one times out or is rate limited, the request moves to the next and the caller never notices.",
        },
        {
          title: "Usage and spend in view",
          body: "See calls, error rates and cost by key, model and time. Give each key a quota that stops requests when it runs out.",
        },
        {
          title: "Built for developers",
          body: "OpenAI-compatible with streaming. Your existing toolchain, agent frameworks and editor plugins can point straight at the gateway.",
        },
      ],
    },
    steps: {
      title: "Live in three steps",
      items: [
        { title: "Create a key", body: "Generate an API key and set its quota and allowed models per project or teammate." },
        { title: "Swap the URL", body: "Point your SDK's base URL at the gateway. Leave the rest of the code alone." },
        { title: "Watch and adjust", body: "Follow call trends and failure rates on the dashboard, then tune quotas and routing." },
      ],
    },
    models: {
      title: "Supported models",
      lead: "One protocol covers the main model families. New releases are added as they ship.",
      head: ["Model family", "Vendor", "API format"],
      rows: [
        { family: "Claude", vendor: "Anthropic", protocol: "OpenAI-compatible / Anthropic native" },
        { family: "GPT", vendor: "OpenAI", protocol: "OpenAI-compatible" },
        { family: "Gemini", vendor: "Google", protocol: "OpenAI-compatible" },
        { family: "DeepSeek", vendor: "DeepSeek", protocol: "OpenAI-compatible" },
      ],
      note: "Trademarks belong to their owners. TokenHub is an independent service and is not affiliated with these vendors.",
    },
    closing: {
      title: "Route your next request through the gateway",
      body: "No migration and no rewrite. Change one line and try it on a single project first.",
      action: "See how to connect",
    },
    footer: { line: "One gateway for every LLM API", top: "Back to top" },
  },
};

export function codeSamples() {
  const { apiBaseUrl, exampleModel, keyEnv } = site;
  return [
    {
      id: "curl",
      label: "cURL",
      code: `curl ${apiBaseUrl}/chat/completions \\
  -H "Authorization: Bearer $${keyEnv}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${exampleModel}",
    "messages": [{"role": "user", "content": "Hello"}]
  }'`,
    },
    {
      id: "python",
      label: "Python",
      code: `import os
from openai import OpenAI

client = OpenAI(
    base_url="${apiBaseUrl}",
    api_key=os.environ["${keyEnv}"],
)

reply = client.chat.completions.create(
    model="${exampleModel}",
    messages=[{"role": "user", "content": "Hello"}],
)
print(reply.choices[0].message.content)`,
    },
    {
      id: "node",
      label: "Node.js",
      code: `import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "${apiBaseUrl}",
  apiKey: process.env.${keyEnv},
});

const reply = await client.chat.completions.create({
  model: "${exampleModel}",
  messages: [{ role: "user", content: "Hello" }],
});
console.log(reply.choices[0].message.content);`,
    },
  ];
}
