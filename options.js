// Saves options to chrome.storage.sync.

function save_options() {
  var topWatchesNum = document.getElementById('top_watches_num').value;
  var digestCycleNum = document.getElementById('digest_cycle_num').value;
  var logStatsEnabled = document.getElementById('log_stats').checked;
  chrome.storage.sync.set({
    topWatchesNum: topWatchesNum,
    digestCycleNum: digestCycleNum,
    logStatsEnabled: logStatsEnabled
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 1000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({topWatchesNum: 20, digestCycleNum: 10, logStatsEnabled: false}, function(item) {
    document.getElementById('top_watches_num').value = item.topWatchesNum;
    document.getElementById('digest_cycle_num').value = item.digestCycleNum;
    document.getElementById('log_stats').checked = item.logStatsEnabled;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);