 $(document).ready(function(){
    
    

//login
	 $("#login").click(function(){

	
    $.ajax({
      url: 'http://localhost:8080/db',
      type: 'GET',

      contentType: 'application/json; charset=utf-8',
      dataType: 'json',

      success: function(data) {
var lengthx = data.length;
        console.log(data);
        renderHTML(data,lengthx); 
      }
    });


   function renderHTML(data,lengthx){
    var pass =0 ;
    var htmlString = "";

    varuname = $("#loginemail").val();
    varpw = $("#loginpassword").val();

    for( i = 0 ; i < lengthx ; i++){


      var uname = data[i].username;
      var pw = data[i].password;


      if(pw == varpw && uname == varuname)
      {
        alert("You are logged In")
        
        sessionStorage.setItem('SESSION_ISLOGIN', 'true');
       
        $(location).attr('href', 'DashBoard')
pass++;
        break;
        
      }


    }
    if (pass == 0)
    {
     if("" == varpw && "" == varuname)
{
  alert("Empty Fields")
      $("form")[0].reset();
}

        else
        {
          alert("Invalid Credentials")
      $("form")[0].reset();
        }
    }  
  }
	 
});

//register
   $("#authorizing").click(function(){

     var uname = $("#username").val();
    var pw = $("#password").val();
      var cpw = $("#cpassword").val();
if(cpw === pw && pw.length >= 8)
{

  alert("Registered");
}
else
{
    alert("Empty Fields or Invalid Credentials")
}
});
   });