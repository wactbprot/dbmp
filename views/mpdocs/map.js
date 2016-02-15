function(doc) {
  if(doc.Mp){
    var dm   = doc.Mp
      , val  = doc._id.replace("mpd-", "").replace(/[-_]/g, " ")
      , disp = dm.Name + " (" + dm.Description  + ")"
    emit(null, {value: val, display: disp, id:doc._id});
  }
}