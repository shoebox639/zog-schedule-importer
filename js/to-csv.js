module.exports = function createCSV(calEvents) {
  var file = '';
  file += 'Subject,Start Date,Start Time,Description,Location\n';
  calEvents.forEach(function(e) {
    file += [
      e.subject,
      e.start.format('MM/dd/yy'),
      e.start.format('H:mm:ss'),
      '"' + e.description + '"',
      e.location
    ].join() + '\n';
  });
  return file;
}
