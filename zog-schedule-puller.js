var ownName = $('.activities-wrapper h2').text().trim();
var events = [];
$('tr.season').each(function() {
    var e = {};
    var $row = $(this);
    e.date = $row.find('td:eq(2)').text().trim();
    e.time = $row.find('td:eq(3)').text().trim();
    e.location = $row.find('td:eq(4)').text().trim();
    var teams = $row.find('td:eq(5) a').text();
    e.opponent = teams.replace(ownName, '').trim();
    e.home = teams.indexOf(ownName) > teams.indexOf(e.opponent);
    events.push(e);
});
var times = '';
var locations = '';
var opponents = '';
var homeaway = '';
console.log('Subject,Start Date,Start Time,Description,Location');
$.each(events, function(i, e) {
    var startTime = new Date(e.date + ' ' + e.time);
    startTime.setYear(new Date().getYear());

    var subject = 'Softball at ' + e.location;
    var desc = '"' + homeOrAway(e.home) + ' vs ' + e.opponent + '"';

    console.log([
        subject, 
        startTime.format('MM/dd/yy'), 
        startTime.format('H:mm:ss'), 
        desc, 
        e.location
    ].join());

    times += e.date + ' ' + e.time + '\t';
    locations += e.location + '\t';
    opponents += e.opponent + '\t';
    homeaway += homeOrAway(e.home) + '\t';
});

function homeOrAway(home) {
    return home ? 'Home' : 'Away';
}

console.log(times);
console.log(locations);
console.log(opponents);
console.log(homeaway);