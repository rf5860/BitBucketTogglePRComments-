// ==UserScript==
// @name         HideCommented
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add button to hide Commented Pull Requests
// @author       rjf
// @match        https://bitbucket.org/fcbtech/enablehr/pull-requests/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var addHideComments = function() {
        var reviewSelf = $('#pr-reviewer-self-filter');
        var hideComments = reviewSelf.clone();
        hideComments.text('Toggle comments').attr('id', 'btn-toggle-comments');
        hideComments.click(function() {
            var commented =  $('.aui-iconfont-comment').parent().parent().parent();
            commented.toggle();
        });
        reviewSelf.after(hideComments);
    };
    setTimeout(addHideComments, 1000);
})();
