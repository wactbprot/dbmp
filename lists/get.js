function(head, req) {
  var task,
      row,j;

  log(req)

  while(row = getRow()) {
    task = row.value;
  }
  var d = JSON.parse(JSON.stringify(task.Defaults)); // internal defaults
  delete task.Defaults

  var strtask = JSON.stringify(task)

  if(typeof d === "object"){
    for(j in d){

      var patt = new RegExp( j ,"g");
      strtask  = strtask.replace(patt, d[j]);
      strtask  = strtask.replace(/\n/g, "\\n");
      strtask  = strtask.replace(/\r/g, "\\r");
    }
  }
  send(strtask);
}