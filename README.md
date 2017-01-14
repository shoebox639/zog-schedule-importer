# zog-schedule-importer

Imports Zog Sports schedule to your Google Calendar.

## Instructions:

Copy the following code, make sure you get all of it

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



>javascript:!function(t)%7Bfunction%20e(r)%7Bif(n%5Br%5D)return%20n%5Br%5D.exports%3Bvar%20o%3Dn%5Br%5D%3D%7Bexports%3A%7B%7D%2Cid%3Ar%2Cloaded%3A!1%7D%3Breturn%20t%5Br%5D.call(o.exports%2Co%2Co.exports%2Ce)%2Co.loaded%3D!0%2Co.exports%7Dvar%20n%3D%7B%7D%3Breturn%20e.m%3Dt%2Ce.c%3Dn%2Ce.p%3D%22%22%2Ce(0)%7D(%5Bfunction(t%2Ce%2Cn)%7Bconst%20r%3Dn(1)%2Co%3Dn(2)(r)%2Ca%3D(n(3)%2Cn(4))%2Ci%3Dn(5)%3Bvar%20c%3Dr%5B0%5D.activity%3Bi(c%2B%22-%22%2B(new%20Date).format(%22yyyy-MM-dd%22)%2B%22.ics%22%2Ca(o))%7D%2Cfunction(t%2Ce)%7Bvar%20n%3D%5B%5D%3B%24(%22.activity_date%22).each(function()%7Bvar%20t%3D%24(this)%2Ce%3Dt.next()%2Cr%3De.find(%22.location%22)%2Co%3De.find(%22.team-list%20li%22)%2Ca%3De.find(%22.league_name%22).text()%3Bn.push(%7Bactivity%3Aa.replace(%2F%5E(%5Cw%2B).*%2F%2C%22%241%22)%2Cleague%3Aa%2Cdate%3At.text().trim()%2Ctime%3Ae.find(%22.time%22).text().trim()%2Clocation%3Ar.text().trim()%2ClocationUrl%3Ar.find(%22a%22).attr(%22href%22)%2Cteam1%3A%24(o.get(0)).text().trim()%2Cteam2%3A%24(o.get(1)).text().trim()%7D)%7D)%2Ct.exports%3Dn%7D%2Cfunction(t%2Ce)%7Bfunction%20n(t)%7Bvar%20e%3Dt.reduce(function(t%2Ce)%7Breturn%20t.push(e.team1)%2Ct.push(e.team2)%2Ct%7D%2C%5B%5D).reduce(function(t%2Ce)%7Breturn%20t%5Be%5D%3Ft%5Be%5D%2B%2B%3At%5Be%5D%3D1%2Ct%7D%2C%7B%7D)%3Breturn%20Object.keys(e).reduce(function(n%2Cr)%7Breturn%20e%5Br%5D%3D%3D%3Dt.length%3Fr%3An%7D%2Cnull)%7Dfunction%20r(t%2Ce)%7Breturn%20t.team2%3D%3D%3De%3F%22Home%22%3A%22Away%22%7Dfunction%20o(t)%7Breturn%20t.map(function(e)%7Bvar%20o%3Dn(t)%2Ca%3Dnew%20Date(e.date%2B%22%20%22%2Be.time)%2Ci%3Dnew%20Date(a)%3Bi.setHours(i.getHours()%2B1)%3Bvar%20c%3De.activity%2B%22%20at%20%22%2Be.location%2Cu%3De.team1%3D%3D%3Do%3Fe.team2%3Ae.team1%2Cs%3Dr(e%2Co)%2B%22%20vs%20%22%2Bu%3Breturn%7Bstart%3Aa%2Cend%3Ai%2Csubject%3Ac%2Cdescription%3As%2Clocation%3Ae.location%7D%7D)%7Dt.exports%3Do%7D%2Cfunction(t%2Ce)%7Bt.exports%3Dfunction(t)%7Bvar%20e%3D%22%22%3Breturn%20e%2B%3D%22Subject%2CStart%20Date%2CStart%20Time%2CDescription%2CLocation%5Cn%22%2Ct.forEach(function(t)%7Be%2B%3D%5Bt.subject%2Ct.start.format(%22MM%2Fdd%2Fyy%22)%2Ct.start.format(%22H%3Amm%3Ass%22)%2C'%22'%2Bt.description%2B'%22'%2Ct.location%5D.join()%2B%22%5Cn%22%7D)%2Ce%7D%7D%2Cfunction(t%2Ce)%7Bconst%20n%3D%22%5Cn%22%3Bt.exports%3Dfunction(t)%7Bvar%20e%3D%22BEGIN%3AVCALENDAR%5Cn%22%3Be%2B%3D%22VERSION%3A2.0%5Cn%22%2Ce%2B%3D%22PRODID%3A-%2F%2Fshusong%2Fzog-events%2F%2FNONSGML%20v1.0%2F%2FEN%5Cn%22%3Bvar%20r%3D%22yyyyMMddTHHmmss%22%3Breturn%20t.forEach(function(t)%7Be%2B%3D%22BEGIN%3AVEVENT%5Cn%22%2Ce%2B%3D%22DTSTART%3A%22%2Bt.start.format(r)%2Bn%2Ce%2B%3D%22DTEND%3A%22%2Bt.end.format(r)%2Bn%2Ce%2B%3D%22LOCATION%3A%22%2Bt.location%2Bn%2Ce%2B%3D%22DTSTAMP%3A%22%2B(new%20Date).format(r)%2Bn%2Ce%2B%3D%22SUMMARY%3A%22%2Bt.subject%2Bn%2Ce%2B%3D%22DESCRIPTION%3A%22%2Bt.description%2Bn%2Ce%2B%3D%22END%3AVEVENT%5Cn%22%7D)%2Ce%2B%3D%22END%3AVCALENDAR%5Cn%22%7D%7D%2Cfunction(t%2Ce)%7Bt.exports%3Dfunction(t%2Ce)%7Bvar%20n%3Ddocument.createElement(%22a%22)%3Bn.setAttribute(%22href%22%2C%22data%3Atext%2Fplain%3Bcharset%3Dutf-8%2C%22%2BencodeURIComponent(e))%2Cn.setAttribute(%22download%22%2Ct)%2Cn.click()%7D%7D%5D)%3B


