function money(){

    var d = +(document.getElementById("d").value);

    var out = (d/30.06);
    document.getElementById("output").innerHTML = "<h3> Output: "+out+"</h3>";



    var t = +(document.getElementById("t").value);

    var outt = (t*30.06);
    document.getElementById("outputt").innerHTML = "<h3> Output: "+outt+"</h3>";



}