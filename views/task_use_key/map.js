function(doc) {
  /**
   * simply check all the kinds of
   * docs that ca carrie Tasks and
   * emit them
   *
   */
  var tob,source,i,j,k;
  if(doc.Mp){
    source = "Mp";
  }
  if(doc.CalibrationObject){
    source = "CalibrationObject"
  }

  if(doc.AuxObject){
    source = "AuxObject";
  }

  if(source){
    tob = doc[source];
    if(tob.Task){
      var t   = tob.Task
        ,name = tob.Name

      for(i = 0; i < t.length; i++){
        var task = t[i]
        var tn = (name + "-" + task.TaskName).replace(/\s/g, "_");
        for(j in task){
          if(j.match(/s$/) &&
             typeof task[j] === "object"){


              emit(tn, {value:j, display:j});

          }
        }
      }
    }
  }
}
