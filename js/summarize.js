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

function homeOrAway(event, myTeam) {
  return event.team2 === myTeam ? 'Home' : 'Away';
}

function summarize(events) {
  return events.map(function(e) {
    var myTeam = getMyTeam(events);

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

module.exports = summarize;
