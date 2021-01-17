# IIS bardate domains parser
> Parses IIS bardate domains into an array

## DEPRECATED
Download directly from IIS instead: https://data.internetstiftelsen.se/bardate_domains.json

---

**Source**
https://www.iis.se/data/bardate_domains.txt

**Example**

```javascript

var iisParser = require('iis-bardate-domains-parser');

iisParser.parseAsync()
.then(function(domains) {
    console.log(domains);
    
    /*
    [
        {name: '002.se', date: '2017-12-03'},
        {name: '123-456.se', date: '2018-01-23'},
        {name: 'abc-123.se', date: '2018-01-23'},
        {name: 'abc-def.se', date: '2018-01-23'},
        {name: 'abc.se', date: '2018-01-23'},
        {name: 'abc123.se', date: '2018-01-23'}
        ...
    ];
     */
});
```
