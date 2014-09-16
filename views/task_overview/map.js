function(doc) {
  /**
   * simply check all the kinds of
   * docs that ca carrie Tasks and
   * emit them
   *
   */
  var tob,source,i,j;
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
      var t = tob.Task,
          d = tob.Defaults;

      for(i = 0; i < t.length; i++){
        var task    = t[i]

        for(var key in task){
          if(key !== "Comment"){
            var  value =  JSON.stringify(task[key]);
            for(var r in d){
              value = value.replace(r, d[r])
            }
            value = JSON.parse(value)
            emit([key, value, source, doc._id], 1)
          }
        }
      }
    }
  }
}
