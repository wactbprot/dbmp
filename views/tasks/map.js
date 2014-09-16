function(doc) {
  /**
   * simply check all the kinds of
   * docs that ca carrie Tasks and
   * emit them
   *
*/
  var tob,i,j;
  if(doc.Mp) tob = doc.Mp;
  if(doc.CalibrationObject) tob = doc.CalibrationObject;
  if(doc.AuxObject) tob = doc.AuxObject;
  if(tob && tob.Task){
    var tasks = tob.Task;
    for(i = 0; i < tasks.length; i++){
      var task = tasks[i];
      for(var key in task){
        emit(key, JSON.stringify(task[key]))
      }
    }
  }
}