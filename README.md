zog-schedule-importer
=====================

Imports Zog Sports schedule to your Google Calendar.

## Instructions:

* Drag this: [Zog Scheduler](/) onto your bookmark bar.
* Copy the following code, make sure you get all of it
* Right click that bookmark
* Chrome:
  * Click Edit
  * In the URL field, paste the copied code
  * Click Save
* Firefox:
  * Click Properties
  * In the Location field, paste the copied code
  * Click Save


```
javascript:!function(modules)%7Bfunction%20__webpack_require__(moduleId)%7Bif(installedModules%5BmoduleId%5D)return%20installedModules%5BmoduleId%5D.exports%3Bvar%20module%3DinstalledModules%5BmoduleId%5D%3D%7Bexports%3A%7B%7D%2Cid%3AmoduleId%2Cloaded%3A!1%7D%3Breturn%20modules%5BmoduleId%5D.call(module.exports%2Cmodule%2Cmodule.exports%2C__webpack_require__)%2Cmodule.loaded%3D!0%2Cmodule.exports%7Dvar%20installedModules%3D%7B%7D%3Breturn%20__webpack_require__.m%3Dmodules%2C__webpack_require__.c%3DinstalledModules%2C__webpack_require__.p%3D%22%22%2C__webpack_require__(0)%7D(%5Bfunction(module%2Cexports%2C__webpack_require__)%7Bconst%20rawEvents%3D__webpack_require__(1)%2Cevents%3D__webpack_require__(2)(rawEvents)%2CcreateICal%3D(__webpack_require__(3)%2C__webpack_require__(4))%2Cdownload%3D__webpack_require__(5)%3Bvar%20activity%3DrawEvents%5B0%5D.activity%3Bdownload(activity%2B%22-%22%2B(new%20Date).format(%22yyyy-MM-dd%22)%2B%22.ics%22%2CcreateICal(events))%7D%2Cfunction(module%2Cexports)%7Bvar%20events%3D%5B%5D%3B%24(%22.activity_date%22).each(function()%7Bvar%20dateElem%3D%24(this)%2CcontentElem%3DdateElem.next()%2ClocationElem%3DcontentElem.find(%22.location%22)%2CteamList%3DcontentElem.find(%22.team-list%20li%22)%2Cleague%3DcontentElem.find(%22.league_name%22).text()%3Bevents.push(%7Bactivity%3Aleague.replace(%2F%5E(%5Cw%2B).*%2F%2C%22%241%22)%2Cleague%3Aleague%2Cdate%3AdateElem.text().trim()%2Ctime%3AcontentElem.find(%22.time%22).text().trim()%2Clocation%3AlocationElem.text().trim()%2ClocationUrl%3AlocationElem.find(%22a%22).attr(%22href%22)%2Cteam1%3A%24(teamList.get(0)).text().trim()%2Cteam2%3A%24(teamList.get(1)).text().trim()%7D)%7D)%2Cmodule.exports%3Devents%7D%2Cfunction(module%2Cexports)%7Bfunction%20getMyTeam(events)%7Bvar%20teams%3Devents.reduce(function(acc%2Cnext)%7Breturn%20acc.push(next.team1)%2Cacc.push(next.team2)%2Cacc%7D%2C%5B%5D).reduce(function(acc%2Cnext)%7Breturn%20acc%5Bnext%5D%3Facc%5Bnext%5D%2B%2B%3Aacc%5Bnext%5D%3D1%2Cacc%7D%2C%7B%7D)%3Breturn%20Object.keys(teams).reduce(function(mine%2Cteam)%7Breturn%20teams%5Bteam%5D%3D%3D%3Devents.length%3Fteam%3Amine%7D%2Cnull)%7Dfunction%20homeOrAway(event%2CmyTeam)%7Breturn%20event.team2%3D%3D%3DmyTeam%3F%22Home%22%3A%22Away%22%7Dfunction%20summarize(events)%7Breturn%20events.map(function(e)%7Bvar%20myTeam%3DgetMyTeam(events)%2Cstart%3Dnew%20Date(e.date%2B%22%20%22%2Be.time)%2Cend%3Dnew%20Date(start)%3Bend.setHours(end.getHours()%2B1)%3Bvar%20subject%3De.activity%2B%22%20at%20%22%2Be.location%2Copponent%3De.team1%3D%3D%3DmyTeam%3Fe.team2%3Ae.team1%2Cdescription%3DhomeOrAway(e%2CmyTeam)%2B%22%20vs%20%22%2Bopponent%3Breturn%7Bstart%3Astart%2Cend%3Aend%2Csubject%3Asubject%2Cdescription%3Adescription%2Clocation%3Ae.location%7D%7D)%7Dmodule.exports%3Dsummarize%7D%2Cfunction(module%2Cexports)%7Bmodule.exports%3Dfunction(calEvents)%7Bvar%20file%3D%22%22%3Breturn%20file%2B%3D%22Subject%2CStart%20Date%2CStart%20Time%2CDescription%2CLocation%5Cn%22%2CcalEvents.forEach(function(e)%7Bfile%2B%3D%5Be.subject%2Ce.start.format(%22MM%2Fdd%2Fyy%22)%2Ce.start.format(%22H%3Amm%3Ass%22)%2C'%22'%2Be.description%2B'%22'%2Ce.location%5D.join()%2B%22%5Cn%22%7D)%2Cfile%7D%7D%2Cfunction(module%2Cexports)%7Bconst%20nl%3D%22%5Cn%22%3Bmodule.exports%3Dfunction(events)%7Bvar%20file%3D%22BEGIN%3AVCALENDAR%5Cn%22%3Bfile%2B%3D%22VERSION%3A2.0%5Cn%22%2Cfile%2B%3D%22PRODID%3A-%2F%2Fshusong%2Fzog-events%2F%2FNONSGML%20v1.0%2F%2FEN%5Cn%22%3Bvar%20dateformat%3D%22yyyyMMddTHHmmss%22%3Breturn%20events.forEach(function(e)%7Bfile%2B%3D%22BEGIN%3AVEVENT%5Cn%22%2Cfile%2B%3D%22DTSTART%3A%22%2Be.start.format(dateformat)%2Bnl%2Cfile%2B%3D%22DTEND%3A%22%2Be.end.format(dateformat)%2Bnl%2Cfile%2B%3D%22LOCATION%3A%22%2Be.location%2Bnl%2Cfile%2B%3D%22DTSTAMP%3A%22%2B(new%20Date).format(dateformat)%2Bnl%2Cfile%2B%3D%22SUMMARY%3A%22%2Be.subject%2Bnl%2Cfile%2B%3D%22DESCRIPTION%3A%22%2Be.description%2Bnl%2Cfile%2B%3D%22END%3AVEVENT%5Cn%22%7D)%2Cfile%2B%3D%22END%3AVCALENDAR%5Cn%22%7D%7D%2Cfunction(module%2Cexports)%7Bmodule.exports%3Dfunction(name%2Ccontent)%7Bvar%20elem%3Ddocument.createElement(%22a%22)%3Belem.setAttribute(%22href%22%2C%22data%3Atext%2Fplain%3Bcharset%3Dutf-8%2C%22%2BencodeURIComponent(content))%2Celem.setAttribute(%22download%22%2Cname)%2Celem.click()%7D%7D%5D)%3B
```


