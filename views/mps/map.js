function(doc) {
  if(doc.Mp){
    var dm  = doc.Mp,
        key = dm.Standard || "",
        val = {"Name":        dm.Name        || "__name__",
               "Description": dm.Description || "__description__",
               "Standard":    dm.Standard    || "__standard__"}
    emit(key, val)
  }
}