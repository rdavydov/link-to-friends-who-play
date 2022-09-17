// ==UserScript==
// @name        Link to "friends who play" on the deleted games' pages
// @match       https://steamcommunity.com/app/*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=steampowered.com
// @author      rdavydov
// @description Adds a link to "friends who play" page on the deleted games' pages. Works only when your Steam is in English.
// @license MIT
// @version 0.0.1.20220916191430
// @namespace https://greasyfork.org/users/952134
// ==/UserScript==

// var instead of let because violentmonkey throws warnings :)

var appID = document.URL.match('/\/.+\/app/([0-9]+)')[1];

var reviews = '<span>Reviews</span>';
var anchors = document.getElementsByClassName('apphub_sectionTab');

for (i = 0; i < anchors.length; i++)
{
    if (anchors[i].innerHTML == reviews)
    { 
        var friends = document.createElement('a');
        friends.href      = 'https://steamcommunity.com/id/me/friendsthatplay/' + appID;
        friends.innerHTML = 'Friends';
        friends.className = 'apphub_sectionTab';
        anchors[i].parentNode.insertBefore(friends, anchors[i].nextSibling);

    }
}
