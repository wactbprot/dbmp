function(head, req) {
  var tr        = (req.body === "undefined") ? false : true// try replace
    , b         = tr ? JSON.parse(req.body) : {} // body
    , cont_name = b.container
    , res;

  while(row = getRow()) {
    if(row.key = cont_name){
      res = row.value
    }
  }
  if(res){
    send(JSON.stringify(res))
  }else{
    send(JSON.stringify({error:"no container " + cont_name + " found"}))
  }
}