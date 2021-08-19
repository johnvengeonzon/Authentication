      var email="pangitako123@gmail.com"
      var pass="pangitako"
      
      function condition(){
       
       var username=document.getElementById("username").value
       var password=document.getElementById("password").value
       
       
       
       if(username==email&&password==pass){
         alert("Log-in Successfully")
        window.open("newpage.html")
       }
       
else if(username==0 && password==0){
        alert("Please input email and password")
      }
      else if(username==0){
         alert("Plese input email")
       }
       else if(password==0){
         alert("Please input password")
       }
       
else if(username!=email && password!=pass){
         alert("Wrong Email and Password")}
       
      else if(username!=email){
        alert("Wrong Email")
      }
      else if(password!=pass){
        alert("Wrong Password")
      }
      
      
      
        
      
      }