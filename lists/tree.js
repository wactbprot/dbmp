function(head, req) {
  var row
    , share      = require("lib/vl/share")
    , mustache   = require("lib/couchapp/mustache")
    , html       = this.templates.tree
    , defs       = {}
    , def, std, s, d, sc = 0, dc = 0, D
    , ret = []
  start(share.startHtml);
  while(row = getRow()) {
    def  = row.value;
    std = row.key;

    if(!defs[std])   defs[std] = {};
    if(!defs[std][def.DefinitionClass]) defs[std][def.DefinitionClass] = [];
    defs[std][def.DefinitionClass].push(def);
  }

  for(s in defs){
    ret.push({Standard:s, Definitions:[]});
    for(d in defs[s]){
      D = defs[s][d];
      for(var k = 0; k < D.length; k++){
        D[k].PreDef = JSON.stringify(D[k].Definition, false, ' ')
      }
   ret[sc].Definitions.push( {Class: d, DefStruct:D} );
      dc += 1;
    }
    sc += 1;
  }
 send( mustache.to_html(html, {Data:ret}));
}