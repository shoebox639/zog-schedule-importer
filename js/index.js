const rawEvents = require('./parse');

const events = require('./summarize')(rawEvents);

const createCSV = require('./to-csv');
const createICal = require('./to-ical');
const download = require('./download');

var activity = rawEvents[0].activity;

// google will take ics as well actually
// download(activity + '-' + new Date().format('yyyy-MM-dd') + '.csv', createCSV(events));
download(activity + '-' + new Date().format('yyyy-MM-dd') + '.ics', createICal(events));
