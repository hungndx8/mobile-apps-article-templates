!function(){"use strict";function e(e){GU.opts=e,GU.opts.skipStyle||t(),o(),window.applyNativeFunctionCall=r,"complete"===document.readyState?n():window.addEventListener("DOMContentLoaded",n)}function t(){var e="assets/css/style-async.css",t=GU.opts.templatesDirectory,n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=t+e,document.getElementsByTagName("head")[0].appendChild(n)}function n(){window.requestAnimationFrame(i)}function i(){var e=document.createElement("script"),t=GU.opts.templatesDirectory;e.setAttribute("src",t+"assets/build/components/require.js"),e.setAttribute("id","gu"),e.setAttribute("data-js-dir",t+"assets/build"),e.setAttribute("data-main",t+"assets/build/main.js"),e.async=!0,document.head.appendChild(e)}function o(){Array.prototype.forEach.call(l,a)}function a(e){var t;window[e]=function(){t=e+"Queue",window[t]=window[t]||[],window[t].push(arguments)}}function r(e){var t=window[e+"Queue"];t&&Array.prototype.forEach.call(t,function(t){window[e].apply(this,t)})}function s(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t){var n=(new Date).getTime(),i=Math.max(0,16-(n-e)),o=window.setTimeout(function(){t(n+i)},i);return e=n+i,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}var l=["articleCommentsInserter","articleCardsInserter","articleCardsFailed","articleTagInserter","articleOutbrainInserter","audioBackground","superAudioSlider","audioPlay","audioStop","commentsFailed","articleCommentsFailed","commentsClosed","commentsOpen","showMoreTags","commentsReplyFormatting","footballGoal","footballStatus","footballMatchInfo","footballMatchInfoFailed","liveblogDeleteBlock","liveblogNewBlock","getMpuPosCallback","initMpuPoller","videoPositioning","getArticleHeight","injectInlineArticleMembershipCreative"];GU.Bootstrap={init:e},s()}();