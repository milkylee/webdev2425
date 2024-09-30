<html>
<body onload="loadXMLDoc()">
<span id="to"></span>
<span id="from"></span>
<span id="heading"></span>
<span id="body"></span>
<script>
if (window.XMLHttpRequest)
{ // code for IE7+, Firefox, Chrome, Opera, Safari
xmlhttp=new XMLHttpRequest();
}
else
{ // code for IE6, IE5

xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
 xmlhttp.open("GET","note.xml",true);
 xmlhttp.send();
}
function myFunction(xml) {
  xmlDoc=xml.responseXML;
  console.log(xmlDoc)
  document.getElementById("to").innerHTML= xmlDoc.getElementsByTagName("to")[0].childNodes[0].nodeValue;
  document.getElementById("from").innerHTML= xmlDoc.getElementsByTagName("from")[0].childNodes[0].nodeValue;
  document.getElementById("heading").innerHTML= xmlDoc.getElementsByTagName("heading")[0].childNodes[0].nodeValue;
document.getElementById("body").innerHTML= xmlDoc.getElementsByTagName("body")[0].childNodes[0].nodeValue;

}
</script>
</body>
</html>
