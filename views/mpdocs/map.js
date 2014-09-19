function(doc) {
  if(doc.Mp){
    var dm  = doc.Mp,
        key = dm.Standard || "",
        val = {value:doc._id
              , display: dm.Name +" (" + dm.Description  +")"}
    emit(key, val)
  }
}