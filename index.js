// ==UserScript==
// @name         四方坪职院学术重定向
// @namespace    https://example.com
// @version      1.1
// @license      MPL-2.0
// @description  通过重定向至图书馆包库，解锁期刊访问权限
// @author       https://github.com/cyan-io
// @homepage     https://github.com/cyan-io
// @match        https://ieeexplore.ieee.org/*
// @match        https://dl.acm.org/*
// @match        https://auth.elsevier.com/*
// @match        https://www.sciencedirect.com/*
// @match        https://www.emerald.com/*
// @match        https://ieeexplore.ieee.org/*
// @match        https://www.webofknowledge.com/*
// @match        https://bg.sunwayinfo.com.cn/*
// @match        https://arxiv.org/*
// @match        https://navi.ion.org/*
// @match        https://thesis.library.caltech.edu/*
// @match        https://www.nature.com/*
// @icon         https://library.nudt.edu.cn/favicon.ico
// @downloadURL https://update.greasyfork.org/scripts/509010/%E5%9B%9B%E6%96%B9%E5%9D%AA%E8%81%8C%E9%99%A2%E5%AD%A6%E6%9C%AF%E9%87%8D%E5%AE%9A%E5%90%91.user.js
// @updateURL https://update.greasyfork.org/scripts/509010/%E5%9B%9B%E6%96%B9%E5%9D%AA%E8%81%8C%E9%99%A2%E5%AD%A6%E6%9C%AF%E9%87%8D%E5%AE%9A%E5%90%91.meta.js
// ==/UserScript==

(function () {
    'use strict';

    let regex = /https?:\/\/([^\/]+)\/(.*)/i;
    let match = window.location.href.match(regex);

    console.log('Debug <match>', match);

    if (match) {
        let domain = match[1];
        let path = match[2];

        let redirectUrl = 'https://'+domain.replace(/\./g, "-")+'-s.libyc.nudt.edu.cn/' + path;

        console.log('Debug <url>',redirectUrl);

        let button = document.createElement('button');
        button.innerHTML = '🔗' + redirectUrl;
        button.style.position = 'fixed';
        button.style.bottom = '20px';
        button.style.right = '20px';
        button.style.zIndex = '9999';
        button.style.backgroundColor = '#FFFFFF';
        button.style.border = '2px solid black';
        button.style.borderRadius = '5px';
        button.style.padding = '5px 10px';
        button.addEventListener('click', function () {
            window.open(redirectUrl, "_blank");
        });
        document.body.appendChild(button);
    }
})();
