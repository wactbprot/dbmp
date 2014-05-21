function(doc) {
/**
 * simply check all the kinds of
 * docs that ca carrie Tasks and
 * emit them
 *
 */
var tob,
    i,
    j,
    intask,
    strtask,
    outtask,
    key;


  if(doc.Mp) tob = doc.Mp;
  if(doc.CalibrationObject) tob = doc.CalibrationObject;

  if(tob &&
     tob.Tasks){

    var t    = tob.Tasks,
        d    = tob.Defaults,
        name = tob.Name;

    for(i = 0; i < t.length; i++){
      intask  = t[i];

      key     = name + "-" + intask.TaskName.replace(/\s/g, "_");

      strtask = JSON.stringify(intask)

      if(typeof d === "object"){
        for(j in d){

          var patt = new RegExp( j ,"g");
          strtask  = strtask.replace(patt, d[j]);
          strtask  = strtask.replace(/\n/g, "\\n");
          strtask  = strtask.replace(/\r/g, "\\r");
        }
      }
      outtask = JSON.parse(strtask)
      outtask.TaskName = key

      emit(key, outtask)
    }
  }
}
