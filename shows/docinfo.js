function (doc, req) {

  var res = {DocInfo:false}

  if(doc && doc.Calibration){
    var dc   = doc.Calibration
      , dct   = dc.ToDo
      , dcc   = dc.Customer
      , dccu  = dc.CustomerObject;

    res.DocInfo      = true
    res.Id           = doc._id;
    res.Certificate  = dc.Certificate;
    res.Issue        = dc.Issue;
    res.Year         = dc.Year;

    res.ToDoType = dct && dct.Type ? dct.Type : "no type";
    res.Customer = dcc && dcc.Name ? dcc.Name : "no customer" ;
    res.Device   = dccu && dccu.Name ? dccu.Name : "no device name" ;
  }

  if(doc && doc.Measurement){
    res.DocInfo     = true;
    res.Id          = doc._id;
    res.Measurement = true;
  }

  if(doc && doc.Commissioning){
    res.Id            = doc._id;
    res.Commissioning = true;
    res.DocInfo       = true;
  }

  return toJSON(res);
};
