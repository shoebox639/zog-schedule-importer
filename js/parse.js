var events = [];

$('.activity_date').each(function() {
  var dateElem = $(this);

  function getEvent(elem) {
    var locationElem = elem.find('.location');
    if (locationElem.length > 0) {
      var teamList = elem.find('.team-list li');
      var league = elem.find('.league_name').text();

      events.push({
        activity: league.split('-')[0].trim(),
        league: league,

        date: dateElem.text().trim(),
        time: elem.find('.time').text().trim(),

        location: locationElem.text().trim(),
        locationUrl: locationElem.find('a').attr('href'),

        team1: $(teamList.get(0)).text().trim(),
        team2: $(teamList.get(1)).text().trim()
      });

      getEvent($(elem).next());
    }
  }

  getEvent(dateElem.next());
});

module.exports = events;
