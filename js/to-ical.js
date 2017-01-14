const nl = '\n';
module.exports = function createICal(events) {
  var file = 'BEGIN:VCALENDAR' + nl;
  file += 'VERSION:2.0' + nl;
  file += 'PRODID:-//shusong/zog-events//NONSGML v1.0//EN' + nl;

  var dateformat = 'yyyyMMddTHHmmss';

  events.forEach(function(e) {
    file += 'BEGIN:VEVENT' + nl;

    file += 'DTSTART:' + e.start.format(dateformat) + nl;
    file += 'DTEND:' + e.end.format(dateformat) + nl;

    file += 'LOCATION:' + e.location + nl;
    file += 'DTSTAMP:' + new Date().format(dateformat) + nl;
    file += 'SUMMARY:' + e.subject + nl;
    file += 'DESCRIPTION:' + e.description + nl;

    file += 'END:VEVENT' + nl;
  });

  file += 'END:VCALENDAR' + nl;
  return file;
}
