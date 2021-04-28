function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
  }
var data = loadFile('./art work/list.csv');
data = data.split("\n");
for(var i=0; i<data.length; i++) data[i] = data[i].split(',');

