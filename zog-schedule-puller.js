(function() {
    var ownName = $('.activities-wrapper h2').text().trim();
    var events = [];
    $('tr.season').each(function() {
        var e = {};
        var $row = $(this);
        e.activity = $row.find('td:eq(1)').text().split('-')[0].trim();
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

    var nl = "\n";

    var file = '';
    file += 'Subject,Start Date,Start Time,Description,Location' + nl;
    $.each(events, function(i, e) {
        var startTime = new Date(e.date + ' ' + e.time);
        startTime.setYear(new Date().getYear());

        var subject = e.activity + ' at ' + e.location;
        var desc = '"' + homeOrAway(e.home) + ' vs ' + e.opponent + '"';

        file += [
            subject, 
            startTime.format('MM/dd/yy'), 
            startTime.format('H:mm:ss'), 
            desc, 
            e.location
        ].join() + nl;

        times += e.date + ' ' + e.time + '\t';
        locations += e.location + '\t';
        opponents += e.opponent + '\t';
        homeaway += homeOrAway(e.home) + '\t';
    });

    function homeOrAway(home) {
        return home ? 'Home' : 'Away';
    }

    var gdocContent = '';
    gdocContent += times + nl;
    gdocContent += locations + nl;
    gdocContent += opponents + nl;
    gdocContent += homeaway + nl;

    function download(name, content) {
        var elem = document.createElement('a');
        elem.setAttribute('href', "data:text/plain;charset=utf-8," + encodeURIComponent(content));
        elem.setAttribute('download', name);
        elem.click();
    }

    var activity = events[0].activity;

    download(activity + '-schedule-' + new Date().format('MM/dd/yy') + '.csv', file);
    download(activity + '-gdoc-' + new Date().format('MM/dd/yy') + '.csv', gdocContent);
})();
