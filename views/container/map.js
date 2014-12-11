function(doc) {
  if(doc.Mp &&
     doc.Mp.Container){
    var container = doc.Mp.Container;
    for(var i = 0; i < container.length; i++){
      var cont   = container[i]
        , title  =  cont.Title;
      if(title)
        emit(doc._id + "_" + title, cont);
    }
  }
}