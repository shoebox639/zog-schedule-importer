module.exports = function download(name, content) {
  var elem = document.createElement('a');
  elem.setAttribute('href', "data:text/plain;charset=utf-8," + encodeURIComponent(content));
  elem.setAttribute('download', name);
  elem.click();
}
