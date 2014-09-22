function(doc) {
  if(doc.Mp &&
     doc.Mp.Container){
    var container = doc.Mp.Container;
    for(var i = 0; i < container.length; i++){
      if(container[i].Definition){
        var cd = container[i].Definition;
        for(var j = 0; j < cd.length; j++){

          emit(doc._id + "_" + i, {value:j, display: j});
        }
      }
    }
  }// Calibration
}