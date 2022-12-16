// ==UserScript==
// @name         Aternos Adblock Reborn
// @version      0.2
// @description  Simply tries to remove all Ads from named Site!
// @author       crusty
// @match        https://aternos.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=aternos.org
// @downloadURL  https://github.com/crustySenpai/Aternos-Adblock-Reborn/raw/main/Aternos%20Adblock%20Reborn.user.js
// @updateURL    https://github.com/crustySenpai/Aternos-Adblock-Reborn/raw/main/Aternos%20Adblock%20Reborn.user.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @require      https://gist.githubusercontent.com/BrockA/2625891/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// @grant        none
// ==/UserScript==

(function () {
  ("use strict");
  $("div[id$='adngin-Leaderboard_1-0']").remove();
  $("div[id$='adngin-Leaderboard_1-0']").css("display", "none");
  $("div[id$='adngin-Leaderboard_2-0']").remove();
  $("div[id$='adngin-Leaderboard_2-0']").css("display", "none");
  $("div[id$='adngin-Options_page-0']").remove();
  $("div[id$='adngin-Options_page-0']").css("display", "none");
  $("div[id$='AVplayer0']").remove();
  $("div[id$='AVplayer0']").css("display", "none");
  $("div[id$='av-container']").remove();
  $("div[id$='av-container']").css("display", "none");
  $(".header-exaroton-link").remove();
  $(".header-link-exaroton").remove();
  $(".ad-label-wrapper").remove();
  $(".sidebar").remove();
  $(".server-tutorials").remove();
  $(".responsive-leaderboard").remove();
  $(".responsive-leaderboard").remove();
  waitForKeyElements("[id$='adngin-Leaderboard_Adhesion-0-adhesive']", _0xef80x1);
  waitForKeyElements("[id$='AVplayer0']", _0xef80x1);
  waitForKeyElements("[id$='av-container']", _0xef80x1);
  function _0xef80x1(_0xef80x2) {
    _0xef80x2.remove();
  }
  (function () {
    ("use strict");
    document.body.style.cssText = "auto !important";
    var _0xef80x3 = "/panel/img/logo-white.svg";
    var _0xef80x4 = "https://github.com/crustySenpai/Aternos-Adblock-Reborn/raw/main/logo.png";
    $(document).ready(function () {
      $("img[src='" + _0xef80x3 + "']").attr("src", _0xef80x4);
    })();
  }());
}());
