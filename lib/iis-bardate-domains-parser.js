var axios = require('axios');

module.exports.parseAsync = parseAsync;

function parseAsync() {
  var url = 'https://www.iis.se/data/bardate_domains.txt';

  return axios
    .get(url)
    .then(function(response) {
      return parseText(response.data.toString());
    });
};

function parseText(text) {
  var lineSeparator = '\n';

  return text
    .trim()
    .split(lineSeparator)
    .map(parseLine);
}

function parseLine(line) {
  var valueSeparator = '\t';
  var values = line.split(valueSeparator);
  var NAME_INDEX = 0;
  var DATE_INDEX = 1;

  return {
    name: values[NAME_INDEX],
    date: values[DATE_INDEX]
  };
}

