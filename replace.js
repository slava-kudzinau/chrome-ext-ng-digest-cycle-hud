(function () {
    var html = document.documentElement;
    var app_name = html.getAttribute('data-ng-app');
    if (app_name) {
        html.setAttribute('digest-hud-lazy-ng-app', app_name);
        html.removeAttribute('data-ng-app');
        chrome.storage.sync.get({
            topWatchesNum: 20,
            digestCycleNum: 10,
            logStatsEnabled: false
        }, function (item) {
            html.setAttribute('digest-hud-top-watches', item.topWatchesNum);
            html.setAttribute('digest-hud-digest-cycles', item.digestCycleNum);
            html.setAttribute('digest-hud-log-stats', item.logStatsEnabled);
        });
    }
})();