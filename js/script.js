
  var sec = 0;

function pad(val) {
    return val > 9 ? val : "0" + val;
}
var timer = setInterval(function () {
    document.getElementById("seconds").innerHTML = pad(++sec);
}, 10);


var cnt=0;
    function CountFun(){
     cnt=parseInt(cnt)+parseInt(1);
     var divData=document.getElementById("showCount");
     divData.innerHTML=""+cnt +"";

    }
  
    
	   



