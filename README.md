# IIS bardate domains parser [![Build Status](https://travis-ci.org/vikpe/iis-bardate-domains-parser.svg?branch=master)](https://travis-ci.org/vikpe/iis-bardate-domains-parser)  [![Test Coverage](https://codeclimate.com/github/vikpe/iis-bardate-domains-parser/badges/coverage.svg)](https://codeclimate.com/github/vikpe/iis-bardate-domains-parser/coverage)
> Parses IIS bardate domains into an array

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
