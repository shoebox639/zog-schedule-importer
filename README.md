# zog-schedule-importer

Imports Zog Sports schedule to your Google Calendar.

## Installation

Copy the following code, make sure you get all of it;

>javascript:!function(t)%7Bfunction%20e(r)%7Bif(n%5Br%5D)return%20n%5Br%5D.exports%3Bvar%20a%3Dn%5Br%5D%3D%7Bexports%3A%7B%7D%2Cid%3Ar%2Cloaded%3A!1%7D%3Breturn%20t%5Br%5D.call(a.exports%2Ca%2Ca.exports%2Ce)%2Ca.loaded%3D!0%2Ca.exports%7Dvar%20n%3D%7B%7D%3Breturn%20e.m%3Dt%2Ce.c%3Dn%2Ce.p%3D%22%22%2Ce(0)%7D(%5Bfunction(t%2Ce%2Cn)%7Bconst%20r%3Dn(1)%2Ca%3Dn(2)(r)%2Ci%3Dn(3)%3Bvar%20o%3Dr%5B0%5D.activity%3Bi(o%2B%22-%22%2B(new%20Date).format(%22yyyy-MM-dd%22)%2B%22.ics%22%2Cn(4)(a))%7D%2Cfunction(t%2Ce)%7Bvar%20n%3D%5B%5D%3B%24(%22.activity_date%22).each(function()%7Bfunction%20t(r)%7Bvar%20a%3Dr.find(%22.location%22)%3Bif(a.length%3E0)%7Bvar%20i%3Dr.find(%22.team-list%20li%22)%2Co%3Dr.find(%22.league_name%22).text()%3Bn.push(%7Bactivity%3Ao.split(%22-%22)%5B0%5D.trim()%2Cleague%3Ao%2Cdate%3Ae.text().trim()%2Ctime%3Ar.find(%22.time%22).text().trim()%2Clocation%3Aa.text().trim()%2ClocationUrl%3Aa.find(%22a%22).attr(%22href%22)%2Cteam1%3A%24(i.get(0)).text().trim()%2Cteam2%3A%24(i.get(1)).text().trim()%7D)%2Ct(%24(r).next())%7D%7Dvar%20e%3D%24(this)%3Bt(e.next())%7D)%2Ct.exports%3Dn%7D%2Cfunction(t%2Ce)%7Bfunction%20n(t)%7Bvar%20e%3Dt.reduce(function(t%2Ce)%7Breturn%20t.push(e.team1)%2Ct.push(e.team2)%2Ct%7D%2C%5B%5D).reduce(function(t%2Ce)%7Breturn%20t%5Be%5D%3Ft%5Be%5D%2B%2B%3At%5Be%5D%3D1%2Ct%7D%2C%7B%7D)%3Breturn%20Object.keys(e).reduce(function(n%2Cr)%7Breturn%20e%5Br%5D%3D%3D%3Dt.length%3Fr%3An%7D%2Cnull)%7Dfunction%20r(t%2Ce)%7Breturn%20t.team2%3D%3D%3De%3F%22Home%22%3A%22Away%22%7Dfunction%20a(t)%7Breturn%20t.map(function(e)%7Bvar%20a%3Dn(t)%2Ci%3Dnew%20Date(e.date%2B%22%20%22%2Be.time)%2Co%3Dnew%20Date(i)%3Bo.setHours(o.getHours()%2B1)%3Bvar%20c%3De.activity%2B%22%20at%20%22%2Be.location%2Cu%3De.team1%3D%3D%3Da%3Fe.team2%3Ae.team1%2Cs%3Dr(e%2Ca)%2B%22%20vs%20%22%2Bu%3Breturn%7Bstart%3Ai%2Cend%3Ao%2Csubject%3Ac%2Cdescription%3As%2Clocation%3Ae.location%7D%7D)%7Dt.exports%3Da%7D%2Cfunction(t%2Ce)%7Bt.exports%3Dfunction(t%2Ce)%7Bvar%20n%3Ddocument.createElement(%22a%22)%3Bn.setAttribute(%22href%22%2C%22data%3Atext%2Fplain%3Bcharset%3Dutf-8%2C%22%2BencodeURIComponent(e))%2Cn.setAttribute(%22download%22%2Ct)%2Cn.click()%7D%7D%2Cfunction(t%2Ce)%7Bconst%20n%3D%22%5Cn%22%3Bt.exports%3Dfunction(t)%7Bvar%20e%3D%22BEGIN%3AVCALENDAR%5Cn%22%3Be%2B%3D%22VERSION%3A2.0%5Cn%22%2Ce%2B%3D%22PRODID%3A-%2F%2Fshusong%2Fzog-events%2F%2FNONSGML%20v1.0%2F%2FEN%5Cn%22%3Bvar%20r%3D%22yyyyMMddTHHmmss%22%3Breturn%20t.forEach(function(t)%7Be%2B%3D%22BEGIN%3AVEVENT%5Cn%22%2Ce%2B%3D%22DTSTART%3A%22%2Bt.start.format(r)%2Bn%2Ce%2B%3D%22DTEND%3A%22%2Bt.end.format(r)%2Bn%2Ce%2B%3D%22LOCATION%3A%22%2Bt.location%2Bn%2Ce%2B%3D%22DTSTAMP%3A%22%2B(new%20Date).format(r)%2Bn%2Ce%2B%3D%22SUMMARY%3A%22%2Bt.subject%2Bn%2Ce%2B%3D%22DESCRIPTION%3A%22%2Bt.description%2Bn%2Ce%2B%3D%22END%3AVEVENT%5Cn%22%7D)%2Ce%2B%3D%22END%3AVCALENDAR%5Cn%22%7D%7D%5D)%3B

### Chrome:

* Drag [Zog Scheduler](/) onto your bookmark bar.
* Right click that bookmark
* Click Edit
* In the URL field, paste the copied code
* Click Save

### Firefox:

* Drag [Zog Scheduler](/) onto your bookmark bar.
* Right click that bookmark
* Click Properties
* In the Location field, paste the copied code
* Click Save

### Safari

* Click bookmark bar on top, next to back and forward buttons
* Click the bookmark tab
* Drag [Zog Scheduler](/) onto your bookmark bar.
* Right click that bookmark
* Click Edit Address
* In field, paste the copied code
* Click Done

## Usage

Once installed, just click on this bookmark when you are on Zog's activity page with your teams schedule. It will download a file to your computer. Just open the file on MacOS and your Zog team schedule will be added to your calendar. You can also add it to Google Calendar by [importing](https://support.google.com/calendar/answer/37118?hl=en) it.
