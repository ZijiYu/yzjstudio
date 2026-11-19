import type { Locale } from "./content";

export type AuthCopy = {
  base: string;
  signup: { title: string; lead: string; submit: string; pending: string; switchText: string; switchLink: string };
  login: { title: string; lead: string; submit: string; pending: string; switchText: string; switchLink: string };
  fields: { email: string; password: string; passwordHint: string };
  sent: { title: string; body: (email: string) => string };
  account: { title: string; signedInAs: string; keys: string; keysBody: string; signOut: string };
  nav: { login: string; signup: string; account: string };
  errors: Record<
    "notConfigured" | "invalidEmail" | "shortPassword" | "badLogin" | "unconfirmed" | "rateLimit" | "badLink" | "generic",
    string
  >;
};

export const authCopy: Record<Locale, AuthCopy> = {
  zh: {
    base: "",
    signup: {
      title: "注册账号",
      lead: "用邮箱注册，验证后即可登录。",
      submit: "注册",
      pending: "正在注册…",
      switchText: "已经有账号？",
      switchLink: "登录",
    },
    login: {
      title: "登录",
      lead: "用注册时的邮箱和密码登录。",
      submit: "登录",
      pending: "正在登录…",
      switchText: "还没有账号？",
      switchLink: "注册",
    },
    fields: { email: "邮箱", password: "密码", passwordHint: "至少 8 位" },
    sent: {
      title: "去邮箱完成验证",
      body: (email) => `验证邮件已发到 ${email}。点开邮件里的链接后，账号就可以登录了。没收到的话，先看看垃圾邮件箱。`,
    },
    account: {
      title: "我的账户",
      signedInAs: "当前登录邮箱",
      keys: "API 密钥",
      keysBody: "密钥管理还没有开放。开放后可以在这里创建和停用密钥。",
      signOut: "退出登录",
    },
    nav: { login: "登录", signup: "注册", account: "我的账户" },
    errors: {
      notConfigured: "注册功能还没有开放，请稍后再试。",
      invalidEmail: "邮箱格式不对，请检查后重新输入。",
      shortPassword: "密码至少需要 8 位。",
      badLogin: "邮箱或密码不正确。",
      unconfirmed: "这个邮箱还没有验证。请先点开验证邮件里的链接。",
      rateLimit: "操作太频繁，请过几分钟再试。",
      badLink: "验证链接已失效或已被使用。请重新登录，或再注册一次获取新链接。",
      generic: "请求没有成功，请稍后再试。",
    },
  },
  en: {
    base: "/en",
    signup: {
      title: "Create an account",
      lead: "Sign up with your email. You can log in once it is verified.",
      submit: "Sign up",
      pending: "Signing up…",
      switchText: "Already have an account?",
      switchLink: "Log in",
    },
    login: {
      title: "Log in",
      lead: "Use the email and password you signed up with.",
      submit: "Log in",
      pending: "Logging in…",
      switchText: "No account yet?",
      switchLink: "Sign up",
    },
    fields: { email: "Email", password: "Password", passwordHint: "At least 8 characters" },
    sent: {
      title: "Verify your email",
      body: (email) =>
        `We sent a verification email to ${email}. Open the link in it and your account is ready to log in. If it has not arrived, check your spam folder.`,
    },
    account: {
      title: "My account",
      signedInAs: "Signed in as",
      keys: "API keys",
      keysBody: "Key management is not open yet. You will be able to create and revoke keys here.",
      signOut: "Sign out",
    },
    nav: { login: "Log in", signup: "Sign up", account: "My account" },
    errors: {
      notConfigured: "Sign-up is not open yet. Try again later.",
      invalidEmail: "That email address does not look right. Check it and try again.",
      shortPassword: "The password needs at least 8 characters.",
      badLogin: "Wrong email or password.",
      unconfirmed: "This email is not verified yet. Open the link in the verification email first.",
      rateLimit: "Too many attempts. Try again in a few minutes.",
      badLink: "This verification link has expired or was already used. Log in, or sign up again for a new link.",
      generic: "The request did not go through. Try again later.",
    },
  },
};
