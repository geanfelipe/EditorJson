var jsonObj={};
$( document ).ready(function() {
	var options = {
      editable: function (node) {
        // node is an object like:
        //   {
        //     field: 'FIELD',
        //     value: 'VALUE',
        //     path: ['PATH', 'TO', 'NODE']
        //   }
        switch (node.field) {
         /* case '_id':
            return false;

          case 'name':
            return {
              field: false,
              value: true
            };*/

          default:
            return{
              field: false,
              value: true
            }
        }
      }
    };
  // create the editor
  //var editor = new JSONEditor(document.getElementById('jsoneditor'),options,jsonObj);
  meuEditor = new JSONEditor(document.getElementById('jsoneditor'),options);
  document.getElementById("butaoInserirGrupo").style.display="none";

   //contador para contar a cada novo clique
  var count = 1;
  // Load a JSON document
  FileReaderJS.setupInput(document.getElementById('loadDocument'), {
    readAsDefault: 'Text',
    on: {
      load: function (event, file) {
        meuEditor.setText(event.target.result);
        jsonObj = jQuery.parseJSON(event.target.result);
        document.getElementById("butaoInserirGrupo").style.display="block";
      }
    }
  });
  //define as fields como nao editáveis porém seus valores como editáveis
  //meuEditor.options=options;
  

  // Save a JSON document
  document.getElementById('saveDocument').onclick = function () {
    var blob = new Blob([meuEditor.getText()], {type: 'application/json;charset=utf-8'});
    saveAs(blob, 'document.json');
  };

  
});
