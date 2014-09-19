function(doc) {
  /**
   * simply check all the kinds of
   * docs that ca carrie Tasks and
   * emit them
   *
   */
  var tob,source,i,j,k,v;
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
      var t = tob.Task
        , d = tob.Defaults
        , name = tob.Name

      for(i = 0; i < t.length; i++){
        var tn = (name + "-" + t[i].TaskName).replace(/\s/g, "_");
        var task = JSON.stringify(t[i]);

        var rs = task.match(/\@[a-z]{1,20}/g);
        if(rs){
          for(j =0; j < rs.length; j++){
            k = rs[j]
            v = d[k]
            emit(tn, {key:k, value:v})
          }
        }
      }
    }
  }
}
