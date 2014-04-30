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
        name = "Mp",
        intask,
        strtask,
        outtask,
        key;

    for(var i = 0; i < dMT.length; i++){
      intask  = dMT[i];
      key     = name + "_" + intask.TaskName.replace(/\s/g, "_");

      strtask = JSON.stringify(intask)
      if(typeof dMD === "object"){
        for(var d in dMD){
          var patt = new RegExp( d ,"g");
          strtask  = strtask.replace(patt, dMD[d]);
        }
      }

      outtask = JSON.parse(strtask)
      outtask.TaskName = key

      emit(key, outtask)
    }
  }
}
