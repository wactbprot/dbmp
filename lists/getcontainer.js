function(head, req) {
  var row
    , tr        = (req.body === "undefined") ? false : true// try replace
    , b         = tr ? JSON.parse(req.body) : {} // body
    , take = b.take
    , from = b.from
    , res;

  while(row = getRow()) {
    if(row.id == from){
      if(row.key == take){
        res = row.value
      }
    }
  }
  if(res){
    send(JSON.stringify(res))
  }else{
    send(JSON.stringify({error:"no container "
                              + take
                              + " from "
                              + from
                              + " found"}))
  }
}