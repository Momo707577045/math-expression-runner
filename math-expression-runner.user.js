// ==UserScript==
// @name         math-expression-runner
// @author       Momo707577045
// @version      0.0.1
// @include      *
// @exclude      http://blog.luckly-mjw.cn/*
// @exclude      https://blog.luckly-mjw.cn/*
// @namespace    https://github.com/Momo707577045/math-expression-runner
// @description  https://github.com/Momo707577045/math-expression-runner 配套插件
// @downloadURL	 https://blog.luckly-mjw.cn/tool-show/math-expression-runner/math-expression-runner.user.js
// @updateURL	   https://blog.luckly-mjw.cn/tool-show/math-expression-runner/math-expression-runner.user.js
// @grant        GM_registerMenuCommand
// @run-at document-start
// ==/UserScript==

(function () {
  'use strict';
  GM_registerMenuCommand("开启/关闭", function () {
    if (document.querySelector('#math-expression-runner')) {
      document.querySelector('#math-expression-runner')?.remove();
      document.querySelector('#math-expression-runner-close')?.remove();
    } else {
      setIframe()
    }
  });
  function setIframe() {
    if (document.querySelector('#math-expression-runner')) {
      return
    }

    const iframe = document.createElement('iframe');
    iframe.src = 'https://blog.luckly-mjw.cn/tool-show/math-expression-runner/index.html';
    iframe.id = 'math-expression-runner';
    iframe.style.width = '440px';
    iframe.style.height = '94px';
    iframe.style.border = 'solid 1px #ccc';
    iframe.style.borderRadius = '4px';
    iframe.style.position = 'fixed';
    iframe.style.right = 0;
    iframe.style.bottom = 0;
    iframe.style.zIndex = 9999998;
    document?.body?.appendChild(iframe);

    const div = document.createElement('div');
    div.id = 'math-expression-runner-close';
    div.style.position = 'fixed';
    div.style.width = '44px';
    div.style.height = '20px';
    div.style.right = 0;
    div.style.bottom = '70px';
    div.style.zIndex = 9999999;
    div.style.backgroundColor = 'transparent';
    document?.body?.appendChild(div);
    div.addEventListener('click', () => {
      div.remove();
      iframe.remove();
    })
  }
})();
