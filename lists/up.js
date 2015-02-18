function(head, req) {

  var share   = require("lib/vl/share"),
      id      = req.query.id,
      con     = [], // calibrationObjectNames
      coo     = [], // calibrationObjectDocs
      aon     = [], // AuxObjectNames
      aoo     = [], // AuxObjectDocs
      stn     = [], // StandardNames
      sto     = [], // StandardDocs
      ikresn  = [], // int. calib. with Results- Names
      ikreso  = [], // int.calib. with Results- obnjects
      scoo    = [], // contains at least all cal.Obs belonging to the standard(s)
      iksign = "",
      iik    = -1,
      constDoc, result, row,doc,
      rv, sstdn, istd, sstdo, caon,
      jao, ccoo, rvc, rvco, rvao;

  start(share.startJson);

  if(id){

    while(row = getRow()) {

      rv = row.value;

      // collect Calibrations
      if(rv.Calibration){
        rvc  = rv.Calibration;
        if(rv._id == id){
          doc  = rv;
        }

        if(rvc.Type == "IK" &&
           rvc.Result &&
           rvc.Result.Values ){

          iksign = rvc.Sign.split(/[-_]+/)[0];
          iik = share.indexOf(ikresn,iksign);

          if(iik == -1){
            ikresn.push(iksign);
            ikreso.push(rvc.Result.Values);
          }else{
            ikreso[iik] = rvc.Result.Values;
          }
          log(ikreso)
        }
      }

      // collect the constants
      if(rv.Constants){
        constDoc = rv.Constants;
      }

      // collect the standard(s)
      if(rv.Standard){
        var rvs = rv.Standard;

        if(rvs.Name &&
           share.indexOf(stn,rvs.Name)  == -1){
          stn.push(rvs.Name);
          sto.push(rvs);
        }
      }

      // collect the CalibrationObjects
      if(rv.CalibrationObject){
        rvco = rv.CalibrationObject;

        if(rvco &&
           rvco.Name &&
           share.indexOf(con, rvco.Name) == -1){

          con.push(rvco.Name);
          coo.push(rvco);
        }
      }

      // collect the AuxObjects
      if(rv.AuxObject){
        rvao = rv.AuxObject;
        if(rvao &&
           rvao.Name &&
           share.indexOf(con,rvao.Name)        == -1){

          aon.push(rvao.Name);
          aoo.push(rvao);
        }
      }
    } // while

    if(doc){


      var stdArr   = doc.Calibration.Standard.split("|"),
          dcm      = doc.Calibration.Measurement,
          twoStds  = stdArr.length == 2 ? true : false,
          stdStr1  = stdArr[0],
          stdStr2,
          stdPos1  = share.indexOf(stn, stdStr1),
          stdPos2,
          stdObj1  = sto[stdPos1],
          stdObj2;

      if(!dcm){
        doc.Calibration.Measurement = {};
      }

      // put in Standard(s) (can be two)
      if( stdObj1 &&
          stdObj1.AuxObject){

        for(var iao in stdObj1.AuxObject){

          caon = stdObj1.AuxObject[iao];
          jao  = share.indexOf(aon, caon);

          if(jao > -1){
            stdObj1.AuxObject[iao] = aoo[jao];
          }
        }
      }

      if(twoStds){
        stdStr2 = stdArr[1],
        stdPos2 = share.indexOf(stn,stdStr2);
        stdObj2 = sto[stdPos2];

        if(stdObj2.AuxObject){
          for(var iao in stdObj2.AuxObject){
            caon = stdObj2.AuxObject[iao];
            jao  = share.indexOf(aon,caon);
            if(jao > -1){
              stdObj2.AuxObject[iao] = aoo[jao];
            }
          }
        }
        doc.Calibration.Measurement.Standard = [stdObj1, stdObj2];
      }else{
        doc.Calibration.Measurement.Standard = stdObj1;
      }

      // put in CalibrationObjects
      for(var ico in coo){
        ccoo = coo[ico];
        // gibt es Values für das co?:
        iik = share.indexOf(ikresn, ccoo.Sign);

        if(iik >-1){
          ccoo.Values = ikreso[iik];
        }
        var ccood = ccoo.Device;

        if(ccood &&
           ccood.Standard &&
           ccood.Standard == stdStr1 ||
           (twoStds  && ccood.Standard == stdStr2) ){

          if(ccoo.AuxObject){
            for(var iao in ccoo.AuxObject){
              caon = ccoo.AuxObject[iao];
              jao =  share.indexOf(aon,caon);
              if(jao > -1){
                ccoo.AuxObject[iao] = aoo[jao];
              }
            }

          }
          scoo.push(ccoo);
        }
      }

      var dcmco = dcm.CalibrationObject,
          allco

      if(!dcmco){
        allco = [{Name:"cuco placeholder"}].concat(scoo);
      }else{
        allco  = [dcmco[0]].concat(scoo);
      }
      doc.Calibration.Measurement.CalibrationObject = allco


      // at least the constants doc
      doc.Calibration.Constants = constDoc;

      result = doc;
    }else{
      result = {error:"no doc with id: " + id};
    }
  }else{
    result = {error:"no id provided"};
  }
  send(toJSON(result));
}
