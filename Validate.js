function ageCalculator() {  
    var userinput = document.getElementById("DOB").value;  
    var dob = new Date(userinput);  
    if(userinput==null || userinput=='') {  
      document.getElementById("message").innerHTML = "**Choose a date please!";    
      return false;   
    } else {  
       
    var month_diff = Date.now() - dob.getTime();  
      
    var age_dt = new Date(month_diff);   
      
    var year = age_dt.getUTCFullYear();  
      
    var age = Math.abs(year - 1970);  
    if(age>14 & age<24)
    {
          alert("Age is " +age+ " and is eligible");
    }
    else{
        alert("ineligible");
          }
    }  
}