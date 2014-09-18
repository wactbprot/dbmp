function (doc, req) {
  var mustache = require("lib/couchapp/mustache")
    , template

  if(doc &&
     doc.Mp){

    template             = this.templates.base;

  }else{
    doc  = {Mp:
	    {"Title":"no a MP"}};
  }

  return mustache.to_html(template, doc);
};
