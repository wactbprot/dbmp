function(head, req) {
  var oktask, mptask, row, i, j, task, mptn, butn, def,
      tr      = (req.body === "undefined") ? false : true,// try replace
      b       = tr ? JSON.parse(req.body) : {}, // body
      tn      = b.TaskName, //
      repl    = b.Replace,
      idArr   = b.Id,
      dn      = b.DeviceName || "GenericDevice",
      mn      = b.MpName     || "Mp",
      d       = new Date();

  tn = req.query.taskname ? JSON.parse(req.query.taskname) : tn;
  if(dn && mn) mptn = tn.replace(dn, mn);

  while(row = getRow()) {
    if(row.value.TaskName === tn) {
      oktask = row.value;
    }
    if(row.value.TaskName === mptn){
      mptask = row.value;
    }
  }

  // Auswahl der richtigen Task
  if(!oktask){ // die Verlangte task, wenn nicht vorhanden dann
    if(!mptask){ // die Messprogramm Backup task wenn auch nicht
    }else{
      task = mptask;
    }
  }else{
    task = oktask;
  }

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
    def["@mpname"]     = mn;
    def["@devicename"] = dn;
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
      strtask  = strtask.replace(/\n/g, "\\n");
      strtask  = strtask.replace(/\r/g, "\\r");
    }

    task          = JSON.parse(strtask);
    task.Defaults = def;

    if(idArr && typeof idArr === "object"){
      task.Id     = idArr;
    }

    task.MpName = mn;
  }else{
    task = {error:"no task found"};
  }
  send(JSON.stringify(task))
}