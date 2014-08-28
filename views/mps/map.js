function(doc) {
  if(doc.Mp){
    var dm  = doc.Mp,
        key = dm.Standard || "";
    emit(key,null)
  }
}