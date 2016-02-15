function(head, req) {
  var row
    , share      = require("lib/vl/share")
    , mustache   = require("lib/couchapp/mustache")
    , links      = this.templates.overview
    , mpds       = [];
  start(share.startHtml);
  while(row = getRow()) {
    mpds.push(row.value);
  }
  send( mustache.to_html(links, {mpds:mpds}));
}