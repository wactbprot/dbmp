function(head, req) {
  var row,
      D = {
        "DisplayAs":"documentSelect",
        "Document":[]
      };
  // {
  // DisplayAs:documentSelect,
  // "Document": [{
  //         "Id":"a1c2c4867ffda962989602b10e0b9d20",
  //         "Sign": "9999_004",
  //         "Year": "2014",
  //         "Standard": "CE3",
  //         "Customer": "BOC EDWARDS",
  //         "Device": "FM3_1T",
  //         "ToDoType": "error"
  //     },
  //
  //
  // }

  while(row = getRow()) {
    D.Document.push(row.value)
  };

  send(JSON.stringify(D))
}