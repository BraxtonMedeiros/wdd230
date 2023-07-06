(function() {
    var timestampField = document.getElementById('timestamp');
    var timestampDisplay = document.getElementById('timestamp-display');
    if (timestampField && timestampDisplay) {
      var timestamp = new Date().toISOString();
      var formattedTimestamp = new Date(timestamp).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
      });
      timestampField.value = timestamp;
      timestampDisplay.textContent = formattedTimestamp;
    }
  })();