const rawEvents = require('./parse');

const events = require('./summarize')(rawEvents);

const download = require('./download');

var activity = rawEvents[0].activity;

// google will take ics as well actually
// download(activity + '-' + new Date().format('yyyy-MM-dd') + '.csv', require('./to-csv')(events));
download(activity + '-' + new Date().format('yyyy-MM-dd') + '.ics', require('./to-ical')(events));
