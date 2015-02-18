function(doc) {
  /**
   * simply check all the kinds of
   * docs that ca carrie Tasks and
   * emit them
   *
   */
  var tob,i,j;
  if(doc.Mp) tob = doc.Mp;
  if(doc.Standard) tob = doc.Standard;
  if(doc.CalibrationObject) tob = doc.CalibrationObject;
  if(doc.AuxObject) tob = doc.AuxObject;
  if(tob && tob.Task){
    var t = tob.Task,
        d = tob.Defaults,
        name = tob.Name;
    for(i = 0; i < t.length; i++){
      var key = (name + "-" + t[i].TaskName).replace(/\s/g, "_");
      var task = JSON.parse(JSON.stringify(t[i]))
      task.TaskName = key;
      task.Defaults = d;
      emit(key, task)
    }
  }
}