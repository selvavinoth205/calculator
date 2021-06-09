function compute()
 {
      var principal = document.getElementById("principal").value;
        
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;

        var interest = principal * years * rate /100;

       var year = new Date().getFullYear()+parseInt(years);
	alert(type(years))
	
      document.getElementById("result").innerHTML="If you deposit "+String(principal)+",\<br\>at an interest rate of "+String(rate)+"%\<br\>You will receive an amount of "+String(amount)+",\<br\>in the year "+String(years)+"\<br\>"
          //document.getElementById("result").innerHTML="If"



}
        

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
