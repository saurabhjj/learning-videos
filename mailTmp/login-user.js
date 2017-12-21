$(document).ready(function(){

  $('form').on('submit', function(){
	  
	  $.ajax({
          type: 'POST',
          url: '/testAction',
          data: user,
          success: function(data, textStatus, jqXHR){
          	var resp = JSON.parse(JSON.stringify(jqXHR));
          	if(resp["status"]==200){
          		console.log("status == 200");
          		window.location.href = '/';
          	}  
        	  return data;
          }
        });
	     return false;
  });  
});