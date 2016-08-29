(function () {
  var diagramm = document.getElementById('diagramm');

  $.ajax({url:"_show/data/cal-2016-ce3-kk-75013_0001",
          data:{x:"Analysis:Pressure:ind",
                y:"Analysis:Error:relative"}
         }).done(function(res) {
    var o = JSON.parse(res)
    graph = Flotr.draw(diagramm, o.data, o.options)
  });

})();