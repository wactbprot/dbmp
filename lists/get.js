function(head, req) {
  var oktask,
      butask,
      mptask,
      row,
      j,
      task,
      tr      = (req.body === "undefined") ? false: true,
      b       = tr ? JSON.parse(req.body) :{},
      repl    = b.Replace,
      isCuCo  = b.CuCo,
      tn      = b.TaskName,
      dn      = b.DeviceName,
      mn      = b.MpName,
      mptn    = "",
      butn    = "";

  if(dn) butn = tn.replace(dn,"CUCO")
  if(dn && mn) mptn = tn.replace(dn, mn)

  while(row = getRow()) {

    if(row.value.TaskName === tn) {
      oktask = row.value;
    }
    if(isCuCo &&
       row.value.TaskName === mptn){
      mptask = row.value;
    }
    if(isCuCo &&
       row.value.TaskName === butn){
      butask = row.value;
    }
  }

  if(!oktask){
    if(!mptask){
      if(!butask){
      }else{
        task = butask;
      }
    }else{
      task = mptask;
    }
  }else{
    task = oktask;
  }

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
            d[j]     = b[j];
          }else{
            strtask  = strtask.replace(patt, d[j]);
          }

          strtask  = strtask.replace(/\n/g, "\\n");
          strtask  = strtask.replace(/\r/g, "\\r");
        }
      }
      task = JSON.parse(strtask);
      task.Defaults = d;
    } // Defaults

    send(JSON.stringify(task));
  }else{
    send(JSON.stringify({error:"no task found"}));
  }
}