function(doc) {
/**
 * simply check all the kinds of
 * docs that ca carrie Tasks and
 * emit them
 *
 */
  if(doc.Mp &&
     doc.Mp.Tasks){
    var dMT  = doc.Mp.Tasks,
        dMD  = doc.Mp.Defaults,
        name = "MP";

    for(var i = 0; i < dMT.length; i++){

      var task = dMT[i],
          key  = name+"_"+task.TaskName.replace(/\s/g, "_");

      task.TaskName = key;

      var strtask =JSON.stringify(task)

      if(typeof dMD === "object"){
        for(var d in dMD){
          var patt=new RegExp( d ,"g");

          strtask = strtask.replace(patt, dMD[d]);
        }
      }

      emit(key, JSON.parse(strtask))
    }
  }
}
