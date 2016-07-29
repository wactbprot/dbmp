function(head, req) {
  var row
    , share      = require("lib/vl/share")
    , mustache   = require("lib/couchapp/mustache")
    , html       = this.templates.overview
    , mpdocs       = []
    , servers;
  start(share.startHtml);
  while(row = getRow()) {
    if(row.key == "mpdoc"){
      mpdocs.push(row.value);
    }
    if(row.key == "servers"){
      servers = row.value;
    }
  }
  send( mustache.to_html(html, {servers:servers, mpdocs:mpdocs}));
}