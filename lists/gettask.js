function(head, req) {

  var share      = require("lib/vl/share") ,
      oktask, mptask, cmtask, row, i, j, task, mptn, cmtn, butn, def, mparr, cmarr,
      tr      = (req.body === "undefined") ? false : true,// try replace
      b       = tr ? JSON.parse(req.body) : {}, // body
      tn      = b.TaskName, //
      repl    = b.Replace,
      idArr   = b.Id, // array of strungs
      cust    = b.Customer, // is customer device?
      mp      = b.MpName,
      dn      = b.DeviceName,
      std     = b.Standard,
      d       = new Date();

  tn = req.query.taskname ? JSON.parse(req.query.taskname) : tn;

  mparr    = tn.split("-");
  mparr[0] = mp;
  mptn     = mparr.join("-");

  cmarr    = tn.split("-");
  cmarr[0] = "Common";
  cmtn     = cmarr.join("-");

  while(row = getRow()) {
    if(row.value.TaskName === tn) {
      oktask = row.value;
    }
    if(row.value.TaskName === mptn){
      mptask = row.value;
    }
    if(row.value.TaskName === cmtn){
      cmtask = row.value;
    }
  }
  task = oktask || mptask || cmtask;

  if(task){
    // Metatasks mit Use
    if(b.Use){
      for(var ks in b.Use){ // ks ist z.B. Values
        // plural --> singular
        if(task[ks]){
          var k = ks.replace(/[s]$/,"");  // k ist dann Value
          task[k] = task[ks][b.Use[ks]];
        }
      }
    }
    // Defaults Ersetzungen
    if(task.Defaults &&
       typeof task.Defaults === "object"){
      def = JSON.parse(JSON.stringify(task.Defaults)); // internal defaults
      delete task.Defaults
    }else{
      def = {};
    }
    // @mpname, @devicename, @year
    // stehen in den task-Definitionen
    // immer zur Verfügung
    def["@standard"]   = std;
    def["@mpname"]     = mp;
    def["@devicename"] = dn;
    def["@hour"]       = share.pad0(d.getHours());
    def["@minute"]     = share.pad0(d.getMinutes());
    def["@month"]      = share.pad0(d.getMonth() + 1);
    def["@second"]     = share.pad0(d.getSeconds() + 1);
    def["@day"]        = d.getDate();
    def["@year"]       = d.getFullYear();
    def["@cdids"]      = idArr;

    // Defaults um Replaces erweitern
    // bzw. ersetzen
    if(repl && typeof repl === "object"){
      for(i in repl){
        def[i] = repl[i];
      }
    }

    var strtask = JSON.stringify(task);

    for(j in def){
      var patt = new RegExp( j ,"g");
      if(Object.prototype.toString.call( def[j] ) === '[object Array]'){
        strtask = strtask.replace(patt, JSON.stringify(def[j]))
                  .replace(/\"\[/g, "\[")
                  .replace(/\]\"/g, "\]");
      }else{
        strtask  = strtask.replace(patt, def[j]);

      }
      strtask  = strtask.replace(patt, def[j]);
      strtask  = strtask.replace(/\n/g, "\\n");
      strtask  = strtask.replace(/\r/g, "\\r");
    }

    task          = JSON.parse(strtask);
    task.Defaults = def;

    if(idArr && typeof idArr === "object"){
      task.Id     = idArr;
    }

    task.MpName = mp;
  }else{
    task = {error:"no task called: "+  tn + " found"};
  }
  send(JSON.stringify(task))
}
