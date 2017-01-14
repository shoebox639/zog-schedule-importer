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

module.exports = events;
