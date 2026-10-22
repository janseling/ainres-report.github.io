/* AI 情报日报 · 全站统计加载器
 * 接入：百度统计（hm.baidu.com）+ Google Analytics 4（gtag.js)
 * ID 在下方填写，留 '' = 该渠道关闭；改 ID 后把各页引用的 ?v=1 版本号 +1 破缓存。
 * 引用方式（各页 <head> 内）：<script defer src="/analytics.js?v=2"></script>
 * 测试通道：URL 追加 &__baid=xxx&__ga=G-TEST 可临时覆盖 ID（上线冒烟用）。
 */
(function () {
  'use strict';
  var BAIDU_ID = '23624891';  // 百度统计 siteId（tongji.baidu.com 代码获取里 hm.js? 后面那串）
  var GA_ID = 'G-9VZH66Z6EH';     // GA4 衡量 ID，G- 开头（analytics.google.com → 数据流）
  try {
    var qs = new URLSearchParams(location.search);
    if (qs.get('__baid')) BAIDU_ID = qs.get('__baid');
    if (qs.get('__ga')) GA_ID = qs.get('__ga');
  } catch (e) { /* URLSearchParams 不可用时忽略，走默认 ID */ }
  if (BAIDU_ID) {
    window._hmt = window._hmt || [];
    var hm = document.createElement('script');
    hm.async = true;
    hm.src = 'https://hm.baidu.com/hm.js?' + BAIDU_ID;
    (document.head || document.documentElement).appendChild(hm);
  }
  if (GA_ID) {
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = window.gtag || gtag;
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
    var g = document.createElement('script');
    g.async = true;
    g.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
    (document.head || document.documentElement).appendChild(g);
  }
})();