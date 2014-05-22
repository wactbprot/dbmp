function(head, req) {
  var task, row, j,
      tr = (req.body === "undefined") ? false: true,
      b  = tr ? JSON.parse(req.body) :{};

  while(row = getRow()) {
    task = row.value;
  }

  if(task &&
     typeof task === "object"){

    var d = JSON.parse(JSON.stringify(task.Defaults)); // internal defaults
    delete task.Defaults

    var strtask = JSON.stringify(task)

    if(typeof d === "object"){
      for(j in d){
        var patt = new RegExp( j ,"g");

        if(tr && b[j]){

          strtask  = strtask.replace(patt, b[j]);
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

    send(JSON.stringify(task));
  }else{
    send(JSON.stringify({error:"no task found"}));
  }
}