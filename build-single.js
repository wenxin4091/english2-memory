const fs = require("fs");
const dir = __dirname;
const read = (f) => fs.readFileSync(dir + "/" + f, "utf8");
const wrap = (s) => s.replace(/<\/script/gi, "<\\/script");

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=1">
  <meta name="theme-color" content="#0e1116">
  <meta name="color-scheme" content="dark">
  <meta name="format-detection" content="telephone=no">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="英语二六件套">
  <meta name="description" content="考研英语二高频抓分：核心词汇、高频搭配、长难句拆解、写作句式、阅读同义替换、考点全表">
  <meta property="og:title" content="英语二六件套">
  <meta property="og:description" content="考研英语二 · 高频抓分记忆">
  <meta itemprop="name" content="英语二六件套">
  <meta itemprop="description" content="考研英语二 · 高频抓分记忆">
  <title>英语二六件套</title>
  <style>
${read("vendor/katex.min.css")}
${read("style.css")}
  </style>
  <script>
    (function () {
      var ua = navigator.userAgent || "";
      if (/MicroMessenger/i.test(ua)) document.documentElement.classList.add("is-wechat");
      if (/iPhone|iPad|iPod/i.test(ua)) document.documentElement.classList.add("is-ios");
    })();
  </script>
</head>
<body>
  <div id="app"><p class="boot-msg">正在打开英语二六件套…</p></div>
  <script>${wrap(read("vendor/katex.min.js"))}</script>
  <script>${wrap(read("data.js"))}</script>
  <script>${wrap(read("app.js"))}</script>
</body>
</html>
`;

const out = dir + "/英语二六件套.html";
fs.writeFileSync(out, html);
console.log("wrote", out, fs.statSync(out).size, "bytes");
