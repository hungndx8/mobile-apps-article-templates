(function () {
    /*
        Native code (mostly Android) attempts to call Javascript functions
        way too early. Most manipulate the DOM, so require DOMready at least,
        though most come through before DOMinteractive even.

        For the list of functions below, create an array to queue function calls and
        arguments which can be requested by respective modules later when the time
        is more appropriate.

        If both Android and IOS calls are delayed until DOMready, this would
        not be necessary.
    */
    
    'use strict';

    var nativeFunctionCalls = [
        'articleCommentsInserter',
        'articleCardsInserter',
        'articleTagInserter',
        'articleOutbrainInserter',
        'audioBackground',
        'superAudioSlider',
        'audioPlay',
        'audioStop',
        'commentsFailed',
        'articleCommentsFailed',
        'commentsClosed',
        'commentsOpen',
        'showMoreTags',
        'commentsReplyFormatting',
        'footballGoal',
        'footballStatus',
        'footballMatchInfo',
        'footballMatchInfoFailed',
        'liveblogDeleteBlock',
        'liveblogNewBlock',
        'getMpuPosCallback',
        'initMpuPoller',
        'videoPositioning',
        'getArticleHeight'
    ];

    Array.prototype.forEach.call(nativeFunctionCalls, function (name) {
        // Create a function to catch early calls
        window[name] = function () {
            // Create or get the queue for this function
            var queue = name + 'Queue';
            window[queue] = window[queue] || [];
            // Store arguments for each call so
            // true function can apply these when ready
            window[queue].push(arguments);
        };
    });

    window.applyNativeFunctionCall = function (name) {
        var queue = window[name + 'Queue'];
        
        if (queue) {
            Array.prototype.forEach.call(queue, function (item) {
                window[name].apply(this, item);
            });
        }
    };

    window.animFrame = window.requestAnimationFrame || function( callback ){
        window.setTimeout(callback, 1000 / 60);
    };

    window.initTemplate = function (opts) {
        var options = opts || {},
            script,
            templatePath = document.body.getAttribute('data-template-directory'),
            addScript = function () {
                script = document.createElement('script'),
                script.setAttribute('src', templatePath + 'assets/build/components/require.js');
                script.setAttribute('id', 'gu');
                script.setAttribute('data-js-dir', templatePath + 'assets/build');
                script.setAttribute('data-main', templatePath + 'assets/build/main.js');
                if(options.skipStyle){
                    script.setAttribute('data-skip-style', 'true');
                }
                script.async = true;
                document.head.appendChild(script);
            },
            boot = function () {
                window.animFrame(addScript);
            };

        if (document.readyState === 'complete') {
            boot();
        } else {
            window.addEventListener('DOMContentLoaded', boot);
        }
    };

}());
