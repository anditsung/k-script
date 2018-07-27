// ==UserScript==
// @name         KASKUS SCRIPT
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  SCRIPT FOR KASKUS ONLY
// @author       ANDITSUNG
// @match        https://www.kaskus.co.id/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // remove postlist comment
    [].forEach.call(document.querySelectorAll('.postlist__comment'), function (el) {
        el.style.display = 'none';
    });

})();