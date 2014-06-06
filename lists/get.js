function(head, req) {
  var oktask, mptask, row, i, j, task, mptn, butn,
      tr      = (req.body === "undefined") ? false : true,
      b       = tr ? JSON.parse(req.body) : {},
      tn      = b.TaskName,
      repl    = b.Replace,
      id      = b.Id,
      dn      = b.DeviceName || "GenericDevice",
      mn      = b.MpName     || "Mp",
      cuco    = b.CuCo,
      cn      = "CUCO";

  tn = req.query.taskname ? JSON.parse(req.query.taskname) : tn;
  if(dn && mn) mptn = tn.replace(dn, mn)

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
  // Ersetzungen
  if(task && typeof task === "object"){
    if(task.Defaults && typeof task.Defaults === "object"){

      var def = JSON.parse(JSON.stringify(task.Defaults)); // internal defaults
      delete task.Defaults
      // Defaults um Replaces erweitern
      // bzw. ersetzen
      if(repl && typeof repl === "object"){
        for(i in repl){
          def[i] = repl[i];
        }
      }
      // _mpname
      // &
      // _devicename
      // steht _standardmäßig
      // zur Verfügung
      def["_mpname"]     = mn;
      def["_devicename"] = dn;

      var strtask = JSON.stringify(task)
      for(j in def){
        var patt = new RegExp( j ,"g");

        strtask  = strtask.replace(patt, def[j]);
        strtask  = strtask.replace(/\n/g, "\\n");
        strtask  = strtask.replace(/\r/g, "\\r");
      }

      task          = JSON.parse(strtask);
      task.Defaults = def;
    }

    if(id && typeof id === "object"){
      task.Id     = id;
    }

    task.CuCo = cuco;
    task.MpName = mn;
  }else{
    task = {error:"no task found"};
  }
  send(JSON.stringify(task))
}