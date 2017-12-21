$(document).ready(function(){

  $('form').on('submit', function(){
	  console.log('SUBMITTED from register-user.js');
    
      var items = $('form');
      var user = {
            username: $('[name=username]', items).val(),
            password: $('[name=password]', items).val(),
            email: $('[name=email]', items).val(),
            fNmame: $('[name=fNmame]', items).val(),
            lName: $('[name=lName]', items).val()
          };
      
      $.ajax({
          type:'POST',
          url: '/register',
          data: user,
          success: function(data, textStatus, jqXHR){
          	var resp = JSON.parse(JSON.stringify(jqXHR));
          	console.log(resp);
          	if(resp["status"]==200){
          		console.log("status == 200");
          		window.location.href = '/';
          	}  
        	  return data;
          },
      	  error: function(xhr, status, error) {
      		  console.log("inside error");
      	  }
        });
      
     return false;
  });  
});
