function(head, req) {
  var row
    , share      = require("lib/vl/share")
    , mustache   = require("lib/couchapp/mustache")
    , Select = {value:"0",
                options:[{value:"", display:""}]}
    , select = this.templates.Select;

  start(share.startHtml);

  while(row = getRow()) {
    Select.options.push(row.value);
  }
  log(Select)
  send(mustache.to_html(select, Select))
}