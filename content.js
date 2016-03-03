
var myObj = document.getElementById("yui_3_13_0_2_1456989442177_84");
var x = document.getElementsByClassName("hasevent ");
if(x!=null){

	
	var i;
	for (i = 0; i < x.length; i++) {
	    x[i].style.backgroundColor = "blue";
	 var b =  x[i].getElementsByTagName('a');
	    alert(b[0].text);

}
	alert("xong")
}else
		alert("no id");
