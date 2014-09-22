function(head, req) {
  var row
    , share      = require("lib/vl/share")
    , mustache   = require("lib/couchapp/mustache")
    , Inputs = {values:[]}
    , inputs = this.templates.Inputs;

  start(share.startHtml);

  while(row = getRow()) {


    Inputs.values.push({key:row.key[1], value:row.key[2]});
  }
  send(mustache.to_html(inputs, Inputs))
}