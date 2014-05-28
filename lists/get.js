function(head, req) {
  var oktask, butask, mptask, row, j, task, mptn, butn,
      tr      = (req.body === "undefined") ? false : true,
      b       = tr ? JSON.parse(req.body) : {},
      tn      = b.TaskName,
      repl    = b.Replace,
      id      = b.Id,
      dn      = b.DeviceName,
      mn      = b.MpName,
      isCuCo  = b.CuCo,
      cn      = "CUCO";

  tn = req.query.taskname ? JSON.parse(req.query.taskname) : tn;

  if(dn)       butn = tn.replace(dn, cn)
  if(dn && mn) mptn = tn.replace(dn, mn)


  while(row = getRow()) {

    if(row.value.TaskName === tn) {
      oktask = row.value;

    }
    if(row.value.TaskName === mptn){

      mptask = row.value;
    }
    if(row.value.TaskName === butn){
      butask = row.value;
    }
  }

  // Auswahl der richtigen Task
  if(!oktask){ // die Verlangte task, wenn nicht vorhanden dann
    if(!mptask){ // die Messprogramm Backup task wenn auch nicht
      if(!butask){ //dann  universale Backup task zurück
      }else{
        task = butask;
      }
    }else{
      task = mptask;
    }
  }else{
    task = oktask;
  }
  // Ersetzungen
  if(task &&
     typeof task === "object"){

    if(task.Defaults &&
       typeof task === "object"){

      var d = JSON.parse(JSON.stringify(task.Defaults)); // internal defaults
      delete task.Defaults

      var strtask = JSON.stringify(task)

      if(typeof d === "object"){
        for(j in d){
          var patt = new RegExp( j ,"g");
          if(tr && repl && repl[j]){
            strtask  = strtask.replace(patt, repl[j]);
            d[j]     = repl[j];
          }else{
            strtask  = strtask.replace(patt, d[j]);
          }
          strtask  = strtask.replace(/\n/g, "\\n");
          strtask  = strtask.replace(/\r/g, "\\r");
        }
      }
      task          = JSON.parse(strtask);
      task.Defaults = d;
    }

    if(id){
      task.Id     = id;
      task.MpName = mn;
    }
    task.CuCo = isCuCo;
  }else{
    task = {error:"no task found"};
  }
  send(JSON.stringify(task))
}