(function() {
  var events = [];
  $('.activity_date').each(function() {
    var dateElem = $(this);
    var contentElem = dateElem.next();
    var locationElem = contentElem.find('.location');
    var teamList = contentElem.find('.team-list li');
    var league = contentElem.find('.league_name').text();

    events.push({
      activity: league.replace(/^(\w+).*/, '$1'),
      league: league,

      date: dateElem.text().trim(),
      time: contentElem.find('.time').text().trim(),

      location: locationElem.text().trim(),
      locationUrl: locationElem.find('a').attr('href'),

      team1: $(teamList.get(0)).text().trim(),
      team2: $(teamList.get(1)).text().trim()
    });
  });

  var calEvents = summarize(events);

  var nl = "\n";

  function getMyTeam(events) {
    var teams = events.reduce(function(acc, next) {
      acc.push(next.team1);
      acc.push(next.team2);

      return acc;
    }, []).reduce(function(acc, next) {
      if (acc[next]) {
        acc[next]++;
      }
      else {
        acc[next] = 1;
      }
      return acc;
    }, {});

    return Object.keys(teams).reduce(function(mine, team) {
      if (teams[team] === events.length) {
        return team;
      }
      return mine;
    }, null);
  }

  function summarize(events) {
    return events.map(function(e) {
      var myTeam = getMyTeam(events);

      function homeOrAway(event) {
        return event.team2 === myTeam ? 'Home' : 'Away';
      }

      var start = new Date(e.date + ' ' + e.time);

      var end = new Date(start);
      end.setHours(end.getHours() + 1);

      var subject = e.activity + ' at ' + e.location;

      var opponent = e.team1 === myTeam ? e.team2 : e.team1;

      var description = homeOrAway(e, myTeam) + ' vs ' + opponent;

      return {
        start: start,
        end: end,
        subject: subject,
        description: description,
        location: e.location
      }
    });
  }

  function createCSV(calEvents) {
    var file = '';
    file += 'Subject,Start Date,Start Time,Description,Location' + nl;
    calEvents.forEach(function(e) {
      file += [
        e.subject,
        e.start.format('MM/dd/yy'),
        e.start.format('H:mm:ss'),
        '"' + e.description + '"',
        e.location
      ].join() + nl;
    });
    return file;
  }

  function createICal(events, myTeam) {
    var file = 'BEGIN:VCALENDAR' + nl;
    file += 'VERSION:2.0' + nl;
    file += 'PRODID:-//shusong/zog-events//NONSGML v1.0//EN' + nl;

    var dateformat = 'yyyyMMddTHHmmssZ';

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

  function download(name, content) {
    var elem = document.createElement('a');
    elem.setAttribute('href', "data:text/plain;charset=utf-8," + encodeURIComponent(content));
    elem.setAttribute('download', name);
    elem.click();
  }

  var activity = events[0].activity;

  // google will take ics as well actually
  // download(activity + '-' + new Date().format('yyyy-MM-dd') + '.csv', createCSV(calEvents));
  download(activity + '-' + new Date().format('yyyy-MM-dd') + '.ics', createICal(calEvents));
})();
