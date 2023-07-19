// ==UserScript==
// @name         math-expression-runner
// @author       Momo707577045
// @version      0.0.1
// @include      *
// @exclude      https://blog.luckly-mjw.cn/*
// @namespace    https://github.com/Momo707577045/math-expression-runner
// @description  https://github.com/Momo707577045/math-expression-runner 配套插件
// @downloadURL	 https://github.com/Momo707577045/m3u8-downloader/raw/math-expression-runner.user.js
// @updateURL	   https://github.com/Momo707577045/m3u8-downloader/raw/math-expression-runner.user.js
// @grant        none
// @run-at document-start
// ==/UserScript==

(function () {
  'use strict';
  function setIframe() {
    if (document.querySelector('#math-expression-runner')) {
      return
    }
    const iframe = document.createElement('iframe');
    iframe.src = 'https://blog.luckly-mjw.cn/tool-show/math-expression-runner/index.html';
    iframe.id = 'math-expression-runner';
    iframe.style.width = '500px';
    iframe.style.height = '80px';
    iframe.style.border = 'solid 2px #ccc';
    iframe.style.borderRadius = '4px';
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.zIndex = 9999999;
    document?.body?.appendChild(iframe);
  }

  setIframe()
  setInterval(() => {
    setIframe()
  }, 2000)
})();
