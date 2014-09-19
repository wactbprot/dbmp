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
      var t   = tob.Task
        ,name = tob.Name

      for(i = 0; i < t.length; i++){

        var tn = (name + "-" + t[i].TaskName).replace(/\s/g, "_");

        emit(tn, {value:tn, display:tn});

      }
    }
  }
}
